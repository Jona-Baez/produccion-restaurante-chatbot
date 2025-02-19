import { addKeyword, EVENTS } from "@builderbot/bot"
import { faqFlow } from "./faqFlow";
import { menuFlow } from "./menuFlow";

const mainFlow = addKeyword([EVENTS.WELCOME])
    //.addAnswer("Hola, bienvenido al *Chatbot*")
    .addAction( async (ctx, ctxFn) =>{
        return ctxFn.gotoFlow(menuFlow)//faqFlow
     })

export { mainFlow };