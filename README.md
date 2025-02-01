# 🐾 PetManager

PetManager é um sistema completo para tutores de pets gerenciarem informações essenciais sobre seus animais de estimação, como dados pessoais, vacinas, dieta e exercícios.

---

## 🚀 Tecnologias Utilizadas

### **Frontend**
- [ReactJS](https://react.dev/) - Framework para construção da interface
- [Material UI](https://mui.com/) - Estilização moderna e responsiva
- [Redux](https://redux.js.org/) - Gerenciamento de estado
- [React Router](https://reactrouter.com/) - Controle de rotas no frontend
- [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) - Notificações em tempo real
- [JWT.io](https://jwt.io/) - Autenticação baseada em token

### **Backend**
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript no servidor
- [Express.js](https://expressjs.com/) - Framework minimalista para criação de API
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [CORS](https://expressjs.com/en/resources/middleware/cors.html) - Middleware para segurança
- [JWT.io](https://jwt.io/) - Autenticação via tokens

---

## 📌 Estrutura do Projeto

```
PetManager/
│── server/                  # Backend (Node.js + Express)
│   ├── controllers/         # Controladores das rotas
│   ├── middleware/          # Middlewares de segurança e autenticação
│   ├── models/              # Modelos do banco de dados (PostgreSQL)
│   ├── routes/              # Rotas da API
│   ├── services/            # Serviços da aplicação
│   ├── utils/               # Funções auxiliares
│   ├── app.js               # Configuração principal do servidor
│   ├── .env                 # Variáveis de ambiente
│── client/                  # Frontend (React + Redux)
│   ├── src/                 # Código-fonte React
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas principais do sistema
│   │   ├── store/           # Configuração do Redux
│   │   ├── styles/          # Arquivos de estilo (MUI)
│   │   ├── App.js           # Componente principal do React
│   │   ├── index.js         # Ponto de entrada do frontend
│   ├── public/              # Arquivos públicos (favicon, imagens)
│── Dockerfile               # Configuração Docker
│── docker-compose.yml       # Configuração de serviços Docker
│── package.json             # Dependências do projeto
│── README.md                # Documentação do projeto
```

---

## 🌟 Funcionalidades

✅ **Autenticação JWT** (Login e Registro)  
✅ **Dashboard interativa** com carrossel de pets  
✅ **Gerenciamento completo** de pets, vacinas, dieta e exercícios  
✅ **Sistema de navegação** com breadcrumbs  
✅ **Estilização moderna** com Material UI  
✅ **Proteção de rotas** para usuários autenticados  

---

## 📦 Instalação e Uso

### **1️⃣ Clonar o repositório**
```sh
git clone https://github.com/seu-usuario/petmanager.git
cd petmanager
```

### **2️⃣ Configurar o Backend**
```sh
cd server
cp .env.example .env  # Criar arquivo de variáveis de ambiente
npm install           # Instalar dependências
npm run dev           # Iniciar servidor em modo desenvolvimento
```

### **3️⃣ Configurar o Frontend**
```sh
cd client
npm install           # Instalar dependências
npm start            # Iniciar frontend
```

---

## 🐳 Rodando com Docker (Opcional)
```sh
docker-compose up -d
```
Isso irá subir tanto o backend quanto o banco de dados PostgreSQL.

---

## 🔑 Autenticação

- O sistema utiliza **JWT** para autenticação segura.  
- As rotas protegidas exigem um token válido no **Authorization Header**.

---

## 🏗️ Melhorias Futuras

- 📌 Integração com APIs externas para rastreamento de saúde  
- 📌 Notificações em tempo real para lembretes de vacina  
- 📌 Exportação de relatórios em PDF  

---

## 🛠️ Desenvolvido por

👤 **Seu Nome**  
📧 seuemail@email.com  
🔗 [LinkedIn](https://linkedin.com/in/seuusuario)  
🔗 [GitHub](https://github.com/seu-usuario)  
