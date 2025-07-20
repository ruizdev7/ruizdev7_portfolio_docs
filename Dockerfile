# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .
RUN npm ci
RUN npx astro build

# Etapa 2: Servir archivos estáticos
FROM node:20-alpine AS runner

WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["serve", "dist", "-l", "3000"]
