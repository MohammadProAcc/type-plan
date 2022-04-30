// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 */
const nextConfig = {
  env: {
    TOKEN: "TYP_PLN_TKN",
    SRC: "http://127.0.0.1:8080/funql",
  },
  async rewrites() {
    return [
      {
        source: "/typeplanapi",
        destination: "http://127.0.0.1:8080/funql",
      },
    ];
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
