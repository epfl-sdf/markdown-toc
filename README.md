# github-toc online TOC generator

  * [Install](#install)
  * [Generate Browser bundle](#generate-browser-bundle)
  * [Use](#use)
- [et en vitesse on fait](#et-en-vitesse-on-fait)
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

Ouvrir index.html, ou publier dans la branche master sur GitHub

# En vitesse on peut faire

## pour installer

```./install.sh```

## pour compiler

```./start.sh```

## pour remonter le tout sur github

```git push```
