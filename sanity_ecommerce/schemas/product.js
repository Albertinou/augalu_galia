export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Produkto pavadinimas',
      type: 'string',
    },
    {
      name: 'name2',
      title: 'Trumpas aprašymas po produktu',
      type: 'string',
    },
    {
      name: 'name3',
      title: 'Maisto - ne maisto papildas',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Produkto eilės numeris',
      type: 'number',
    },
    {
      name: 'slug',
      title: 'Čia nieko nerašyti! Spausti "Generate"',
      type: 'slug',
      options: {
        source: 'name',
        maxlength: 90,
      },
    },
    {
      name: 'price',
      title: 'Kaina',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Detalus produkto aprašymas',
      type: 'string',
    },
    
  ],
  orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [
        {field: 'releaseDate', direction: 'desc'}
      ]
    },
    {
      title: 'Release Date, Old',
      name: 'releaseDateAsc',
      by: [
        {field: 'releaseDate', direction: 'asc'}
      ]
    },
  ]
}
