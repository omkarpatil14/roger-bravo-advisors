/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  allowedDevOrigins: ["localhost", "127.0.0.1"],
  async redirects() {
    return [{ source: "/disclosures", destination: "/aif", permanent: true }];
  },
};

export default nextConfig;
