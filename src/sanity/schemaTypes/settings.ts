import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Paramètres globaux',
  type: 'document',
  fields: [
    defineField({
      name: 'heroActif',
      title: 'Hero Actif',
      type: 'string',
      options: {
        list: [
          { title: 'Emploi & Expertise', value: 'emploi' },
          { title: 'Consulting & Portfolio', value: 'consulting' },
        ],
      },
      initialValue: 'emploi',
    }),
    defineField({ name: 'nomComplet', title: 'Nom Complet', type: 'string' }),
    defineField({ name: 'titre', title: 'Titre professionnel', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'telephone', title: 'Téléphone', type: 'string' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'sectionPortfolioVisible', title: 'Afficher Portfolio', type: 'boolean', initialValue: true }),
    defineField({ name: 'sectionProjetVisible', title: 'Afficher Projets entrepreneurs', type: 'boolean', initialValue: true }),
  ],
})
