import { Fragment } from 'react';
import Head from 'next/head';
import DefaultTemplate from '../templates/DefaultTemplate'; 

export default function About() {
  return <>
    <Head>
      <title>WP Logged - About | by Mike</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <DefaultTemplate>
      <div className="content-container __has-spacing">
        Coming soon...
      </div>
    </DefaultTemplate> 
  </>
}