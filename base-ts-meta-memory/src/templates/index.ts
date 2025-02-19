import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { faqFlow } from "./faqFlow";
import { menuFlow } from "./menuFlow";
import { sendImageFlow } from "./list_templates/sendimageFlow";
import { sendPdfFlow } from "./list_templates/sendPdfFlow";
import { sendVoiceFlow } from "./list_templates/sendVoiceFlow";

export default createFlow ([
    mainFlow,
    faqFlow,
    menuFlow,
    sendImageFlow,
    sendPdfFlow,
    sendVoiceFlow
]);