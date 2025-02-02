# Usar a imagem oficial do Node.js
FROM node:18

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos de dependências primeiro
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Gerar os arquivos do Prisma
RUN npx prisma generate

# Expor a porta do backend
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]
