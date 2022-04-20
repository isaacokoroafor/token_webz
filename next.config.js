module.exports = {
    assets: ['./assets/fonts'],
    reactStrictMode: true,
    future: {
        webpack5: true,
    },
    webpack: (config, { isServer }) => {
        config.resolve.fallback = {
            fs: false
        };
        return config
    }
};
