export interface BlogPost {
    id: string,
    title: string,
    content: string,
    excerpt: string,
    date: string,
    readTime: string,
    imageUrl: string,
    author: {
        name: string,
        avatar: string,
        bio: string,
    },
    tags: string[],
    category?: string
}

export const blog_data: BlogPost[] = [
  {
    id: 'architecture-applications-fullstack',
    title: 'Architecture des applications Full Stack modernes',
    excerpt: 'Explorez les meilleures architectures pour construire des applications web performantes et évolutives en 2024.',
    content: `
  # Architecture des applications Full Stack modernes

  Construire une application Full Stack efficace nécessite une architecture bien pensée. Voici les modèles les plus utilisés :

  ## 1. Architecture en couches (Layered)

  - Présentation
  - Logique métier
  - Accès aux données

  ## 2. Architecture basée sur les services (SOA)

  - Modules découplés
  - Scalabilité facilitée

  ## 3. Microservices

  - Autonomie des composants
  - Déploiement indépendant

  ## Technologies recommandées

  - Frontend : React, Vue
  - Backend : Node.js, Express
  - DB : MongoDB, PostgreSQL

  ## Conclusion

  Choisissez l’architecture selon la taille du projet et les exigences techniques.
    `,
    date: '01 May 2025',
    readTime: '15 min',
    imageUrl: '/images/full-stack-architecture.jpeg',
    author: {
      name: 'Amina',
      avatar: '/images/avatar.jpeg',
      bio: 'Développeuse Full Stack spécialisée dans les architectures modernes et la scalabilité des systèmes.'
    },
    tags: ['Architecture', 'Full Stack', 'Backend'],
    category: 'Development'
  },
  {
    id: 'nodejs-performance-optimisation',
    title: 'Optimisation des performances avec Node.js',
    excerpt: 'Améliorez les performances de vos applications backend Node.js grâce à des techniques éprouvées.',
    content: `
  # Optimisation des performances avec Node.js

  Node.js est rapide, mais quelques pratiques peuvent considérablement booster ses performances :

  ## 1. Utilisation de la mémoire

  - Éviter les fuites
  - Monitorer avec Heap snapshots

  ## 2. Gestion des requêtes

  - Mise en cache avec Redis
  - Load balancing via PM2 ou Nginx

  ## 3. Asynchronisme intelligent

  - Utiliser async/await
  - Eviter les blocages (ex: calculs lourds)

  ## 4. Exemple

  \`\`\`ts
  app.get('/heavy', async (req, res) => {
    const result = await heavyComputation()
    res.send(result)
  })
  \`\`\`

  ## Conclusion

  Combinez les outils de profiling avec une écriture de code efficace pour des résultats performants.
    `,
    date: '25 Jun 2025',
    readTime: '12 min',
    imageUrl: '/images/nodejs-optimization.jpeg',
    author: {
      name: 'Amina',
      avatar: '/images/avatar.jpeg',
      bio: 'Développeuse backend passionnée par Node.js, la performance et l’optimisation serveur.'
    },
    tags: ['Node.js', 'Performance', 'Backend'],
    category: 'Backend'
  },
  {
    id: 'integration-api-avec-react',
    title: 'Intégration d’API REST et GraphQL avec React',
    excerpt: 'Comparez les approches REST et GraphQL pour intégrer des APIs dans vos applications React.',
    content: `
  # Intégration d’API REST et GraphQL avec React

  React offre une grande flexibilité pour consommer des APIs. Voici un comparatif rapide entre REST et GraphQL :

  ## 1. REST

  - Requêtes HTTP classiques (GET, POST, PUT, DELETE)
  - Couplé à Axios ou Fetch

  ### Exemple :

  \`\`\`ts
  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  \`\`\`

  ## 2. GraphQL

  - Requête unique, typée
  - Utilisation d’Apollo Client

  ### Exemple :

  \`\`\`ts
  const { data } = useQuery(GET_POSTS)
  \`\`\`

  ## Conclusion

  REST reste simple et efficace pour les projets classiques. GraphQL est puissant pour les interfaces complexes.
    `,
    date: '02 Jul 2025',
    readTime: '2 min',
    imageUrl: '/images/react-api-integration.png',
    author: {
      name: 'Amina',
      avatar: '/images/avatar.jpeg',
      bio: 'Développeuse frontend experte en intégration d’API et en technologies modernes React.'
    },
    tags: ['React', 'API', 'GraphQL', 'REST'],
    category: 'Frontend'
  }
];
