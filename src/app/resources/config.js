const baseURL = "localhost";

const i18n = false;

const i18nOptions = {
  locales: ["en"], // A list of all locales that are supported, e.g. ['en','id']
  defaultLocale: "en", // Locale used by default and as a fallback
};

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": false,
  "/gallery": false,
};

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": false,
};

const effects = {
  mask: "cursor", // none | cursor | topLeft | topRight | bottomLeft | bottomRight
  gradient: {
    display: true,
    opacity: 0.8, // 0 - 1
  },
  dots: {
    display: true,
    opacity: 0.4, // 0 - 1
    size: "24", // 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 634
  },
  lines: {
    display: false,
  },
};

const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
};

const display = {
  location: true,
  time: true,
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: "topRight", // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
      display: true,
      opacity: 0.6, // 0 - 1
    },
    dots: {
      display: false,
    },
    lines: {
      display: false,
    },
  },
};

export {
  baseURL,
  display,
  effects,
  i18n,
  i18nOptions,
  mailchimp,
  protectedRoutes,
  routes,
  style,
};
