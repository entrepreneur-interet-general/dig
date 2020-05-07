sidebar = [
   {
     title: 'La Promotion',
     collapsable: true,
     children: [
       'accompagnement',
       'planning',
       'restitutions',
       'outils',
       'tiers-lieu',
     ]
   },
  {
    title: 'Programme EIG',
    collapsable: true,
    children: [
      'ecosysteme',
      'ingenerie-programme',
      'reseau-eig'
    ]
  },
    {
    title: 'Ressources',
    collapsable: true,
    children: [
      'referencetiels',
      'design',
      'developpement',
      'opensource-licences',
      'opendata',
      'algorithmes-publics',
      'securite'
    ]
  },
     {
     title: 'Bonnes pratiques',
     collapsable: true,
     children: [
      'accueil-eig',
      'preparation-defi',
      'mesure-impact',
      'concevoir',
      'prototyper',
      'ouvrir-publier',
      'communication',
      'documentation-defis',
      'perennisation-defis'
     ]
   },
]

module.exports = {
  theme: 'gouv-fr',
  title: 'Documentation DIG',
  description: "La documentation interne du programme Designers d'Intérêt Général.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0053b3' }]
  ],
  themeConfig: {
    sidebar: sidebar,
    sidebarDepth: 1,
    docsDir: ".",
    repo: 'entrepreneur-interet-general/dig',
    repoLabel: 'Dépôt Git',
    editLinks: true,
    editLinkText: 'Modifier cette page',
    nav: [
      { text: 'Site web', link: 'https://entrepreneur-interet-general.etalab.gouv.fr' },
    ]
  }
}
