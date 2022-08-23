import type { NextPage } from 'next'


import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import Background from '../components/Background';
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ContactButton from "../components/Button";


const Home: NextPage = () => {
  return (
    <div>

      <Navbar>
      </Navbar>
      <Card>
      </Card>
      <ContactButton>

      </ContactButton>
      <Background>

      </Background>
    </div>
  )
}

export default Home
