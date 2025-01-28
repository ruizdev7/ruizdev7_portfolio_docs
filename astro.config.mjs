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
          label: "Who I am ? 🤓",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Introducction",
              slug: "guides/let_me_introduce_myself",
            },
          ],
        },
        {
          label: "Docker 🐳",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "20 Docker Commands",
              slug: "guides/docker_commands",
            },
            {
              slug: "guides/creating_dockerfile",
              label: "creating-Dockerfile",
            },
          ],
        },
        {
          label: "SRS",
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
