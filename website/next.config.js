/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "salt.tikicdn.com",
            "firebasestorage.googleapis.com",
            "vcdn.tikicdn.com",
        ],

        
    },
    output: 'export',
        distDir: 'build'

};

module.exports = nextConfig;
