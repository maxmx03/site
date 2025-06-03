// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  image: {
   service: passthroughImageService(),
 },
  integrations: [
    starlight({
      title: "Milianor's Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [{ label: "Example Guide", slug: "guides/example" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Curso de Lua",
          items: [
            {
              label: "Escolhendo um editor de texto",
              autogenerate: { directory: "lua-tutorial/editor" },
            },
            {
              label: "Primeiros passos",
              autogenerate: { directory: "lua-tutorial/first-steps" },
            },
            {
              label: "Tipos de dados",
              items: [
                { slug: "lua-tutorial/data-types/data-types" },
                {
                  label: "Números",
                  autogenerate: {
                    directory: "lua-tutorial/data-types/numbers",
                  },
                },
                {
                  label: "Strings",
                  autogenerate: {
                    directory: "lua-tutorial/data-types/strings",
                  },
                },
              ],
            },
            {
              label: "Bibliotecas",
              autogenerate: { directory: "lua-tutorial/libraries" },
            },
          ],
        },
      ],
    }),
  ],
});
