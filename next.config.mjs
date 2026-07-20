/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.iconscout.com',
            },
            {
                protocol: 'https',
                hostname: '**', // wildcard as fallback if there are more
            }
        ]
    }
};

export default nextConfig;
