import React, { Fragment } from 'react';
import DefaultTemplate from '../templates/default';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import Posts from '../components/Posts';
import Features from '../components/Features';

const FEATURES = [
  {
    title: 'Xây Dựng Cộng Đồng',
    description: 'Nơi kết nỗi những con người cùng sống và làm việc với WordPress hằng ngày. 🫀',
    imageUrl: '',
  },
  {
    title: 'Cải Thiện Kỹ Năng',
    description: 'Tại đây mình sẽ viết nhiều hơn code, hi vọng skill viết lách của mình sẽ được Upgrade. ✍️',
    imageUrl: '',
  },
  {
    title: 'Giúp Đỡ Người Mới (🪴)',
    description: 'Những dự án lớn nhỏ cùng những kinh nghiệm của mình được lưu giữ tại đây hi vọng sẽ giúp được ai đó.',
    imageUrl: '',
  },
]

export default function Home() {
  return <Fragment> 
    <Head>
      <title>WP Logged | by Mike</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <DefaultTemplate>
      <HeroSection 
        heading={ 'Nếu Bạn Là WordPress Developer Chắc Bạn Sẽ Thích Nơi Này, Welcome! 🎉' } 
        subHeading={ '43% Website đang sử dụng WordPress, vậy nó có gì hay ho...' } 
        actions={[
          <a href="#" className="btn btn-primary" key="letgo">Let's Gooo...</a>
        ]} />
        <Posts />
        <Features 
          title={ 'Tại Sao Nó Được Tạo Ra & Với Mục Đích Gì' } 
          features={ FEATURES } />
    </DefaultTemplate>
  </Fragment>
}
