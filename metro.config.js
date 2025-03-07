const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // Optional: Disable source maps if you want to stop the source map issue
    sourceMap: true, // Enable source maps for debugging
  },
  resolver: {
    // Example: Add custom extensions if necessary
    // This is where you can add or modify resolver options
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
  },
  server: {
    // If you're dealing with an issue related to the server, you can customize the server options
    enhanceMiddleware: (middleware) => middleware,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
