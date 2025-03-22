import { addKeyword } from "@builderbot/bot";

const diezFlow = addKeyword("SM230225imagen")
    .addAnswer("Te adjunto una imagen", {
        media: "./assets/logo.png"
    })

export { diezFlow };