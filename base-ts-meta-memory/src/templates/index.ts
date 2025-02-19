import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { faqFlow } from "./faqFlow";
import { menuFlow } from "./menuFlow";

export default createFlow ([
    mainFlow,
    faqFlow,
    menuFlow
]);