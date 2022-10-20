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
Bonjour à tous, Namaste,

Rassurez-vous, je n'ai pas préparé une présentation sur le yoga.

D'ailleurs là ça se sent peut-être mais je ne suis pas du tout détendu.

"Comment j'ai largué Apollo Server pour GraphQL Yoga"

Dans cette présentation, j'aimerais vous faire un retour d'expérience sur une migration de Apollo Server vers GraphQL Yoga.

- Est-ce que Yoga est une alternative sérieuse à Apollo Server ?
- Est-ce simple de migrer de l'un à l'autre ?
- Yoga nous fait de belles promesses, ces promesses sont-elles tenues ?

On va essayer de répondre à ces questions.

*Se présenter*

Cette migration de Apollo Server vers GraphQL Yoga, c'est un POC que j'ai réalisé sur un projet ▶
-->

---
layout: bullets
---

# Le projet

 - Développé par Zenika Nantes
 - Pour l'Institut Catholique de Vendée
 - Application de gestion

<style>
ul {
  font-size: 140%;
}
</style>

<!--
 - Depuis 2017
 - Petite équipe (2 à 4 développeurs)
 - À destination équipes support de l'école (compta...)

L'architecture technique du projet ▶
-->

---

# Le projet

<p class="text-center">
  <img src="/schema-projet.png" width="500" class="inline w-130">
</p>

<!--
- Frontends react (apollo client)
- Interrogent API GraphQL
- s'appuyait sur microservices au départ
- inadapté pour petite équipe (overhead)
- revenu à...
- API monolithique, répond besoins tous frontends
- stocke ses données Bdd postgres
- précise, déploit sur kubernetes managé chez G cloud, sauf pg managé

Petit rappel GraphQL ▶
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
type Query {
  students: [Students]!
}

type Student {
  id: ID!
  firstName: String!
  lastName: String!
  grades: [Grade!]!
}

# ...
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

<!--
 - langage req : permet client décrire...
 - schéma : serveur décrire opérations possibles sur API
 - différents type opérations
 - permet validation requête
 - env exec : coté serveur, s'appuie sur moteur graphql
 - faire tout tas chose pour nous
 - implémenter récupération donnée, sous forme fonctions, resolvers
 - tout cela...

Revenons à notre projet ▶
-->

---
layout: bullets
---

# L'API GraphQL du projet

 - +100 queries, +100 mutations, +250 types
 - Quelques subscriptions
 - Uploads de fichiers
 - D'abord Apollo Server v1 puis v2

<style>
ul {
  font-size: 140%;
}
</style>

<!--
- Notre API Graphql, vue de l'extérieur
- API taille moyenne
- schéma comporte
- également uploads, petite contrainte technique supplémentaire
- ...migrée sur ApolloServer V2, sur lequel restée depuis

si on replace dans historique des versions de apollo et de Yoga ▶
-->

---

# Historique de l'écosystème

<p class="text-center !mt-15">
  <img src="/frise.png" class="inline">
</p>

<!--
 - Yoga v1, petit projet oss (file upload, subscriptions, playground)
 - hésité, mais Apollo v2 arrivé, migré dessus
 - Yoga v1 maintenu pendant un temps, fini par mourir...
 - 2020...
 - Apollo v3, pas migré, manque temps, feature en moins...
 - début 2022 arrivé yoga v2, nouvelle alternative Apollo...
 - pour les dernières actus

Envelop ▶
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
 - envelop yoga même créateurs
 - 1ère release majeur en juillet même année
 - plugins utilisables avec nimp quel fmk gql
 - n'imp quel schéma, qque soit manière écrire (schema first...)
 - m'imp quel fmk http, ne connaît pas http
-->

---

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop

<p class="text-center">
  <img src="/schema-envelop.png" class="inline w-130">
</p>

<!--
 - pas un moteur graphql
 - wrap pipeline execution
 - permet plugins hook différentes phases
-->

---

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Plugins

<p class="text-center">
  <img src="/envelop-hub.png" class="inline w-180 shadow-lg">
</p>

<!--
On peut également nous même construire plugins ▶
-->

---

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Plugins

<p class="text-center">
  <img src="/envelop-lifecycle.png" class="inline w-200">
</p>

<!--
 - onPluginInit : Créer plugins à partir autres plugins
 - onSchemaChange : prévenu si change de schéma
 - trio onParse, onValidate, onExecute/onSubscribe
 - onEnveloped : initialisation du pipeline
 - onContext : Construction du contexte
 - useExtendedValidation : validation plus poussée appuyant sur contexte

comment construire serveur avec envelop?

exemple volontairement sans fmk avec node http ▶
-->

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

<!--
début relativement simple

getEnveloped permet créer pipeline exécution ▶
-->

---

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur

```js
import { createServer } from 'node:http'
import { GraphQLError } from 'graphql'
import { getEnveloped } from './envelop'
 
const httpServer = createServer(async (req, res) => {
  const initialContext = { req }

  const {
    parse,
    validate,
    contextFactory,
    execute,
    schema,
  } = getEnveloped(initialContext)

  // ...
})
```

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

<!--
 - Renvoie 4 fonctions dérouler exécution pipeline
-->

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
Et encore j'ai enlevé du code...

Trop bas niveau -> enter Yoga ▶
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
 - actuellement v3 en beta
 - Fully featured
 - Subscriptions out of the box
 - Upload de fichier (sans ajout dépendance)
 - Playground
 - Facile à mettre en place
 - Extensible (envelop)
 - pas adhérence fmk http
 - tt type env (Deno, lambdas aws, workers cloudfare, SSR Next.js)
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
Alors on en revient à mon projet.

Bien gentil de démarrer un petit serveur Yoga pour faire mumuse.

J'ai eu envie de voir si je pouvais utiliser Yoga sur un vrai projet.

Alors je me suis dit c'est décidé ▶
-->

---
layout: fact
class: background-clouds
---

# Je largue<br>Apollo Server !

<!--
Alors très bien, je vais dans la doc... je cherche...

Oui il y a une page migration depuis Apollo Server.

On me montre comment remplacer ApolloServer par Yoga.
-->

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

<!--
Présenté comme ça, semble pas compliqué

...

On me propose également des solutions, si j'ai une intégration...

Tombe bien, on utilise du Koa...

D'accord, mais moi avec mon projet qui a 5 ans d'existence...
-->

---
layout: bullets
---

# La vraie migration

<div v-click-hide>

 - Directives customs ?
 - Subscriptions ?
 - Batching HTTP ?
 - Resolvers génératrices ?!

</div>

<v-after>

 - **Directives customs ?**
 - Subscriptions ?
 - Batching HTTP ?
 - Resolvers génératrices ?!

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>

---

# Directives customs - Authentification

```graphql {|1|3|4}
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

<!--
▶▶▶

Pour faire fonctionner ces directives s'appuit sur graphql tools ▶
-->

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
export function addAuthExtension(schema) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_TYPE]: (type) => {
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
}
```

<!--
Configurer le plugin useGenericAuth ▶
-->

---

# Plugin envelop `useGenericAuth`

<p class="text-center !mt-0" v-click-hide>
  <img src="/useCustomAuth-1.png" class="inline w-180">
</p>

<p class="text-center !mt-0" v-after>
  <img src="/useCustomAuth-2.png" class="inline w-180">
</p>

<div v-click>

```js
const yoga = createYoga({
  schema: addAuthExtension(schema),
  plugins: [useCustomAuth()],
})
```

</div>

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

<!--
fais une erreur

...

et voilà j'ai maintenant la vérif mon authent qui se fait au moment validation étentue
-->

---
layout: bullets
---

# La vraie migration

 - **Directives customs ?**
 - Subscriptions ?
 - Batching HTTP ?
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

<div class="mt-6" v-click>

```js
const yoga = createYoga({
  schema: addCrudResolvers(addAuthExtension(schema)),
  plugins: [
    useCustomAuth(),
  ],
})
```

</div>

<style>
.slidev-code code {
  font-size: 130%;
}
</style>

---
layout: bullets
---

# La vraie migration

<div v-click-hide>

 - **Directives customs 🗸**
 - Subscriptions ?
 - Batching HTTP ?
 - Resolvers génératrices ?!

</div>

<v-after>

 - Directives customs 🗸
 - **Subscriptions ?**
 - Batching HTTP ?
 - Resolvers génératrices ?!

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>

---
layout: bullets
---

# Subscriptions - Quel protocole ?

 - WebSockets
 - Server-Sent Events (SSE)

<style>
ul {
  font-size: 140%;
}
</style>

---
layout: bullets
---

# Subscriptions - Yoga

 - Uniquement SSE par défaut (http/2 recommandé)
 - Web Sockets possible avec `graphql-ws`

<style>
ul {
  font-size: 140%;
}
</style>

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
 - Batching HTTP ?
 - Resolvers génératrices ?!

</div>

<v-after>

 - Directives customs 🗸
 - Subscriptions 🗸
 - **Batching HTTP ?**
 - Resolvers génératrices ?!

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>

---

# Batching HTTP

<p class="text-center">
  <img src="/batch-1.png" class="inline w-100">
</p>

---

# Batching HTTP

<p class="text-center">
  <img src="/batch-2.png" class="inline w-100">
</p>

---

# Batching HTTP Yoga

 - **À partir de Yoga v3**
 - Compatible avec le Batching HTTP Link de Apollo Client

<div class="mt-6">

```js
const yoga = createYoga({
  schema: addCrudResolvers(addAuthExtension(schema)),
  plugins: [
    useCustomAuth(),
  ],
  batching: true,
})
```

</div>

<style>
.slidev-code code, ul {
  font-size: 140%;
}
</style>

---
layout: bullets
---

# La vraie migration

<div v-click-hide>

 - Directives customs 🗸
 - Subscriptions 🗸
 - **Batching HTTP 🗸**
 - Resolvers génératrices ?!

</div>

<v-after>

 - Directives customs 🗸
 - Subscriptions 🗸
 - Batching HTTP 🗸
 - **Resolvers génératrices ?!**

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>

---

# Resolvers génératrices ?!

```js
const Query = {
  // ...
  * student(_, { id }) {
    return yield crud.students.get(id)
  }
  // ...
}

const Mutation = {
  // ...
  * updateStudent(_, { studentInput }) {
    return yield crud.students.update(studentInput)
  }
  // ...
}
```

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

---

# Resolvers génératrices ?!

 - Déduplication
 - Batching
 - Gestion du pool et des transactions Postgres

<div v-click class="mt-6">

```js
const yoga = createYoga({
  schema: wrapGeneratorResolvers(addCrudResolvers(addAuthExtension(schema))),
  plugins: [
    useCustomAuth(),
  ],
  batching: true,
})
```

</div>

<style>
.slidev-code code, ul {
  font-size: 140%;
}
</style>

<!--
 - Zoom sur postgres
-->

---

# Gestion du pool et des transactions Postgres

<p class="text-center">
  <img src="/postgres-1.png" class="inline w-150">
</p>

---

# Gestion du pool et des transactions Postgres

<p class="text-center">
  <img src="/postgres-2.png" class="inline w-150">
</p>

---

# Plugins Yoga

```ts
export type Plugin = EnvelopPlugin & {
  /**
   * Use this hook with your own risk. It is still experimental and may change in the future.
   * @internal
   */
  onRequest?: OnRequestHook<TServerContext>

  /**
   * Use this hook with your own risk. It is still experimental and may change in the future.
   * @internal
   */
  onResponse?: OnResponseHook<TServerContext>
}
```

<style>
.slidev-code code {
  font-size: 120%;
}
</style>

---

# Gestion du pool et des transactions Postgres

<p class="text-center">
  <img src="/usePostgres.png" class="inline w-200">
</p>

---

# Gestion du pool et des transactions Postgres

```js
const yoga = createYoga({
  schema: wrapGeneratorResolvers(addCrudResolvers(addAuthExtension(schema))),
  plugins: [
    useCustomAuth(),
    usePostgres(),
  ],
  batching: true,
})
```

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

---
layout: fact
class: background-clouds
---

# Migration réussie ?

<!--
 - Dans cadre projet, migration réussie
 - encore un WIP, pas parfait
   - subscriptions, sse pour cloud
   - pour le reste OK
   - même niveau fonctionnalité
   - transparent frontend
 - apprécié appuyer plugins et cycle de vie (authent, )
 - bémol: m'attendais à extension schéma
 - Pas encore viable pour un gros projet ayant besoin de stabilité
 - Yoga et Envelop vont encore évoluer énormément, PROMETTEUR
 - Bien pour un projet de taille petite/moyenne ou on veut essayer des choses
-->

---
layout: bullets
---

# What's next ?

 - Support de `@defer` et `@stream`
 - Support officiel de Bun !

<style>
ul {
  font-size: 140%;
}
</style>

---

# The Guild

<p class="text-center">
  <img src="/guild.png" class="inline w-150">
</p>

<!--
groupe de développeurs opensource
ne construit pas de produit
projets restent la propriété de leur créateur

tire l'écosystème vers le haut
-->

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
