import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, schema }) => {
    const siteTitle = "Captain Car Studio";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteUrl = "https://captaincarstudio.in";
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const defaultDescription = "Captain Car Studio offers premium car accessories, car modification, audio systems, lighting, seat covers & performance upgrades in India.";
    const defaultKeywords = "car accessories, car modification, car audio system, car lights, seat cover, car studio india";

    return (
        <Helmet>
            {/* Primary SEO */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="author" content="Captain Car Studio" />
            <meta name="robots" content="index, follow" />

            {/* Canonical */}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={`${siteUrl}/logo.png`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={`${siteUrl}/logo.png`} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
