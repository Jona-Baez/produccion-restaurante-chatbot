import { addKeyword, EVENTS } from "@builderbot/bot"
import { opcionesFlow } from "./opcionesFlow";

const mainFlow = addKeyword([EVENTS.WELCOME])
.addAnswer("Te enviamos nuestra carta", {
    media: "./assets/carta.pdf"
})

export { mainFlow };