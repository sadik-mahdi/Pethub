/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.ibb.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.postimg.cc', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*www.itsholidaysltd.com', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*i.ibb.co.com', 
        pathname: '/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;