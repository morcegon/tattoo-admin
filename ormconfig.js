const SnakeNamingStrategy = require("typeorm-naming-strategies")
  .SnakeNamingStrategy;

module.exports = {
  name: "default",
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "123mudar",
  database: "tattoo-admin",
  synchronize: true,
  logging: false,
  entities: ["src/models/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
  namingStrategy: new SnakeNamingStrategy(),
};
