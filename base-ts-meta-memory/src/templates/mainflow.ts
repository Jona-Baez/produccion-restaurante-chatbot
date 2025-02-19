import { addKeyword, EVENTS } from "@builderbot/bot"
import { faqFlow } from "./faqFlow";

const mainFlow = addKeyword([EVENTS.WELCOME])
    //.addAnswer("Hola, bienvenido al *Chatbot*")
    .addAction( async (ctx, ctxFn) =>{
        return ctxFn.gotoFlow(faqFlow)
     })

export { mainFlow };