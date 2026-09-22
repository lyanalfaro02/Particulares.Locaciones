const pageAudience = document.body.dataset.audience === "b2c" ? "b2c" : "b2b";

const state = {
  lang: "es",
  mode: pageAudience
};

// Each HTML file is independent and starts in dark mode.
document.body.classList.remove("theme-light");
document.body.classList.add(`mode-${state.mode}`, "theme-dark");

const copy = {
    es: {
    b2b: {
      heroTitle: "El lugar correcto<br><span>para cada historia.</span>",
      heroText: "Encontramos y aseguramos la locación ideal para su producción, coordinando scouting, permisos y viabilidad técnica.",
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
    modeB2B:"Empresas",modeB2C:"Particulares",audienceLabel:"Audiencia",languageLabel:"Idioma",
    heroMeta1:"Scouting",heroMeta2:"Permisos",heroMeta3:"Coordinación",
    service1Title:"Scouting de locaciones",service1Text:"Buscamos espacios que respondan al concepto visual y a las necesidades técnicas del proyecto.",
    service2Title:"Permisos de filmación",service2Text:"Coordinamos autorizaciones necesarias ante entidades públicas y privadas.",
    service3Title:"Propietarios y autoridades",service3Text:"Facilitamos acuerdos claros para el uso legal y eficiente de las locaciones.",
    service4Title:"Asesoría técnica",service4Text:"Evaluamos accesos, restricciones y viabilidad para reducir sorpresas durante el rodaje.",
    catalogEyebrow:"CATÁLOGO",
    locationHistoric1:"Histórico",locationNatural:"Natural",locationInterior:"Interior",locationUrban:"Urbano",locationIndustrial:"Industrial",
    location1Title:"Casa antigua de madera en San José",location1Cta:"Ver locación →",
    location2Title:"Playas de Guanacaste",location2Cta:"Ver locación →",
    location3Title:"Caño Negro Wetlands",location3Cta:"Ver locación →",
    location4Title:"Casa moderna en San José",location4Cta:"Ver locación →",
    location5Title:"Casa Siglo XIX",location5Cta:"Ver locación →",
    location6Title:"Casa en Lourdes",location6Cta:"Ver locación →",location7Title:"Arquitectura urbana en San José",location7Cta:"Ver locación →",location8Title:"Espacio de carácter industrial",location8Cta:"Ver locación →",
    processEyebrow:"CÓMO FUNCIONA",step1Text:"Nos contás qué necesitás: tipo de producción, fechas, región y características.",
    step2Text:"Filtramos y proponemos espacios según el concepto y la viabilidad.",
    step3Text:"Coordinamos propietarios, permisos y condiciones de uso.",
    step4Text:"Llegás a una locación preparada para trabajar.",
    audienceEyebrow:"DELEFOCO",contactEyebrow:"HABLEMOS",
    placeholderName:"Tu nombre",placeholderLocation:"Ej. casa, playa, urbano...",placeholderBudget:"Opcional",
    placeholderMessage:"Contanos sobre el proyecto...",
    optionAdvertising:"Publicidad",optionFilmTV:"Cine / TV",optionPhotography:"Fotografía",optionCorporate:"Video corporativo",optionOther:"Otro",
    footerCommunity:"Comunidad Audiovisual",footerLocation:"UBICACIÓN",footerContact:"CONTACTO",footerImportant:"IMPORTANTE",
    footerUs:"Nosotros",footerMagazine:"Revista",footerBillboard:"Cartelera",footerSchool:"Escuela",footerCasting:"Casting",
    footerCommunityLink:"Comunidad",footerServices:"Servicios",footerMemberships:"Membresías",footerCRM:"CRM para Audiovisuales",
    footerBottom:"© 2026 deleFOCO · Comunidad Audiovisual",backToTop:"Volver arriba",audienceActive:"Audiencia activa",themeDark:"Oscuro",themeLight:"Claro",placeholderEmail:"tu@email.com",
    chatOpen:"Abrir asistente",chatClose:"Cerrar",quickAd:"Publicidad",quickRegister:"Registrar",quickScouting:"Scouting",
    modalEyebrow:"LOCACIÓN",modalTitle:"Locación",
    heroEyebrow:"LOCACIONES · COSTA RICA",trustYears:"años impulsando el audiovisual",trustCosta:"Costa Rica como destino de producción",trustSupport:"acompañamiento de locación",
    servicesEyebrow:"LO QUE HACEMOS",catalogTitle:"Espacios para contar historias.",catalogIntro:"Explorá por tipo de locación y encontrá referencias para tu próximo proyecto.",
    filterAll:"Todas",filterNatural:"Natural",filterUrban:"Urbano",filterInterior:"Interior",filterIndustrial:"Industrial",filterHistoric:"Histórico",
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
    locationHistoric1:"Historic",locationNatural:"Natural",locationInterior:"Interior",locationUrban:"Urban",locationIndustrial:"Industrial",
    location1Title:"Old wooden house in San José",location1Cta:"View location →",
    location2Title:"Guanacaste beaches",location2Cta:"View location →",
    location3Title:"Caño Negro Wetlands",location3Cta:"View location →",
    location4Title:"Modern house in San José",location4Cta:"View location →",
    location5Title:"19th-Century House",location5Cta:"View location →",
    location6Title:"House in Lourdes",location6Cta:"View location →",location7Title:"Urban architecture in San José",location7Cta:"View location →",location8Title:"Industrial-style space",location8Cta:"View location →",
    processEyebrow:"HOW IT WORKS",step1Text:"Tell us what you need: production type, dates, region and requirements.",
    step2Text:"We filter and propose spaces based on the concept and feasibility.",
    step3Text:"We coordinate owners, permits and terms of use.",
    step4Text:"You arrive at a location prepared for the shoot.",
    audienceEyebrow:"DELEFOCO",contactEyebrow:"LET'S TALK",
    placeholderName:"Your name",placeholderLocation:"E.g. house, beach, urban...",placeholderBudget:"Optional",
    placeholderMessage:"Tell us about the project...",
    optionAdvertising:"Advertising",optionFilmTV:"Film / TV",optionPhotography:"Photography",optionCorporate:"Corporate video",optionOther:"Other",
    footerCommunity:"Audiovisual Community",footerLocation:"LOCATION",footerContact:"CONTACT",footerImportant:"IMPORTANT",
    footerUs:"About us",footerMagazine:"Magazine",footerBillboard:"Billboard",footerSchool:"School",footerCasting:"Casting",
    footerCommunityLink:"Community",footerServices:"Services",footerMemberships:"Memberships",footerCRM:"CRM for Audiovisuals",
    footerBottom:"© 2026 deleFOCO · Audiovisual Community",backToTop:"Back to top",audienceActive:"Active audience",themeDark:"Dark",themeLight:"Light",placeholderEmail:"you@email.com",
    chatOpen:"Open assistant",chatClose:"Close",quickAd:"Advertising",quickRegister:"Register",quickScouting:"Scouting",
    modalEyebrow:"LOCATION",modalTitle:"Location",
    heroEyebrow:"LOCATIONS · COSTA RICA",trustYears:"years supporting audiovisual production",trustCosta:"Costa Rica as a production destination",trustSupport:"location support",
    servicesEyebrow:"WHAT WE DO",catalogTitle:"Spaces made for stories.",catalogIntro:"Explore by location type and find references for your next project.",
    filterAll:"All",filterNatural:"Natural",filterUrban:"Urban",filterInterior:"Interior",filterIndustrial:"Industrial",filterHistoric:"Historic",
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
  document.documentElement.lang=state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(common[state.lang][key]) el.textContent=common[state.lang][key];
  });
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active",b.dataset.lang===state.lang));
  // Translate the remaining static UI labels, placeholders and catalog/process content.
  const commonText=common[state.lang];
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
  document.querySelectorAll(".mode-btn").forEach(b=>{
    b.textContent = b.dataset.mode==="b2b" ? commonText.modeB2B : commonText.modeB2C;
  });
  document.querySelector(".segmented[aria-label='Audiencia']")?.setAttribute("aria-label", commonText.audienceLabel);
  document.querySelector(".segmented[aria-label='Idioma']")?.setAttribute("aria-label", commonText.languageLabel);
  const locationKeys=[
    ["location1Title","location1Cta"],["location2Title","location2Cta"],["location3Title","location3Cta"],
    ["location4Title","location4Cta"],["location5Title","location5Cta"],["location6Title","location6Cta"],["location7Title","location7Cta"],["location8Title","location8Cta"]
  ];
  document.querySelectorAll(".location-card").forEach((card,i)=>{
    if(!locationKeys[i]) return;
    const [title,cta]=locationKeys[i];
    const titleEl=card.querySelector("h3"), ctaEl=card.querySelector(".text-btn");
    if(titleEl) titleEl.textContent=commonText[title];
    if(ctaEl){ ctaEl.textContent=commonText[cta]; ctaEl.dataset.location=commonText[title]; }
  });
  document.querySelectorAll(".location-image span").forEach((el,i)=>{
    const keys=["locationHistoric1","locationNatural","locationNatural","locationInterior","locationHistoric1","locationInterior","locationUrban","locationIndustrial"];
    el.textContent=commonText[keys[i]];
  });
  const projectOptions=document.querySelectorAll('select[name="project"] option');
  ["optionAdvertising","optionFilmTV","optionPhotography","optionCorporate","optionOther"].forEach((key,i)=>{
    if(projectOptions[i+1]) projectOptions[i+1].textContent=commonText[key];
  });
  document.getElementById("modalClose")?.setAttribute("aria-label",commonText.chatClose);
  const back=document.querySelector('.footer-bottom a[aria-label="Volver arriba"]');
  if(back) back.setAttribute("aria-label",commonText.backToTop);
  [
    ["service1Title","service1Title"],["service1Text","service1Text"],["service2Title","service2Title"],["service2Text","service2Text"],
    ["service3Title","service3Title"],["service3Text","service3Text"],["service4Title","service4Title"],["service4Text","service4Text"],
    ["processTitle","processTitle"],["processIntro","processIntro"],["step1Text","step1Text"],["step2Text","step2Text"],["step3Text","step3Text"],["step4Text","step4Text"],
    ["labelName","labelName"],["labelEmail","labelEmail"],["labelProject","labelProject"],["labelLocation","labelLocation"],["labelDate","labelDate"],["labelBudget","labelBudget"],["labelMessage","labelMessage"],
    ["footerText","footerText"]
  ].forEach(([id,key])=>setText(id,commonText[key] ?? "",false));
  // Keep the audience transition evidence translated when the language changes.
  if(transitionFrom) transitionFrom.textContent=modeLabel(state.mode);
  if(transitionTo) transitionTo.textContent=modeLabel(state.mode==="b2b" ? "b2c" : "b2b");
  if(transitionText) transitionText.textContent=state.lang==="es"
    ? `Actualizando contenido para ${modeLabel(state.mode).toLowerCase()}…`
    : `Updating content for ${modeLabel(state.mode).toLowerCase()}…`;

  const c=copy[state.lang][state.mode];
  setText("heroTitle",c.heroTitle,true);setText("heroText",c.heroText);
  setText("heroPrimary",c.heroPrimary,true);setText("heroSecondary",c.heroSecondary);
  setText("servicesTitle",c.servicesTitle);setText("servicesIntro",c.servicesIntro);setText("catalogTitle",commonText.catalogTitle);setText("catalogIntro",commonText.catalogIntro);
  setText("audienceTitle",c.audienceTitle);setText("audienceText",c.audienceText);setText("audienceCta",c.audienceCta);
 setText("contactTitle",c.contactTitle);
setText("contactText",c.contactText);
setText("whatsappSubmit",c.formButton,true);
  document.querySelector('select[name="project"] option[value=""]').textContent=common[state.lang].select;
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
    transitionText.textContent = state.lang==="es"
      ? `Actualizando contenido para ${to.toLowerCase()}…`
      : `Updating content for ${to.toLowerCase()}…`;
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
    const target = btn.dataset.mode === "b2c" ? "../particulares/index.html" : "../empresas/index.html";
    if(btn.dataset.mode === state.mode) return;
    window.location.href = target;
  });
});
document.querySelectorAll(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>{state.lang=btn.dataset.lang;applyLanguage();}));

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
  const filter=btn.dataset.filter;
  document.querySelectorAll(".location-card").forEach(card=>card.style.display=(filter==="all"||card.dataset.type===filter)?"block":"none");
}));

const modal=document.getElementById("locationModal");
document.querySelectorAll(".text-btn").forEach(btn=>btn.addEventListener("click",()=>openModal(btn)));
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
  const productionMap={
    es:{"Publicidad":"Publicidad","Cine / TV":"Cine / TV","Fotografía":"Fotografía","Video corporativo":"Video corporativo","Otro":"Otro"},
    en:{"Publicidad":"Advertising","Cine / TV":"Film / TV","Fotografía":"Photography","Video corporativo":"Corporate video","Otro":"Other"}
  };
  const rawProject=value("project");
  const project=productionMap[state.lang][rawProject] || rawProject;
  const labels=state.lang==="es"
    ? {name:"Nombre",email:"Correo",project:"Tipo de producción",location:"Locación",date:"Fecha",budget:"Presupuesto",message:"Brief"}
    : {name:"Name",email:"Email",project:"Production type",location:"Location",date:"Date",budget:"Budget",message:"Brief"};
  const lines=[
    "Hola, quiero enviar una solicitud de locación:",
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
    status.textContent=state.lang==="es"
      ? "Solicitud lista. Se abrió WhatsApp en una nueva pestaña."
      : "Request ready. WhatsApp was opened in a new tab.";
  } else {
    status.textContent=state.lang==="es"
      ? "El navegador bloqueó la ventana de WhatsApp. Permití ventanas emergentes e intentá de nuevo."
      : "Your browser blocked the WhatsApp window. Allow pop-ups and try again.";
  }
}

applyLanguage();
refreshModeEvidence();
