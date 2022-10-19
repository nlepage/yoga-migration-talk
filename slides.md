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

<p class="text-center">
  <img src="/envelop-lifecycle.png" class="inline w-200">
</p>

---

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur

```js
import * as GraphQLJS from 'graphql'
import { envelop, useEngine, useSchema } from '@envelop/core'
import { useParserCache } from '@envelop/parser-cache'
import { useValidationCache } from '@envelop/validation-cache'
import { schema } from './schema
 
export const getEnveloped = envelop({
  plugins: [
    useEngine(GraphQLJS),
    useSchema(schema),
    useParserCache(),
    useValidationCache()
  ]
})
```

<style>
.slidev-code code {
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
.slidev-code code {
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
.slidev-code code {
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
.slidev-code code {
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
+   plugins: [useApolloServerErrors()],
  })
 
+ const server = createServer(yoga)
 
  server.listen(4000)
```

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

---
layout: bullets
---

# La vraie migration

<div v-click-hide>

 - Directives customs ?
 - Subscriptions ?
 - Batch HTTP ?
 - Resolvers génératrices ?!

</div>

<v-after>

 - **Directives customs ?**
 - Subscriptions ?
 - Batch HTTP ?
 - Resolvers génératrices ?!

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>

---

# Directives customs - Authentification

```graphql {|1|3|4|}
type Query @permission(permissions: "base") {
  #...
  users(filter: UserFilter): [User!]! @permission(permissions: "admin")
  version: String! @public
  #...
}

directive @permission(
  permissions: [String!]!
) on OBJECT | FIELD_DEFINITION

directive @public on FIELD_DEFINITION
```

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

---

# Directives customs - Authentification

Implémentées grâce à `mapSchema` (anciennement `SchemaDirectiveVisitor`) de **GraphQL Tools**

```js {|12-18}
mapSchema(schema, {
  [MapperKind.OBJECT_TYPE]: (type) => {
    const directive = getDirective(schema, type, 'permission')?.[0]
    // ...
  },
  [MapperKind.FIELD]: (field, fieldName) => {
    const directive = getDirective(schema, field, 'permissions')?.[0]
    if (!directive) return undefined

    const { permissions } = directive

    return { ...field, resolve: (parent, args, context, info) => {
      const user = context.user

      // Vérification des permissions...

      return field.resolve(parent, args, context, info)
    } }
  },
})
```

<style>
.slidev-code code {
  font-size: 130%;
}
</style>

<!--
 - User résolu au préalable dans fonction de contexte
 - Mal aisé
 - Défaut : Vérification au moment de l'exécution du resolver
-->

---

# Plugin envelop `useGenericAuth`

<p class="text-center">
  <img src="/useGenericAuth.png" class="inline w-180">
</p>

 - `resolveUserFn` : Fonction de résolution de l'utilisateur
 - `directiveOrExtensionFieldName` : Nom de directive ou de champ d'extension
 - `validateUser` : Fonction de validation *custom*

<style>
ul {
  font-size: 120%;
}
</style>

<!--
 - différents mode fonctionnement
 - protect-granular
-->

---

# Plugin envelop `useGenericAuth`

```js {|11-14|16-19}
mapSchema(schema, {
  [MapperKind.OBJECT_TYPE]: (type) => {
    const directive = getDirective(schema, type, 'permission')?.[0]
    // ...
  },
  [MapperKind.OBJECT_FIELD]: (field, fieldName, typeName) => {
    const directive = getDirective(schema, field, 'permission')?.[0]
    const publicDirective = getDirective(schema, field, 'public')?.[0]
    if (!directive && !publicDirective) return undefined

    if (publicDirective) {
      const { permissions, ...extensions } = field.extensions
      return { ...field, extensions }
    }

    return {
      ...field,
      extensions: { ...field.extensions, permissions: directive.permissions },
    }
  },
})
```

<style>
.slidev-code code {
  font-size: 130%;
}
</style>

---

# Plugin envelop `useGenericAuth`

<p class="text-center">
  <img src="/useCustomAuth.png" class="inline w-180">
</p>

```js
const yoga = createYoga({
  schema,
  plugins: [useCustomAuth()],
})
```

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

---
layout: bullets
---

# La vraie migration

 - **Directives customs ?**
 - Subscriptions ?
 - Batch HTTP ?
 - Resolvers génératrices ?!

<style>
ul {
  font-size: 140%;
}
</style>

---

# Directives customs - CRUD

```graphql
type Query {
  # ...
  pathway(id: Int!): Pathway @crud(name: "pathways", operation: "get", args: ":id")
  #...
}

type Pathway {
  # ...
  units: [Unit!]! @crud(name: "units", operation: "find", args: "{ pathwayId: ':parent.id' }")
  #...
}

directive @crud(
  name: String!
  operation: String!
  args: [String!]
) on FIELD_DEFINITION
```

<style>
.slidev-code code {
  font-size: 120%;
}
</style>

---

# Directives customs - CRUD

```js
export function addCrudResolvers(schema) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (field, fieldName) => {
      const directive = getDirective(schema, field, 'crud')?.[0]
      if (!directive) return undefined

      const { name, operation, args: crudArgs } = directive

      return { ...field, resolve: (parent, args, context) => {
        // implémentation...
      } }
    },
  })
}
```

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

---

# Directives customs - CRUD

```js
export function useCrud() {
  return {
    onSchemaChange({ schema, replaceSchema }) {
      replaceSchema(addCrudResolvers(schema))
    },
  }
}
```

<div class="mt-6">

```js
const yoga = createYoga({
  schema,
  plugins: [
    useCustomAuth(),
    useCrud(),
  ],
})
```

</div>

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

---
layout: bullets
---

# La vraie migration

<div v-click-hide>

 - **Directives customs 🗸**
 - Subscriptions ?
 - Batch HTTP ?
 - Resolvers génératrices ?!

</div>

<v-after>

 - Directives customs 🗸
 - **Subscriptions ?**
 - Batch HTTP ?
 - Resolvers génératrices ?!

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>

---

# Subscriptions

TODO

---

# Subscriptions - PubSub

<p class="text-center">
  <img src="/pubSub.png" class="inline w-180">
</p>

---

# Subscriptions - PubSub

```diff
- import { PubSub } from 'apollo-server'
+ import { createPubSub } from 'graphql-yoga'

- export const pubSub = new PubSub()
+ export const pubSub = createPubSub()
```

<div class="mt-6">

```js
const Mutation = {
  //...
  async generateBill(parent, { id }, context) {
    // Ça prend du temps...

    pubSub.publish('GENERATED_BILL', { generatedBill: { id } })
  },
  //...
}
```

</div>

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

---

# Subscriptions - PubSub

```diff
- import { withFilter } from 'apollo-server'
+ import { pipe, filter } from 'graphql-yoga'

  const Subscription = {
    generatedBill: {
-     subscribe: withFilter(
-       () => pubSub.asyncIterator('GENERATED_BILL'),
-       (payload, variables) => payload.generatedBill.id === variables.id,
-     ),
+     subscribe: pipe(
+       pubSub.subscribe('GENERATED_BILL'),
+       filter(
+         (payload, variables) => payload.generatedBill.id === variables.id,
+       ),
+     ),
    },
  }
```

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

---
layout: bullets
---

# La vraie migration

<div v-click-hide>

 - Directives customs 🗸
 - **Subscriptions 🗸**
 - Batch HTTP ?
 - Resolvers génératrices ?!

</div>

<v-after>

 - Directives customs 🗸
 - Subscriptions 🗸
 - **Batch HTTP ?**
 - Resolvers génératrices ?!

</v-after>

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
