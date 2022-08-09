const StyleDictionaryPackage = require('style-dictionary');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(theme, platform) {
  return {
    source: [`tokens/themes/${theme}/**/*.json`, 'tokens/globals/**/*.json'],
    platforms: {
      web: {
        transformGroup: 'web',
        buildPath: `build/web/${theme}/`,
        files: [
          {
            destination: 'tokens.scss',
            format: 'scss/variables',
            options: {showFileHeader: false},
          },
          {
            destination: 'tokens.json',
            format: 'json/flat',
          },
          {
            destination: 'tokens.css',
            format: 'css/variables',
            options: {showFileHeader: false},
          },
        ],
      },
      // "android": {
      //   "transformGroup": "android",
      //   "buildPath": `build/android/${brand}/`,
      //   "files": [{
      //     "destination": "tokens.colors.xml",
      //     "format": "android/colors"
      //   },{
      //     "destination": "tokens.dimens.xml",
      //     "format": "android/dimens"
      //   },{
      //     "destination": "tokens.font_dimens.xml",
      //     "format": "android/fontDimens"
      //   }]
      // },
      // "ios": {
      //   "transformGroup": "ios",
      //   "buildPath": `build/ios/${brand}/`,
      //   "files": [{
      //     "destination": "tokens.h",
      //     "format": "ios/macros"
      //   }]
      // }
    },
  };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS
// const platforms = ["web", "ios", "android"];

[
  'theme-1-bbg',
  'theme-2-dark-solarized',
  'theme-3-dark',
  'theme-4-light-high-contrast',
  'theme-5-light',
  'theme-6-new',
].map((theme) => {
  ['web'].map((platform) => {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme, platform));

    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');
  });
});

console.log('\n==============================================');
console.log('\nBuild completed!');
