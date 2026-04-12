import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'client', title: 'Nom de l\'organisation', type: 'string' }),
    defineField({ name: 'secteur', title: 'Secteur', type: 'string' }),
    defineField({ name: 'pays', title: 'Pays', type: 'string' }),
    defineField({ name: 'annees', title: 'Années (ex: 2021-2023)', type: 'string' }),
    defineField({ name: 'defi', title: 'Le défi', type: 'text' }),
    defineField({ name: 'approche', title: 'L\'approche', type: 'text' }),
    defineField({ name: 'resultatChiffre', title: 'Résultat chiffré', type: 'string' }),
    defineField({ name: 'descriptionResultat', title: 'Contexte du résultat', type: 'text' }),
    defineField({ name: 'methodologie', title: 'Méthodologie', type: 'text' }),
    defineField({
      name: 'temoignage',
      title: 'Témoignage',
      type: 'object',
      fields: [
        { name: 'texte', title: 'Texte', type: 'text' },
        { name: 'auteur', title: 'Auteur', type: 'string' },
        { name: 'role', title: 'Rôle', type: 'string' },
      ],
    }),
    defineField({
      name: 'typeProjet',
      title: 'Type de projet',
      type: 'string',
      options: { list: ['Emploi', 'Entrepreneurial'] },
    }),
    defineField({ name: 'publie', title: 'Publié', type: 'boolean', initialValue: false }),
    defineField({ name: 'enAvant', title: 'Mis en avant (Home)', type: 'boolean', initialValue: false }),
  ],
})
