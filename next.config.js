/**
 * Use Next export to produce a static `out/` directory that can be deployed to GitHub Pages.
 * Note: this disables some Next runtime features. If you prefer Vercel for full Next support,
 * use the instructions in README.md instead.
 */
module.exports = {
  output: 'export',
  // images optimization isn't available for static export
  images: { unoptimized: true },
  trailingSlash: true,
}
