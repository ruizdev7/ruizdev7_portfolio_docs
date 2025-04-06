// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  base: "/", // Ajuste para manejar rutas correctamente
  integrations: [
    starlight({
      plugins: [starlightBlog()],
      title: "ruizdev7 Docs",
      social: {
        github: "https://github.com/ruizdev7",
      },
      sidebar: [
        {
          label: "Black Lantern Docs",
          items: [
            {
              label: "SRS 001",
              slug: "software_specifications/black-lantern/srs_001", // Ensure this slug corresponds to an existing file or directory.
            },
            {
              label: "SRS 002",
              slug: "software_specifications/black-lantern/srs_002",
            },
            {
              label: "SRS 003",
              slug: "software_specifications/black-lantern/srs_003",
            },
            {
              label: "SRS 004",
              slug: "software_specifications/black-lantern/srs_004",
            },
          ],
        },
      ],
    }),
  ],
});
