const environments = {};

environments.staging = {
  port: 3000,
  envName: 'staging',
};

environments.production = {
  port: 5000,
  envName: 'production',
};

const env = environments[process.env.NODE_ENV] || environments.staging;

module.exports = env;