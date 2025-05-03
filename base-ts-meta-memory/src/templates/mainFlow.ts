import { addKeyword, EVENTS } from "@builderbot/bot";
import { faqFlow } from "./faqFlow";
import { writeToSheet, readSheet } from "./../services/sheets";
import { dateAvailable, addReservation } from "~/services/utils";

const mainFlow = addKeyword([EVENTS.WELCOME])
  .addAnswer("Prueba de dateAvalaible")
  .addAction(async (ctx, ctxFn) => {
      const date = "2025-05-09T12:00:00:000Z"
      const dateD = new Date(date)
      const response = await dateAvailable(dateD)
      console.log
  });

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