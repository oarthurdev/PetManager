const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).json({ message: 'Acesso negado' });

    // Verifica se o header começa com 'Bearer ' e extrai o token
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token não encontrado' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token inválido' });
    }
};
