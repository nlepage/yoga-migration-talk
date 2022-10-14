---
theme: apple-basic
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
css: unocss
defaults:
  class: background-default bg-contain h-full
download: true

layout: intro
class: background-leafs
---

<h1 class="text-center font-devfest">
  Comment j'ai largué<br>Apollo Server<br>pour GraphQL Yoga
</h1>

<p class="!mt-4 text-center">
  <img src="/nicolas-lepage.jpg" class="rounded-full shadow-md inline w-25 mr-4" />
  Nicolas Lepage - <a href="https://twitter.com/njblepage">@njblepage</a>
</p>

<p class="!mt-8 text-center">
  <img src="/devfest.png" class="inline w-60 mr-10" />
  <img src="/zenika.png" class="inline w-60" />
</p>

<!--
Dire Namaste au lieu de Bonjour
-->

---
layout: bullets
---

# Le projet

 - Démarré en 2017
 - Développé par Zenika Nantes
 - Pour l'Institut Catholique de Vendée
 - Application de gestion

<style>
ul {
  font-size: 140%;
}
</style>

---

# Le projet

Schéma technique

---

# L'API

 - Plus d'une centaine de queries
 - Plus d'une centaine de mutations
 - Plusieurs centaines de types
 - Uploads de fichier
 - Subscriptions over WebSockets

---

# Historique de l'API

Apollo server v1

Puis Apollo server v2 avant même sa sortie en juillet 2018

Resté dessus depuis

---

# Historique écosystème

Yoga v1 (Fully featured, file upload, subscriptions, playground) :
 - Démarré en 2018
 - Dernière version en 2019

Apollo server :
 - v2 sortie en juillet 2018
 - v3 sortie 7 juillet 2021, un jour après mon anniversaire

Mentionner express-graphql

<!--
Dire pqoi on est passé sur Apollo 3

Transition sur envelop
-->

---

# Envelop

TODO présenter envelop

<!--
Mentionner Helix

Problème un peu trop bas niveau -> transition Yoga
-->

---

# Yoga

TODO présenter Yoga

<!--
Alors c'est décidé ▶
-->

---

# Je largue Apollo Server !

FIXME migration (how to selon la doc)

---

# Adhérence avec Apollo Server

 - Directives customs
 - TODO
