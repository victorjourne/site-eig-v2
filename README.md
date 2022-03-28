# Site du programme Entrepreneurs d’intérêt général

Entrepreneurs d’intérêt général permet à des talents du numérique ou « EIG » d’intégrer des administrations, pour relever en 10 mois des défis qui améliorent le service public.

En initiant des démarches d’exploration et d’émergence, l’ambition du programme est de développer une administration plus entrepreneuriale, tant dans ses méthodes que sa culture de travail. Ses valeurs cardinales sont :

- l’esprit entrepreneurial 
- l’open-data et l’open-source 
- le numérique éco-responsable 
- le numérique accessible

Pour en savoir plus : https://eig.etalab.gouv.fr/programme.

## Engagement

Dans un contexte d’engagement de l’Etat en faveur de l’ouverture des données depuis le Partenariat pour le gouvernement ouvert (PGO) de 2016, afin de favoriser la transparence démocratique et le partage des informations, le site du programme Entrepreneurs d’intérêt général ouvre son code source afin de le rendre accessible au plus grand nombre. 


## Fonctionnement général

### Code

Le code du site fonctionne à travers trois branches : `main`, `develop` et `prepod`. 
- La branche `main` est la production, à laquelle est connectée le back-office. 
- La branche `develop` est une branche de travail permettant de réaliser les développements.
- La branche `prepod` permet de tester les développements avant de les basculer sur la branche `main`. 

### Contenus

Il existe deux façons de modifier les contenus (textes du site, biographies, articles, etc.) du site :

- Soit en modifiant directement les fichiers. Dans ce cas, le changement est à faire sur une branche créée pour l'occasion, puis à intégrer à `main` via une pull request sur Github (avant d'accepter la pull request, il est possible de prévisualiser le changement apporté au site via un lien automatiquement généré par Netlify).

- Soit en passant par le [back-office](https://eig.etalab.gouv.fr/admin) du site. En effet, le site fonctionne comme un CMS. Chaque modification opérée via le back-office a d'abord le statut de `draft`. Une branche est automatiquement créée pour chaque draft. Lorsque l'auteur(e) change le statut de la modification de `draft` à `publié`, la branche est automatiquement mergée à `main`.


## Fonctionnement technique : Hugo template for Netlify CMS with Netlify Identity

This is a small business template built with [Victor Hugo](https://github.com/netlify/victor-hugo) and [Netlify CMS](https://github.com/netlify/netlify-cms), designed and developed by [Darin Dimitroff](http://www.darindimitroff.com/), [spacefarm.digital](https://www.spacefarm.digital).

### Getting started

Use our deploy button to get your own copy of the repository. 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/one-click-hugo-cms&stack=cms)

This will setup everything needed for running the CMS:

* A new repository in your GitHub account with the code
* Full Continuous Deployment to Netlify's global CDN network
* Control users and access with Netlify Identity
* Manage content with Netlify CMS

Once the initial build finishes, you can invite yourself as a user. Go to the Identity tab in your new site, click "Invite" and send yourself an invite.

Now you're all set, and you can start editing content!

### Local Development

Clone this repository, and run `yarn` or `npm install` from the new folder to install all required dependencies.

Then start the development server with `yarn start` or `npm start`.

### Layouts

The template is based on small, content-agnostic partials that can be mixed and matched. The pre-built pages showcase just a few of the possible combinations. Refer to the `site/layouts/partials` folder for all available partials.

Use Hugo’s `dict` functionality to feed content into partials and avoid repeating yourself and creating discrepancies.

### CSS

The template uses a custom fork of Tachyons and PostCSS with cssnext and cssnano. To customize the template for your brand, refer to `src/css/imports/_variables.css` where most of the important global variables like colors and spacing are stored.

### SVG

All SVG icons stored in `site/static/img/icons` are automatically optimized with SVGO (gulp-svgmin) and concatenated into a single SVG sprite stored as a a partial called `svg.html`. Make sure you use consistent icons in terms of viewport and art direction for optimal results. Refer to an SVG via the `<use>` tag like so:

```
<svg width="16px" height="16px" class="db">
  <use xlink:href="#SVG-ID"></use>
</svg>
```
