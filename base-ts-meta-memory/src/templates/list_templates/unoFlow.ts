import { addKeyword, EVENTS } from "@builderbot/bot";

const unoFlow = addKeyword("smartia119401")//Es la clave que invoca la opcion de la lista
    .addAnswer("Te enviamos la Historia de la Virgen de Guadalupe en México *GRATIS*", {
        media: "./assets/historiadelavirgen.pdf"
    })

export { unoFlow };