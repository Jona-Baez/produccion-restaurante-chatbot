import { addKeyword, EVENTS } from "@builderbot/bot";

const sendPdfFlow = addKeyword("GS0310973")
    .addAnswer("Te adjunto un PDF", {
        media: "./assets/Archivo.pdf"
    })

export { sendPdfFlow};