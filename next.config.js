module.exports = {
  images: {
    domains: ["images.unsplash.com","dummyimage.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
