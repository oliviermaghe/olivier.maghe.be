# Site statique Olivier Maghe — nginx
FROM nginx:1.27-alpine

# Config nginx (SPA-like fallback inutiles ici, site multi-pages)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Contenu du site
COPY index.html radio.html web.html projets.html css-battle.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY images /usr/share/nginx/html/images

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
