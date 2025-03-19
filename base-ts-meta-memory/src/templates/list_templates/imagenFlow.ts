import { addKeyword } from "@builderbot/bot";

const imagenFlow = addKeyword("SM230225imagen")
    .addAnswer("Te adjunto una imagen", {
        media: "./assets/logo.png"
    })

export { imagenFlow };