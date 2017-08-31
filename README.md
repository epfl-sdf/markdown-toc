# github-toc online TOC generator

  * [Installation](#installation)
  * [Génération du paquet pour le navigateur](#génération-du-paquet-pour-le-navigateur)
  * [Utilisation](#utilisation)
  * [Génération de la table des matières](#génération-de-la-table-des-matières)
- [En vitesse on peut faire](#en-vitesse-on-peut-faire)
  * [pour installer](#pour-installer)
  * [pour compiler](#pour-compiler)
  * [pour remonter le tout sur github](#pour-remonter-le-tout-sur-github)

## Installation

Installation des modules npm utilisés pour générer le bundle.js, avec browserify, pour le site statique.

```
npm install
```

## Génération du paquet pour le navigateur

```
browserify index.js -o bundle.js
```

## Utilisation

Ouvrir index.html, ou publier dans la branche master sur GitHub.

## Génération de la table des matières

Cliquer sur le lien ci-dessous

https://epfl-sdf.github.io/markdown-toc/

<p align="justify">Copier le contenu de votre fichier.md dans le nloc de texte de gauche puis appuyer sur le bouton "conversion" en bas à gauche. La table des matières générée s'affichera dans le bloc de texte de droite. Il ne reste plus qu'à copier-coller la table des matière dans votre fichier.md</p>

# En vitesse on peut faire

## pour installer

```./install.sh```

## pour compiler

```./start.sh```

## pour remonter le tout sur github

```git push```
