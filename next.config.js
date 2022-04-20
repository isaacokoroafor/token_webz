module.exports = {
  assets: ['./assets/fonts'],
  reactStrictMode: true,
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
      // Looks like backward compatibility approach.
  },
  webpack: (config, { isServer }) => {

    return config
  }
};

