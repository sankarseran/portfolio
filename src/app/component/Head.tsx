"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const Seo: React.FC<SEOProps> = ({ title, description, image }) => {
  const router = usePathname();

  // Replace with your actual metadata (used to be in Gatsby `siteMetadata`)
  const defaultTitle = "sankaralingam seranthian portfolio";
  const defaultDescription =
    "Welcome to sankaralingam seranthian portfolio site!";
  const siteUrl = "https://sankaralingam-seranthian.web.app/";
  const defaultImage = 'sankaralingam-portfolio.png';
  const twitterUsername = "@sankar_seran";

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${router}`,
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* OpenGraph meta tags for social sharing */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Google Site Verification (if needed) */}
      <meta
        name="google-site-verification"
        content="2T3UFxVzTBVSwI-yCgLOtkFLB3fKZvf2M20sPdQG7ek"
      />
    </Head>
  );
};

export default Seo;
