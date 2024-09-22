module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],

        alias: {
          '@': './src',
          gluestack: './src/components/ui',
          // "@/*": ["./src/*"]
        },

        extensions: ['.js', '.ts', '.tsx', '.jsx'],
      },
    ],
  ],
};
