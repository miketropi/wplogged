import React, { Fragment } from 'react';
import DefaultTemplate from '../templates/default';
import Head from 'next/head'

export default function Home() {
  return <Fragment>
    <Head>
      <title>WP Logged | by Mike</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <DefaultTemplate>
      Hello this is content here!
    </DefaultTemplate>
  </Fragment>
}
