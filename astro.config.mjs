// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightBlog()],
      title: "ruizdev7 Docs",
      social: {
        github: "https://github.com/ruizdev7",
      },
      sidebar: [
        {
          label: "ruizdev7 Docs",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "SRS 001",
              slug: "software_specifications/srs_001",
            },
          ],
        },
        {
          label: "Black Lantern Docs",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "SRS 001",
              slug: "software_specifications/srs_001",
            },
            {
              label: "SRS 002",
              slug: "software_specifications/srs_002",
            },
            {
              label: "SRS 003",
              slug: "software_specifications/srs_003",
            },
            {
              label: "SRS 004",
              slug: "software_specifications/srs_004",
            },
          ],
        },
      ],
    }),
  ],
});
