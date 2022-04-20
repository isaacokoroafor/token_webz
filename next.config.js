// module.exports = {
//   //assets: [],
//   assets: ['./assets/fonts'],
//   reactStrictMode: true,
//   future: {
//     webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
//       // Looks like backward compatibility approach.
//   },
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }
//
//     return config
//   }
// };

module.exports = {
    assets: ['./assets/fonts'],
    reactStrictMode: true,
    future: {
        webpack5: true,
    },
    webpack: (config) => {
        return config
    }
};
