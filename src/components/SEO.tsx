import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const defaults = {
  siteName: "Leo Software Solutions",
  siteUrl: "https://leosoftwaresolutions.com",
  defaultTitle: "Leo Software Solutions | Web, Mobile & Cloud Engineering",
  defaultDescription:
    "Professional IT services from Bengaluru. We build modern web apps, mobile apps, APIs, and cloud infrastructure—designed for speed, scale, and reliability.",
  defaultImage: "https://leosoftwaresolutions.com/og-image.png",
};

export function SEO({
  title,
  description = defaults.defaultDescription,
  path = "",
  image = defaults.defaultImage,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${defaults.siteName}`
    : defaults.defaultTitle;
  const url = `${defaults.siteUrl}${path}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
