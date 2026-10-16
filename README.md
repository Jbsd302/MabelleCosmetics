# MabelleCosmetics — Site vitrine (V1)

Site vitrine commercial : présenter la marque, les produits et les packs, puis pousser
la visiteuse à contacter l'équipe sur **WhatsApp** ou par **téléphone**.
HTML + CSS + JavaScript purs : aucun framework, aucune installation.

## Voir le site en local
Dans VS Code : clic droit sur `index.html` → **Open with Live Server**.

## Structure
```
index.html          La page (toutes les sections)
404.html            Page « introuvable »
robots.txt          Consignes pour Google
sitemap.xml         Plan du site pour Google
css/style.css       Tout le design (couleurs et polices en haut du fichier)
js/config.js        ★ Numéro, TikTok, boutique, messages WhatsApp
js/data.js          ★ Catégories, packs, témoignages
js/icons.js         Icônes
js/main.js          Fonctionnement du site (rien à modifier au quotidien)
images/             brand/ · banners/ · products/ · packs/ · stores/
```

## Ce qu'il faut modifier

1. **Boutique** — `js/config.js`, bloc `shops` : horaires (`hours`), photo (fichier dans
   `images/stores/`) et, idéalement, le lien Google Maps exact (`mapsUrl`).
   Quand une 2e boutique ouvrira, copier le bloc : le site s'adapte tout seul.
2. **TikTok** — `js/config.js`, bloc `tiktok` : `url`, `handle`, et si besoin `nextLive`.
3. **Témoignages** — `js/data.js`, tableau `TESTIMONIALS` : copier un bloc pour en ajouter.
   Demander l'accord de la cliente avant de publier son nom.
4. **Photos** — remplacer ou ajouter des fichiers dans `images/products/` et `images/packs/`,
   puis ajuster le chemin dans `js/data.js`. Format conseillé : WebP, 900 px maximum, moins de 150 Ko.
5. **Numéro de téléphone** — `js/config.js`, bloc `contact` (format `225` + 10 chiffres).

## Ajouter une catégorie ou un pack
Dans `js/data.js`, copier un bloc `{ ... }` du tableau `CATEGORIES` ou `PACKS`,
changer `name`, `desc`, `image`, `alt`. Rien d'autre à toucher.

## À faire à la mise en ligne
- Remplacer `VOTRE-DOMAINE.com` dans `sitemap.xml` et `robots.txt`.
- Dans `index.html`, remplacer `og:image` par l'adresse complète
  (ex : `https://votre-domaine.com/images/brand/logo-rond.webp`) pour l'aperçu des partages.

## Prévu pour la suite (non développé en V1)
Prix et fiches produits, panier, paiement mobile money, espace administrateur, stocks,
notifications WhatsApp, statistiques.
