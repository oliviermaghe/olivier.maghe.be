(() => {
  const repoOwner = "oliviermaghe";
  const repoName = "Olivier-cssbattles";
  const dailyFolder = "Daily Targets";
  const apiBase = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${encodeURIComponent(dailyFolder)}`;
  const rawBase = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/${encodeURIComponent(dailyFolder)}`;

  const statusEl = document.getElementById("battleStatus");
  const galleryEl = document.getElementById("battleGallery");
  const archiveEl = document.getElementById("battleArchive");
  const archiveMonthsEl = document.getElementById("battleArchiveMonths");

  if (!galleryEl) return; // only run on the CSS Battle page

  function lang() {
    return window.OMI18n ? window.OMI18n.getLang() : document.documentElement.lang || "fr";
  }

  function t(key) {
    return window.OMI18n ? window.OMI18n.t(key, lang()) : key;
  }

  const state = {
    currentSubmissions: null,
    archiveGroups: [],
  };

  async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }
    return response.json();
  }

  function formatDateLabel(submission) {
    const iso = submission?.dailyDateIso;
    if (iso) {
      const [year, month, day] = iso.split("-").map(Number);
      const date = new Date(Date.UTC(year, month - 1, day));
      return date.toLocaleDateString(t("cssbattle.dateLocale"), {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      });
    }
    return submission?.dailyDateLabel || submission?.challengeName || "—";
  }

  function createCard(name, submission) {
    const card = document.createElement("article");
    card.className = "battle-card";

    const image = document.createElement("img");
    image.className = "battle-card__image";
    image.src = `${rawBase}/${encodeURIComponent(name)}/target.png`;
    image.alt = `Target ${name}`;
    image.loading = "lazy";

    const body = document.createElement("div");
    body.className = "battle-card__body";

    const title = document.createElement("h3");
    title.className = "battle-card__date";
    title.textContent = formatDateLabel(submission);
    body.appendChild(title);

    const stats = document.createElement("div");
    stats.className = "battle-stats";
    [
      { label: t("cssbattle.match"), value: submission?.matchPct != null ? `${submission.matchPct}%` : "—" },
      { label: t("cssbattle.chars"), value: submission?.characterCount ?? "—" },
    ].forEach(({ label, value }) => {
      const stat = document.createElement("div");
      stat.className = "battle-stat";
      const key = document.createElement("span");
      key.className = "battle-stat__name";
      key.textContent = label;
      const val = document.createElement("span");
      val.className = "battle-stat__value";
      val.textContent = value;
      stat.append(key, val);
      stats.appendChild(stat);
    });
    body.appendChild(stats);

    const links = document.createElement("div");
    links.className = "battle-card__links";

    const linkRepo = document.createElement("a");
    linkRepo.className = "battle-card__link";
    linkRepo.href = `https://github.com/${repoOwner}/${repoName}/tree/main/${encodeURIComponent(dailyFolder)}/${encodeURIComponent(name)}`;
    linkRepo.target = "_blank";
    linkRepo.rel = "noopener";
    linkRepo.textContent = t("cssbattle.github");
    links.appendChild(linkRepo);

    if (submission?.challengeUrl) {
      const linkBattle = document.createElement("a");
      linkBattle.className = "battle-card__link";
      linkBattle.href = submission.challengeUrl;
      linkBattle.target = "_blank";
      linkBattle.rel = "noopener";
      linkBattle.textContent = t("cssbattle.viewChallenge");
      links.appendChild(linkBattle);
    }
    body.appendChild(links);

    card.append(image, body);
    return card;
  }

  function setStatus(message, isError = false) {
    if (!statusEl) return;
    statusEl.hidden = false;
    statusEl.innerHTML = `<p>${message}</p>`;
    statusEl.classList.toggle("is-error", isError);
  }

  function renderCards(entries, container) {
    container.innerHTML = "";
    entries.forEach(({ name, submission }) => {
      container.appendChild(createCard(name, submission));
    });
  }

  async function loadSubmissions(directories) {
    const results = await Promise.all(
      directories.map(async (name) => {
        const url = `${rawBase}/${encodeURIComponent(name)}/submission.json`;
        try {
          const submission = await fetchJson(url);
          return { name, submission };
        } catch (error) {
          console.warn("Failed to load", name, error.message);
          return null;
        }
      })
    );
    return results.filter(Boolean);
  }

  function monthLabel(monthPrefix) {
    const [year, month] = monthPrefix.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, 1));
    return date.toLocaleDateString(t("cssbattle.dateLocale"), { month: "long", year: "numeric", timeZone: "UTC" });
  }

  function groupByMonth(directories) {
    const groups = new Map();
    directories.forEach((name) => {
      const monthPrefix = name.slice(0, 7);
      if (!groups.has(monthPrefix)) groups.set(monthPrefix, []);
      groups.get(monthPrefix).push(name);
    });
    return groups;
  }

  function renderArchive() {
    if (!archiveEl || !archiveMonthsEl) return;
    if (!state.archiveGroups.length) {
      archiveEl.hidden = true;
      return;
    }

    archiveEl.hidden = false;
    archiveMonthsEl.innerHTML = "";

    state.archiveGroups.forEach((group) => {
      const details = document.createElement("details");
      details.className = "battle-archive-month";
      details.open = Boolean(group.wasOpen);

      const summary = document.createElement("summary");
      summary.textContent = `${monthLabel(group.monthPrefix)} (${group.dirs.length})`;

      const grid = document.createElement("section");
      grid.className = "battle-grid";
      if (group.submissions) {
        renderCards(group.submissions, grid);
      }

      details.append(summary, grid);
      archiveMonthsEl.appendChild(details);

      details.addEventListener("toggle", async () => {
        group.wasOpen = details.open;
        if (!details.open || group.submissions) return;
        summary.textContent = t("cssbattle.loadingMonth");
        group.submissions = await loadSubmissions(group.dirs);
        renderCards(group.submissions, grid);
        summary.textContent = `${monthLabel(group.monthPrefix)} (${group.dirs.length})`;
      });
    });
  }

  function renderAll() {
    if (state.currentSubmissions) {
      renderCards(state.currentSubmissions, galleryEl);
    }
    renderArchive();
  }

  async function init() {
    try {
      setStatus(t("cssbattle.loading"));

      const contents = await fetchJson(apiBase);
      const directories = contents
        .filter((item) => item.type === "dir")
        .map((item) => item.name)
        .sort((a, b) => (a < b ? 1 : -1));

      if (!directories.length) {
        setStatus(t("cssbattle.empty"), true);
        return;
      }

      const now = new Date();
      const currentMonthPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
      const currentDirs = directories.filter((name) => name.startsWith(currentMonthPrefix));
      const archiveDirs = directories.filter((name) => !name.startsWith(currentMonthPrefix));

      state.currentSubmissions = await loadSubmissions(currentDirs);
      renderCards(state.currentSubmissions, galleryEl);

      state.archiveGroups = Array.from(groupByMonth(archiveDirs), ([monthPrefix, dirs]) => ({
        monthPrefix,
        dirs,
        submissions: null,
        wasOpen: false,
      }));
      renderArchive();

      if (statusEl) statusEl.hidden = true;
    } catch (error) {
      console.error(error);
      setStatus(t("cssbattle.error") + error.message, true);
    }
  }

  document.addEventListener("om:lang", renderAll);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
