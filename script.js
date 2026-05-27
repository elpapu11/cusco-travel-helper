/**
 * Cusco Travel Helper — Main JavaScript
 * Pure JS, no frameworks, no build step
 * MVP v0.2 — Trip checks, visuals, corrected Spanish
 */

// ============================================
// Configuration — CHANGE THESE VALUES
// ============================================

/** WhatsApp number — currently set to the real number */
const WHATSAPP_NUMBER = "51986128511";

/** Google Analytics 4 ID placeholder — replace with real ID when ready */
const GA4_ID = "G-XXXXXXXXXX";

// ============================================
// Translations
// ============================================

const translations = {
  // Meta
  meta_title: {
    en: "Cusco Travel Helper | Private Transfer Quotes & Trip Logistics",
    es: "Cusco Travel Helper | Cotizaciones de Traslados y Logística de Viaje"
  },
  meta_description: {
    en: "Request private transfer quotes in Cusco for the airport, Sacred Valley, Ollantaytambo and train stations. Get itinerary and Machu Picchu logistics help by WhatsApp.",
    es: "Solicita cotizaciones de traslados privados en Cusco para el aeropuerto, Valle Sagrado, Ollantaytambo y estaciones de tren. Recibe ayuda de logística e itinerario por WhatsApp."
  },
  og_title: {
    en: "Cusco Travel Helper | Private Transfer Quotes & Trip Logistics",
    es: "Cusco Travel Helper | Cotizaciones de Traslados y Logística de Viaje"
  },
  og_description: {
    en: "Request private transfer quotes in Cusco for the airport, Sacred Valley, Ollantaytambo and train stations. Get itinerary and Machu Picchu logistics help by WhatsApp.",
    es: "Solicita cotizaciones de traslados privados en Cusco para el aeropuerto, Valle Sagrado, Ollantaytambo y estaciones de tren. Recibe ayuda de logística e itinerario por WhatsApp."
  },

  // Brand
  brand_name: {
    en: "Cusco Travel Helper",
    es: "Cusco Travel Helper"
  },

  // Nav
  nav_transfer: { en: "Transfer quote", es: "Cotizar traslado" },
  nav_routes: { en: "Routes", es: "Rutas" },
  nav_trip_checks: { en: "Trip checks", es: "Revisiones" },
  nav_faq: { en: "FAQ", es: "Preguntas frecuentes" },
  whatsapp_short: { en: "WhatsApp", es: "WhatsApp" },

  // Hero
  hero_title: {
    en: "Private transfers in Cusco, made easier",
    es: "Traslados privados en Cusco, más fáciles de coordinar"
  },
  hero_subtitle: {
    en: "Get a quick route quote for the airport, Sacred Valley, Ollantaytambo, train stations and day trips. Send your request by WhatsApp.",
    es: "Solicita una cotización rápida para el aeropuerto, el Valle Sagrado, Ollantaytambo, estaciones de tren y tours de día completo. Envía tu solicitud por WhatsApp."
  },
  hero_svg_alt: {
    en: "Abstract route map showing Cusco, the airport, Sacred Valley and Ollantaytambo",
    es: "Mapa de ruta abstracto con Cusco, el aeropuerto, el Valle Sagrado y Ollantaytambo"
  },
  cta_transfer_quote: { en: "Get a transfer quote", es: "Cotizar traslado" },
  cta_check_itinerary: { en: "Check my itinerary", es: "Revisar mi itinerario" },

  // Trust bar
  trust_1: { en: "Reference quotes, not final prices", es: "Cotizaciones referenciales, no precios finales" },
  trust_2: { en: "WhatsApp request with clear trip details", es: "Solicitud por WhatsApp con datos claros del viaje" },
  trust_3: { en: "Airport, Sacred Valley and train station routes", es: "Rutas de aeropuerto, Valle Sagrado y estaciones de tren" },
  trust_4: { en: "Planning assistance, not an official ticket seller", es: "Asistencia de planificación, no venta oficial de tickets" },

  // Form
  form_title: { en: "Request a private transfer quote", es: "Solicitar una cotización de traslado privado" },
  form_intro: {
    en: "Fill in your trip details and we will prepare a clear WhatsApp request for you. Prices are referential and must be confirmed by a local provider.",
    es: "Completa los detalles de tu viaje y prepararemos una solicitud clara por WhatsApp. Los precios son referenciales y deben ser confirmados por un proveedor local."
  },

  // Form labels
  label_lang: { en: "Language preference", es: "Preferencia de idioma" },
  label_trip_type: { en: "What best describes your trip? (optional)", es: "¿Qué describe mejor tu viaje? (opcional)" },
  label_origin: { en: "Origin", es: "Origen" },
  label_destination: { en: "Destination", es: "Destino" },
  label_date: { en: "Date", es: "Fecha" },
  label_time: { en: "Time", es: "Hora" },
  label_travelers: { en: "Number of travelers", es: "Número de viajeros" },
  label_luggage: { en: "Luggage", es: "Equipaje" },
  label_vehicle: { en: "Vehicle preference", es: "Preferencia de vehículo" },
  label_stops: { en: "Stops needed", es: "Paradas necesarias" },
  label_pickup: { en: "Pickup details", es: "Detalles de recojo" },
  label_flight: { en: "Flight or train number (optional)", es: "Número de vuelo o tren (opcional)" },
  label_concern: { en: "Main concern", es: "Principal preocupación" },
  label_notes: { en: "Additional notes", es: "Notas adicionales" },

  // Options
  placeholder_select: { en: "Select...", es: "Seleccionar..." },
  placeholder_select_trip_type: { en: "Select...", es: "Seleccionar..." },
  opt_english: { en: "English", es: "Inglés" },
  opt_spanish: { en: "Spanish", es: "Español" },
  opt_other: { en: "Other", es: "Otro" },
  opt_transfer_only: { en: "I need a transfer", es: "Necesito un traslado" },
  opt_machu_picchu_booked: { en: "I already booked Machu Picchu", es: "Ya compré Machu Picchu" },
  opt_package_booked: { en: "I already booked a tour package", es: "Ya compré un paquete turístico" },
  opt_still_planning: { en: "I'm still planning my itinerary", es: "Aún estoy planificando mi itinerario" },
  opt_not_sure_yet: { en: "I'm not sure yet", es: "No estoy seguro todavía" },
  opt_small_bags: { en: "Small bags only", es: "Solo bolsos pequeños" },
  opt_medium_luggage: { en: "Medium luggage", es: "Equipaje mediano" },
  opt_large_luggage: { en: "Large luggage", es: "Equipaje grande" },
  opt_not_sure: { en: "Not sure", es: "No estoy seguro" },
  opt_no_pref: { en: "No preference", es: "Sin preferencia" },
  opt_van: { en: "Van for groups", es: "Van para grupos" },
  opt_direct: { en: "Direct transfer", es: "Traslado directo" },
  opt_with_stops: { en: "With stops", es: "Con paradas" },
  opt_airport: { en: "Airport", es: "Aeropuerto" },
  opt_hotel: { en: "Hotel", es: "Hotel" },
  opt_train_station: { en: "Train station", es: "Estación de tren" },
  opt_address: { en: "Address to confirm", es: "Dirección a confirmar" },
  opt_price: { en: "Price", es: "Precio" },
  opt_timing: { en: "Timing", es: "Horarios" },
  opt_luggage_concern: { en: "Luggage", es: "Equipaje" },
  opt_safety: { en: "Safety", es: "Seguridad" },
  opt_train: { en: "Train connection", es: "Conexión de tren" },
  opt_kids: { en: "Traveling with kids", es: "Viajando con niños" },
  opt_group: { en: "Traveling in a group", es: "Viajando en grupo" },
  opt_other_concern: { en: "Other", es: "Otro" },

  // Buttons
  btn_generate_quote: { en: "Generate my quote request", es: "Generar mi solicitud de cotización" },
  btn_reset: { en: "Clear form", es: "Limpiar formulario" },
  btn_send_whatsapp: { en: "Send request by WhatsApp", es: "Enviar solicitud por WhatsApp" },
  btn_copy: { en: "Copy request", es: "Copiar solicitud" },

  // Result
  result_title: { en: "Your transfer request summary", es: "Resumen de tu solicitud de traslado" },
  result_label_route: { en: "Route", es: "Ruta" },
  result_label_vehicle: { en: "Suggested vehicle", es: "Vehículo sugerido" },
  result_label_time: { en: "Estimated time", es: "Tiempo estimado" },
  result_label_logistics: { en: "Logistics level", es: "Nivel logístico" },
  result_label_trip_type: { en: "Trip type", es: "Tipo de viaje" },
  result_warnings_title: { en: "Important notes", es: "Notas importantes" },
  result_confirm_title: { en: "What to confirm with the provider", es: "Qué confirmar con el proveedor" },
  result_disclaimer_text: {
    en: "Reference price must be confirmed by a local provider. This is not a confirmed booking.",
    es: "El precio referencial debe ser confirmado por un proveedor local. Esto no es una reserva confirmada."
  },
  level_easy: { en: "Easy", es: "Fácil" },
  level_moderate: { en: "Moderate", es: "Moderado" },
  level_high: { en: "High", es: "Alto" },

  // Confirm checklist
  confirm_vehicle: { en: "Vehicle type, model and capacity", es: "Tipo, modelo y capacidad del vehículo" },
  confirm_driver: { en: "Driver name, license and contact", es: "Nombre del conductor, licencia y contacto" },
  confirm_pickup: { en: "Exact pickup point and protocol", es: "Punto exacto de recojo y protocolo" },
  confirm_price: { en: "Final price including tolls and waiting time", es: "Precio final incluyendo peajes y tiempo de espera" },
  confirm_insurance: { en: "Insurance coverage for the vehicle and passengers", es: "Cobertura de seguro para vehículo y pasajeros" },
  confirm_date: { en: "Date, time and buffer for delays", es: "Fecha, hora y margen para retrasos" },

  // Routes section
  routes_title: { en: "Popular routes", es: "Rutas populares" },
  routes_intro: {
    en: "Click any route to prefill the quote form with origin and destination.",
    es: "Haz clic en cualquier ruta para precargar el formulario de cotización con origen y destino."
  },
  ask_route_btn: { en: "Ask about this route", es: "Consultar esta ruta" },

  // Trip checks
  trip_checks_title: { en: "Need help checking your Machu Picchu plan or tour package?", es: "¿Necesitas revisar tu plan de Machu Picchu o tu paquete turístico?" },
  trip_checks_intro: {
    en: "If you already have Machu Picchu tickets, train schedules or a tour package, we can help you review timing, inclusions, logistics risks and questions to confirm before your trip.",
    es: "Si ya tienes entradas a Machu Picchu, horarios de tren o un paquete turístico, podemos ayudarte a revisar tiempos, inclusiones, riesgos logísticos y preguntas que deberías confirmar antes del viaje."
  },
  product_includes: { en: "Includes:", es: "Incluye:" },

  // Machu Picchu note
  machu_title: { en: "Machu Picchu logistics need careful timing", es: "La logística de Machu Picchu requiere buena coordinación" },
  machu_text: {
    en: "Machu Picchu requires careful coordination between entry time, circuit or route, train, bus, guide, luggage and return transport. This tool does not sell official tickets or guarantee availability.",
    es: "Machu Picchu requiere coordinar entrada, circuito o ruta, tren, bus, guía, equipaje y transporte de retorno. Esta herramienta no vende tickets oficiales ni garantiza disponibilidad."
  },
  cta_machu_check: { en: "Check my Machu Picchu logistics", es: "Revisar mi logística de Machu Picchu" },

  // FAQ
  faq_title: { en: "Frequently asked questions", es: "Preguntas frecuentes" },
  faq_q1: { en: "Do you sell Machu Picchu tickets?", es: "¿Venden entradas a Machu Picchu?" },
  faq_a1: {
    en: "No. We do not sell Machu Picchu entry tickets, train tickets or bus tickets. We help you review your logistics and prepare clear questions for your agency or official providers.",
    es: "No. No vendemos entradas a Machu Picchu, tickets de tren ni tickets de bus. Te ayudamos a revisar tu logística y preparar preguntas claras para tu agencia o proveedores oficiales."
  },
  faq_q2: { en: "Are transfer prices guaranteed?", es: "¿Los precios de traslado están garantizados?" },
  faq_a2: {
    en: "No. All prices shown or referenced are indicative and must be confirmed by a local transport provider. Final rates depend on vehicle type, route conditions, fuel prices and demand.",
    es: "No. Todos los precios mostrados o referenciados son indicativos y deben ser confirmados por un proveedor de transporte local. Las tarifas finales dependen del tipo de vehículo, condiciones de la ruta, precio de combustible y demanda."
  },
  faq_q3: { en: "Is this an official transport company?", es: "¿Son una empresa oficial de transporte?" },
  faq_a3: {
    en: "No. Cusco Travel Helper is an independent trip assistance tool. We are not a transport operator, travel agency or government entity. We help you structure your route request and connect with local providers.",
    es: "No. Cusco Travel Helper es una herramienta independiente de asistencia para viajes. No somos un operador de transporte, agencia de viajes ni entidad gubernamental. Te ayudamos a estructurar tu solicitud de ruta y conectar con proveedores locales."
  },
  faq_q4: { en: "Can I book directly here?", es: "¿Puedo reservar directamente aquí?" },
  faq_a4: {
    en: "You cannot complete a confirmed booking on this site. You can generate a detailed WhatsApp request and continue the conversation directly with a provider. Transport is confirmed only after a provider accepts the request.",
    es: "No puedes completar una reserva confirmada en este sitio. Puedes generar una solicitud detallada por WhatsApp y continuar la conversación directamente con un proveedor. El transporte solo se confirma cuando un proveedor acepta la solicitud."
  },
  faq_q5: { en: "What happens after I send the WhatsApp request?", es: "¿Qué pasa después de enviar la solicitud por WhatsApp?" },
  faq_a5: {
    en: "A local provider will review your trip details and respond with availability, final price and vehicle information. We recommend confirming vehicle type, driver license, insurance and pickup protocol before agreeing.",
    es: "Un proveedor local revisará los detalles de tu viaje y responderá con disponibilidad, precio final e información del vehículo. Recomendamos confirmar tipo de vehículo, licencia del conductor, seguro y protocolo de recojo antes de acordar."
  },
  faq_q6: { en: "Can you help if I already booked a tour package?", es: "¿Pueden ayudarme si ya compré un paquete turístico?" },
  faq_a6: {
    en: "Yes. Our Trip Check services help you review your itinerary, identify missing logistics and prepare questions for your tour operator. We do not replace your agency, we add clarity.",
    es: "Sí. Nuestros servicios de Revisión de Viaje te ayudan a revisar tu itinerario, identificar logísticas faltantes y preparar preguntas para tu operador turístico. No reemplazamos a tu agencia, agregamos claridad."
  },
  faq_q7: { en: "Should I sleep in Cusco or Ollantaytambo before Machu Picchu?", es: "¿Conviene dormir en Cusco u Ollantaytambo antes de Machu Picchu?" },
  faq_a7: {
    en: "It depends on your train schedule. Ollantaytambo is closer to Machu Picchu and useful for early trains. Cusco offers more accommodation and dining options. We can review your specific itinerary to recommend the best option.",
    es: "Depende de tu horario de tren. Ollantaytambo está más cerca de Machu Picchu y es útil para trenes tempranos. Cusco ofrece más opciones de alojamiento y restaurantes. Podemos revisar tu itinerario específico para recomendarte la mejor opción."
  },
  faq_q8: { en: "Can I request a private driver?", es: "¿Puedo solicitar conductor privado?" },
  faq_a8: {
    en: "Yes. You can specify your preference in the transfer form. Select your vehicle type and mention any specific needs in the additional notes. The provider will confirm driver availability.",
    es: "Sí. Puedes especificar tu preferencia en el formulario de traslado. Selecciona tu tipo de vehículo y menciona necesidades específicas en las notas adicionales. El proveedor confirmará disponibilidad de conductor."
  },
  faq_q9: { en: "Do you work with verified operators?", es: "¿Trabajan con operadores verificados?" },
  faq_a9: {
    en: "We are currently validating local providers. Always confirm vehicle, driver, license, insurance and final price before booking. We do not guarantee the quality of any specific operator.",
    es: "Actualmente estamos validando proveedores locales. Antes de reservar, confirma vehículo, conductor, licencia, seguro y precio final. No garantizamos la calidad de ningún operador específico."
  },

  // Footer
  footer_tagline: { en: "Private transfers and travel logistics in Cusco, made easier.", es: "Traslados privados y logística de viaje en Cusco, más fácil." },
  footer_whatsapp: { en: "WhatsApp:", es: "WhatsApp:" },
  footer_email_label: { en: "Email:", es: "Correo:" },
  footer_disclaimer: {
    en: "This is an independent trip and transfer assistance tool. It does not sell Machu Picchu tickets, train tickets or confirmed transport services. Prices, schedules and availability must be confirmed with official providers or local operators.",
    es: "Esta es una herramienta independiente de asistencia para viajes y traslados. No vende entradas a Machu Picchu, tickets de tren ni servicios de transporte confirmados. Precios, horarios y disponibilidad deben confirmarse con proveedores oficiales u operadores locales."
  }
};

// ============================================
// State
// ============================================

let currentLang = "en";
let routesData = [];
let productsData = [];
let rulesData = [];
let lastWhatsAppMessage = "";

// ============================================
// Google Analytics helper
// ============================================

function trackEvent(eventName, params = {}) {
  if (typeof gtag === "function") {
    gtag("event", eventName, params);
  }
}

// ============================================
// Language management
// ============================================

function setLanguage(lang) {
  if (lang !== "en" && lang !== "es") return;
  currentLang = lang;

  document.documentElement.lang = lang;

  // Update buttons
  const btnEn = document.getElementById("btn-en");
  const btnEs = document.getElementById("btn-es");
  if (btnEn && btnEs) {
    btnEn.classList.toggle("active", lang === "en");
    btnEn.setAttribute("aria-pressed", lang === "en");
    btnEs.classList.toggle("active", lang === "es");
    btnEs.setAttribute("aria-pressed", lang === "es");
  }

  translatePage();
  trackEvent("language_changed", { selected_language: lang });
}

function translatePage() {
  // Text content
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key] && translations[key][currentLang]) {
      if (el.hasAttribute("data-i18n-attr")) {
        const attr = el.getAttribute("data-i18n-attr");
        el.setAttribute(attr, translations[key][currentLang]);
      } else {
        el.textContent = translations[key][currentLang];
      }
    }
  });

  // Option elements inside selects
  document.querySelectorAll("option[data-i18n]").forEach(opt => {
    const key = opt.getAttribute("data-i18n");
    if (translations[key] && translations[key][currentLang]) {
      opt.textContent = translations[key][currentLang];
    }
  });

  // SVG title elements with data-i18n-alt
  document.querySelectorAll("[data-i18n-alt]").forEach(svg => {
    const key = svg.getAttribute("data-i18n-alt");
    if (translations[key] && translations[key][currentLang]) {
      const titleEl = svg.querySelector("title");
      if (titleEl) titleEl.textContent = translations[key][currentLang];
    }
  });

  // Re-render dynamic content
  renderRoutes();
  renderProducts();
}

// ============================================
// Inline data fallback for local file:// usage
// ============================================

const routesDataFallback = [
  {
    id: "airport-to-center",
    origin: "Cusco Airport",
    destination: "Cusco Center",
    name_en: "Cusco Airport to Cusco Center",
    name_es: "Aeropuerto de Cusco al Centro de Cusco",
    estimated_time_en: "20 to 40 minutes",
    estimated_time_es: "20 a 40 minutos",
    logistics_level: "easy",
    suggested_vehicle_en: "Sedan or SUV",
    suggested_vehicle_es: "Sedan o SUV",
    warning_en: "Traffic near the Plaza de Armas can delay arrival during peak hours. Have your hotel name and address ready.",
    warning_es: "El tráfico cerca de la Plaza de Armas puede retrasar la llegada en horas pico. Ten a mano el nombre y dirección de tu hotel.",
    tags: ["airport", "city"]
  },
  {
    id: "airport-to-ollantaytambo",
    origin: "Cusco Airport",
    destination: "Ollantaytambo",
    name_en: "Cusco Airport to Ollantaytambo",
    name_es: "Aeropuerto de Cusco a Ollantaytambo",
    estimated_time_en: "1 hour 30 minutes to 2 hours",
    estimated_time_es: "1 hora 30 minutos a 2 horas",
    logistics_level: "moderate",
    suggested_vehicle_en: "SUV or minivan",
    suggested_vehicle_es: "SUV o minivan",
    warning_en: "Altitude change and winding roads. If you just arrived, take it slow. Confirm your hotel in Ollantaytambo has vehicle access.",
    warning_es: "Cambio de altitud y carreteras sinuosas. Si acabas de llegar, tómalo con calma. Confirma que tu hotel en Ollantaytambo tenga acceso vehicular.",
    tags: ["airport", "sacred-valley"]
  },
  {
    id: "airport-to-sacred-valley",
    origin: "Cusco Airport",
    destination: "Sacred Valley",
    name_en: "Cusco Airport to Sacred Valley",
    name_es: "Aeropuerto de Cusco al Valle Sagrado",
    estimated_time_en: "1 hour to 1 hour 45 minutes",
    estimated_time_es: "1 hora a 1 hora 45 minutos",
    logistics_level: "moderate",
    suggested_vehicle_en: "SUV or minivan",
    suggested_vehicle_es: "SUV o minivan",
    warning_en: "The Sacred Valley covers several towns. Specify your exact destination. Urubamba is closer than Pisac from the airport.",
    warning_es: "El Valle Sagrado abarca varios pueblos. Especifica tu destino exacto. Urubamba está más cerca que Pisac desde el aeropuerto.",
    tags: ["airport", "sacred-valley"]
  },
  {
    id: "cusco-to-ollantaytambo",
    origin: "Cusco Center",
    destination: "Ollantaytambo",
    name_en: "Cusco to Ollantaytambo",
    name_es: "Cusco a Ollantaytambo",
    estimated_time_en: "1 hour 30 minutes to 2 hours",
    estimated_time_es: "1 hora 30 minutos a 2 horas",
    logistics_level: "easy",
    suggested_vehicle_en: "Sedan, SUV or minivan",
    suggested_vehicle_es: "Sedan, SUV o minivan",
    warning_en: "Common route for train connections. Allow extra time before your train departure. Road conditions are generally good.",
    warning_es: "Ruta común para conexiones de tren. Dale tiempo extra antes de la salida de tu tren. Las condiciones de la carretera son generalmente buenas.",
    tags: ["sacred-valley", "train"]
  },
  {
    id: "cusco-to-poroy",
    origin: "Cusco Center",
    destination: "Poroy Station",
    name_en: "Cusco to Poroy Station",
    name_es: "Cusco a Estación de Poroy",
    estimated_time_en: "20 to 35 minutes",
    estimated_time_es: "20 a 35 minutos",
    logistics_level: "easy",
    suggested_vehicle_en: "Sedan or SUV",
    suggested_vehicle_es: "Sedan o SUV",
    warning_en: "Arrive at least 30 minutes before train departure. Poroy is smaller than Wanchaq; confirm your train leaves from here.",
    warning_es: "Llega al menos 30 minutos antes de la salida del tren. Poroy es más pequeña que Wanchaq; confirma que tu tren salga de aquí.",
    tags: ["train", "city"]
  },
  {
    id: "cusco-to-sacred-valley",
    origin: "Cusco Center",
    destination: "Sacred Valley",
    name_en: "Cusco to Sacred Valley",
    name_es: "Cusco al Valle Sagrado",
    estimated_time_en: "45 minutes to 1 hour 30 minutes",
    estimated_time_es: "45 minutos a 1 hora 30 minutos",
    logistics_level: "easy",
    suggested_vehicle_en: "Sedan, SUV or minivan",
    suggested_vehicle_es: "Sedan, SUV o minivan",
    warning_en: "Specify the exact town. Pisac and Urubamba are in opposite directions from Cusco. Plan your day-trip timing carefully.",
    warning_es: "Especifica el pueblo exacto. Pisac y Urubamba están en direcciones opuestas desde Cusco. Planifica bien los horarios de tu tour de un día.",
    tags: ["sacred-valley", "day-trip"]
  },
  {
    id: "cusco-to-hidroelectrica",
    origin: "Cusco Center",
    destination: "Hidroelectrica",
    name_en: "Cusco to Hidroelectrica",
    name_es: "Cusco a Hidroeléctrica",
    estimated_time_en: "6 to 7 hours",
    estimated_time_es: "6 a 7 horas",
    logistics_level: "high",
    suggested_vehicle_en: "Minivan or van for groups",
    suggested_vehicle_es: "Minivan o van para grupos",
    warning_en: "Long journey on winding mountain roads. Not recommended if you are not acclimatized. This route is often used for budget Machu Picchu access via Santa Teresa.",
    warning_es: "Viaje largo por carreteras montañosas sinuosas. No recomendado si no estás aclimatado. Esta ruta se usa frecuentemente para acceder a Machu Picchu por Santa Teresa con bajo presupuesto.",
    tags: ["long-trip", "machu-picchu"]
  },
  {
    id: "cusco-to-humantay",
    origin: "Cusco Center",
    destination: "Humantay Lake",
    name_en: "Cusco to Humantay Lake",
    name_es: "Cusco a Laguna Humantay",
    estimated_time_en: "3 to 3.5 hours each way",
    estimated_time_es: "3 a 3.5 horas por trayecto",
    logistics_level: "high",
    suggested_vehicle_en: "SUV or minivan",
    suggested_vehicle_es: "SUV o minivan",
    warning_en: "Very early departure recommended. High altitude trek after the drive. Bring warm layers. The trailhead is at Soraypampa.",
    warning_es: "Se recomienda salida muy temprana. Trek de gran altitud después del viaje. Lleva ropa de abrigo. El inicio del sendero está en Soraypampa.",
    tags: ["day-trip", "trek", "high-altitude"]
  },
  {
    id: "cusco-to-rainbow-mountain",
    origin: "Cusco Center",
    destination: "Rainbow Mountain",
    name_en: "Cusco to Rainbow Mountain",
    name_es: "Cusco a Montaña de Colores",
    estimated_time_en: "3 to 3.5 hours each way",
    estimated_time_es: "3 a 3.5 horas por trayecto",
    logistics_level: "high",
    suggested_vehicle_en: "SUV or minivan",
    suggested_vehicle_es: "SUV o minivan",
    warning_en: "Extreme altitude. Depart Cusco around 4:00 AM. The trailhead is at Cusipata or Phulawasipata. Check weather conditions.",
    warning_es: "Altitud extrema. Salida de Cusco alrededor de las 4:00 AM. El inicio del sendero está en Cusipata o Phulawasipata. Revisa las condiciones climáticas.",
    tags: ["day-trip", "trek", "high-altitude"]
  }
];

const productsDataFallback = [
  {
    id: "machu-picchu-logistics",
    name_en: "Machu Picchu Logistics Check",
    name_es: "Revisión logística de Machu Picchu",
    price: "US$19",
    description_en: "Review your Machu Picchu ticket, circuit or route, train, bus, guide, luggage and return timing.",
    description_es: "Revisión de entrada a Machu Picchu, circuito o ruta, tren, bus, guía, equipaje y horario de retorno.",
    includes_en: [
      "Ticket and entry time review",
      "Circuit or route check",
      "Train and bus timing review",
      "Luggage and return logistics",
      "Questions to confirm before your visit"
    ],
    includes_es: [
      "Revisión de entrada y horario de ingreso",
      "Revisión de circuito o ruta",
      "Revisión de tiempos de tren y bus",
      "Equipaje y logística de retorno",
      "Preguntas que debes confirmar antes de la visita"
    ],
    cta_en: "Ask by WhatsApp",
    cta_es: "Consultar por WhatsApp",
    cta_secondary_en: "I want this review",
    cta_secondary_es: "Quiero esta revisión",
    whatsapp_message_en: "Hi, I'm interested in the Machu Picchu Logistics Check.\n\nMy details:\n- Visit date:\n- Machu Picchu ticket:\n- Circuit or route:\n- Entry time:\n- Train:\n- Hotel or staying area:\n- Main concern:\n\nPlease tell me what information you need to review my logistics.",
    whatsapp_message_es: "Hola, estoy interesado en la revisión logística de Machu Picchu.\n\nMis datos:\n- Fecha de visita:\n- Entrada a Machu Picchu:\n- Circuito o ruta:\n- Hora de ingreso:\n- Tren:\n- Hotel o zona de hospedaje:\n- Principal preocupación:\n\nPor favor, indícame qué información necesitas para revisar mi logística."
  },
  {
    id: "tour-package-sanity",
    name_en: "Tour Package Sanity Check",
    name_es: "Revisión de paquete turístico",
    price: "US$19",
    description_en: "Paste your tour package and we'll help you understand what is included, what is missing and what to confirm.",
    description_es: "Pega tu paquete turístico y te ayudamos a entender qué incluye, qué falta y qué deberías confirmar con tu agencia.",
    includes_en: [
      "Package inclusions review",
      "Missing details checklist",
      "Timing and logistics risks",
      "Questions to send your agency",
      "Free-time gaps detection"
    ],
    includes_es: [
      "Revisión de inclusiones del paquete",
      "Lista de datos faltantes",
      "Riesgos de tiempo y logística",
      "Preguntas para enviar a tu agencia",
      "Detección de tiempos libres o vacíos"
    ],
    cta_en: "Check my package",
    cta_es: "Revisar mi paquete",
    cta_secondary_en: "I want this check",
    cta_secondary_es: "Quiero esta revisión",
    whatsapp_message_en: "Hi, I'm interested in the Tour Package Sanity Check.\n\nI already booked or received a tour package and would like help understanding what is included, what is missing and what I should confirm.\n\nPackage or itinerary:\n[Paste here]",
    whatsapp_message_es: "Hola, estoy interesado en la revisión de paquete turístico.\n\nYa compré o recibí un paquete turístico y quisiera ayuda para entender qué incluye, qué falta y qué debería confirmar.\n\nPaquete o itinerario:\n[Pegar aquí]"
  },
  {
    id: "full-cusco-plan",
    name_en: "Full Cusco Plan",
    name_es: "Plan completo para Cusco",
    price: "From US$39",
    description_en: "A personalized day-by-day Cusco plan based on your dates, pace, interests and logistics.",
    description_es: "Un plan personalizado día por día para Cusco según tus fechas, ritmo, intereses y logística.",
    includes_en: [
      "Day-by-day plan",
      "Activity order",
      "Transfer needs",
      "Machu Picchu checklist",
      "Altitude-safe pacing"
    ],
    includes_es: [
      "Plan día por día",
      "Orden recomendado de actividades",
      "Necesidades de traslado",
      "Checklist para Machu Picchu",
      "Ritmo adaptado a la altura"
    ],
    cta_en: "Ask for a custom plan",
    cta_es: "Consultar plan personalizado",
    cta_secondary_en: "I want a custom plan",
    cta_secondary_es: "Quiero un plan personalizado",
    whatsapp_message_en: "Hi, I'm interested in a custom Full Cusco Plan.\n\nMy dates are:\nMy interests are:\nMy main concern is:",
    whatsapp_message_es: "Hola, estoy interesado en un plan completo personalizado para Cusco.\n\nMis fechas son:\nMis intereses son:\nMi principal preocupación es:"
  }
];

const rulesDataFallback = [
  {
    id: "airport-pickup",
    conditions: [
      { field: "origin", value: "Cusco Airport" },
      { field: "destination", value: "Cusco Airport" }
    ],
    logic: "OR",
    severity: "info",
    message_en: "Airport pickups usually require the flight number and a buffer for delays. Confirm if the driver waits inside or outside the terminal.",
    message_es: "Los recojos en el aeropuerto generalmente requieren el número de vuelo y margen para retrasos. Confirma si el conductor espera dentro o fuera del terminal."
  },
  {
    id: "train-connection",
    conditions: [
      { field: "destination", value: "Poroy Station" },
      { field: "destination", value: "Wanchaq Station" },
      { field: "destination", value: "Ollantaytambo" },
      { field: "origin", value: "Poroy Station" },
      { field: "origin", value: "Wanchaq Station" },
      { field: "origin", value: "Ollantaytambo" }
    ],
    logic: "OR",
    severity: "warning",
    message_en: "Train connections require precise timing. Allow at least 60 minutes buffer before departure. Verify your train station and departure time.",
    message_es: "Las conexiones de tren requieren precisión de horarios. Deja al menos 60 minutos de margen antes de la salida. Verifica tu estación y hora de salida."
  },
  {
    id: "large-luggage",
    conditions: [
      { field: "luggage", value: "large luggage" }
    ],
    logic: "OR",
    severity: "warning",
    message_en: "Large luggage may require a van or SUV. Sedans often have limited trunk space. Confirm vehicle capacity with the provider.",
    message_es: "Equipaje grande puede requerir una van o SUV. Los sedanes suelen tener espacio limitado en el maletero. Confirma la capacidad del vehículo con el proveedor."
  },
  {
    id: "group-travel",
    conditions: [
      { field: "travelers", value: "5" },
      { field: "travelers", value: "6" },
      { field: "travelers", value: "7" },
      { field: "travelers", value: "8" }
    ],
    logic: "OR",
    severity: "info",
    message_en: "Groups of 5 or more typically need a van or minivan. Confirm the exact vehicle type and number of seats with the provider.",
    message_es: "Grupos de 5 o más personas generalmente necesitan una van o minivan. Confirma el tipo exacto de vehículo y número de asientos con el proveedor."
  },
  {
    id: "long-day-trip",
    conditions: [
      { field: "destination", value: "Humantay Lake" },
      { field: "destination", value: "Rainbow Mountain" },
      { field: "destination", value: "Hidroelectrica" }
    ],
    logic: "OR",
    severity: "warning",
    message_en: "Long day trips require early departure and proper acclimatization. Bring warm clothing, water and snacks. Confirm return time with the driver.",
    message_es: "Los tours de día completo requieren salida temprana y buena aclimatación. Lleva ropa abrigadora, agua y snacks. Confirma la hora de retorno con el conductor."
  },
  {
    id: "early-departure",
    conditions: [
      { field: "time", value: "early" }
    ],
    logic: "OR",
    severity: "info",
    message_en: "Early morning transfers may have limited vehicle availability. Book in advance and confirm the night before.",
    message_es: "Los traslados muy temprano pueden tener disponibilidad limitada de vehículos. Reserva con anticipación y confirma la noche anterior."
  },
  {
    id: "other-destination",
    conditions: [
      { field: "destination", value: "Other" },
      { field: "origin", value: "Other" }
    ],
    logic: "OR",
    severity: "info",
    message_en: "Custom route selected. Please provide as much detail as possible in the additional notes so we can assist you accurately.",
    message_es: "Ruta personalizada seleccionada. Por favor proporciona todos los detalles posibles en las notas adicionales para poder asistirte con precisión."
  },
  {
    id: "altitude-warning",
    conditions: [
      { field: "destination", value: "Humantay Lake" },
      { field: "destination", value: "Rainbow Mountain" }
    ],
    logic: "OR",
    severity: "warning",
    message_en: "This destination is at very high altitude. Make sure you have acclimatized in Cusco for at least 2 days before visiting.",
    message_es: "Este destino está a muy gran altitud. Asegúrate de haber aclimatado en Cusco al menos 2 días antes de visitarlo."
  },
  {
    id: "sacred-valley-general",
    conditions: [
      { field: "destination", value: "Sacred Valley" },
      { field: "destination", value: "Urubamba" },
      { field: "destination", value: "Pisac" },
      { field: "destination", value: "Chinchero" },
      { field: "destination", value: "Maras" },
      { field: "destination", value: "Moray" }
    ],
    logic: "OR",
    severity: "info",
    message_en: "Sacred Valley routes are scenic but can be slow due to road conditions and traffic in small towns. Plan flexible timing.",
    message_es: "Las rutas del Valle Sagrado son escénicas pero pueden ser lentas por condiciones de carretera y tráfico en pueblos pequeños. Planifica horarios flexibles."
  }
];

// ============================================
// Data loading
// ============================================

async function loadData() {
  let useFallback = false;

  try {
    const [routesRes, productsRes, rulesRes] = await Promise.all([
      fetch("data/routes.json"),
      fetch("data/products.json"),
      fetch("data/rules.json")
    ]);

    if (routesRes.ok) {
      routesData = await routesRes.json();
    } else {
      useFallback = true;
    }
    if (productsRes.ok) {
      const loaded = await productsRes.json();
      // Normalize loaded products: if they use old format, convert
      productsData = loaded.map(normalizeProduct);
    } else {
      useFallback = true;
    }
    if (rulesRes.ok) {
      rulesData = await rulesRes.json();
    } else {
      useFallback = true;
    }
  } catch (err) {
    console.warn("Could not fetch JSON data (expected when opened locally). Using inline fallback.", err);
    useFallback = true;
  }

  if (useFallback || routesData.length === 0) {
    routesData = routesDataFallback;
  }
  if (useFallback || productsData.length === 0) {
    productsData = productsDataFallback;
  }
  if (useFallback || rulesData.length === 0) {
    rulesData = rulesDataFallback;
  }

  renderRoutes();
  renderProducts();
}

// Normalize products from v0.1 format to v0.2 format
function normalizeProduct(prod) {
  // If product already has new format fields, return as-is
  if (prod.whatsapp_message_en && prod.cta_en) return prod;
  // Convert from old format
  const defaults = productsDataFallback.find(p => p.id === prod.id);
  if (defaults) {
    return {
      ...defaults,
      ...prod,
      cta_en: defaults.cta_en,
      cta_es: defaults.cta_es,
      cta_secondary_en: defaults.cta_secondary_en,
      cta_secondary_es: defaults.cta_secondary_es,
      whatsapp_message_en: defaults.whatsapp_message_en,
      whatsapp_message_es: defaults.whatsapp_message_es
    };
  }
  return prod;
}

// ============================================
// Render routes
// ============================================

function renderRoutes() {
  const container = document.getElementById("routes-grid");
  if (!container || !routesData.length) return;

  container.innerHTML = routesData.map(route => {
    const name = route[currentLang === "en" ? "name_en" : "name_es"];
    const time = route[currentLang === "en" ? "estimated_time_en" : "estimated_time_es"];
    const warning = route[currentLang === "en" ? "warning_en" : "warning_es"];
    const levelLabel = translations[`level_${route.logistics_level}`]?.[currentLang] || route.logistics_level;
    const btnText = translations.ask_route_btn[currentLang];

    return `
      <div class="route-card" onclick="prefillRoute('${route.id}')">
        <h3>${escapeHtml(name)}</h3>
        <div class="route-meta">
          <span class="route-badge time">${escapeHtml(time)}</span>
          <span class="route-badge level-${route.logistics_level}">${escapeHtml(levelLabel)}</span>
        </div>
        <p class="route-warning">${escapeHtml(warning)}</p>
        <button type="button" class="btn-secondary" onclick="event.stopPropagation(); prefillRoute('${route.id}')">${escapeHtml(btnText)}</button>
      </div>
    `;
  }).join("");
}

// ============================================
// Render products
// ============================================

function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container || !productsData.length) return;

  container.innerHTML = productsData.map(prod => {
    const name = prod[currentLang === "en" ? "name_en" : "name_es"];
    const desc = prod[currentLang === "en" ? "description_en" : "description_es"];
    const includes = prod[currentLang === "en" ? "includes_en" : "includes_es"];
    const waMsg = prod[currentLang === "en" ? "whatsapp_message_en" : "whatsapp_message_es"];
    const ctaPrimary = prod[currentLang === "en" ? "cta_en" : "cta_es"];
    const ctaSecondary = prod[currentLang === "en" ? "cta_secondary_en" : "cta_secondary_es"];
    const includesLabel = translations.product_includes[currentLang];

    const includesList = includes.map(item => `<li>${escapeHtml(item)}</li>`).join("");

    // GA4 event mapping per product
    let gaEventPrimary = "product_selected";
    if (prod.id === "machu-picchu-logistics") gaEventPrimary = "machu_picchu_check_clicked";
    if (prod.id === "tour-package-sanity") gaEventPrimary = "package_check_clicked";
    if (prod.id === "full-cusco-plan") gaEventPrimary = "full_plan_clicked";

    return `
      <div class="product-card">
        <h3>${escapeHtml(name)}</h3>
        <p class="product-price">${escapeHtml(prod.price)}</p>
        <p>${escapeHtml(desc)}</p>
        <p style="font-size:0.82rem; font-weight:600; color:var(--color-earth); margin-bottom:6px;">${escapeHtml(includesLabel)}</p>
        <ul class="product-includes">${includesList}</ul>
        <div class="product-actions">
          <a href="${buildWhatsAppUrl(waMsg)}" class="btn-primary" target="_blank" rel="noopener" onclick="trackEvent('${gaEventPrimary}', { product: '${prod.id}', location: 'product_card' })">${escapeHtml(ctaPrimary)}</a>
          <a href="${buildWhatsAppUrl(waMsg)}" class="btn-secondary" target="_blank" rel="noopener" onclick="trackEvent('${gaEventPrimary}', { product: '${prod.id}', intent: 'secondary' })">${escapeHtml(ctaSecondary)}</a>
        </div>
      </div>
    `;
  }).join("");
}

// ============================================
// Prefill route
// ============================================

function prefillRoute(routeId) {
  const route = routesData.find(r => r.id === routeId);
  if (!route) return;

  const originSelect = document.getElementById("origin");
  const destSelect = document.getElementById("destination");

  if (originSelect) originSelect.value = route.origin;
  if (destSelect) destSelect.value = route.destination;

  document.getElementById("transfer-quote")?.scrollIntoView({ behavior: "smooth" });
  trackEvent("route_selected", { route_id: routeId, origin: route.origin, destination: route.destination });
}

// ============================================
// Form handling
// ============================================

function initForm() {
  const form = document.getElementById("transfer-form");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = getFormData(form);
    if (!validateForm(formData)) return;

    generateQuoteResult(formData);
    trackEvent("transfer_quote_completed", {
      origin: formData.origin,
      destination: formData.destination,
      travelers: formData.travelers,
      trip_type: formData.trip_type || "not_specified"
    });
  });

  // Set min date to today
  const dateInput = document.getElementById("trip-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }
}

function getFormData(form) {
  const data = {};
  const elements = form.querySelectorAll("input, select, textarea");
  elements.forEach(el => {
    if (el.name) data[el.name] = el.value.trim();
  });
  return data;
}

function validateForm(data) {
  const required = ["origin", "destination", "trip_date", "trip_time", "travelers", "luggage", "vehicle", "stops", "pickup", "concern"];
  const missing = required.filter(field => !data[field]);

  if (missing.length > 0) {
    const msg = currentLang === "en"
      ? "Please complete all required fields."
      : "Por favor completa todos los campos obligatorios.";
    alert(msg);
    return false;
  }

  if (data.origin === data.destination) {
    const msg = currentLang === "en"
      ? "Origin and destination cannot be the same."
      : "El origen y el destino no pueden ser el mismo.";
    alert(msg);
    return false;
  }

  return true;
}

// ============================================
// Quote result generation
// ============================================

function generateQuoteResult(formData) {
  const route = getRouteData(formData.origin, formData.destination);
  const applicableRules = applyRules(formData);

  const resultContainer = document.getElementById("quote-result");
  const resultContent = document.getElementById("result-content");
  const waBtn = document.getElementById("result-whatsapp-btn");

  if (!resultContainer || !resultContent) return;

  const labels = {
    route: translations.result_label_route[currentLang],
    vehicle: translations.result_label_vehicle[currentLang],
    time: translations.result_label_time[currentLang],
    logistics: translations.result_label_logistics[currentLang],
    tripType: translations.result_label_trip_type[currentLang],
    warnings: translations.result_warnings_title[currentLang],
    confirm: translations.result_confirm_title[currentLang],
    disclaimer: translations.result_disclaimer_text[currentLang]
  };

  const levelKey = route ? `level_${route.logistics_level}` : "level_moderate";
  const levelLabel = translations[levelKey]?.[currentLang] || "Moderate";

  const vehicleText = route
    ? (currentLang === "en" ? route.suggested_vehicle_en : route.suggested_vehicle_es)
    : (formData.vehicle !== "no preference" ? formData.vehicle : "Sedan or SUV");

  const timeText = route
    ? (currentLang === "en" ? route.estimated_time_en : route.estimated_time_es)
    : (currentLang === "en" ? "Depends on traffic and route conditions" : "Depende del tráfico y condiciones de la ruta");

  // Build trip type display
  let tripTypeHtml = "";
  if (formData.trip_type) {
    const tripTypeLabel = getTripTypeLabel(formData.trip_type);
    tripTypeHtml = `
      <div class="result-meta-item">
        <strong>${escapeHtml(labels.tripType)}</strong>
        <span>${escapeHtml(tripTypeLabel)}</span>
      </div>`;
  }

  // Build warnings HTML
  let warningsHtml = "";
  if (applicableRules.length > 0) {
    const warnItems = applicableRules.map(rule => {
      const msg = currentLang === "en" ? rule.message_en : rule.message_es;
      const icon = rule.severity === "warning" ? "!" : "i";
      return `<div class="result-warn-item ${rule.severity}"><span class="warn-icon">${icon}</span><span>${escapeHtml(msg)}</span></div>`;
    }).join("");
    warningsHtml = `<div class="result-warnings"><h4>${escapeHtml(labels.warnings)}</h4>${warnItems}</div>`;
  }

  // Build confirm checklist
  const confirmItems = [
    translations.confirm_vehicle[currentLang],
    translations.confirm_driver[currentLang],
    translations.confirm_pickup[currentLang],
    translations.confirm_price[currentLang],
    translations.confirm_insurance[currentLang],
    translations.confirm_date[currentLang]
  ];
  const confirmHtml = `<div class="result-warnings"><h4>${escapeHtml(labels.confirm)}</h4>${confirmItems.map(item => `<div class="result-warn-item info"><span class="warn-icon">-</span><span>${escapeHtml(item)}</span></div>`).join("")}</div>`;

  resultContent.innerHTML = `
    <div class="result-meta">
      ${tripTypeHtml}
      <div class="result-meta-item">
        <strong>${escapeHtml(labels.route)}</strong>
        <span>${escapeHtml(formData.origin)} → ${escapeHtml(formData.destination)}</span>
      </div>
      <div class="result-meta-item">
        <strong>${escapeHtml(labels.vehicle)}</strong>
        <span>${escapeHtml(vehicleText)}</span>
      </div>
      <div class="result-meta-item">
        <strong>${escapeHtml(labels.time)}</strong>
        <span>${escapeHtml(timeText)}</span>
      </div>
      <div class="result-meta-item">
        <strong>${escapeHtml(labels.logistics)}</strong>
        <span>${escapeHtml(levelLabel)}</span>
      </div>
    </div>
    ${warningsHtml}
    ${confirmHtml}
    <div class="result-disclaimer">${escapeHtml(labels.disclaimer)}</div>
  `;

  // Build WhatsApp message and button
  const waMessage = buildWhatsAppMessage(formData, { route, rules: applicableRules });
  lastWhatsAppMessage = waMessage;
  if (waBtn) waBtn.href = buildWhatsAppUrl(waMessage);

  resultContainer.classList.remove("hidden");
  resultContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function getTripTypeLabel(value) {
  const keyMap = {
    "transfer_only": currentLang === "en" ? "I need a transfer" : "Necesito un traslado",
    "machu_picchu_booked": currentLang === "en" ? "I already booked Machu Picchu" : "Ya compré Machu Picchu",
    "package_booked": currentLang === "en" ? "I already booked a tour package" : "Ya compré un paquete turístico",
    "still_planning": currentLang === "en" ? "Still planning my itinerary" : "Aún estoy planificando mi itinerario",
    "not_sure": currentLang === "en" ? "Not sure yet" : "No estoy seguro todavía"
  };
  return keyMap[value] || value;
}

// ============================================
// Route data lookup
// ============================================

function getRouteData(origin, destination) {
  return routesData.find(r => r.origin === origin && r.destination === destination) || null;
}

// ============================================
// Rules engine
// ============================================

function applyRules(formData) {
  return rulesData.filter(rule => {
    return rule.conditions.some(condition => {
      const fieldValue = formData[condition.field];
      if (!fieldValue) return false;

      if (condition.field === "travelers" && condition.value.match(/^\d+$/)) {
        const numTravelers = parseInt(fieldValue, 10);
        return numTravelers >= parseInt(condition.value, 10);
      }

      if (condition.field === "time" && condition.value === "early") {
        const hour = parseInt(fieldValue.split(":")[0], 10);
        return hour < 6;
      }

      if (condition.field === "destination" && condition.value === "not-sure") {
        return fieldValue.toLowerCase().includes("not sure") || fieldValue === "";
      }

      return fieldValue === condition.value;
    });
  });
}

// ============================================
// WhatsApp message builder
// ============================================

function buildWhatsAppMessage(formData, context) {
  const isEn = currentLang === "en";
  const t = (en, es) => isEn ? en : es;

  const lines = [
    t("Hi, I used Cusco Travel Helper and I would like to request a private transfer quote.", "Hola, usé Cusco Travel Helper y quisiera solicitar una cotización de traslado privado."),
    "",
    t("Trip details:", "Detalles del viaje:")
  ];

  const fields = [];

  if (formData.trip_type) {
    const tripTypeLabel = getTripTypeLabel(formData.trip_type);
    fields.push([t("Trip type:", "Tipo de viaje:"), tripTypeLabel]);
  }

  fields.push(
    [t("Origin:", "Origen:"), formData.origin],
    [t("Destination:", "Destino:"), formData.destination],
    [t("Date:", "Fecha:"), formData.trip_date],
    [t("Time:", "Hora:"), formData.trip_time],
    [t("Travelers:", "Viajeros:"), formData.travelers],
    [t("Luggage:", "Equipaje:"), formData.luggage],
    [t("Vehicle preference:", "Vehículo preferido:"), formData.vehicle],
    [t("Stops:", "Paradas:"), formData.stops],
    [t("Pickup details:", "Detalles de recojo:"), formData.pickup],
    [t("Flight or train number:", "Número de vuelo o tren:"), formData.flight_number || t("Not specified", "No especificado")],
    [t("Main concern:", "Principal preocupación:"), formData.concern],
    [t("Additional notes:", "Notas adicionales:"), formData.notes || t("None", "Ninguna")]
  );

  fields.forEach(([label, value]) => {
    lines.push(`- ${label} ${value}`);
  });

  if (context.route) {
    lines.push("");
    lines.push(t("Route reference:", "Referencia de ruta:") + " " + (isEn ? context.route.name_en : context.route.name_es));
    lines.push(t("Estimated time:", "Tiempo estimado:") + " " + (isEn ? context.route.estimated_time_en : context.route.estimated_time_es));
  }

  lines.push("");
  lines.push(t("Please confirm availability, final price and vehicle details.", "Por favor, confirmar disponibilidad, precio final y detalles del vehículo."));

  return lines.join("\n");
}

function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

// ============================================
// Clipboard
// ============================================

function copyRequestToClipboard() {
  if (!lastWhatsAppMessage) return;
  navigator.clipboard.writeText(lastWhatsAppMessage).then(() => {
    const msg = currentLang === "en" ? "Request copied to clipboard." : "Solicitud copiada al portapapeles.";
    alert(msg);
  }).catch(() => {
    const msg = currentLang === "en" ? "Could not copy. Please copy manually." : "No se pudo copiar. Por favor copia manualmente.";
    alert(msg);
  });
}

// ============================================
// Reset form
// ============================================

function resetForm() {
  const form = document.getElementById("transfer-form");
  if (form) form.reset();

  const result = document.getElementById("quote-result");
  if (result) result.classList.add("hidden");

  lastWhatsAppMessage = "";
}

// ============================================
// Utility
// ============================================

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================
// Initialization
// ============================================

document.addEventListener("DOMContentLoaded", function() {
  // Detect saved language
  const savedLang = localStorage.getItem("cth-lang");
  if (savedLang === "es" || savedLang === "en") {
    currentLang = savedLang;
  }

  setLanguage(currentLang);
  loadData();
  initForm();

  // Save language changes
  const originalSetLanguage = setLanguage;
  setLanguage = function(lang) {
    originalSetLanguage(lang);
    localStorage.setItem("cth-lang", lang);
  };
});
