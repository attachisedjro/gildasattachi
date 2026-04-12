import { defineField, defineType } from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Pièce de Portfolio',
  type: 'document',
  fields: [
    defineField({ name: 'titre', title: 'Nom de la pièce', type: 'string' }),
    defineField({ name: 'client', title: 'Organisation associée', type: 'string' }),
    defineField({
      name: 'categorie',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          'Campagne visuelle',
          'Document stratégique',
          'Identité de marque',
          'Contenu digital',
        ],
      },
    }),
    defineField({
      name: 'mediaType',
      title: 'Type de média',
      type: 'string',
      options: { list: ['Galerie d\'images', 'PDF'] },
    }),
    defineField({ name: 'galerie', title: 'Galerie d\'images', type: 'array', of: [{ type: 'image' }], hidden: ({ document }) => document?.mediaType !== 'Galerie d\'images' }),
    defineField({ name: 'fichierPDF', title: 'Fichier PDF', type: 'file', options: { accept: '.pdf' }, hidden: ({ document }) => document?.mediaType !== 'PDF' }),
    defineField({ name: 'descriptionCourte', title: 'Description courte', type: 'text' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'lienExterne', title: 'Lien externe (optionnel)', type: 'url' }),
    defineField({ name: 'publie', title: 'Publié', type: 'boolean', initialValue: false }),
    defineField({ name: 'enAvant', title: 'Mis en avant (Home)', type: 'boolean', initialValue: false }),
  ],
})
