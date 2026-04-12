import { defineField, defineType } from 'sanity'

export const livre = defineType({
  name: 'livre',
  title: 'Livre',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'sousTitre',
      title: 'Sous-titre',
      type: 'string',
    }),
    defineField({
      name: 'couverture',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'annee',
      title: 'Année de publication',
      type: 'number',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'editeur',
      title: 'Éditeur',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'extrait',
      title: 'Extrait (accroche courte)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'lienAchat',
      title: "Lien d'achat",
      type: 'url',
    }),
    defineField({
      name: 'ordre',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: '1 = affiché en premier',
      initialValue: 1,
    }),
  ],
  preview: {
    select: { title: 'titre', subtitle: 'annee', media: 'couverture' },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle?.toString(), media }
    },
  },
  orderings: [{ title: 'Année (récent)', name: 'anneeDesc', by: [{ field: 'annee', direction: 'desc' }] }],
})
