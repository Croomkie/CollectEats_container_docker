# Etape de construction
FROM node:latest AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ .
RUN npm run build

# Etape d'exécution
FROM node:latest
WORKDIR /app

# Installer le CLI Angular et http-server globalement
RUN npm install -g @angular/cli http-server

# Copie des fichiers de construction
COPY --from=build-stage /app/ /app

# Exécuter le serveur de développement Angular
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--proxy-config", "proxy.conf.json"]
