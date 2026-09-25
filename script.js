const pageAudience = document.body.dataset.audience === "b2c" ? "b2c" : "b2b";

let savedLang = "es";
try { const s = localStorage.getItem("delefoco-lang"); if (s === "es" || s === "en") savedLang = s; } catch(e) {}

const state = {
  lang: savedLang,
  mode: pageAudience
};

// Each HTML file is independent and starts in dark mode.
document.body.classList.remove("theme-light");
document.body.classList.add(`mode-${state.mode}`, "theme-dark");

const copy = {
    es: {
    b2b: {
      heroTitle: "El lugar correcto<br><span>para cada historia.</span>",
      heroText: "Encontramos y aseguramos la locación ideal para tu producción, coordinando scouting, permisos y viabilidad técnica.",
      heroPrimary: "Solicitar locación <span>→</span>",
      heroSecondary: "Ver catálogo",
      servicesTitle: "Locaciones sin complicaciones.",
      servicesIntro: "Unimos búsqueda, gestión y coordinación para que el espacio elegido funcione visual, técnica y legalmente.",
      audienceTitle: "¿Tenés un espacio con potencial audiovisual?",
      audienceText: "Registrá tu propiedad y hacela parte de una red de locaciones para producciones audiovisuales.",
      audienceCta: "Registrar mi locación →",
      contactTitle: "Contanos qué necesitás.",
      contactText: "Completá el brief y te contactaremos para revisar opciones de locación.",
      formButton: "Enviar solicitud <span>→</span>"
    },
    b2c: {
      heroTitle: "¿Tenés un espacio con<br><span>potencial audiovisual?</span>",
      heroText: "Registrá tu propiedad, estudio, residencia o espacio y conectalo con producciones que buscan nuevas locaciones.",
      heroPrimary: "Registrar mi locación <span>→</span>",
      heroSecondary: "Ver catálogo",
      servicesTitle: "Tu espacio puede contar una historia.",
      servicesIntro: "Te acompañamos en el registro y te explicamos cómo preparar tu locación para formar parte de la red.",
      audienceTitle: "Convertí tu espacio en una oportunidad.",
      audienceText: "Compartí información, fotos y disponibilidad para que podamos valorar tu locación.",
      audienceCta: "Quiero registrar mi espacio →",
      contactTitle: "Registrá tu locación.",
      contactText: "Dejanos tus datos y una descripción del espacio. Te contactaremos con los siguientes pasos.",
      formButton: "Registrar locación <span>→</span>"
    
    }
  },
  en: {
    b2b: {
      heroTitle: "The right place<br><span>for every story.</span>",
      heroText: "We find and secure the right location for your production, coordinating scouting, permits and technical feasibility.",
      heroPrimary: "Request a location <span>→</span>",
      heroSecondary: "View catalog",
      servicesTitle: "Locations without the hassle.",
      servicesIntro: "We combine search, management and coordination so your chosen space works visually, technically and legally.",
      audienceTitle: "Do you have a space with audiovisual potential?",
      audienceText: "Register your property and make it part of a location network for audiovisual productions.",
      audienceCta: "Register my location →",
      contactTitle: "Tell us what you need.",
      contactText: "Complete the brief and we will contact you to review location options.",
      formButton: "Send request <span>→</span>"
    },
    b2c: {
      heroTitle: "Do you have a space with<br><span>audiovisual potential?</span>",
      heroText: "Register your property, studio, residence or space and connect it with productions looking for new locations.",
      heroPrimary: "Register my location <span>→</span>",
      heroSecondary: "View catalog",
      servicesTitle: "Your space can tell a story.",
      servicesIntro: "We guide you through registration and explain how to prepare your location to join the network.",
      audienceTitle: "Turn your space into an opportunity.",
      audienceText: "Share information, photos and availability so we can review your location.",
      audienceCta: "I want to register my space →",
      contactTitle: "Register your location.",
      contactText: "Leave your details and a description of the space. We will contact you with the next steps.",
      formButton: "Register location <span>→</span>"
    }
  }

};

const common = {
  es: {
    navServices:"Servicios",navCatalog:"Locaciones",navProcess:"Proceso",navContact:"Contacto",headerCta:"Hablar con un asesor",
    modeB2B:"Contratar Servicios",modeB2C:"Quiero ser parte",audienceLabel:"Audiencia",languageLabel:"Idioma",
    heroMeta1:"Scouting",heroMeta2:"Permisos",heroMeta3:"Coordinación",
    service1Title:"Scouting de locaciones",service1Text:"Buscamos espacios que respondan al concepto visual y a las necesidades técnicas del proyecto.",
    service2Title:"Permisos de filmación",service2Text:"Coordinamos autorizaciones necesarias ante entidades públicas y privadas.",
    service3Title:"Propietarios y autoridades",service3Text:"Facilitamos acuerdos claros para el uso legal y eficiente de las locaciones.",
    service4Title:"Asesoría técnica",service4Text:"Evaluamos accesos, restricciones y viabilidad para reducir sorpresas durante el rodaje.",
    catalogEyebrow:"CATÁLOGO",
    location1Title:"Casa antigua de madera en San José",location1Cta:"Ver locación →",
    location2Title:"Playas de Guanacaste",location2Cta:"Ver locación →",
    location3Title:"Caño Negro Wetlands",location3Cta:"Ver locación →",
    location4Title:"Casa moderna en San José",location4Cta:"Ver locación →",
    location5Title:"Casa Siglo XIX",location5Cta:"Ver locación →",
    location6Title:"Casa en Lourdes",location6Cta:"Ver locación →",
    processEyebrow:"CÓMO FUNCIONA",step1Text:"Nos contás qué necesitás: tipo de producción, fechas, región y características.",
    step2Text:"Filtramos y proponemos espacios según el concepto y la viabilidad.",
    step3Text:"Coordinamos propietarios, permisos y condiciones de uso.",
    step4Text:"Llegás a una locación preparada para trabajar.",
    audienceEyebrow:"DELEFOCO",contactEyebrow:"HABLEMOS",
    catsEyebrow:"COMUNIDAD AUDIOVISUAL",catsTitle:"Explorá el mundo audiovisual.",catsIntro:"Contenido, formación y recursos de la comunidad deleFOCO para cada área de la producción.",catActing:"Actuación",catFilm:"Cine",catScript:"Guion",catProduction:"Producción",
    placeholderName:"Tu nombre",placeholderLocation:"Ej. casa, playa, urbano...",placeholderBudget:"Opcional",
    placeholderMessage:"Contanos sobre el proyecto...",
    optionAdvertising:"Publicidad",optionFilmTV:"Cine / TV",optionPhotography:"Fotografía",optionCorporate:"Video corporativo",optionOther:"Otro",
    footerCommunity:"Comunidad Audiovisual",footerLocation:"UBICACIÓN",footerContact:"CONTACTO",footerImportant:"IMPORTANTE",
    footerUs:"Nosotros",footerMagazine:"Revista",footerBillboard:"Cartelera",footerSchool:"Escuela",footerCasting:"Casting",
    footerCommunityLink:"Comunidad",footerServices:"Servicios",footerMemberships:"Membresías",footerCRM:"CRM para Audiovisuales",
    footerBottom:"© 2026 deleFOCO · Comunidad Audiovisual",
    footerSocialTitle:"Conecte con la comunidad audiovisual",footerFollow:"Síganos",footerOnFacebook:"en Facebook",footerOnInstagram:"en Instagram",footerOnTwitter:"en Twitter",footerWriteUs:"Escríbanos",footerOnWhatsApp:"en WhatsApp",backToTop:"Volver arriba",audienceActive:"Audiencia activa",themeDark:"Oscuro",themeLight:"Claro",placeholderEmail:"tu@email.com",
    chatOpen:"Abrir asistente",chatClose:"Cerrar",quickAd:"Publicidad",quickRegister:"Registrar",quickScouting:"Scouting",
    modalEyebrow:"LOCACIÓN",modalTitle:"Locación",
    marqueeLocations:"LOCACIONES",step1Title:"Brief",step2Title:"Scouting",step3Title:"Gestión",step4Title:"Rodaje",
    carouselLabel:"Locaciones destacadas",carouselPrev:"Anterior",carouselNext:"Siguiente",carouselDots:"Seleccionar imagen",carouselImage:"Imagen",
    audienceLogoLabel:"Ver locaciones en deleFOCO",
    pageTitle:"Locaciones para Particulares | deleFOCO",
    pageDescription:"Registrá tu espacio como locación audiovisual en la red de deleFOCO: residencias, estudios, hoteles y otros lugares para producciones en Costa Rica y Centroamérica.",
    waGreeting:"Hola, quiero enviar una solicitud de locación:",
    waOpened:"Solicitud lista. Se abrió WhatsApp en una nueva pestaña.",
    waBlocked:"El navegador bloqueó la ventana de WhatsApp. Permití ventanas emergentes e intentá de nuevo.",
    transitionUpdating:"Actualizando contenido para",
    heroEyebrow:"LOCACIONES · COSTA RICA",trustYears:"años impulsando el audiovisual",trustCosta:"Costa Rica y Centroamérica como destino de producción",trustSupport:"acompañamiento de locación",
    servicesEyebrow:"LO QUE HACEMOS",catalogTitle:"Espacios para contar historias.",catalogIntro:"Explorá por tipo de locación y encontrá referencias para tu próximo proyecto.",
    filterAll:"Todas",filterResidential:"Residencial",filterBeaches:"Playas",filterMountains:"Montañas",filterHotels:"Hoteles",
    processTitle:"De la idea al rodaje.",processIntro:"Un proceso claro para llegar al espacio adecuado.",
    footerText:"Comunidad audiovisual · San José, Costa Rica",
    labelName:"Nombre",labelEmail:"Correo",labelProject:"Tipo de producción",labelLocation:"Locación buscada",labelDate:"Fecha",labelBudget:"Presupuesto aproximado",labelMessage:"Brief",
    chatSubtitle:"Asistente de locaciones",chatPlaceholder:"Escribí tu pregunta...",select:"Seleccioná una opción",
    bot:"¡Hola! Soy el asistente de locaciones de deleFOCO. Puedo orientarte sobre scouting, permisos, registro de espacios y el proceso de solicitud.",
    errors:"Completá los campos obligatorios antes de enviar.",
    success:"Solicitud preparada correctamente. En una integración real, este formulario puede enviarse a tu CRM o correo.",
    modalText:"Esta ficha es una referencia del catálogo. Para confirmar disponibilidad, condiciones, permisos y precio, enviá una solicitud.",
    modalCta:"Solicitar esta locación →"
  },
  en: {
    navServices:"Services",navCatalog:"Locations",navProcess:"Process",navContact:"Contact",headerCta:"Talk to an advisor",
    modeB2B:"Businesses",modeB2C:"Individuals",audienceLabel:"Audience",languageLabel:"Language",
    heroMeta1:"Scouting",heroMeta2:"Permits",heroMeta3:"Coordination",
    service1Title:"Location scouting",service1Text:"We find spaces that match the project's visual concept and technical requirements.",
    service2Title:"Filming permits",service2Text:"We coordinate the necessary authorizations with public and private entities.",
    service3Title:"Owners and authorities",service3Text:"We facilitate clear agreements for the legal and efficient use of locations.",
    service4Title:"Technical consulting",service4Text:"We assess access, restrictions and feasibility to reduce surprises during the shoot.",
    catalogEyebrow:"CATALOG",
    location1Title:"Old wooden house in San José",location1Cta:"View location →",
    location2Title:"Guanacaste beaches",location2Cta:"View location →",
    location3Title:"Caño Negro Wetlands",location3Cta:"View location →",
    location4Title:"Modern house in San José",location4Cta:"View location →",
    location5Title:"19th-Century House",location5Cta:"View location →",
    location6Title:"House in Lourdes",location6Cta:"View location →",
    processEyebrow:"HOW IT WORKS",step1Text:"Tell us what you need: production type, dates, region and requirements.",
    step2Text:"We filter and propose spaces based on the concept and feasibility.",
    step3Text:"We coordinate owners, permits and terms of use.",
    step4Text:"You arrive at a location prepared for the shoot.",
    audienceEyebrow:"DELEFOCO",contactEyebrow:"LET'S TALK",
    catsEyebrow:"AUDIOVISUAL COMMUNITY",catsTitle:"Explore the audiovisual world.",catsIntro:"Content, training and resources from the deleFOCO community for every area of production.",catActing:"Acting",catFilm:"Film",catScript:"Screenwriting",catProduction:"Production",
    placeholderName:"Your name",placeholderLocation:"E.g. house, beach, urban...",placeholderBudget:"Optional",
    placeholderMessage:"Tell us about the project...",
    optionAdvertising:"Advertising",optionFilmTV:"Film / TV",optionPhotography:"Photography",optionCorporate:"Corporate video",optionOther:"Other",
    footerCommunity:"Audiovisual Community",footerLocation:"LOCATION",footerContact:"CONTACT",footerImportant:"IMPORTANT",
    footerUs:"About us",footerMagazine:"Magazine",footerBillboard:"Billboard",footerSchool:"School",footerCasting:"Casting",
    footerCommunityLink:"Community",footerServices:"Services",footerMemberships:"Memberships",footerCRM:"CRM for Audiovisuals",
    footerBottom:"© 2026 deleFOCO · Audiovisual Community",
    footerSocialTitle:"Connect with the audiovisual community",footerFollow:"Follow us",footerOnFacebook:"on Facebook",footerOnInstagram:"on Instagram",footerOnTwitter:"on Twitter",footerWriteUs:"Message us",footerOnWhatsApp:"on WhatsApp",backToTop:"Back to top",audienceActive:"Active audience",themeDark:"Dark",themeLight:"Light",placeholderEmail:"you@email.com",
    chatOpen:"Open assistant",chatClose:"Close",quickAd:"Advertising",quickRegister:"Register",quickScouting:"Scouting",
    modalEyebrow:"LOCATION",modalTitle:"Location",
    marqueeLocations:"LOCATIONS",step1Title:"Brief",step2Title:"Scouting",step3Title:"Management",step4Title:"Shoot",
    carouselLabel:"Featured locations",carouselPrev:"Previous",carouselNext:"Next",carouselDots:"Select image",carouselImage:"Image",
    audienceLogoLabel:"See locations on deleFOCO",
    pageTitle:"Locations for Individuals | deleFOCO",
    pageDescription:"Register your space as an audiovisual location in the deleFOCO network: homes, studios, hotels and other places for productions in Costa Rica and Central America.",
    waGreeting:"Hello, I would like to send a location request:",
    waOpened:"Request ready. WhatsApp was opened in a new tab.",
    waBlocked:"Your browser blocked the WhatsApp window. Allow pop-ups and try again.",
    transitionUpdating:"Updating content for",
    heroEyebrow:"LOCATIONS · COSTA RICA",trustYears:"years supporting audiovisual production",trustCosta:"Costa Rica and Central America as a production destination",trustSupport:"location support",
    servicesEyebrow:"WHAT WE DO",catalogTitle:"Spaces made for stories.",catalogIntro:"Explore by location type and find references for your next project.",
    filterAll:"All",filterResidential:"Residential",filterBeaches:"Beaches",filterMountains:"Mountains",filterHotels:"Hotels",
    processTitle:"From idea to shoot.",processIntro:"A clear process to reach the right space.",
    footerText:"Audiovisual community · San José, Costa Rica",
    labelName:"Name",labelEmail:"Email",labelProject:"Production type",labelLocation:"Location needed",labelDate:"Date",labelBudget:"Approximate budget",labelMessage:"Brief",
    chatSubtitle:"Location assistant",chatPlaceholder:"Type your question...",select:"Select an option",
    bot:"Hi! I’m the deleFOCO location assistant. I can guide you on scouting, permits, space registration and the request process.",
    errors:"Please complete the required fields before sending.",
    success:"Request prepared successfully. In a real integration, this form can connect to your CRM or email.",
    modalText:"This card is a catalog reference. To confirm availability, terms, permits and price, send a request.",
    modalCta:"Request this location →"
  }
};

function setText(id, value, html=false){
  const el=document.getElementById(id);
  if(!el)return;
  html ? el.innerHTML=value : el.textContent=value;
}
const colorToggle=document.getElementById("colorToggle");

function updateThemeToggle(){
  if(!colorToggle) return;
  const isDark=document.body.classList.contains("theme-dark");
  const text=colorToggle.querySelector(".color-toggle-text");
  const icon=colorToggle.querySelector(".color-toggle-icon");
  const label=isDark ? common[state.lang].themeLight : common[state.lang].themeDark;
  if(text) text.textContent=label;
  if(icon) icon.textContent=isDark ? "☀" : "☾";
  colorToggle.setAttribute("aria-label",label);
  colorToggle.setAttribute("title",label);
  colorToggle.setAttribute("aria-pressed",String(isDark));
}

colorToggle?.addEventListener("click",()=>{
  const isDark=document.body.classList.toggle("theme-dark");
  document.body.classList.toggle("theme-light",!isDark);
  updateThemeToggle();
});

function applyLanguage(){
  const commonText=common[state.lang];
  document.documentElement.lang=state.lang;
  document.title=commonText.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content",commonText.pageDescription);
  document.querySelectorAll(".lang-btn").forEach(b=>{
    const on=b.dataset.lang===state.lang;
    b.classList.toggle("active",on);
    b.setAttribute("aria-pressed",String(on));
  });

  // Textos, HTML, placeholders, aria-labels y títulos declarados con data-i18n*
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(commonText[key] !== undefined) el.textContent=commonText[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{
    const key=el.dataset.i18nHtml;
    if(commonText[key] !== undefined) el.innerHTML=commonText[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key=el.dataset.i18nPlaceholder;
    if(commonText[key] !== undefined) el.placeholder=commonText[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el=>{
    const key=el.dataset.i18nAria;
    if(commonText[key] !== undefined) el.setAttribute("aria-label",commonText[key]);
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el=>{
    const key=el.dataset.i18nTitle;
    if(commonText[key] !== undefined) el.setAttribute("title",commonText[key]);
  });
  document.querySelectorAll("[data-image-n]").forEach(el=>{
    el.setAttribute("aria-label",`${commonText.carouselImage} ${el.dataset.imageN}`);
  });
  document.querySelectorAll(".to-top").forEach(el=>el.setAttribute("aria-label",commonText.backToTop));

  document.querySelectorAll(".mode-btn").forEach(b=>{
    b.textContent = b.dataset.mode==="b2b" ? commonText.modeB2B : commonText.modeB2C;
  });

  // Tarjetas del catálogo: el nombre se actualiza también en data-location (modal)
  document.querySelectorAll(".location-card .text-btn").forEach(a=>{
    const h3=a.closest(".location-card")?.querySelector("h3");
    if(h3) a.dataset.location=h3.textContent;
  });

  // Opciones del select (los value son estables: advertising, filmtv...)
  const projectOptions=document.querySelectorAll('select[name="project"] option');
  ["select","optionAdvertising","optionFilmTV","optionPhotography","optionCorporate","optionOther"].forEach((key,i)=>{
    if(projectOptions[i]) projectOptions[i].textContent=commonText[key];
  });

  [
    ["service1Title","service1Title"],["service1Text","service1Text"],["service2Title","service2Title"],["service2Text","service2Text"],
    ["service3Title","service3Title"],["service3Text","service3Text"],["service4Title","service4Title"],["service4Text","service4Text"],
    ["processTitle","processTitle"],["processIntro","processIntro"],
    ["step1Title","step1Title"],["step2Title","step2Title"],["step3Title","step3Title"],["step4Title","step4Title"],
    ["step1Text","step1Text"],["step2Text","step2Text"],["step3Text","step3Text"],["step4Text","step4Text"],
    ["labelName","labelName"],["labelEmail","labelEmail"],["labelProject","labelProject"],["labelLocation","labelLocation"],["labelDate","labelDate"],["labelBudget","labelBudget"],["labelMessage","labelMessage"],
    ["footerText","footerText"]
  ].forEach(([id,key])=>setText(id,commonText[key] ?? ""));

  // Transición de audiencia traducida
  if(transitionFrom) transitionFrom.textContent=modeLabel(state.mode);
  if(transitionTo) transitionTo.textContent=modeLabel(state.mode==="b2b" ? "b2c" : "b2b");
  if(transitionText) transitionText.textContent=`${commonText.transitionUpdating} ${modeLabel(state.mode).toLowerCase()}…`;

  const c=copy[state.lang][state.mode];
  setText("heroTitle",c.heroTitle,true);setText("heroText",c.heroText);
  setText("heroPrimary",c.heroPrimary,true);setText("heroSecondary",c.heroSecondary);
  setText("servicesTitle",c.servicesTitle);setText("servicesIntro",c.servicesIntro);
  setText("catalogTitle",commonText.catalogTitle);setText("catalogIntro",commonText.catalogIntro);
  setText("audienceTitle",c.audienceTitle);setText("audienceText",c.audienceText);setText("audienceCta",c.audienceCta);
  setText("contactTitle",c.contactTitle);setText("contactText",c.contactText);
  setText("whatsappSubmit",c.formButton,true);
  document.querySelectorAll(".mode-btn").forEach(b=>b.classList.toggle("active",b.dataset.mode===state.mode));
  refreshModeEvidence();
  updateThemeToggle();
}
const modeTransition=document.getElementById("modeTransition");
const modeStatus=document.getElementById("modeStatus");
const modeStatusValue=document.getElementById("modeStatusValue");
const transitionFrom=document.getElementById("transitionFrom");
const transitionTo=document.getElementById("transitionTo");
const transitionText=document.getElementById("transitionText");

function modeLabel(mode){
  const key=mode==="b2b" ? "modeB2B" : "modeB2C";
  return common[state.lang][key];
}

function refreshModeEvidence(){
  if(modeStatusValue) modeStatusValue.textContent=modeLabel(state.mode);
}

function animateModeChange(nextMode){
  if(nextMode===state.mode) return;

  const previousMode=state.mode;
  const from=modeLabel(previousMode);
  const to=common[state.lang][nextMode==="b2b" ? "modeB2B" : "modeB2C"];

  if(transitionFrom) transitionFrom.textContent=from;
  if(transitionTo) transitionTo.textContent=to;
  if(transitionText) {
    transitionText.textContent = `${common[state.lang].transitionUpdating} ${to.toLowerCase()}…`;
  }

  modeStatus?.classList.add("is-changing");
  modeTransition?.classList.add("is-visible");
  modeTransition?.setAttribute("aria-hidden","false");

  setTimeout(()=>{
    state.mode=nextMode;
    document.body.classList.remove("mode-b2b","mode-b2c");
    document.body.classList.add(`mode-${state.mode}`);
    applyLanguage();
    refreshModeEvidence();

    // Evidencia adicional: el contenido renovado entra con crossfade.
    document.querySelectorAll("#heroTitle,#heroText,#servicesTitle,#servicesIntro,#audienceTitle,#audienceText,#contactTitle,#contactText")
      .forEach(el=>{
        el.classList.remove("mode-content-transition");
        void el.offsetWidth;
        el.classList.add("mode-content-transition");
      });
  },260);

  setTimeout(()=>{
    modeTransition?.classList.remove("is-visible");
    modeTransition?.setAttribute("aria-hidden","true");
    modeStatus?.classList.remove("is-changing");
  },900);
}

document.querySelectorAll(".mode-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(btn.dataset.mode === state.mode) return;
    // Esta página es la de Particulares; "Empresas" lleva al sitio publicado de empresas.
    window.location.href = btn.dataset.mode === "b2b" ? "https://empresas-locaciones.vercel.app/" : "index.html";
  });
});
document.querySelectorAll(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>{
  state.lang=btn.dataset.lang;
  try{ localStorage.setItem("delefoco-lang",state.lang); }catch(e){}
  applyLanguage();
}));

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
  const filter=btn.dataset.filter;
  document.querySelectorAll(".location-card").forEach(card=>card.style.display=(filter==="all"||card.dataset.type===filter)?"block":"none");
}));

const modal=document.getElementById("locationModal");
document.querySelectorAll("button.text-btn").forEach(btn=>btn.addEventListener("click",()=>openModal(btn)));
let lastModalTrigger=null;
function openModal(trigger){
  lastModalTrigger=trigger;
  document.getElementById("modalTitle").textContent=trigger.dataset.location;
  document.getElementById("modalText").textContent=common[state.lang].modalText;
  document.getElementById("modalCta").textContent=common[state.lang].modalCta;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.getElementById("modalClose")?.focus();
}
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  lastModalTrigger?.focus();
}
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape" && modal.classList.contains("open")) closeModal();
});

const leadForm=document.getElementById("leadForm");
leadForm?.addEventListener("submit",e=>{
  e.preventDefault();
  enviarWhatsApp();
});

const whatsappSubmit=document.getElementById("whatsappSubmit");
whatsappSubmit?.addEventListener("click",()=>enviarWhatsApp());

function enviarWhatsApp() {
  const form=document.getElementById("leadForm");
  const status=document.getElementById("formStatus");
  if(!form.checkValidity()){
    status.textContent=common[state.lang].errors;
    form.reportValidity();
    return;
  }

  const data=new FormData(form);
  const value=(name)=>String(data.get(name)||"").trim();
  const t=common[state.lang];
  const projectKeys={advertising:"optionAdvertising",filmtv:"optionFilmTV",photography:"optionPhotography",corporate:"optionCorporate",other:"optionOther"};
  const rawProject=value("project");
  const project=projectKeys[rawProject] ? t[projectKeys[rawProject]] : rawProject;
  const labels=state.lang==="es"
    ? {name:"Nombre",email:"Correo",project:"Tipo de producción",location:"Locación",date:"Fecha",budget:"Presupuesto",message:"Brief"}
    : {name:"Name",email:"Email",project:"Production type",location:"Location",date:"Date",budget:"Budget",message:"Brief"};
  const lines=[
    t.waGreeting,
    "",
    `${labels.name}: ${value("name")}`,
    `${labels.email}: ${value("email")}`,
    `${labels.project}: ${project}`,
    `${labels.location}: ${value("location")}`,
    `${labels.date}: ${value("date")}`,
    `${labels.budget}: ${value("budget")}`,
    `${labels.message}: ${value("message")}`
  ];
  const numero="50686823430";
  const url=`https://wa.me/${numero}?text=${encodeURIComponent(lines.join("\n"))}`;
  const opened=window.open(url,"_blank","noopener,noreferrer");
  if(opened){
    status.textContent=t.waOpened;
  } else {
    status.textContent=t.waBlocked;
  }
}

applyLanguage();
refreshModeEvidence();

/* ===== Hero carousel ===== */
(function(){
  const root = document.getElementById("heroCarousel");
  if(!root) return;
  const slides = Array.from(root.querySelectorAll(".hero-carousel-slide"));
  const dots = Array.from(root.querySelectorAll(".hero-carousel-dots button"));
  const prevBtn = document.getElementById("heroCarouselPrev");
  const nextBtn = document.getElementById("heroCarouselNext");
  let current = 0;
  let timer = null;
  const AUTOPLAY_MS = 5000;

  function goTo(index){
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
      dot.setAttribute("aria-selected", i === current ? "true" : "false");
    });
  }

  function next(){ goTo(current + 1); }
  function prev(){ goTo(current - 1); }

  function startAutoplay(){
    stopAutoplay();
    timer = setInterval(next, AUTOPLAY_MS);
  }
  function stopAutoplay(){
    if(timer){ clearInterval(timer); timer = null; }
  }

  nextBtn && nextBtn.addEventListener("click", () => { next(); startAutoplay(); });
  prevBtn && prevBtn.addEventListener("click", () => { prev(); startAutoplay(); });
  dots.forEach(dot => dot.addEventListener("click", () => { goTo(Number(dot.dataset.index)); startAutoplay(); }));

  root.addEventListener("mouseenter", stopAutoplay);
  root.addEventListener("mouseleave", startAutoplay);

  goTo(0);
  startAutoplay();
})();

/* Aparición suave al hacer scroll */
(function(){
  if(!("IntersectionObserver" in window)) return;
  const targets = document.querySelectorAll(
    ".section-heading, .service-grid, .filters, .location-grid, .timeline, .audience-copy, .cat-grid, .audience-logo-card, .contact-intro, .lead-form"
  );
  if(!targets.length) return;
  document.documentElement.classList.add("js-reveal");
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  },{threshold:0.12, rootMargin:"0px 0px -6% 0px"});
  targets.forEach((el,i)=>{
    el.classList.add("reveal");
    if(el.matches(".audience-logo-card")) el.style.setProperty("--reveal-delay",".15s");
    io.observe(el);
  });
})();

/* ===== Mejoras visuales (aditivas) ===== */
(function(){
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Barra de progreso, sombra del header y botón "volver arriba" */
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden","true");
  document.body.appendChild(bar);

  const toTop = document.createElement("button");
  toTop.type = "button";
  toTop.className = "to-top";
  toTop.setAttribute("aria-label",common[state.lang].backToTop);
  toTop.textContent = "↑";
  toTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:reduce?"auto":"smooth"}));
  document.body.appendChild(toTop);

  const topbar = document.querySelector(".topbar");
  let ticking = false;
  function onScroll(){
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? Math.min(y/max,1) : 0) + ")";
    if(topbar) topbar.classList.toggle("is-scrolled", y > 8);
    toTop.classList.toggle("show", y > 600);
    ticking = false;
  }
  window.addEventListener("scroll",()=>{ if(!ticking){ ticking = true; requestAnimationFrame(onScroll); } },{passive:true});
  onScroll();

  /* Zoom suave (Ken Burns) en el carrusel del hero */
  const carousel = document.getElementById("heroCarousel");
  if(carousel && !reduce){
    requestAnimationFrame(()=>requestAnimationFrame(()=>carousel.classList.add("kb-on")));
  }

  /* Contadores animados en la franja de confianza (17+, 360°) */
  const stats = document.querySelectorAll(".trust-strip strong");
  if(stats.length && "IntersectionObserver" in window && !reduce){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        io.unobserve(entry.target);
        const el = entry.target;
        const m = el.textContent.trim().match(/^(\d+)(.*)$/);
        if(!m) return;
        const end = parseInt(m[1],10), suffix = m[2], dur = 1400, t0 = performance.now();
        (function tick(now){
          const p = Math.min((now - t0)/dur,1);
          const eased = 1 - Math.pow(1 - p,3);
          el.textContent = Math.round(end*eased) + suffix;
          if(p < 1) requestAnimationFrame(tick);
        })(t0);
      });
    },{threshold:0.6});
    stats.forEach(el=>io.observe(el));
  }
})();
