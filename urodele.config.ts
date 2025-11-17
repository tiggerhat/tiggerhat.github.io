export const config = {
  github: {
    login: "tiggerhat", // github login name, not user name
    repo: "tiggerhat.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "Knowbit's Blog",
    brand: "Knowbit's Blog",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© Knowbit",
    copyrightUrl: "https://tiggerhat.github.io",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
