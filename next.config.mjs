// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "randomuser.me",
//       },
//        {
//         protocol: "https",
//         hostname: "i.pravatar.cc", // Add this line for pravatar.cc
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc", // Add this line for pravatar.cc
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-newswireninja",
        permanent: true, // Permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;

