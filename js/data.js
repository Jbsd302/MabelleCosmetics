/**
 * data.js — CONTENU DU SITE (catégories, packs, témoignages)
 * ------------------------------------------------------------------
 * Pour ajouter un élément : copier un bloc { ... } et modifier les textes.
 * Pour supprimer : effacer le bloc. Le site se met à jour tout seul.
 * Aucun prix n'est affiché en V1 (les prix seront ajoutés en V2).
 * ------------------------------------------------------------------
 */

const CATEGORIES = [
  {
    name: "Gels douche",
    desc: "Des gels douche pour un moment de bien-être au quotidien.",
    image: "images/products/gels-douche.webp",
    alt: "Gel douche en flacon avec pompe, tenu en main",
  },
  {
    name: "Laits corporels",
    desc: "Hydratation et douceur pour votre routine corps.",
    image: "images/products/laits-corporels.webp",
    alt: "Sélection de laits et soins corporels alignés sur une étagère",
  },
  {
    name: "Huiles corporelles",
    desc: "Des huiles pour nourrir et sublimer votre peau.",
    image: "images/products/huiles-corporelles.webp",
    alt: "Flacons d'huile corporelle à la texture dorée",
  },
  {
    name: "Packs beauté",
    desc: "Des ensembles pensés pour simplifier votre routine.",
    image: "images/products/packs-beaute.webp",
    alt: "Assortiment de produits : gel douche, gommage et lait corporel",
  },
  // Catégories à ajouter dès que les photos sont disponibles :
  // { name: "Soins visage", desc: "...", image: "images/products/soins-visage.webp", alt: "..." },
  // { name: "Produits capillaires", desc: "...", image: "images/products/capillaires.webp", alt: "..." },
];

const PACKS = [
  {
    name: "Pack Éclat",
    desc: "Un ensemble de produits pour votre routine beauté.",
    image: "images/packs/pack-eclat.webp",
    alt: "Pack de deux produits corporels, lait et gel douche",
  },
  {
    name: "Pack Hydratation",
    desc: "Une sélection pensée pour une routine hydratante.",
    image: "images/packs/pack-hydratation.webp",
    alt: "Trio de produits corporels : gel douche, lait et huile",
  },
  {
    name: "Pack Beauté",
    desc: "Un ensemble d'essentiels pour votre routine quotidienne.",
    image: "images/packs/pack-beaute.webp",
    alt: "Coffret de produits corporels : gel douche, lait, huile et soin",
  },
];

// Témoignages : copier un bloc pour en ajouter. Toujours demander l'accord de la cliente
// avant de publier son nom (on peut n'afficher que le prénom et l'initiale).
const TESTIMONIALS = [
  {
    name: "Anabelle O.",
    detail: "Cliente",
    quote: "C'est très bon… tu es la meilleure, tu vends de très bons produits.",
    placeholder: false,
  },
];
