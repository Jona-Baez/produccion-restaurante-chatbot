import { addKeyword, EVENTS } from "@builderbot/bot";

const unoFlow = addKeyword("smartia119401")//Es la clave que invoca la opcion de la lista
    .addAnswer("Te enviamos nuestra carta", {
        media: "./assets/carta.pdf"
    })

export { unoFlow };