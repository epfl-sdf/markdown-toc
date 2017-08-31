# github-toc online TOC generator

  * [Installation](#installation)
  * [Génération du paquet pour le navigateur](#génération-du-paquet-pour-le-navigateur)
  * [Utilisation](#utilisation)
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

Ouvrir index.html, ou publier dans la branche master sur GitHub

# En vitesse on peut faire

## pour installer

```./install.sh```

## pour compiler

```./start.sh```

## pour remonter le tout sur github

```git push```
