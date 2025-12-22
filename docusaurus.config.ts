import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Juraj Štefanić",
  tagline: "Software Engineer. Technical Writer.",
  favicon: "img/favicon.ico",
  url: "https://stefanicjuraj.github.io",
  baseUrl: "/",
  organizationName: "stefanicjuraj",
  projectName: "stefanicjuraj.github.io",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "docs",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "",
      items: [
        // {
        //   type: "doc",
        //   docId: "work",
        //   position: "left",
        //   label: "Work",
        // },
        // {
        //   to: "/blog",
        //   position: "left",
        //   label: "Posts",
        // },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
