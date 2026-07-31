# olivier.maghe.be

Site vitrine personnel d'Olivier Maghe — site statique HTML/CSS/JS pur (sans build, sans framework, sans dépendance npm).

Domaines en production : `oliviermaghe.com`, `oliviermaghe.be`, `maghe.be`, `olivier.maghe.be`, `maghe.es`, `olivier.maghe.es` (+ variantes `www.`).

## Pages

Le site est découpé en 5 pages, chacune avec sa propre ambiance visuelle (couleurs, polices, mise en page) tout en partageant le même header/footer/menu et le même système de traduction.

| Page | Fichier | Ambiance | Contenu |
|---|---|---|---|
| Présentation | `index.html` | Neutre, carte de visite (beige/bleu, Cormorant Garamond + Manrope) | Bio, langues, dates clés |
| Radio & DJ | `radio.html` | Fun / studio (bleu nuit, néon orange/cyan, Bebas Neue + Outfit) | Radios animées (Contact, Bel RTL, Nostalgie, Must FM, WRRC, Radio Cuca), résidences DJ (Palladium, La Doudingue, Nautilus…) |
| Développement | `web.html` | Technique (vert terminal, Space Grotesk + IBM Plex Mono) | Parcours pro (AXA, Jomi, Xaurum…), stack |
| Projets | `projets.html` | Créative (teal/orange/corail, Fraunces + Sora) | Projets perso : informatique, radio, spectacle, internet |
| CSS Battle | `css-battle.html` | Arène de code (jaune néon CSSBattle + bleu, Rajdhani + JetBrains Mono) | Galerie des défis CSSBattle quotidiens, chargée **en direct depuis GitHub** |

## Structure du projet

```
.
├── index.html, radio.html, web.html, projets.html, css-battle.html
├── css/
│   ├── base.css          # fondations partagées (header, nav, footer, reveal, responsive)
│   ├── presentation.css  # ambiance page Présentation
│   ├── radio.css         # ambiance page Radio & DJ
│   ├── web.css           # ambiance page Développement
│   ├── projets.css       # ambiance page Projets
│   └── battle.css        # ambiance page CSS Battle
├── js/
│   ├── i18n.js           # dictionnaire FR/EN + application des traductions (data-i18n)
│   ├── main.js           # menu mobile, animations "reveal" au scroll
│   └── cssbattle.js       # récupère et affiche la galerie CSS Battle depuis GitHub
├── images/                # avatar, logos radios/projets, visuels
├── Dockerfile             # image nginx:alpine servant les fichiers statiques
├── docker-compose.yml     # déploiement (labels Traefik, routing multi-domaines)
├── docker/nginx.conf      # config nginx (cache assets, gzip)
└── .github/workflows/     # déploiement automatique vers Hostinger
```

## Internationalisation (FR/EN)

- Toutes les chaînes traduisibles utilisent l'attribut `data-i18n="clé"` sur l'élément HTML.
- Le dictionnaire complet (FR + EN) vit dans [`js/i18n.js`](js/i18n.js).
- La langue choisie est mémorisée dans `localStorage` (clé `om-lang`), avec détection de la langue du navigateur au premier passage.
- Le bouton de bascule (`data-lang-toggle`, en haut à droite du menu) change la langue sans recharger la page.
- `js/i18n.js` déclenche un événement `om:lang` à chaque changement de langue, écouté par `js/cssbattle.js` pour retraduire les libellés générés dynamiquement (statuts, stats des cartes, dates) sans re-télécharger les données.

## Page CSS Battle — fonctionnement

`css-battle.html` n'a pas de contenu statique pour la galerie : [`js/cssbattle.js`](js/cssbattle.js) va chercher les soumissions **en direct** dans le dépôt GitHub [`oliviermaghe/Olivier-cssbattles`](https://github.com/oliviermaghe/Olivier-cssbattles) (dossier `Daily Targets/`) via l'API GitHub et `raw.githubusercontent.com` :

- Le mois en cours est affiché directement.
- Les mois précédents sont regroupés dans une section **Archives**, chargés à la demande (au clic) pour ne pas tout télécharger d'un coup.
- Aucune base de données ni backend : tout se fait côté client, au chargement de la page.

## Développement local

Le site est 100 % statique, donc n'importe quel serveur de fichiers fonctionne :

```bash
python3 -m http.server 8090
# puis ouvrir http://localhost:8090
```

Ou, pour tester dans les mêmes conditions qu'en production (nginx dans Docker) :

```bash
docker build -t om-site-preview:local .
docker run --rm -d --name om-site-preview -p 8090:80 om-site-preview:local
# puis ouvrir http://localhost:8090
```

## Déploiement

Le site est déployé sur un VPS Hostinger via **Docker + Traefik** :

- `docker-compose.yml` construit l'image (`Dockerfile` → nginx:alpine) et porte les labels Traefik qui routent tous les domaines vers ce même service.
- Traefik gère HTTPS (Let's Encrypt) et le reverse proxy ; le conteneur ne publie aucun port lui-même.
- `.github/workflows/deploy-hostinger.yml` redéploie automatiquement l'application à chaque push sur `main` (via l'action `hostinger/deploy-on-vps`).

Aucune étape manuelle n'est nécessaire après un `git push origin main` : le workflow reconstruit l'image et met à jour le projet sur le VPS.
