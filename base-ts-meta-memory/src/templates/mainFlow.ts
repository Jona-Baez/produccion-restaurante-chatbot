import { addKeyword, EVENTS } from "@builderbot/bot"
import { opcionesFlow } from "./opcionesFlow";

const mainFlow = addKeyword([EVENTS.WELCOME])
.addAnswer("👋 ¡Hola!, ¡Bienvenido a El Sazón de México!  🇲🇽 Disfruta de la mejor gastronomía mexicana con auténtico sabor casero")
.addAnswer(" 🔥 Somos un restaurante tradicional que rescata los sabores de la cocina mexicana.\n\n👩‍🍳Desde tacos al pastor hasta deliciosos chiles en nogada, cada platillo está preparado con ingredientes frescos y recetas de la abuela.")
    .addAction( async (ctx, ctxFn) =>{
        return ctxFn.gotoFlow(opcionesFlow)
     })

export { mainFlow };