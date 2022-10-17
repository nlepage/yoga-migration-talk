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

# <img src="/graphql.png" class="inline w-12 mr-2"> GraphQL

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

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop

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

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop

<p class="text-center">
  <img src="/schema-envelop.png" class="inline w-130">
</p>

<!--
 - wrap pipeline execution
 - no http
 - flexibilité max
-->

---

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Plugins

<p class="text-center">
  <img src="/envelop-hub.png" class="inline w-180 shadow-lg">
</p>

---

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Plugins

 - `onPluginInit`
 - `onEnveloped`
 - `onParse`
 - `onValidate`
 - `onContext`
 - `useExtendedValidation`
 - `onExecute`
 - `onSubscribe`
 - `onSchemaChange`
 - ~~`onResolverCalled`~~ => `useOnResolve`

---

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur

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

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur

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

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur

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
  contextValue,
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
layout: bullets
---

# <img src="/yoga.svg" class="inline mr-2 w-12"> GraphQL Yoga

 - Démarré début 2022
 - Serveur GraphQL *fully featured*
 - Extensible
 - Facile à mettre en place

<style>
ul {
  font-size: 140%;
}
</style>

<!--
 - Lien Yoga v1
 - 1ère majeure fin mars
 - Fully featured
  - Subscriptions out of the box
  - Upload de fichier (sans ajout dépendance)
  - Playground
 - Facile à mettre en place
  - pas adhérence fmk http
  - tt type env (lambdas aws, workers cloudfare, SSR Next.js)
-->

---

# <img src="/yoga.svg" class="inline mr-2 w-12"> GraphQL Yoga

```js
import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { useGraphQlJit } from '@envelop/graphql-jit'
import { schema } from './schema'

const yoga = createYoga({
  schema,
  plugins: [useGraphQlJit()],
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})
```

<style>
code {
  font-size: 140%;
}
</style>

<!--
Alors c'est décidé ▶
-->

---
layout: fact
class: background-clouds
---

# Je largue<br>Apollo Server !

---

# La migration (sur le papier)

```diff
- import { ApolloServer } from 'apollo-server'
+ import { createServer } from 'node:http'
+ import { createYoga } from 'graphql-yoga'
+ import { useApolloServerErrors } from '@envelop/apollo-server-errors'
import { schema } from './schema'
 
- const server = new ApolloServer({
+ const yoga = createYoga({
  schema,
+  plugins: [useApolloServerErrors()],
})
 
+ const server = createServer(yoga)
 
server.listen(4000)
```

<style>
code {
  font-size: 140%;
}
</style>

---
layout: bullets
---

# Adhérences avec Apollo Server

 - Directives customs
 - Subscriptions ?
 - Batch HTTP
 - Resolvers génératrice ?!

<style>
ul {
  font-size: 140%;
}
</style>

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
