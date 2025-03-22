import { addKeyword, EVENTS } from "@builderbot/bot"

const opcionesFlow = addKeyword('EVENTS.ACTION')
    .addAction(async (ctx, {provider}) => {
            const list = {
                "header": {
                    "type": "text",
                    "text": ""
                },
                "body": {
                    "text": "¿En qué te puedo ayudar?"//137 caracteres seguros
                },
                "footer": {
                    "text": ""
                },
                "action": {
                    "button": "Ver las 10 opciones",
                    "sections": [
                        {
                            "title": "Acciones",//Limitado a 10 acciones
                            "rows": [
                                {
                                    "id": "smartia119401",
                                    "title": "🍽️ Alimentos y bebidas",//Limitado a 26 caracteres
                                    "description": "Descarga nuestra carta."//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119402",
                                    "title": "📍 Sucursales y horarios",//Limitado a 26 caracteres
                                    "description": "Conoce las diferentes ubicaciones."//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119403",
                                    "title": "📅 Reservaciones",//Limitado a 26 caracteres
                                    "description": "Reserva tu mesa fácilmente."//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119404",
                                    "title": "🎉 Paquetes y eventos",//Limitado a 26 caracteres
                                    "description": "Conoce nuestros paquetes especiales"//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119405",
                                    "title": "🎟️ Promociones y cupones",//Limitado a 26 caracteres
                                    "description": "Aprovecha nuestras ofertas exclusivas"//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119406",
                                    "title": "📝 Quejas y sugerencias",//Limitado a 26 caracteres
                                    "description": "Tu opinión nos ayuda a mejorar"//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119407",
                                    "title": "📋 Contratación",//Limitado a 26 caracteres
                                    "description": "Únete a nuestro equipo"//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119408",
                                    "title": "💳 Facturación",//Limitado a 26 caracteres
                                    "description": "Solicita tu factura aquí"//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119409",
                                    "title": "🎵 Audio",//Limitado a 26 caracteres
                                    "description": "Puedes escuchar un audio"//Limitado a 70 caracteres
                                },
                                {
                                    "id": "smartia119410",
                                    "title": "🎥 Imagen",//Limitado a 26 caracteres
                                    "description": "Tambien recibe una imagen"//Limitado a 70 caracteres
                                }
                            ]
                        }
                    ]
                }
            }
            await provider.sendList(`${ctx.from}@s.whatsapp.net`, list)
        })
        
export { opcionesFlow };