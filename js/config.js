/**
 * config.js — CONFIGURATION CENTRALE DU SITE
 * ------------------------------------------------------------------
 * Si une information change (numéro, TikTok, adresse, horaires...),
 * on la modifie ICI et nulle part ailleurs.
 * ------------------------------------------------------------------
 */
const CONFIG = {
  // ---------- Marque ----------
  brand: {
    name: "MabelleCosmetics",
    legalName: "Mabelle Cosmetics",
    slogan: "Vos essentielles de beauté au quotidien",
  },

  // ---------- Contact ----------
  // Format international SANS le "+" ni espaces : indicatif 225 + numéro à 10 chiffres.
  // Exemple : 0706158284  ->  2250706158284
  contact: {
    whatsapp: "2250706158284",
    phone: "2250706158284",
    phoneDisplay: "+225 07 06 15 82 84",
  },

  // ---------- TikTok ----------
  // Tant que "url" est vide, la section Lives propose de demander les dates
  // des prochains Lives sur WhatsApp. Dès que l'URL est renseignée, les boutons
  // "Nous suivre" et "Voir nos Lives" pointent vers TikTok.
  tiktok: {
    url: "", // ex : "https://www.tiktok.com/@nomducompte"
    handle: "", // ex : "@nomducompte"
    nextLive: "", // ex : "Samedi à 20h" (laisser vide si non planifié)
  },

  // ---------- Boutique ----------
  // Laisser "" pour une information non disponible : le site affiche alors
  // un message adapté et propose de contacter l'équipe sur WhatsApp.
  //   address      : adresse affichée sur le site
  //   mapsQuery    : texte recherché dans Google Maps pour l'itinéraire (par défaut : address)
  //   hours        : horaires, ex : "Lun–Sam : 8h30 – 19h30"
  //   mapsUrl      : lien Google Maps direct (prioritaire sur l'adresse)
  //   mapsEmbedUrl : lien "Intégrer une carte" de Google Maps (affiche la carte)
  //   image        : photo de la boutique, ex : "images/stores/boutique-1.webp"
  //   phone        : numéro propre à la boutique (format 225...), sinon numéro principal
  shops: [
    {
      name: "Boutique de Koumassi",
      address: "Koumassi, Cité 147",
      mapsQuery: "Koumassi Cité 147, Abidjan, Côte d'Ivoire", // utilisé pour l'itinéraire tant que mapsUrl est vide
      hours: "", // ex : "Lun–Sam : 8h30 – 19h30"
      mapsUrl: "", // idéal : coller ici le lien « Partager » de la fiche Google Maps de la boutique
      mapsEmbedUrl: "",
      image: "", // ex : "images/stores/boutique-koumassi.webp"
      phone: "",
    },
    // Quand la 2e boutique ouvrira : copier le bloc ci-dessus, changer les informations.
    // Le site passera tout seul à l'affichage « deux boutiques ».
  ],


  // ---------- Messages WhatsApp pré-remplis ----------
  // {name} est remplacé automatiquement par le nom du produit / pack / boutique.
  messages: {
    general: "Bonjour MabelleCosmetics, je souhaite avoir des informations sur vos produits.",
    product: "Bonjour MabelleCosmetics, je souhaite avoir des informations sur : {name}.",
    pack: "Bonjour MabelleCosmetics, je suis intéressé(e) par le {name}. Pouvez-vous me renseigner ?",
    customPack: "Bonjour MabelleCosmetics, je suis intéressé(e) par un pack beauté. Pouvez-vous me renseigner ?",
    gros: "Bonjour MabelleCosmetics, je souhaite avoir des informations concernant vos ventes en gros.",
    lives: "Bonjour MabelleCosmetics, pouvez-vous me donner les dates de vos prochains Lives TikTok ?",
    shop: "Bonjour MabelleCosmetics, pouvez-vous me donner les horaires d'ouverture de la {name} ?",
  },
};
