const fs = require('fs');
const path = require('path');

// Caminho do arquivo de log
const logFilePath = path.join(__dirname, '../logs/error.log');

// Middleware global para capturar erros
const errorHandler = (err, req, res, next) => {
  const errorDetails = `
=============================
📅 Data: ${new Date().toISOString()}
📍 Rota: ${req.method} ${req.originalUrl}
❌ Erro: ${err.message}
📄 Stacktrace:
${err.stack}
=============================\n`;

  // Salvar erro no arquivo logs/error.log
  fs.appendFile(logFilePath, errorDetails, (fsErr) => {
    if (fsErr) console.error('Erro ao salvar log:', fsErr);
  });

  // Retornar resposta ao usuário
  res.status(err.status || 500).json({ 
    success: false,
    message: 'Ocorreu um erro no servidor. Verifique os logs para mais detalhes.',
  });
};

module.exports = errorHandler;
