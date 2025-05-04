import { addKeyword, EVENTS } from "@builderbot/bot";
import { faqFlow } from "./faqFlow";
import { reservationFlow } from "./reservationFlow";
import { welcomeFlow } from "./welcomeFlow";

const mainFlow = addKeyword([EVENTS.WELCOME])
.addAction(async (ctx, ctxFn) => {
    const bodyText: string = ctx.body.toLowerCase();

    // Primero, el usuario está saludando?
    const keywords: string[] = ["hola", "buenas", "ola"];
    const containsKeyword: boolean = keywords.some(keyword => bodyText.includes(keyword));
    if (containsKeyword) {
      return await ctxFn.gotoFlow(welcomeFlow); // Sí, está saludando
    }

    // Segundo, el usuario quiere reservar una mesa?
    const keywordsRes: string[] = ["reservar", "mesa", "reserva"];
    const containsKeywordRes: boolean = keywordsRes.some(keyword => bodyText.includes(keyword));
    if (containsKeywordRes) {
      return ctxFn.gotoFlow(reservationFlow); // Sí, quiere reservar
    } else {
      return ctxFn.flowDynamic("No te entiendo"); // No, preguntó algo directamente
    }
})


export { mainFlow };



/*
AGREGAR INFO EN SHEET ORIGINAL
import { addKeyword, EVENTS } from "@builderbot/bot"
import { faqFlow } from "./faqFlow";
import { writeToSheet, readSheet } from "./../services/sheets"

const mainFlow = addKeyword([EVENTS.WELCOME])
    .addAnswer("Agregando a Sheets tu mensaje...")
    .addAction(async (ctx, ctxFn) =>{
      await writeToSheet([["Mensaje", "Usuario", ctx.body]], "Restaurant!A1:J10");
      const response = await readSheet();
      console.log(response);
    })
    
export { mainFlow };*/

/*
CHAT CON IA
const mainFlow = addKeyword([EVENTS.WELCOME])
    .addAction( async (ctx, ctxFn) =>{
        return ctxFn.gotoFlow(faqFlow)
     })

export { mainFlow };
*/

/*
LISTADO CON RESPUESTAS PREDEFINIDAS
import { addKeyword, EVENTS } from "@builderbot/bot"
import { opcionesFlow } from "./opcionesFlow";

const mainFlow = addKeyword([EVENTS.WELCOME])
.addAnswer("👋 ¡Hola!, ¡Soy SmartIA el Chatbot 🤖 que mostrará un ejemplo de como puedo ser aplicado a un restaurante")
.addAnswer("📢 ¡Bienvenido a El Sazón de México! 🇲🇽 Disfruta de la mejor gastronomía mexicana con auténtico sabor casero \n\n🔥 Somos un restaurante tradicional que rescata los sabores de la cocina mexicana.\n\n👩‍🍳Desde tacos al pastor hasta deliciosos chiles en nogada, cada platillo está preparado con ingredientes frescos y recetas de la abuela.")
    .addAction( async (ctx, ctxFn) =>{
        return ctxFn.gotoFlow(opcionesFlow)
     })

export { mainFlow };
ok*/