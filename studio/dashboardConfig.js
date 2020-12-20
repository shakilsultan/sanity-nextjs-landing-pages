export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdf7ec5b88811d58d84ebd5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-92k6q23r',
                  apiId: '1e5317e7-919a-4885-b8fd-d615d2487ed9'
                },
                {
                  buildHookId: '5fdf7ec5ab133d9f8f3a6d85',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-i5fqyhb2',
                  apiId: '27c98853-2e2f-4980-aaf2-ebcf9ee11f14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shakilsultan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-i5fqyhb2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
