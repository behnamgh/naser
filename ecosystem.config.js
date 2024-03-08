module.exports = {
  apps: [
    {
      name: "server",
      script: "packages/server/dist",
      watch: false,
      env: {
        NODE_ENV: "development",
        MONGODB_URI: "mongodb://127.0.0.1:27017/naser",
      },
      env_production: {
        NODE_ENV: "production",
        MONGODB_URI: "mongodb://127.0.0.1:27017/naser",
      },
    },
  ],
};
