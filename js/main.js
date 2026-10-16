/**
 * main.js — Logique du site
 * Dépend de : config.js, data.js, icons.js (chargés avant ce fichier)
 */

const $ = (selector, root = document) => root.querySelector(selector);

/* ==========================================================
   1. LIENS WHATSAPP ET APPEL (générés depuis CONFIG)
   ========================================================== */
function buildMessage(key, name = "") {
  const template = CONFIG.messages[key] || CONFIG.messages.general;
  return template.replace("{name}", name);
}

function waUrl(key, name = "") {
  return `https://wa.me/${CONFIG.contact.whatsapp}?text=${encodeURIComponent(buildMessage(key, name))}`;
}

function telUrl(number = CONFIG.contact.phone) {
  return `tel:+${number}`;
}

function mapsUrl(shop) {
  if (shop.mapsUrl) return shop.mapsUrl;
  const query = shop.mapsQuery || shop.address;
  if (query) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  return "";
}

/** <a data-wa="pack" data-name="Pack Éclat"> -> lien WhatsApp avec message adapté */
function bindContactLinks(root = document) {
  root.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = waUrl(el.dataset.wa, el.dataset.name || "");
    el.target = "_blank";
    el.rel = "noopener";
  });
  root.querySelectorAll("[data-call]").forEach((el) => {
    el.href = telUrl(el.dataset.call || CONFIG.contact.phone);
  });
}

/* ==========================================================
   2. RENDU DES SECTIONS
   ========================================================== */
function renderCategories() {
  $("#categories-grid").innerHTML = CATEGORIES.map(
    (c) => `
    <article class="cat">
      <img src="${c.image}" alt="${c.alt}" width="900" height="900" loading="lazy" decoding="async">
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <a class="btn btn-outline btn-sm" href="#contact" data-wa="product" data-name="${c.name}">Découvrir</a>
    </article>`
  ).join("");
}

function renderPacks() {
  $("#packs-grid").innerHTML = PACKS.map(
    (p) => `
    <article class="pack">
      <div class="pack-media">
        <img src="${p.image}" alt="${p.alt}" width="720" height="900" loading="lazy" decoding="async">
      </div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <a class="btn btn-wa btn-sm" href="#contact" data-wa="pack" data-name="${p.name}">
        <span data-icon="whatsapp"></span>Demander sur WhatsApp
      </a>
    </article>`
  ).join("");
}

function renderTiktok() {
  const { url, handle, nextLive } = CONFIG.tiktok;
  const hasAccount = Boolean(url);

  $("#tiktok-handle").textContent = handle || CONFIG.brand.name;

  $("#tiktok-actions").innerHTML = hasAccount
    ? `<a class="btn btn-gold" href="${url}" target="_blank" rel="noopener"><span data-icon="tiktok"></span>Nous suivre sur TikTok</a>
       <a class="btn btn-outline-light" href="${url}" target="_blank" rel="noopener">Voir nos Lives</a>`
    : `<a class="btn btn-gold" href="#contact" data-wa="lives"><span data-icon="whatsapp"></span>Demander les dates des Lives</a>`;

  $("#tiktok-next").innerHTML = nextLive
    ? `<span data-icon="calendar"></span><p><strong>Prochain Live</strong><br>${nextLive}</p>`
    : `<span data-icon="calendar"></span><p><strong>Calendrier des Lives</strong><br>Écrivez-nous sur WhatsApp pour connaître les prochaines dates.</p>`;

  // Lien TikTok du pied de page : affiché seulement si le compte est renseigné
  document.querySelectorAll("[data-tiktok-link]").forEach((el) => {
    if (hasAccount) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      el.closest("li")?.remove();
    }
  });
}

function renderShops() {
  const grid = $("#shops-grid");
  grid.classList.toggle("shop-grid--single", CONFIG.shops.length === 1);
  grid.innerHTML = CONFIG.shops
    .map((shop) => {
      const directions = mapsUrl(shop);
      const media = shop.mapsEmbedUrl
        ? `<iframe src="${shop.mapsEmbedUrl}" title="Carte : ${shop.name}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`
        : shop.image
        ? `<img src="${shop.image}" alt="Devanture de ${shop.name}" loading="lazy" decoding="async">`
        : `<img class="shop-media-logo" src="images/brand/logo-icon.webp" alt="" width="512" height="471" loading="lazy">`;

      const address = shop.address
        ? `<p>${shop.address}</p>`
        : `<p class="is-pending">Adresse bientôt disponible</p>`;
      const hours = shop.hours
        ? `<p>${shop.hours}</p>`
        : `<p class="is-pending">Horaires à confirmer : <a href="#contact" data-wa="shop" data-name="${shop.name}">demandez-les sur WhatsApp</a></p>`;

      const mainAction = directions
        ? `<a class="btn btn-dark btn-sm" href="${directions}" target="_blank" rel="noopener"><span data-icon="pin"></span>Voir l'itinéraire</a>`
        : `<a class="btn btn-wa btn-sm" href="#contact" data-wa="shop" data-name="${shop.name}"><span data-icon="whatsapp"></span>Demander l'adresse</a>`;

      return `
      <article class="shop">
        <div class="shop-media">${media}</div>
        <div class="shop-body">
          <h3>${shop.name}</h3>
          <div class="shop-line"><span data-icon="pin"></span>${address}</div>
          <div class="shop-line"><span data-icon="clock"></span>${hours}</div>
          <div class="shop-actions">
            ${mainAction}
            <a class="btn btn-outline btn-sm" href="#contact" data-call="${shop.phone || ""}"><span data-icon="phone"></span>Appeler</a>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function renderTestimonials() {
  const grid = $("#testimonials-grid");
  grid.classList.toggle("quote-grid--single", TESTIMONIALS.length === 1);
  grid.innerHTML = TESTIMONIALS.map(
    (t) => `
    <figure class="quote${t.placeholder ? " is-placeholder" : ""}">
      <blockquote>${t.quote}</blockquote>
      <figcaption><strong>${t.name}</strong><span>${t.detail}</span></figcaption>
    </figure>`
  ).join("");
}

/* ==========================================================
   3. DONNÉES STRUCTURÉES (SEO local) — générées depuis CONFIG
   ========================================================== */
function injectStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: CONFIG.brand.name,
    alternateName: CONFIG.brand.legalName,
    slogan: CONFIG.brand.slogan,
    description:
      "Produits cosmétiques, soins beauté et packs, en vente au détail et en gros. Boutique à Koumassi, Abidjan.",
    telephone: `+${CONFIG.contact.phone}`,
    areaServed: "CI",
  };
  const shop = CONFIG.shops[0];
  if (shop && shop.address) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: shop.address,
      addressLocality: "Abidjan",
      addressCountry: "CI",
    };
  }
  if (CONFIG.tiktok.url) data.sameAs = [CONFIG.tiktok.url];

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/* ==========================================================
   4. INTERFACE : menu mobile, en-tête, apparition douce
   ========================================================== */
function setupMenu() {
  const burger = $("#burger");
  const menu = $("#nav-mobile");

  const close = () => {
    menu.hidden = true;
    burger.setAttribute("aria-expanded", "false");
  };

  burger.addEventListener("click", () => {
    const willOpen = menu.hidden;
    menu.hidden = !willOpen;
    burger.setAttribute("aria-expanded", String(willOpen));
  });

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (e) => e.key === "Escape" && close());
  window.matchMedia("(min-width: 1181px)").addEventListener("change", close);
}

function setupHeaderShadow() {
  const header = $(".site-header");
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => observer.observe(el));
}

/* ==========================================================
   5. DÉMARRAGE
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderPacks();
  renderTiktok();
  renderShops();
  renderTestimonials();

  const footerPhone = $("#footer-phone");
  if (footerPhone) footerPhone.textContent = CONFIG.contact.phoneDisplay;

  mountIcons();
  bindContactLinks();
  injectStructuredData();

  setupMenu();
  setupHeaderShadow();
  document.documentElement.classList.add("js");
  setupReveal();
});
