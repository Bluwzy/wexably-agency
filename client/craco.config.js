// craco.config.js
const webpack = require('webpack');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Add fallbacks for Node.js core modules
            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback, // Preserve existing fallbacks
                "http": require.resolve("stream-http"),
                "https": require.resolve("https-browserify"),
                "stream": require.resolve("stream-browserify"),
                "util": require.resolve("util/"),
                "url": require.resolve("url/"),
                "zlib": require.resolve("browserify-zlib"),
                "crypto": require.resolve("crypto-browserify"),
                "assert": require.resolve("assert/")
            };
            return webpackConfig;
        }
    }
};