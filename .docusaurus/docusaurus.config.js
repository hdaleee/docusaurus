export default {
  "title": "publ Tech Blog",
  "tagline": "publ Tech Blog",
  "url": "https://hdaleee.netlify.app",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "../src/assets/logo.png",
  "organizationName": "cclss",
  "projectName": "tech blog",
  "themeConfig": {
    "navbar": {
      "title": "publ Tech Blog",
      "logo": {
        "alt": "publ Logo",
        "src": "../src/assets/logo.png"
      },
      "items": [
        {
          "href": "https://dev.publ.biz",
          "label": "go to publ",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": true
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/hdaleee/publ/publ-tech-blog/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/hdaleee/publ/publ-tech-blog/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};