export const config = {
  github: {
    login: "tiggerhat", // github login name, not user name
    repo: "tiggerhat.github.io", //"urodele",
    logInUrl: "https://github-login.cumthuangyj.workers.dev/api/oauth/authorize?redirect_uri=https://tiggerhat.github.io/login",
    logInAuthUrl: "https://github-login.cumthuangyj.workers.dev/api/oauth/token",
  },
  head: {
    title: "Knowbit's Blog",
    brand: "Knowbit",
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
