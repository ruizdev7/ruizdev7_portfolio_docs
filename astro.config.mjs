// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ruizdev7.com",
  base: "/", // Ajuste para manejar rutas correctamente
  integrations: [
    starlight({
      plugins: [
        starlightBlog({
          metrics: {
            readingTime: true,
            words: "total",
          },
        }),
      ],
      title: "ruizdev7 Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ruizdev7",
        },
      ],
      sidebar: [
        {
          label: "ImmiTrack - Software Specifications",
          items: [
            {
              label: "SRS 001 - Template",
              slug: "software_specifications/immitrack/srs_001",
            },
          ],
        },
        {
          label: "ruizdev7 Portfolio - Software Specifications",
          items: [
            {
              label: "SRS 001 - Authentication & Authorization",
              slug: "software_specifications/ruizdev7-portfolio/srs_001",
            },
            {
              label: "SRS 002 - Blog/Posts Management",
              slug: "software_specifications/ruizdev7-portfolio/srs_002",
            },
            {
              label: "SRS 003 - Pump Management & Analytics",
              slug: "software_specifications/ruizdev7-portfolio/srs_003",
            },
            {
              label: "SRS 004 - Contact Form & Messages",
              slug: "software_specifications/ruizdev7-portfolio/srs_004",
            },
            {
              label: "SRS 005 - Financial Calculator",
              slug: "software_specifications/ruizdev7-portfolio/srs_005",
            },
            {
              label: "SRS 006 - User Management",
              slug: "software_specifications/ruizdev7-portfolio/srs_006",
            },
            {
              label: "SRS 007 - Audit Logs & Security",
              slug: "software_specifications/ruizdev7-portfolio/srs_007",
            },
          ],
        },
      ],
    }),
  ],
});
