import "../styles/globals.css";

import Head from "next/head";
import $ from "jquery"

import { AuthGuard } from "../components/context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FRAME STUDIO</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="This page invites people to see, buy and contact with us for purpose of the art/desing/codding in graphic, website, ai art, digital art, photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta name="rating" content="adult, child"/>
        <meta name="googlebot" content="folow, index"/>
        <meta name="supported-media" content="only screen and (max-width: 1280px)"/>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
    {`
      "@context" : "https://framestudio.in",
      "@type" : "WebSite",
      "name" : "Frame Studio",
      "@id": "https://framestudio.in",
      "alternateName" : ["FS", "frame Studio", "framestudio", "fs", "F-S", "f-s", "frame-studio", "Frame-Studio"],
      "url" : "https://framestudio.in/"
      }
    `}
  </script>
      </Head>
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
    </>
  );
}
