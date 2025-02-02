const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getBreeds = async (req, res) => {
  try {
    const { search } = req.query;
    const breeds = await prisma.breed.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive'
        }
      },
      take: 10 // Retorna no máximo 10 raças para evitar sobrecarga
    });

    res.json(breeds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar raças' });
  }
};
