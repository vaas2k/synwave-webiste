/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
        },
        {
          protocol :'https',
          hostname : 'images.unsplash.com'
        },
        {
          protocol :'https',
          hostname : 'aceternity.com'
        },
        {
          protocol :'https',
          hostname : 'github.com'
        },
        {
          protocol :'https',
          hostname : 'dummyimage.com'
        }
      ],
    },
  };
  
  export default nextConfig;
  