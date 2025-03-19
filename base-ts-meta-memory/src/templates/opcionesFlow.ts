import { addKeyword, EVENTS } from "@builderbot/bot"

const opcionesFlow = addKeyword('EVENTS.ACTION')
    .addAction(async (ctx, {provider}) => {
            const list = {
                "header": {
                    "type": "text",
                    "text": ""
                },
                "body": {
                    "text": "¿En qué te puedo ayudar?"
                },
                "footer": {
                    "text": ""
                },
                "action": {
                    "button": "Ver opciones",
                    "sections": [
                        {
                            "title": "Acciones",
                            "rows": [
                                {
                                    "id": "SM23022501",
                                    "title": "🍽️ Alimentos y bebidas",//Limitado a 26 caracteres
                                    "description": "Descarga nuestra carta"
                                },
                                {
                                    "id": "SM23022502",
                                    "title": "📍 Sucursales y horarios",//Limitado a 26 caracteres
                                    "description": "Conoce las diferentes ubicaciones"
                                },
                                {
                                    "id": "SM23022503",
                                    "title": "📅 Reservaciones",//Limitado a 26 caracteres
                                    "description": "Reserva tu mesa fácilmente"
                                },
                                {
                                    "id": "SM23022504",
                                    "title": "🎉 Paquetes y eventos",//Limitado a 26 caracteres
                                    "description": "Conoce nuestros paquetes especiales"
                                },
                                {
                                    "id": "SM23022505",
                                    "title": "🎟️ Promociones y cupones",//Limitado a 26 caracteres
                                    "description": "Aprovecha nuestras ofertas exclusivas"
                                },
                                {
                                    "id": "SM23022506",
                                    "title": "📝 Quejas y sugerencias",
                                    "description": "Tu opinión nos ayuda a mejorar"
                                },
                                {
                                    "id": "SM23022507",
                                    "title": "📋 Contratación",
                                    "description": "Únete a nuestro equipo"
                                },
                                {
                                    "id": "SM23022508",
                                    "title": "💳 Facturación",
                                    "description": "Solicita tu factura aquí"
                                },
                                {
                                    "id": "SM230225audio",
                                    "title": "🎵 Audio",//Limitado a 26 caracteres
                                    "description": "Puedes escuchar un audio"
                                },
                                {
                                    "id": "SM230225imagen",
                                    "title": "🎥 Imagen",//Limitado a 26 caracteres
                                    "description": "Tambien recibe una imagen"
                                }
                            ]
                        }
                    ]
                }
            }
            await provider.sendList(`${ctx.from}@s.whatsapp.net`, list)
        })
        
export { opcionesFlow };