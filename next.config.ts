import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath =
  isStaticExport && repoName && repoName.length > 0 ? `/${repoName}` : undefined;

const nextConfig: NextConfig = {
  ...(isStaticExport && basePath
    ? {
        output: "export" as const,
        basePath,
      }
    : {}),
};

export default nextConfig;
