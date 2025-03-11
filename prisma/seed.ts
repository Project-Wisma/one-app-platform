import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/bcrypt";

async function main() {
    // ADMIN
    await prisma.user.create(
        {
            data: {
                username: "developer",
                password: hashPassword("admin123"),
                role: "SUPER_ADMIN"
            }
        }
    )

    // ROOMS
    await prisma.room.createMany(
        {
            data: [
                {number: 110, status: "occupied", type: "standard"},
                {number: 207, status: "open", type: "deluxe"},
                {number: 208, status: "open", type: "deluxe"},
                {number: 101, status: "open", type: "standard twin"},
                {number: 114, status: "maintenance", type: "deluxe"}
            ]
        }
    )

    // INVENTORIES
    await prisma.inventory.createMany(
        {
            data: [
                {title: "Sapu", quantity: 5},
                {title: "Bor", quantity: 1},
                {title: "Pel", quantity: 3}
            ]
        }
    )

    // GALLERIES
    await prisma.gallery.createMany(
        {
            data: [
                {
                    title: "outdoor",
                    secureUrl: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007673-b00beb7d16adc49906b2a2c6687b7fd1.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
                    type: "IMAGE"
                }
            ]
        }
    )
   
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })