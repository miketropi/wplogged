import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

const ContactImaegBoxContainer = styled.div`
  border: solid 1px #ddd;
  border-radius: 3px;
  background: white;
  overflow: hidden;
  line-height: normal;

  img {
    width: 100%;
  }

  .__entry {
    padding: 10px;

    > a {
      font-weight: bold;
      font-size: 13px;
    }
  }
`;

export default function ContactImageBox() {
  const imageUrl = `https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`;

  return <ContactImaegBoxContainer>
    <div style={{ position: 'relative', width: '100%', height: '200px' }}> 
      <Image 
        src={ imageUrl } 
        alt="#contact"
        layout="fill" />
    </div>
    
    <div className="__entry">
      <Link href={ '/contact' }>
        <a>Contact Me 🌵🌵</a>
      </Link>
    </div>
  </ContactImaegBoxContainer>
}