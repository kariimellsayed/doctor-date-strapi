module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8000), // استخدم 8000 بدلًا من 1337
  app: {
    keys: env.array("APP_KEYS"),
  },
});
