/**
 * Modifies the Webpack configuration to set a publicPath based on environment vars
 */
module.exports = function overrideConfig(config) {
  const isLocal = process.env.REACT_APP_LOG_ENV === 'local';
  const publicPath = (isLocal ? '' : process.env.REACT_APP_PUBLIC_PATH) + '/';

  config.output = {
    ...config.output,
    publicPath: publicPath,
  };

  return config;
};

module.exports.jest = function (config) {
  config.cache = true;
  config.collectCoverage = false;
  config.collectCoverageFrom = ['src/**/*.{ts,tsx}'];
  config.coverageDirectory = 'coverage';
  config.coverageThreshold = {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  };
  config.coveragePathIgnorePatterns = ['/node_modules/', '/src/.*/__test__/'];
  config.testPathIgnorePatterns = ['/mocks/'];
  return config;
};
