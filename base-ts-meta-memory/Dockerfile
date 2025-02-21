# Build stage
FROM node:21-alpine3.18 as builder

WORKDIR /app

# Copiar archivos de dependencias e instalar paquetes
COPY package*.json ./
RUN npm install

# Copiar todo el código fuente
COPY . .

# Compilar la aplicación
RUN npm run build

# Deployment stage
FROM node:21-alpine3.18 as deploy

WORKDIR /app

ARG PORT
ENV PORT $PORT
EXPOSE $PORT

# Copiar archivos necesarios desde el builder
COPY --from=builder /app/assets ./assets
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Instalar solo dependencias de producción
RUN npm install --omit=dev

# Iniciar la aplicación con npm
CMD ["npm", "start"]
