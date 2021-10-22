module.exports = {

  "stories": [
    "../src/Components/**/*.stories.mdx",
    "../src/Components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  },
  viteFinal: (config) => {
    config.plugins = [
      ...config.plugins,
    ]
    config.optimizeDeps.include.push('react-is', '@base2/pretty-print-object');
    return config
  }
}