import { addKeyword } from "@builderbot/bot";

const sendImageFlow = addKeyword("GS0310971")
    .addAnswer("Te adjunto una imagen", {
        media: "./assets/logo.png"
    })

export { sendImageFlow};