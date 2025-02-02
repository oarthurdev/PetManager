# Usar uma imagem do Node.js para construir o frontend
FROM node:18 AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar os arquivos restantes
COPY . .

# Construir o frontend
RUN npm run build

# Criar um novo container usando Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copiar os arquivos do build para a pasta padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta do frontend
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
