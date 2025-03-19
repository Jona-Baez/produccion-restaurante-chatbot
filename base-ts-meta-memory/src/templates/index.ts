import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { opcionesFlow } from "./opcionesFlow";
import { cartaFlow } from "./list_templates/cartaFlow";//1
import { sucursalesFlow } from "./list_templates/sucursalesFlow";//2
import { reservacionesFlow } from "./list_templates/reservacionesFlow";//3
import { paquetesFlow } from "./list_templates/paquetesFlow";//4
import { promocionesFlow } from "./list_templates/promocionesFlow";//5
import { quejasFlow } from "./list_templates/quejasFlow";//6
import { contratacionFlow } from "./list_templates/contratacionFlow";//7
import { facturacionFlow } from "./list_templates/facturacionFlow";//8
import { audioFlow } from "./list_templates/audioFlow";//9
import { imagenFlow } from "./list_templates/imagenFlow";//10


export default createFlow ([
    mainFlow,
    opcionesFlow,
    cartaFlow,//1
    sucursalesFlow,//2
    reservacionesFlow,//3
    paquetesFlow,//4
    promocionesFlow,//5
    quejasFlow,//6
    contratacionFlow,//7
    facturacionFlow,//8
    audioFlow,//9
    imagenFlow//10
]);