(() => {
  const translations = {
    fr: {
      "nav.home": "Présentation",
      "nav.radio": "Radio & DJ",
      "nav.web": "Développement",
      "nav.projects": "Projets",
      "nav.cssbattle": "CSS Battle",
      "nav.lang": "EN",
      "footer.rights": "Olivier Maghe",
      "footer.contact": "Contact",

      "home.metaTitle": "Olivier Maghe — Présentation",
      "home.metaDesc": "Olivier Maghe, belge francophone installé sur la Costa Blanca. Musique, code et voyages.",
      "home.headline": "Plusieurs Vies, Une même passion.",
      "home.lead": "Belge francophone, je vis en Espagne sur la Costa Blanca",
      "home.langs": "Français · Anglais · Espagnol · un peu de néerlandais et d’italien",
      "home.ctaRadio": "Radio & DJ",
      "home.ctaWeb": "Développement web",
      "home.ctaProjects": "Projets personnels",
      "home.ctaCssbattle": "CSS Battle",
      "home.aboutTitle": "Qui suis-je",
      "home.aboutBody": "Ingénieur Web senior fullstack, DJ, animateur radio, producteur de spectacles, je suis aussi très actif sur ma chaîne YouTube et TikTok.",
      "home.milestonesTitle": "Quelques dates",
      "home.m1985": "1985 — premières soirées DJ, sono mobile.",
      "home.m1990": "1990 — premières discothèques et DJ pour des agences événementielles.",
      "home.m1992": "1992 — début de ma résidence DJ au Palladium.",
      "home.m1990s": "Milieu des années 90 — radio et web s’installent pour de bon.",
      "home.m1998": "1998 — début de ma résidence DJ à La Doudingue.",
      "home.m2005": "2005 — AXA Belgium.",
      "home.m2010": "2010 — propre startup de développement informatique.",
      "home.m2017": "2017 — après une restructuration chez AXA, passage chez Jomi.",
      "home.m2017b": "Fin 2017 — entrée chez Xaurum Belux.",
      "home.m2018": "2018 — installation sur la Costa Blanca.",
      "home.m2022": "2022 — début de ma résidence DJ au Nautilus.",

      "radio.metaTitle": "Olivier Maghe — Radio & DJ",
      "radio.metaDesc": "Animateur radio et DJ : Contact, Bel RTL, Nostalgie, Must FM, Palladium, La Doudingue.",
      "radio.onAir": "ON AIR",
      "radio.headline": "La radio,\ndepuis le milieu des années 90.",
      "radio.lead": "Depuis le milieu des années 90, la radio a été une grosse passion — devenue métier : animer, produire, faire vibrer les ondes.",
      "radio.stationsTitle": "Animateur radio",
      "radio.stationsIntro": "Des studios nationaux aux antennes régionales, j’ai animé et produit pour plusieurs grandes radios belges.",
      "radio.contactRole": "Animateur & producteur · National",
      "radio.belrtlRole": "Animateur",
      "radio.nostalgieRole": "Animateur · Belgique",
      "radio.mustRole": "Animateur & producteur · Namur / Luxembourg",
      "radio.wrrcRole": "Créateur, tech lead & producteur",
      "radio.cucaDesc": "Web espagnole diffusant des chansons françaises.",
      "radio.cucaRole": "Créateur, programmateur",
      "radio.djBadge": "1985",
      "radio.djTitle": "DJ",
      "radio.djLead": "Mes premières soirées datent de 1985, avec une sono mobile comme tous les jeunes qui démarrent. Très vite, j’ai frappé aux portes des discothèques qui me faisaient rêver — et j’ai été engagé comme DJ.",
      "radio.palladiumTitle": "Le Palladium",
      "radio.palladiumPlace": "Baisy-Thy, Belgique",
      "radio.palladiumBody": "L’une des plus célèbres. Une salle qui a marqué des générations — et l’arrivée de la House dans le paysage musical belge.",
      "radio.doudingueTitle": "La Doudingue",
      "radio.doudinguePlace": "Waterloo",
      "radio.doudingueBody": "Là où j’ai commencé à mixer pour des soirées à thèmes musicaux précis : 80s, 100 % FR, et bien d’autres.",
      "radio.moreTitle": "Et encore…",
      "radio.moreBody1": "Mais aussi quantité d’autres clubs, plus ou moins gros, et tellement de soirées privées.",
      "radio.moreClubsList": "Le Nautilus, Manoir Club, Le Mex, Le Butterfly, Le Bunker, Le Palace, Le Manhattan (France), L’Alhambra, Le Boccacio Beach — où j’ai eu des résidences.",
      "radio.moreGuest": "Je ne peux pas faire la liste des clubs où j’ai joué comme guest DJ ou host DJ pour une soirée… Mais il y en a beaucoup :-)",
      "radio.moreBody2": "J’ai fait partie d’IDC (International DJ Connection), créée par le célèbre DJ Dick Van Gelder. Cela m’a permis de jouer dans d’autres pays que ma Belgique natale.",
      "radio.moreBody3": "J’ai été DJ pour des sociétés d’événements comme Studio54 à Braine-l’Alleud, ou Arto qui sonorise les Francofolies.",

      "web.metaTitle": "Olivier Maghe — Développeur fullstack",
      "web.metaDesc": "Senior engineer fullstack. LMS, portails e-learning, outils RH et produits cloud.",
      "web.prompt": "olivier@maghe:~$",
      "web.headline": "Fullstack\ndepuis l’Internet naissant.",
      "web.lead": "Le développement web fait partie de ma vie depuis le milieu des années 90. Une époque où il fallait ouvrir trois programmes pour accéder à l’Internet naissant — et une condition sine qua non : personne ne pouvait téléphoner !",
      "web.timelineTitle": "Parcours",
      "web.earlyTitle": "Sites & médias",
      "web.earlyMeta": "années 90 →",
      "web.earlyBody": "J’ai développé beaucoup de sites personnels ou pour de petites entreprises, mais aussi de plus importants — comme celui de Radio Contact (de l’époque) et de Fun Radio.",
      "web.axaTitle": "AXA Belgium",
      "web.axaMeta": "IT puis RH",
      "web.axaBody": "Au pôle informatique, j’ai mis en place le nouvel intranet en collaboration avec le siège parisien. Migré aux ressources humaines, j’ai développé de multiples outils pour faciliter la vie des équipes.",
      "web.pauseTitle": "Pause carrière",
      "web.pauseMeta": "cloud",
      "web.pauseBody": "J’ai développé un programme cloud : multi-agendas, multi-ressources, multi-salles, avec rappels SMS personnalisés — ça n’existait pas à l’époque. J’ai quitté l’aventure, mais le produit existe toujours.",
      "web.jomiTitle": "Jomi",
      "web.jomiMeta": "2017",
      "web.jomiBody": "Après la restructuration massive d’AXA en 2017, je suis devenu directeur informatique d’une société qui fabrique des échelles de secours. Cette aventure a été de courte durée.",
      "web.xaurumTitle": "Xaurum Belgium",
      "web.xaurumMeta": "fin 2017 → aujourd’hui",
      "web.xaurumBody": "Depuis fin 2017, je suis en poste chez Xaurum Belgium. Nous y fabriquons un Learning Management System (LMS), un portail e-learning, un Test Maker, un Quality Sensor.",
      "web.xaurumBody2": "C’est une entreprise qui n’a pas de bureau, ce qui me permet de travailler depuis n’importe où. Nous gérons le LMS de gros clients : banques, assurances, hôpitaux, aéroport de Bruxelles, Croix-Rouge de Belgique, Engie et ses filiales, le Fopas, le port d’Anvers, ou encore la formation des kinés belges.",
      "web.xaurumCta": "Voir xaurum.com",

      "projects.metaTitle": "Olivier Maghe — Projets personnels",
      "projects.metaDesc": "Informatique, radio, spectacles et défis CSS au quotidien.",
      "projects.headline": "Laboratoire\npersonnel.",
      "projects.lead": "À titre personnel, j’ai développé beaucoup de choses — en informatique, en radio, en spectacle et sur internet.",
      "projects.techTitle": "Informatique",
      "projects.tech1": "Des protocoles de transmission de données pour les lignes d’arrivée des courses cyclistes — vendus à l’époque au Tour de France.",
      "projects.tech2": "Un programme de correction de quiz musicaux, pour des jeux de masse — Quiz Corrector.",
      "projects.tech3": "Un programme de récolte d’informations pour des navettes aéroport (transport de personnes) et de gestion des chauffeurs : préparation automatique des rappels aux clients, consultation des données de vol, GPS automatique vers les adresses des clients…",
      "projects.radioTitle": "Radio",
      "projects.radio1": "Création et programmation de Radio Cuca, une webradio basée en Espagne mais diffusant environ 90 % de chansons françaises pour les expatriés francophones (aventure terminée).",
      "projects.radio2": "Beaucoup de voix off et de voice-track pour des radios de petite et moyenne envergure.",
      "projects.radio3": "Création de WRRC Radio Rallye, une radio éphémère qui prend vie lors des rallyes automobile en Belgique — de l’idée technique à la mise en place physique, jusqu’à la production des émissions en FR/NL et le streaming sur les réseaux sociaux.",
      "projects.showTitle": "Animation & spectacle",
      "projects.show1": "Création de Francofun — producteur de spectacles francophones sur la Costa Blanca.",
      "projects.showCta": "francofun.es",
      "projects.showInterview": "Voir l’interview",
      "projects.netTitle": "Sur le net",
      "projects.net1": "Création de ma chaîne YouTube et TikTok, sur laquelle je poste quasi quotidiennement des défis informatiques. Une espèce de sudoku pour geeks développeurs.",
      "projects.youtube": "YouTube",
      "projects.cssbattle": "Mes CSS Battles",
      "projects.tiktok": "TikTok",

      "cssbattle.metaTitle": "Olivier Maghe — CSS Battle",
      "cssbattle.metaDesc": "Un défi CSS par jour : mes soumissions CSSBattle, générées en direct depuis GitHub.",
      "cssbattle.badge": "Daily target",
      "cssbattle.headline": "Un défi CSS,\nchaque jour.",
      "cssbattle.lead": "Je poste presque quotidiennement mes soumissions CSSBattle sur YouTube et TikTok — une sorte de sudoku pour geeks développeurs.",
      "cssbattle.currentTitle": "Ce mois-ci",
      "cssbattle.archiveTitle": "Archives",
      "cssbattle.loading": "Chargement des défis…",
      "cssbattle.loadingMonth": "Chargement…",
      "cssbattle.error": "Erreur de chargement : ",
      "cssbattle.empty": "Aucun défi trouvé.",
      "cssbattle.match": "Précision",
      "cssbattle.chars": "Caractères",
      "cssbattle.github": "Dossier GitHub",
      "cssbattle.viewChallenge": "Tente le défi",
      "cssbattle.dateLocale": "fr-FR",
    },
    en: {
      "nav.home": "About",
      "nav.radio": "Radio & DJ",
      "nav.web": "Development",
      "nav.projects": "Projects",
      "nav.cssbattle": "CSS Battle",
      "nav.lang": "FR",
      "footer.rights": "Olivier Maghe",
      "footer.contact": "Contact",

      "home.metaTitle": "Olivier Maghe — About",
      "home.metaDesc": "Olivier Maghe, French-speaking Belgian based on the Costa Blanca. Music, code and travel.",
      "home.headline": "Several Lives, One Lasting Passion.",
      "home.lead": "French-speaking Belgian, I live in Spain on the Costa Blanca",
      "home.langs": "French · English · Spanish · a little Dutch and Italian",
      "home.ctaRadio": "Radio & DJ",
      "home.ctaWeb": "Web development",
      "home.ctaProjects": "Personal projects",
      "home.ctaCssbattle": "CSS Battle",
      "home.aboutTitle": "About me",
      "home.aboutBody": "Senior fullstack web engineer, DJ, radio host and show producer — I’m also very active on my YouTube and TikTok channels.",
      "home.milestonesTitle": "A few dates",
      "home.m1985": "1985 — first DJ nights, mobile sound system.",
      "home.m1990": "1990 — first nightclubs and DJ work for event agencies.",
      "home.m1992": "1992 — start of my DJ residency at the Palladium.",
      "home.m1990s": "Mid-90s — radio and the web settle in for good.",
      "home.m1998": "1998 — start of my DJ residency at La Doudingue.",
      "home.m2005": "2005 — AXA Belgium.",
      "home.m2010": "2010 — own software development startup.",
      "home.m2017": "2017 — after a restructuring at AXA, move to Jomi.",
      "home.m2017b": "Late 2017 — joined Xaurum Belux.",
      "home.m2018": "2018 — move to the Costa Blanca.",
      "home.m2022": "2022 — start of my DJ residency at the Nautilus.",

      "radio.metaTitle": "Olivier Maghe — Radio & DJ",
      "radio.metaDesc": "Radio host and DJ: Contact, Bel RTL, Nostalgie, Must FM, Palladium, La Doudingue.",
      "radio.onAir": "ON AIR",
      "radio.headline": "Radio,\nsince the mid-90s.",
      "radio.lead": "Since the mid-90s, radio has been a huge passion — one that became a craft: hosting, producing, keeping the airwaves alive.",
      "radio.stationsTitle": "Radio host",
      "radio.stationsIntro": "From national studios to regional stations, I’ve hosted and produced for several major Belgian radios.",
      "radio.contactRole": "Host & producer · National",
      "radio.belrtlRole": "Host",
      "radio.nostalgieRole": "Host · Belgium",
      "radio.mustRole": "Host & producer · Namur / Luxembourg",
      "radio.wrrcRole": "Creator, tech lead & producer",
      "radio.cucaDesc": "Spanish webradio playing French songs.",
      "radio.cucaRole": "Creator, programmer",
      "radio.djBadge": "1985",
      "radio.djTitle": "DJ",
      "radio.djLead": "My first nights go back to 1985, with a mobile sound system like every kid starting out. Soon I was knocking on the doors of the clubs I dreamed about — and I got hired as a DJ.",
      "radio.palladiumTitle": "Le Palladium",
      "radio.palladiumPlace": "Baisy-Thy, Belgium",
      "radio.palladiumBody": "One of the most famous. A venue that shaped generations — and brought House into the Belgian music scene.",
      "radio.doudingueTitle": "La Doudingue",
      "radio.doudinguePlace": "Waterloo",
      "radio.doudingueBody": "Where I started mixing themed nights: 80s, 100% French, and many more.",
      "radio.moreTitle": "And more…",
      "radio.moreBody1": "Plus plenty of other clubs, big and small, and countless private parties.",
      "radio.moreClubsList": "Le Nautilus, Manoir Club, Le Mex, Le Butterfly, Le Bunker, Le Palace, Le Manhattan (France), L'Alhambra, Le Boccacio Beach — where I held residencies.",
      "radio.moreGuest": "I can't list every club where I played as a guest DJ or host DJ for a single night… but there were plenty :-)",
      "radio.moreBody2": "I was part of IDC (International DJ Connection), founded by the legendary DJ Dick Van Gelder. That took me beyond my native Belgium.",
      "radio.moreBody3": "I’ve also been a DJ for event companies like Studio54 in Braine-l’Alleud, and Arto, who soundtracks the Francofolies.",

      "web.metaTitle": "Olivier Maghe — Fullstack developer",
      "web.metaDesc": "Senior fullstack engineer. LMS, e-learning portals, HR tools and cloud products.",
      "web.prompt": "olivier@maghe:~$",
      "web.headline": "Fullstack\nsince the early web.",
      "web.lead": "Web development has been part of my life since the mid-90s — an era when you needed three programs just to get online, and one hard rule: nobody could use the phone!",
      "web.timelineTitle": "Path",
      "web.earlyTitle": "Sites & media",
      "web.earlyMeta": "1990s →",
      "web.earlyBody": "I built plenty of personal sites and small-business sites, and larger ones too — including Radio Contact (back then) and Fun Radio.",
      "web.axaTitle": "AXA Belgium",
      "web.axaMeta": "IT then HR",
      "web.axaBody": "In the IT division I set up the new intranet with the Paris HQ. After moving to HR, I built many tools to make teams’ lives easier.",
      "web.pauseTitle": "Career break",
      "web.pauseMeta": "cloud",
      "web.pauseBody": "I built a cloud product: multi-calendars, multi-resources, multi-rooms, with personalised SMS reminders — rare at the time. I left the venture, but the product still exists.",
      "web.jomiTitle": "Jomi",
      "web.jomiMeta": "2017",
      "web.jomiBody": "After AXA’s massive 2017 restructuring, I became IT director for a company making emergency ladders. That chapter was short.",
      "web.xaurumTitle": "Xaurum Belgium",
      "web.xaurumMeta": "late 2017 → today",
      "web.xaurumBody": "Since late 2017 I’ve been at Xaurum Belgium. We build a Learning Management System (LMS), an e-learning portal, a Test Maker and a Quality Sensor.",
      "web.xaurumBody2": "It’s a company with no office, so I can work from anywhere. We run the LMS for major clients: banks, insurers, hospitals, Brussels Airport, the Belgian Red Cross, Engie and its subsidiaries, Fopas, the Port of Antwerp, and Belgian physiotherapist training.",
      "web.xaurumCta": "Visit xaurum.com",

      "projects.metaTitle": "Olivier Maghe — Personal projects",
      "projects.metaDesc": "Software, radio, live shows and daily CSS challenges.",
      "projects.headline": "Personal\nlaboratory.",
      "projects.lead": "On a personal level, I’ve built a lot — in software, radio, live shows and online.",
      "projects.techTitle": "Software",
      "projects.tech1": "Data-transmission protocols for cycling finish lines — sold at the time to the Tour de France.",
      "projects.tech2": "Scoring software for mass music quizzes — Quiz Corrector.",
      "projects.tech3": "An airport-shuttle system: passenger info, driver management, automatic client reminders, flight data, and GPS to client addresses…",
      "projects.radioTitle": "Radio",
      "projects.radio1": "Creation and programming of Radio Cuca, a Spain-based webradio playing about 90% French songs for French-speaking expats (now closed).",
      "projects.radio2": "Plenty of voice-over and voice-track work for small and mid-size stations.",
      "projects.radio3": "Creation of WRRC Radio Rallye, an ephemeral radio that comes alive during car rallies in Belgium — from the technical idea to the physical setup, plus producing shows in FR/NL and streaming on social platforms.",
      "projects.showTitle": "Shows & events",
      "projects.show1": "Creation of Francofun — producing French-language shows on the Costa Blanca.",
      "projects.showCta": "francofun.es",
      "projects.showInterview": "Watch the interview",
      "projects.netTitle": "Online",
      "projects.net1": "My YouTube and TikTok channels, where I post almost-daily coding challenges — a kind of sudoku for geek developers.",
      "projects.youtube": "YouTube",
      "projects.cssbattle": "My CSS Battles",
      "projects.tiktok": "TikTok",

      "cssbattle.metaTitle": "Olivier Maghe — CSS Battle",
      "cssbattle.metaDesc": "One CSS challenge a day: my CSSBattle submissions, rendered live from GitHub.",
      "cssbattle.badge": "Daily target",
      "cssbattle.headline": "One CSS challenge,\nevery day.",
      "cssbattle.lead": "I post my CSSBattle submissions almost daily on YouTube and TikTok — a kind of sudoku for geek developers.",
      "cssbattle.currentTitle": "This month",
      "cssbattle.archiveTitle": "Archive",
      "cssbattle.loading": "Loading targets…",
      "cssbattle.loadingMonth": "Loading…",
      "cssbattle.error": "Error loading: ",
      "cssbattle.empty": "No targets found.",
      "cssbattle.match": "Match",
      "cssbattle.chars": "Chars",
      "cssbattle.github": "GitHub folder",
      "cssbattle.viewChallenge": "Try the challenge",
      "cssbattle.dateLocale": "en-US",
    },
  };

  const STORAGE_KEY = "om-lang";

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") return saved;
    return navigator.language?.toLowerCase().startsWith("en") ? "en" : "fr";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  }

  function t(key, lang) {
    return translations[lang]?.[key] ?? translations.fr[key] ?? key;
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key, lang);
      if (el.dataset.i18nHtml === "true") {
        el.innerHTML = value.replace(/\n/g, "<br>");
      } else if (value.includes("\n") && (el.tagName === "H1" || el.tagName === "H2" || el.classList.contains("headline"))) {
        el.innerHTML = value.replace(/\n/g, "<br>");
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const pairs = el.getAttribute("data-i18n-attr").split(";");
      pairs.forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key, lang));
      });
    });

    const titleKey = document.body?.dataset?.titleKey;
    if (titleKey) document.title = t(titleKey, lang);

    const descKey = document.body?.dataset?.descKey;
    if (descKey) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", t(descKey, lang));
    }

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
      btn.textContent = t("nav.lang", lang);
    });

    document.dispatchEvent(new CustomEvent("om:lang", { detail: { lang } }));
  }

  function init() {
    const lang = getLang();
    apply(lang);

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(getLang() === "fr" ? "en" : "fr");
      });
    });
  }

  window.OMI18n = { getLang, setLang, t, apply, init };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
