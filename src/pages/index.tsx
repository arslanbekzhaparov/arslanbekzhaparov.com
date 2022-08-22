import type { NextPage } from 'next'


import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import Background from '../components/Background';
import Navbar from "../components/Navbar";
import Card from "../components/Card";


const Home: NextPage = () => {
  return (
    <div>

      <Navbar>
      </Navbar>
      <Card>
      </Card>
      <Background>

      </Background>
    </div>
  )
}

export default Home
