const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const breeds = [
    { name: 'Labrador Retriever' },
    { name: 'Bulldog' },
    { name: 'Poodle' },
    { name: 'Golden Retriever' },
    { name: 'Pastor Alemão' },
    { name: 'Beagle' },
    { name: 'Dachshund' },
    { name: 'Border Collie' },
    { name: 'Shih Tzu' },
    { name: 'Husky Siberiano' },
    { name: 'Rottweiler' },
    { name: 'Doberman' },
    { name: 'Chihuahua' },
    { name: 'Pit Bull' },
    { name: 'Akita Inu' },
    { name: 'Maltês' },
    { name: 'Yorkshire Terrier' },
    { name: 'Cocker Spaniel' },
    { name: 'Boxer' },
    { name: 'Pug' },
    { name: 'Pinscher' },
    { name: 'Weimaraner' },
    { name: 'Collie' },
    { name: 'Corgi' },
    { name: 'São Bernardo' },
    { name: 'Basset Hound' },
    { name: 'Bull Terrier' },
    { name: 'Lhasa Apso' },
    { name: 'Shar Pei' },
    { name: 'Pastor Belga' }
  ];

  await Promise.all(
    breeds.map(async (breed) =>
      prisma.breed.upsert({
        where: { name: breed.name },
        update: {},
        create: breed,
      })
    )
  );

  console.log('Raças inseridas com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
