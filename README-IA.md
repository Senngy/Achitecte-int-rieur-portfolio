# Contexte du Projet : Atelier Orée

## 1. Présentation Générale
- **Nom du projet** : Atelier Orée (Portfolio Laëtitia Moriceau)
- **Typologie** : Site vitrine premium / Portfolio d'architecture et design d'intérieur.
- **Design System** : Thème minimaliste, élégant et premium. Couleurs organiques (`dusty-rose`, `soft-stone`, `ink-black`). Typographie mixant Serif (Cormorant Garamond) pour les titres et Sans-Serif (Inter) pour le corps. Présence forte de micro-animations (révélations au scroll, fade-ins).

## 2. Stack Technique
- **Framework Front/Back** : SvelteKit (Svelte 5 avec les runes `$props`, `$state`).
- **Styling** : Tailwind CSS v4 couplé à du CSS Vanilla (dans `app.css`) pour le contrôle granulaire des composants complexes complexes.
- **Backend / Serveur** : Node.js natif via SvelteKit Server actions (`+page.server.ts`).
- **Mailing** : Nodemailer.

## 3. Architecture du projet (`/src`)
- **`/routes`** :
  - `/` : Landing page (composée de modules Hero, About, Works, Services, Contact).
  - `/projets` : Page listant l'ensemble des réalisations (en cours de câblage).
  - `/projets/[projet]` : Page dynamique de détail d'un projet spécifique (slug).
  - `/services` & `/profile` : Pages annexes.
- **`/lib/sections/home/`** : Segments modulaires de la page d'accueil.
- **`/lib/components/`** : Composants UI réutilisables (Navbar, Footer, Carousel3D).
- **`/lib/data/`** : Fichiers statiques ("base de données locale") : `projets.ts`, `slides.ts`.
- **`/lib/server/`** : Logique backend sécurisée (`mail.ts`, `blocked-domains.ts`).

## 4. État d'avancement & Ce qui est fait
- **Landing Page (Frontend)** : Totalement intégrée, responsive et animée. Hero slider interactif, section About, Services.
- **Formulaire de Contact (Fullstack & Sécurité)** :
  - UX : `use:enhance` pour l'envoi asynchrone, loading state (bouton bloqué, spinner), micro-animations d'erreurs, full-screen pour le succès.
  - Sécurité : Honeypot côté front et back, regex stricte serveur, protection XSS (`escapeHtml`), filtrage furtif anti-spam (domaines jetables vus comme des faux positifs).
  - Nodemailer : Configuré avec gestion du `Reply-To`.
- **Modèles de données** : Fichier `projets.ts` structuré (slug, titre, type, métadonnées, images de concept et plans).

## 5. Prochaines étapes (A faire / En cours)
1. **Routage et Données Dynamiques** :
   - Brancher `lib/data/projets.ts` via les Load Functions de SvelteKit (`+page.server.ts` ou `+page.ts`) vers la route `/projets`.
   - Câbler la route `/projets/[projet]` pour charger dynamiquement le bon projet selon le slug.
2. **Finir l'intégration HTML vers Svelte** :
   - Traduire les ultimes vues statiques HTML issues du maquettage vers des templates Svelte fonctionnels.
3. **SEO (Meta Tags)** :
   - Injecter dynamiquement les balises `<svelte:head>` (meta title, description) en fonction du projet affiché.
4. **Optimisation Médias** :
   - Utiliser des balises srcset/picture ou le module `enhanced:img` de SvelteKit pour alléger le chargement massif des images HD d'architecture.
