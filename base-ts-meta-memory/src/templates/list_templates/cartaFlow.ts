import { addKeyword, EVENTS } from "@builderbot/bot";

const cartaFlow = addKeyword("SM23022501")//Es la palabra que invoca opcion de la lista
    .addAnswer("Te enviamos nuestra carta", {
        media: "./assets/carta.pdf"
    })

export { cartaFlow };