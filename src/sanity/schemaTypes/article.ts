import { defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'titre', title: 'Titre', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titre' } }),
    defineField({
      name: 'pilier',
      title: 'Pilier éditorial',
      type: 'string',
      options: {
        list: [
          { title: 'Gestion du changement', value: 'changement' },
          { title: 'Marque employeur',       value: 'employeur' },
          { title: 'Communication interne',  value: 'interne' },
          { title: 'Communication de crise', value: 'crise' },
          { title: 'Relations publiques',    value: 'rp' },
          { title: 'Marketing numérique',    value: 'numerique' },
          { title: 'Leadership & management',value: 'leadership' },
        ],
      },
    }),
    defineField({ name: 'imageUne', title: 'Image à la une', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'resume', title: 'Résumé (max 160 car.)', type: 'text', rows: 3 }),
    defineField({ name: 'corps', title: 'Corps de l\'article', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'datePublication', title: 'Date de publication', type: 'date' }),
    defineField({ name: 'langue', title: 'Langue', type: 'string', options: { list: ['Français', 'Anglais'] }, initialValue: 'Français' }),
    defineField({ name: 'publie', title: 'Publié', type: 'boolean', initialValue: false }),
    defineField({ name: 'enAvant', title: 'Mis en avant (Home)', type: 'boolean', initialValue: false }),
  ],
})
