---
theme: apple-basic
highlighter: shiki
lineNumbers: false
title: Comment j'ai largué Apollo Server pour GraphQL Yoga
colorSchema: light
info: |
  ## Comment j'ai largué Apollo Server pour GraphQL Yoga

  [Sources](https://github.com/nlepage/yoga-migration-talk)
css: unocss
routerMode: hash
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

<p class="text-center">
  <img src="/schema-projet.png" width="500" class="inline w-130">
</p>

---

# GraphQL <img src="/graphql.png" class="inline w-12 ml-2">

<div class="flex gap-10">

```graphql
query getStudents {
  students {
    id, firstName, lastName
    grades {
      id, grade
      subject {
        id, name
      }
    }
  }
}
```

```graphql
type Student {
  id: ID!
  firstName: String!
  lastName: String!
  grades: [Grade!]!
}

type Grade {
  id: ID!
  grade: Float!
  subject: Subject!
}
```

</div>

 - Langage de requêtage + Schéma
 - Environnement d'exécution
 - Spécification opensource


<style>
.slidev-code-wrapper {
  flex: 1;
}

ul {
  font-size: 140%;
}
</style>

---
layout: bullets
---

# L'API GraphQL

 - +100 queries, +100 mutations, +200 types
 - Quelques subscriptions
 - Uploads de fichier ?

<style>
ul {
  font-size: 140%;
}
</style>

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

---
layout: intro
class: background-clouds
---

<h1 class="text-center">
  Merci !
</h1>

<p class="text-center !mt-10">
  <img class="inline" src="/qrcode.png">
</p>
