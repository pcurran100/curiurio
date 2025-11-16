# Curiosity

Static site built with React + Vite and deployed to GitHub Pages. The hero carousel features a wait list form that posts directly to Supabase.

## Local Development

1. Install dependencies: `npm install`
2. Create `.env.local` in the project root (this file is gitignored):

   ```
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

3. Start the dev server: `npm run dev`

## Deployment

GitHub Actions builds `dist` and publishes it to Pages. Add the same Supabase values as repository secrets named `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. The workflow injects them during the build so the wait list banner works in production.
