
import {defineField, defineType} from 'sanity'

export const insight = defineType({
  name: 'insight',
  title: 'Insights',
  type: 'document',

  fields: [
    defineField({
      name: 'postType',
      title: 'Post Type',
      type: 'string',
      options: {list: ['Blog', 'Article', 'Report']},
      initialValue: 'Article',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'business',
      type: 'string',
      options: {list: ['Private Credit', 'Investment Banking', 'Special Situation']},
      description: 'Business shown on the insight card and in the business filter.',
    }),
    defineField({
      name: 'spotlight',
      title: 'Spotlight',
      type: 'boolean',
      initialValue: false,
      description: 'Feature this insight at the top of the insights page. If multiple are selected, the newest is used. If none are selected, the newest insight is used.',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),

    defineField({
      name: 'content',
      title: 'Article Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
  ],
})
