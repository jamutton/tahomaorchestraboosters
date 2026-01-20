const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function (eleventyConfig) {

  // Eleventy Navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Date filter (handles JS Date objects and ISO strings)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const d = (typeof dateObj === "string") ? DateTime.fromISO(dateObj) : DateTime.fromJSDate(dateObj);
    return d.setZone("utc").toFormat("MMMM dd, yyyy");
  });

  // Limit filter
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  // Image optimization shortcode
  eleventyConfig.addNunjucksAsyncShortcode("image", async function (src, alt, sizes) {
    if (!src) return "";

    let fullSrc = src.startsWith("/") ? path.join(".", src) : src;

    let metadata = await Image(fullSrc, {
      widths: [300, 600, 1200],
      formats: ["avif", "webp", "jpeg"],
      outputDir: "./_site/img/",
      urlPath: "/img/"
    });

    let imageAttributes = {
      alt,
      sizes: sizes || "100vw",
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // Pass-throughs
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("static/img");
  eleventyConfig.addPassthroughCopy("admin/");
  eleventyConfig.addPassthroughCopy({ "static/assets/css/style.css": "assets/css/style.css" });

  return {
    templateFormats: ["md", "njk", "liquid"],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
