// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "ruizdev7 Docs",
      social: {
        github: "https://github.com/ruizdev7",
      },
      sidebar: [
        {
          label: "Como instalar Docker",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide how to install docker on Ubuntu",
              slug: "guides/how_implement_docker",
            },
            {
              label: "Example Guide how to install docker on Ubuntu",
              slug: "guides/how_implement_docker",
            },
            {
              label: "Example Guide how to install docker on Ubuntu",
              slug: "guides/how_implement_docker",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
