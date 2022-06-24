import React, { Fragment } from 'react';
import DefaultTemplate from '../templates/default';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return <Fragment>
    <Head>
      <title>WP Logged | by Mike</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <DefaultTemplate>
      <HeroSection 
        heading={ 'Nếu Bạn Là WordPress Developer Chắc Bạn Sẽ Thích Nơi Này, Welcome!' } 
        subHeading={ '43% Website đang sử dụng WordPress, vậy nó có gì hay ho...' } 
        actions={[
          <a href="#" className="btn btn-primary">Let's Gooo...</a>
        ]} />
    </DefaultTemplate>
  </Fragment>
}
