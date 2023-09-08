const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  // resolver: {
  //   assetExts: ['ttf', 'otf'], // Add 'ttf' and 'otf' extensions here
  // },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// module.exports = {
//   resolver: {
//     assetExts: ['ttf', 'otf'],
//   },
// };
