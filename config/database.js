module.exports = ({ env }) => {
  const isProduction = env("NODE_ENV") === "production"; // تحديد إذا كنا في بيئة الإنتاج أو لا

  return {
    connection: {
      client: "mysql",
      connection: {
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: isProduction ? { rejectUnauthorized: true } : false, // تعطيل SSL على localhost
      },
      debug: false,
    },
  };
};
