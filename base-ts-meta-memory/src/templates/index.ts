//Se concentra todos los flujos de las opciones
import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { opcionesFlow } from "./opcionesFlow";
import { unoFlow } from "./list_templates/unoFlow";//1
import { dosFlow } from "./list_templates/dosFlow";//2
import { tresFlow } from "./list_templates/tresFlow";//3
import { cuatroFlow } from "./list_templates/cuatroFlow";//4
import { cincoFlow } from "./list_templates/cincoFlow";//5
import { seisFlow } from "./list_templates/seisFlow";//6
import { sieteFlow } from "./list_templates/sieteFlow";//7
import { ochoFlow } from "./list_templates/ochoFlow";//8
import { nueveFlow } from "./list_templates/nueveFlow";//9
import { diezFlow } from "./list_templates/diezFlow";//10
import { faqFlow } from "./faqFlow";

export default createFlow ([
    mainFlow,
    opcionesFlow,
    faqFlow,    
    unoFlow,//1
    dosFlow,//2
    tresFlow,//3
    cuatroFlow,//4
    cincoFlow,//5
    seisFlow,//6
    sieteFlow,//7
    ochoFlow,//8
    nueveFlow,//9
    diezFlow//10
]);