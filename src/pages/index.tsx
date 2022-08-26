import type { NextPage } from 'next'


import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import Background from '../components/Background';
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ContactButton from "../components/Button";
import Download from "../components/Download";
import Name from "../components/Name";


const Home: NextPage = () => {
  return (
    <div>

      <Navbar>
      </Navbar>
      <Card>
      </Card>
      <ContactButton>

      </ContactButton>
      <Download></Download>
      <Name></Name>
      <Background>

      </Background>
    </div>
  )
}

export default Home
