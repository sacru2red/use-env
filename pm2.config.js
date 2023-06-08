module.exports = {
  apps: [
    {
      name: 'my-app',
      script: './src/server.js',
      env: {
        NODE_ENV: 'dev',
      },
      env_production: {
        NODE_ENV: 'prod',
      },
    },
  ],
}
