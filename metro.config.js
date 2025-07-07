const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Web platformunda react-native-maps'i devre dışı bırak
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Web için react-native-maps'i ignore et
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

// Web için native modülleri ignore et
config.resolver.alias = {
  'react-native-maps': require.resolve('react-native-maps/lib/MapView.js'),
};

module.exports = config; 