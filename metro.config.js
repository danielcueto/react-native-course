const {getDefaultConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const config = {};

module.exports = wrapWithReanimatedMetroConfig(
  getDefaultConfig(__dirname),
  config,
);
