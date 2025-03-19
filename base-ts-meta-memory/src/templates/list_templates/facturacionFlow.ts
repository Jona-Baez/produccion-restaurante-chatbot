import { addKeyword } from "@builderbot/bot";

const facturacionFlow = addKeyword("SM23022508")
    .addAnswer("Envianos una imagen de comprobante de pago al correo tumail@tudominio.com")

export { facturacionFlow };