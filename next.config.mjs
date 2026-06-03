/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "example.com",
      hostname: "images.unsplash.com",
    },
  ],
},

};

export default nextConfig;
