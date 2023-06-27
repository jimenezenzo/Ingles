import md from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

export default defineNuxtPlugin(() => {
  const renderer = md();
  renderer.use(markdownItAttrs)
  
  return {
    provide: {
      mdRenderer: renderer,
    },
  };
});