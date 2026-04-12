import { defineField, defineType } from 'sanity'

export const conference = defineType({
  name: 'conference',
  title: 'Conférence / Intervention',
  type: 'document',
  fields: [
    defineField({ name: 'titre', title: 'Nom de l\'intervention', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'organisateur', title: 'Nom de l\'organisation', type: 'string' }),
    defineField({ name: 'description', title: 'Sujet, contexte, public', type: 'text' }),
    defineField({ name: 'lienVideo', title: 'Lien vidéo (optionnel)', type: 'url' }),
    defineField({ name: 'publie', title: 'Publié', type: 'boolean', initialValue: false }),
  ],
})
