// src/content/config.js
// Using JavaScript for content collection configuration

// Import utilities from 'astro:content' and 'zod' for schema validation
import { z, defineCollection } from 'astro:content';

// Define the schema for the blog collection using Zod
const blogCollection = defineCollection({
  // Type validation (schema) for the frontmatter of blog posts
  schema: z.object({
    // Title of the blog post (required string)
    title: z.string(),
    // Short description for SEO and previews (required string)
    description: z.string(),
    // Publication date (required date object)
    pubDate: z.date(),
    // Optional author field (string), defaults to 'Redi Roma BnB Team' if not provided
    author: z.string().optional().default('Redi Roma BnB Team'),
    // Optional cover image object
    image: z.object({
        url: z.string(), // URL of the image
        alt: z.string()  // Alt text for the image
    }).optional(),
    // Optional array of tags (strings)
    tags: z.array(z.string()).optional(),
    // Optional draft status (boolean), defaults to false (published)
    draft: z.boolean().optional().default(false),
  }),
});

// Export the collections object, registering the 'blog' collection
export const collections = {
  'blog': blogCollection,
  // Add other collections here if needed, e.g.:
  // 'rooms': roomCollection,
};
