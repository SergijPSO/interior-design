import Head from "next/head";
import React from "react";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta name='design' content='Interior design' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
