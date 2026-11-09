const backendUrl = (process.env.BACKEND_INTERNAL_URL || 'http://127.0.0.1:3002').replace(/\/+$/, '');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/portfolio/all',
                destination: `${backendUrl}/api/portfolio/all`,
            },
            {
                source: '/api/contact',
                destination: `${backendUrl}/api/contact`,
            },
        ];
    },
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
