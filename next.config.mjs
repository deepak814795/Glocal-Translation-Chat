/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images:{
        domains: ["github.com", "lh3.googleusercontent.com","images.unsplash.com","img.freepik.com", "i.ibb.co", "plus.unsplash.com"],
    },
};

export default nextConfig; 
