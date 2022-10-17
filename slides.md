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
Namaste
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

<!--
 - Microservice au départ, inadapté pour petite équipe (overhead)
-->

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

# L'API GraphQL du projet

 - +100 queries, +100 mutations, +250 types
 - Quelques subscriptions
 - Upload de fichiers
 - D'abord Apollo Server v1 puis v2

<style>
ul {
  font-size: 140%;
}
</style>

---

# Historique de l'écosystème

<p class="text-center !mt-15">
  <img src="/frise.png" class="inline">
</p>

<!--
 - Yoga v1 (Fully featured, file upload, subscriptions, playground)
 - pas passé sur Apollo 3
 - Mentionner express-graphql

Transition sur Envelop ?
-->

---
layout: bullets
---

# Envelop <img src="/envelop.svg" class="inline ml-2 w-12">

 - Démarré début 2021
 - Système de plugins pour GraphQL
 - *Framework agnostic*

<style>
ul {
  font-size: 140%;
}
</style>

<!--
 - 1ère release majeur en juillet 2021
 - plugins utilisables avec nimp quel framework de server ou schéma
-->

---

# Envelop <img src="/envelop.svg" class="inline ml-2 w-12">

<p class="text-center">
  <img src="/schema-envelop.png" class="inline w-130">
</p>

<!--
 - wrap pipeline execution
 - no http
 - flexibilité max
-->

---

# Envelop <img src="/envelop.svg" class="inline ml-2 w-12">

```js
import { envelop, useSchema } from '@envelop/core'
import { useParserCache } from '@envelop/parser-cache'
import { useValidationCache } from '@envelop/validation-cache'
import { schema } from './schema
 
export const getEnveloped = envelop({
  plugins: [
    useSchema(schema),
    useParserCache(),
    useValidationCache()
  ]
})
```

<style>
code {
  font-size: 140%;
}
</style>

---

# Envelop <img src="/envelop.svg" class="inline ml-2 w-12">

```js
import { createServer } from 'node:http'
import { GraphQLError } from 'graphql'
import { getEnveloped } from './envelop'
 
const httpServer = createServer(async (req, res) => {
  const {
    parse,
    validate,
    contextFactory,
    execute,
    schema
  } = getEnveloped({ req })

  // ...
})
```

<style>
code {
  font-size: 140%;
}
</style>

---

# Envelop <img src="/envelop.svg" class="inline ml-2 w-12">

```js
const { query, variables } = JSON.parse(req.body)
const document = parse(query)
const validationErrors = validate(schema, document)

if (validationErrors.length > 0) {
  return res.end(JSON.stringify({ errors: validationErrors }))
}

const contextValue = await contextFactory()
const result = await execute({
  document,
  schema,
  variableValues: variables,
  contextValue
})

res.end(JSON.stringify(result))
```

<style>
code {
  font-size: 140%;
}
</style>

<!--
 - plus simple Helix
 - Trop bas niveau -> transition Yoga
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
