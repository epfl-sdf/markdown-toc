# github-toc online TOC generator

- [Installation](#installation)
  * [Compilation](#compilation)
  * [Mise à jour sur le GitHub](#mise-à-jour-sur-le-github)
  * [Génération du paquet pour le navigateur](#génération-du-paquet-pour-le-navigateur)
- [Utilisation](#utilisation)
  * [Génération de la table des matières](#génération-de-la-table-des-matières)

# Installation

L'installation ce fait en lançant le script suivant

```
./install.sh
```

## Compilation

La compilation ce fait en lançant le script suivant

```
./start.sh
```

## Mise à jour sur le GitHub

Pour remonter le tout sur GitHub on lance le script suivant

```
git push
```

## Génération du paquet pour le navigateur

```
browserify index.js -o bundle.js
```

# Utilisation

Ouvrir index.html, ou publier dans la branche master sur GitHub.

## Génération de la table des matières

Cliquer sur le lien ci-dessous

https://epfl-sdf.github.io/markdown-toc/

<p align="justify">Copier le contenu de votre fichier.md dans le nloc de texte de gauche puis appuyer sur le bouton "conversion" en bas à gauche. La table des matières générée s'affichera dans le bloc de texte de droite. Il ne reste plus qu'à copier-coller la table des matière dans votre fichier.md</p>
