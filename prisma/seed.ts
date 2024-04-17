import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id: "698ee7de-db65-40ed-a977-723b5df862b2",
            title: "Unite Summit",
            slug: "unite-summit",
            details: "Um evento p/ devs apaixonados(as) por código!",
            maximunAttendees: 120,
        }
    });
}

seed().then(() => {
    console.log("Database seeded!");
    prisma.$disconnect();
})