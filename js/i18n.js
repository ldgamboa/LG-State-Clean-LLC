/*
 * LG State Clean LLC — English / Spanish switcher
 * -----------------------------------------------------------------
 * How it works:
 *  - The HTML is written in English. Every translatable element has a
 *    data-i18n attribute (or data-i18n-attr for placeholder / aria-label / alt).
 *  - The ES object below maps the exact English text -> Spanish text.
 *  - To change a Spanish phrase, edit it here. To add new text to the site,
 *    add data-i18n to the element and add "English text": "Texto en español".
 *  - The chosen language is remembered in the visitor's browser (localStorage).
 */
(function () {
  "use strict";

  var ES = {
 "About Us": "Nosotros",
 "Back to Homepage": "Volver al inicio",
 "Contact": "Contacto",
 "Get a Free Quote": "Solicita tu cotización gratis",
 "Get in touch": "Contáctanos",
 "Home": "Inicio",
 "LG State Clean LLC. All rights reserved.": "LG State Clean LLC. Todos los derechos reservados.",
 "Looks like this page got a little too clean and disappeared. Let's get you back on track.": "Parece que esta página quedó tan limpia que desapareció. Te llevamos de vuelta al camino.",
 "Navigation": "Navegación",
 "Page Not Found": "Página no encontrada",
 "Privacy Policy": "Política de privacidad",
 "Professional cleaning, maintenance and property-improvement services for residential, commercial and post-construction sites across Utah.": "Servicios profesionales de limpieza, mantenimiento y mejoras de propiedades para sitios residenciales, comerciales y de postconstrucción en todo Utah.",
 "Proudly serving the state of Utah": "Con orgullo atendemos todo el estado de Utah",
 "Services": "Servicios",
 "Specialized Care": "Cuidado especializado",
 "Terms of Service": "Términos de servicio",
 "Google Business Profile": "Perfil de empresa en Google",
 "LG State Clean LLC logo": "Logo de LG State Clean LLC",
 "LG State Clean LLC — Home": "LG State Clean LLC — Inicio",
 "Open menu": "Abrir menú",
 "Primary": "Principal",
 "Language": "Idioma",
 "Alpine Pristine Quality.": "Calidad Alpine Pristine.",
 "At LG State Clean, we believe a clean space makes everyday life feel a little lighter. We are a local Utah team that treats every home, office and job site like our own, with care, honesty and attention to the details that matter to you. Whether it is your living room or a freshly finished construction site, our goal is simple: leave it spotless and make the whole experience easy and friendly, from the very first hello.": "En LG State Clean creemos que un espacio limpio hace que el día a día se sienta un poco más ligero. Somos un equipo local de Utah que trata cada casa, oficina y obra como si fuera propia, con cariño, honestidad y atención a los detalles que te importan. Ya sea tu sala o una obra recién terminada, nuestra meta es simple: dejarlo impecable y hacer que toda la experiencia sea fácil y cercana, desde el primer saludo.",
 "Background-Checked Staff": "Personal con verificación de antecedentes",
 "Background-checked": "Verificación de antecedentes",
 "Careful attention to detail for a genuinely flawless finish.": "Atención cuidadosa a cada detalle para un acabado realmente impecable.",
 "Corporate-ready": "Listos para empresas",
 "Elevating environments across Utah with precision, reliability, and an unwavering commitment to cleanliness.": "Elevamos los espacios en todo Utah con precisión, confiabilidad y un compromiso firme con la limpieza.",
 "Every member undergoes rigorous professional training and a comprehensive background check, so they can care for your space with precision and respect.": "Cada integrante recibe capacitación profesional rigurosa y una verificación completa de antecedentes, para cuidar tu espacio con precisión y respeto.",
 "Expertly trained staff delivering the highest standard of results.": "Personal capacitado por expertos que ofrece resultados del más alto nivel.",
 "Fully insured & vetted": "Asegurados y verificados",
 "Locally Owned in Utah": "Negocio local de Utah",
 "Locally owned": "Negocio local",
 "Meticulous": "Meticulosos",
 "Our Core Values": "Nuestros valores",
 "Our Mission": "Nuestra misión",
 "Our Team": "Nuestro equipo",
 "Pet & senior-safe": "Seguro para mascotas y adultos mayores",
 "Pet-Safe Guaranteed": "Seguro para mascotas, garantizado",
 "Professional": "Profesionales",
 "Reliable service you can count on, every single time.": "Un servicio confiable con el que puedes contar siempre.",
 "Structured, efficient solutions built for commercial spaces.": "Soluciones estructuradas y eficientes pensadas para espacios comerciales.",
 "The Standard of Excellence": "El estándar de excelencia",
 "Trustworthy": "De confianza",
 "(optional — select all that apply)": "(opcional — marca todos los que apliquen)",
 "(optional — type, number, any notes)": "(opcional — tipo, cantidad, notas)",
 "(optional)": "(opcional)",
 "Additional Notes": "Notas adicionales",
 "Afternoon": "Tarde",
 "Apartment / Condo": "Apartamento / Condominio",
 "Approx. Sq. Ft.": "Pies cuadrados aprox.",
 "Are your cleaning products safe for pets and children?": "¿Los productos de limpieza que usan son seguros para mascotas y niños?",
 "Basement": "Sótano",
 "Bathrooms": "Baños",
 "Bedrooms": "Habitaciones",
 "Bi-Weekly": "Cada dos semanas",
 "Carpet Deep Clean": "Limpieza profunda de alfombras",
 "Commercial Maintenance": "Mantenimiento comercial",
 "Contact Information": "Información de contacto",
 "Current Condition of the Space": "Estado actual del espacio",
 "Deep clean needed — hasn't been cleaned in a while": "Requiere limpieza profunda — hace tiempo que no se limpia",
 "Direct Contact": "Contacto directo",
 "Do you have pets at home?": "¿Tienes mascotas en casa?",
 "Do you service areas outside of Salt Lake City?": "¿Atienden zonas fuera de Salt Lake City?",
 "Don't fill this out if you're human:": "No llenes esto si eres una persona:",
 "Email": "Correo electrónico",
 "Evening": "Noche",
 "Extra Services": "Servicios adicionales",
 "Flexible": "Flexible",
 "Frequency": "Frecuencia",
 "Frequently Asked Questions": "Preguntas frecuentes",
 "Friend / Family Referral": "Recomendación de un amigo o familiar",
 "Full Name": "Nombre completo",
 "Garage": "Garaje",
 "Get in Touch with Our Cleaning Experts": "Habla con nuestros expertos en limpieza",
 "Google Search": "Búsqueda en Google",
 "Heavy-duty — very dirty, neglected, or post-renovation": "Trabajo pesado — muy sucio, descuidado o posterior a una remodelación",
 "House": "Casa",
 "How Did You Hear About Us?": "¿Cómo supiste de nosotros?",
 "How quickly can I schedule a cleaning?": "¿Qué tan pronto puedo agendar una limpieza?",
 "Inside Fridge": "Interior del refrigerador",
 "Inside Oven": "Interior del horno",
 "Interior Windows": "Ventanas interiores",
 "Laundry": "Lavado de ropa",
 "Light maintenance — generally tidy": "Mantenimiento ligero — en general ordenado",
 "Message": "Mensaje",
 "Monthly": "Mensual",
 "Morning": "Mañana",
 "Move-In / Move-Out": "Mudanza (entrada / salida)",
 "N/A": "N/D",
 "No": "No",
 "Office / Commercial Space": "Oficina / Espacio comercial",
 "One-Time Clean": "Limpieza única",
 "Other": "Otro",
 "Our dedicated team is ready to assist with any inquiries about residential or commercial services.": "Nuestro equipo está listo para resolver cualquier duda sobre servicios residenciales o comerciales.",
 "Pet Details": "Detalles de tus mascotas",
 "Phone": "Teléfono",
 "Post-Construction Cleanup": "Limpieza de postconstrucción",
 "Post-Construction Site": "Obra recién terminada",
 "Preferred Contact Method": "Método de contacto preferido",
 "Preferred Date": "Fecha preferida",
 "Preferred Time": "Horario preferido",
 "Property Details": "Detalles de la propiedad",
 "Property Type": "Tipo de propiedad",
 "Quick answers to help you understand our process.": "Respuestas rápidas para que conozcas cómo trabajamos.",
 "Repeat Customer": "Cliente frecuente",
 "Request a Quote": "Solicita una cotización",
 "Residential Cleaning": "Limpieza residencial",
 "Select": "Seleccionar",
 "Select an option": "Selecciona una opción",
 "Service Address": "Dirección del servicio",
 "Service Area": "Área de servicio",
 "Service Details": "Detalles del servicio",
 "Service Type": "Tipo de servicio",
 "Social Media": "Redes sociales",
 "Specialized Care (Pet/Senior)": "Cuidado especializado (mascotas / adultos mayores)",
 "Standard — normal everyday use": "Estándar — uso diario normal",
 "Studio": "Estudio",
 "Submit Request": "Enviar solicitud",
 "Text": "Mensaje de texto",
 "The more details you share, the more accurate your quote will be. This takes about 2 minutes.": "Mientras más detalles compartas, más precisa será tu cotización. Toma unos 2 minutos.",
 "Wall Washing": "Lavado de paredes",
 "We bring the crisp, reliable Alpine Pristine standard directly to your property. Reach out today for a meticulous approach to your cleaning needs.": "Llevamos el estándar Alpine Pristine, claro y confiable, directamente a tu propiedad. Escríbenos hoy y recibe un enfoque meticuloso para tus necesidades de limpieza.",
 "We proudly serve the entire state of Utah. Our primary hubs are the greater SLC and Utah County areas, with specialized teams available state-wide for larger commercial projects.": "Atendemos con orgullo todo el estado de Utah. Nuestros centros principales son el área metropolitana de Salt Lake City y el condado de Utah, con equipos especializados disponibles en todo el estado para proyectos comerciales más grandes.",
 "We typically require 48 hours' notice for new residential bookings and 72 hours for commercial site assessments. We do accommodate urgent requests based on current availability.": "Normalmente pedimos 48 horas de anticipación para nuevas reservas residenciales y 72 horas para evaluaciones de sitios comerciales. Atendemos solicitudes urgentes según la disponibilidad del momento.",
 "Weekly": "Semanal",
 "Yes": "Sí",
 "Yes. The Alpine Pristine standard uses highly effective, environmentally conscious, non-toxic cleaning agents that keep every occupant safe.": "Sí. El estándar Alpine Pristine usa productos de limpieza altamente efectivos, conscientes del medio ambiente y no tóxicos, que mantienen seguros a todos los ocupantes.",
 "Zip Code": "Código postal",
 "Map of Utah": "Mapa de Utah",
 "Tell us about your cleaning needs, access instructions, or anything else we should know...": "Cuéntanos qué necesitas limpiar, cómo acceder a la propiedad o cualquier otra cosa que debamos saber...",
 "e.g. 1 dog, friendly, kept in the backyard": "ej. 1 perro, amigable, se queda en el patio trasero",
 "e.g. 1800": "ej. 1800",
 "Contact page": "página de contacto",
 "Prefer to browse first? See the full form on our": "¿Prefieres explorar primero? Consulta el formulario completo en nuestra",
 "100% Pet-Safe & Non-Toxic Products": "Productos 100 % seguros para mascotas y no tóxicos",
 "A pristine environment is crucial for health and comfort. We deliver respectful, gentle, and meticulous cleaning designed for senior living spaces.": "Un ambiente impecable es clave para la salud y la comodidad. Ofrecemos una limpieza respetuosa, delicada y meticulosa pensada para residencias de adultos mayores.",
 "Book Service": "Reservar servicio",
 "Care Above the Rest": "Un cuidado por encima del resto",
 "Comprehensive Cleaning Solutions": "Soluciones de limpieza integrales",
 "Dedicated, respectful care for elderly living spaces.": "Cuidado dedicado y respetuoso para los espacios de adultos mayores.",
 "Deep allergen and dander removal": "Eliminación profunda de alérgenos y caspa de mascotas",
 "Delivering pristine spaces across the state — from move-in-ready homes to spotless commercial floors, with pet-friendly and senior-safe care built in.": "Entregamos espacios impecables en todo el estado, desde casas listas para estrenar hasta pisos comerciales relucientes, con un cuidado amigable con mascotas y seguro para adultos mayores.",
 "Dust-free air quality focus": "Enfoque en un aire libre de polvo",
 "Expert care for every environment, ensuring a flawless finish.": "Cuidado experto para cada ambiente, con un acabado impecable.",
 "Explore Services": "Ver servicios",
 "High-touch area sterilization": "Esterilización de superficies de alto contacto",
 "Learn More": "Más información",
 "Meticulous home and apartment care tailored to your living space.": "Limpieza meticulosa de casas y apartamentos, adaptada a tu espacio.",
 "Non-toxic surface sanitization": "Sanitización de superficies con productos no tóxicos",
 "Odor neutralization without harsh chemicals": "Neutralización de olores sin químicos agresivos",
 "Office & retail spaces maintained to the highest corporate standard.": "Oficinas y locales comerciales mantenidos con el más alto estándar corporativo.",
 "Our Purpose": "Nuestro propósito",
 "Pet-Friendly Cleaning": "Limpieza amigable con mascotas",
 "Pet-Friendly Practices": "Prácticas amigables con mascotas",
 "Post-Construction": "Postconstrucción",
 "Ready for a spotless space? Tell us what you need and a service specialist will follow up with a tailored estimate.": "¿Listo para un espacio impecable? Cuéntanos qué necesitas y un especialista te responderá con un presupuesto a tu medida.",
 "Respectful, Gentle & Meticulous Sanitization": "Sanitización respetuosa, delicada y meticulosa",
 "Safe, non-toxic environments for your furry friends.": "Ambientes seguros y no tóxicos para tus amigos peludos.",
 "Senior Living Care": "Cuidado para residencias de adultos mayores",
 "Slip-resistant floor treatments": "Tratamientos antideslizantes para pisos",
 "Specialized": "Especializado",
 "Start My Free Quote": "Comenzar mi cotización gratis",
 "The purpose of LG State Clean LLC is to provide professional cleaning, maintenance, and property-improvement services for residential, commercial, corporate, and post-construction sites — and to engage in any other lawful business activity related to these sectors.": "El propósito de LG State Clean LLC es ofrecer servicios profesionales de limpieza, mantenimiento y mejoras de propiedades para sitios residenciales, comerciales, corporativos y de postconstrucción, y desarrollar cualquier otra actividad comercial lícita relacionada con estos sectores.",
 "Thorough post-build dust removal and detail cleaning for new developments.": "Eliminación minuciosa del polvo de obra y limpieza de detalles para nuevas construcciones.",
 "Utah's Premier Choice": "La mejor opción de Utah",
 "Utah's Trusted Property Maintenance & Professional Cleaning": "Mantenimiento de propiedades y limpieza profesional de confianza en Utah",
 "We understand pets are family. Our protocols use solutions that are tough on dirt and allergens, but completely safe for paws and sensitive noses.": "Sabemos que las mascotas son parte de la familia. Nuestros protocolos usan soluciones fuertes contra la suciedad y los alérgenos, pero completamente seguras para patitas y narices sensibles.",
 "100% Pet-Safe": "100 % seguro para mascotas",
 "A home is a sanctuary for everyone, including pets and elderly family members. Our specialized care relies on non-toxic, pet-safe products combined with a respectful, meticulous approach.": "El hogar es un refugio para todos, incluidas las mascotas y los adultos mayores de la familia. Nuestro cuidado especializado se basa en productos no tóxicos y seguros para mascotas, junto con un trato respetuoso y meticuloso.",
 "Book a Service": "Reservar un servicio",
 "Contact Us": "Contáctanos",
 "Deep cleaning for apartments & estates": "Limpieza profunda para apartamentos y residencias",
 "Elevating standards with meticulous attention to detail — crisp, reliable, high-contrast cleaning solutions for residential and commercial spaces.": "Elevamos los estándares con atención meticulosa al detalle: soluciones de limpieza claras, confiables y de alto contraste para espacios residenciales y comerciales.",
 "Excellence in Utah": "Excelencia en Utah",
 "Experience a fresh start in your own home. Our personalized residential services cater to apartments and houses alike, restoring every corner to a state of absolute order.": "Vive un nuevo comienzo en tu propio hogar. Nuestros servicios residenciales personalizados atienden tanto apartamentos como casas y devuelven cada rincón a un orden absoluto.",
 "Experience the precision and clarity LG State Clean is known for. Get a free, customized quote for your residential or commercial space today.": "Conoce la precisión y claridad por las que LG State Clean es reconocido. Solicita hoy una cotización gratuita y personalizada para tu espacio residencial o comercial.",
 "Final walkthrough-ready finish": "Acabado listo para la inspección final",
 "Fine-dust and debris removal": "Eliminación de polvo fino y escombros",
 "Glass, floors & high-touch surface care": "Cuidado de vidrios, pisos y superficies de alto contacto",
 "Meticulous kitchen and bathroom sanitization": "Sanitización meticulosa de cocina y baños",
 "Nightly, weekly or custom schedules": "Horarios nocturnos, semanales o personalizados",
 "Non-toxic, hypoallergenic cleaning agents": "Productos de limpieza no tóxicos e hipoalergénicos",
 "Our Professional Services": "Nuestros servicios profesionales",
 "Pet-Friendly & Senior Care": "Cuidado para mascotas y adultos mayores",
 "Ready for a Fresh Start?": "¿Listo para un nuevo comienzo?",
 "Request a Walkthrough": "Solicitar una visita de evaluación",
 "Respectful, gentle & meticulous sanitization": "Sanitización respetuosa, delicada y meticulosa",
 "Schedule Cleanup": "Agendar limpieza",
 "Scheduled recurring maintenance": "Mantenimiento recurrente programado",
 "See Specialized Care": "Ver cuidado especializado",
 "Structured, dependable janitorial programs for offices, retail floors and corporate lobbies — scheduled around your business hours.": "Programas de limpieza estructurados y confiables para oficinas, locales comerciales y lobbies corporativos, programados según tu horario de trabajo.",
 "Thorough post-build dust removal and detail cleaning that gets new developments truly move-in ready — inside cabinets, on baseboards, and everywhere in between.": "Eliminación minuciosa del polvo de obra y limpieza de detalles que deja las nuevas construcciones realmente listas para habitar: dentro de los gabinetes, en los zócalos y en cada rincón.",
 "Trained, background-checked crews": "Equipos capacitados y con verificación de antecedentes",
 "Window, fixture & hardware detailing": "Detallado de ventanas, accesorios y herrajes",
 "Advanced HEPA-filtration vacuums capture 99.9% of pet dander, hair and microscopic allergens from upholstery and carpets.": "Aspiradoras avanzadas con filtro HEPA capturan el 99.9 % de la caspa, el pelo y los alérgenos microscópicos de mascotas en tapicería y alfombras.",
 "Book Specialized Care": "Reservar cuidado especializado",
 "Deep Allergen Removal": "Eliminación profunda de alérgenos",
 "Expert Care for Every Member of the Family": "Cuidado experto para cada integrante de la familia",
 "Floors are your pet's domain. We use pH-neutral, residue-free hard-surface cleaners that leave no toxic film behind.": "Los pisos son el territorio de tu mascota. Usamos limpiadores de pH neutro y sin residuos para superficies duras, que no dejan ninguna película tóxica.",
 "Fully Insured & Vetted": "Asegurados y verificados",
 "Non-Toxic Sanitization": "Sanitización no tóxica",
 "Odor neutralization without harsh chemicals, and deep allergen and dander removal — a healthier home for pets, kids and elders alike.": "Neutralización de olores sin químicos agresivos y eliminación profunda de alérgenos y caspa: un hogar más saludable para mascotas, niños y adultos mayores por igual.",
 "Pets are family, and we treat their space with the same empathy and care we would want for our own. We choose non-toxic products with pets in mind and take a gentle, respectful approach to their surroundings.": "Las mascotas son parte de la familia, y tratamos su espacio con la misma empatía y cariño que querríamos para el nuestro. Elegimos productos no tóxicos pensando en ellas y cuidamos su entorno con un trato delicado y respetuoso.",
 "Respectful & Gentle Care": "Cuidado respetuoso y delicado",
 "Respectful, gentle, and meticulous cleaning designed for the unique needs of senior living spaces — because a pristine environment supports health and comfort.": "Limpieza respetuosa, delicada y meticulosa pensada para las necesidades únicas de las residencias de adultos mayores, porque un ambiente impecable favorece la salud y la comodidad.",
 "Safe Solutions for Paws": "Soluciones seguras para patitas",
 "Specialized Services": "Servicios especializados",
 "Tailored cleaning protocols for pet owners and senior living environments — safe, respectful, and meticulously detailed.": "Protocolos de limpieza a la medida para dueños de mascotas y residencias de adultos mayores: seguros, respetuosos y meticulosos.",
 "We Love Animals": "Amamos a los animales",
 "Your pets are family. Our specialized protocols keep your home pristine without compromising the health and safety of your furry companions.": "Tus mascotas son familia. Nuestros protocolos especializados mantienen tu hogar impecable sin comprometer la salud y la seguridad de tus compañeros peludos.",
 "A senior woman relaxing at home with her golden retriever in a bright, spotless living room": "Una mujer mayor descansando en casa con su golden retriever en una sala luminosa e impecable",
 "Thank You!": "¡Gracias!",
 "Your request has been received. A service specialist will follow up shortly with your free quote.": "Recibimos tu solicitud. Un especialista te contactará pronto con tu cotización gratis.",
 "Sending…": "Enviando…",
 "Thank you! Your request has been sent — we'll be in touch shortly.": "¡Gracias! Tu solicitud fue enviada; nos pondremos en contacto contigo pronto.",
 "Page Not Found | LG State Clean LLC": "Página no encontrada | LG State Clean LLC",
 "The page you're looking for can't be found. Head back to the LG State Clean LLC homepage.": "No encontramos la página que buscas. Vuelve a la página de inicio de LG State Clean LLC.",
 "About Us | LG State Clean LLC": "Nosotros | LG State Clean LLC",
 "Locally owned in Utah, LG State Clean LLC pairs trustworthy, background-checked staff with a meticulous, high-contrast standard of cleanliness.": "Negocio local de Utah, LG State Clean LLC combina personal de confianza con verificación de antecedentes y un estándar de limpieza meticuloso y de alto contraste.",
 "Contact Us | LG State Clean LLC": "Contáctanos | LG State Clean LLC",
 "Request a free quote from LG State Clean LLC. Call, email, or fill out the form and a service specialist will respond promptly.": "Solicita una cotización gratis a LG State Clean LLC. Llama, escribe o llena el formulario y un especialista te responderá pronto.",
 "LG State Clean LLC | Professional Cleaning & Property Maintenance in Utah": "LG State Clean LLC | Limpieza profesional y mantenimiento de propiedades en Utah",
 "Utah's trusted cleaning and property-maintenance company. Residential, commercial and post-construction cleaning, plus pet-friendly and senior-living care. Get a free quote today.": "La empresa de limpieza y mantenimiento de propiedades de confianza en Utah. Limpieza residencial, comercial y de postconstrucción, además de cuidado amigable con mascotas y para residencias de adultos mayores. Solicita tu cotización gratis hoy.",
 "Our Services | LG State Clean LLC": "Nuestros servicios | LG State Clean LLC",
 "Residential, commercial, post-construction, pet-friendly and senior-care cleaning services across Utah — meticulous, reliable and non-toxic.": "Servicios de limpieza residencial, comercial, de postconstrucción, amigable con mascotas y para adultos mayores en todo Utah: meticulosos, confiables y no tóxicos.",
 "Specialized Care | Pet-Friendly & Senior Living Cleaning — LG State Clean LLC": "Cuidado especializado | Limpieza para mascotas y adultos mayores — LG State Clean LLC",
 "Tailored, non-toxic cleaning protocols for pet owners and senior living environments across Utah. Safe, respectful, and meticulously detailed.": "Protocolos de limpieza no tóxicos y a la medida para dueños de mascotas y residencias de adultos mayores en todo Utah. Seguros, respetuosos y meticulosos.",
 "Thank You | LG State Clean LLC": "Gracias | LG State Clean LLC",
 "Thanks for reaching out to LG State Clean LLC — we'll be in touch shortly.": "Gracias por escribir a LG State Clean LLC; nos pondremos en contacto pronto."
};

  var STORE_KEY = "lg-lang";
  var lang = "en";
  try {
    var saved = localStorage.getItem(STORE_KEY);
    if (saved === "es" || saved === "en") lang = saved;
  } catch (e) { /* storage may be blocked; default to English */ }

  function norm(s) { return String(s).replace(/\s+/g, " ").trim(); }

  // Translate an English string using the current language.
  function t(en) {
    var key = norm(en);
    return lang === "es" && ES[key] ? ES[key] : en;
  }

  function applyLang() {
    document.documentElement.setAttribute("lang", lang);

    // Visible text
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!el.hasAttribute("data-en")) el.setAttribute("data-en", norm(el.textContent));
      var en = el.getAttribute("data-en");
      el.textContent = lang === "es" && ES[en] ? ES[en] : en;
    });

    // Attributes (placeholder, aria-label, title, alt)
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (attr) {
        attr = attr.trim();
        if (!attr) return;
        var store = "data-en-" + attr;
        if (!el.hasAttribute(store)) el.setAttribute(store, norm(el.getAttribute(attr) || ""));
        var en = el.getAttribute(store);
        el.setAttribute(attr, lang === "es" && ES[en] ? ES[en] : en);
      });
    });

    // <title> and meta tags (search / social previews)
    if (!document.documentElement.hasAttribute("data-en-title")) {
      document.documentElement.setAttribute("data-en-title", norm(document.title));
    }
    var enTitle = document.documentElement.getAttribute("data-en-title");
    document.title = lang === "es" && ES[enTitle] ? ES[enTitle] : enTitle;

    document.querySelectorAll(
      'meta[name="description"], meta[property="og:title"], meta[property="og:description"]'
    ).forEach(function (m) {
      if (!m.hasAttribute("data-en")) m.setAttribute("data-en", norm(m.getAttribute("content") || ""));
      var en = m.getAttribute("data-en");
      m.setAttribute("content", lang === "es" && ES[en] ? ES[en] : en);
    });

    // Toggle buttons state
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
  }

  function setLang(next) {
    if (next !== "en" && next !== "es") return;
    lang = next;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* ignore */ }
    applyLang();
    document.dispatchEvent(new CustomEvent("lgchange", { detail: { lang: lang } }));
  }

  // Set text on an element from JavaScript and keep it translatable.
  function setText(el, en) {
    el.setAttribute("data-i18n", "");
    el.setAttribute("data-en", norm(en));
    el.textContent = t(en);
  }

  // Public helpers used by main.js
  window.LG = { t: t, setText: setText, setLang: setLang, getLang: function () { return lang; } };

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.getAttribute("data-lang")); });
  });

  applyLang();
})();
