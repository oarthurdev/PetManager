const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getPets = async (req, res) => {
    try {
        const pets = await prisma.pet.findMany({ where: { ownerId: req.user.id } });
        res.json(pets);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar pets' });
    }
};

exports.addPet = async (req, res) => {
    const { name, type, age, imageUrl } = req.body;

    try {
        const pet = await prisma.pet.create({
            data: { name, type, age, imageUrl, ownerId: req.user.id }
        });
        res.status(201).json(pet);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao cadastrar pet' });
    }
};
