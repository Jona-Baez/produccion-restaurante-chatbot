import { addKeyword, EVENTS } from "@builderbot/bot";
import aiServices from "~/services/aiServices";
import { config } from "../config";
import path from "path";
import fs, { stat } from "fs";

const pathPrompt =path.join (
    process.cwd(),
    "assets/Prompts",
    "prompt_OpenAI.txt"
);
const prompt = fs.readFileSync(pathPrompt, "utf8");


export const faqFlow = addKeyword(EVENTS.ACTION)
    .addAction(
        async (ctx, { state, endFlow, gotoFlow}) => {
            try {
                const AI = new aiServices(config.apiKey);
                const response = await AI.chat(prompt, [{ role: "user", content: ctx.body }])
                return endFlow(response);
            } catch (error){
                console.log("Error en la llamada GPT", error);
                return endFlow("Por favor, intenta de nuevo :(");
            }
        }
    );