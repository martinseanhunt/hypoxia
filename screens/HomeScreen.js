import * as React from 'react'
import { ScrollView } from 'react-native'

import styled from 'styled-components/native'

import ScreenWrapper from '../components/ScreenWrapper'
import BreatheCircle from '../components/BreatheCircle'

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <Logo>Hypoxia</Logo>
      <LogoSmall>recovery . vitality . longevity</LogoSmall>
      
      <ScrollView>
        <BreatheCircle bpm={30} />
        <IntroText>Intermittent hypoxic training, also known as intermittent hypoxic therapy, is a technique aimed at improving human performance by way of adaptation to reduced oxygen.</IntroText>
      </ScrollView>
    </ScreenWrapper>
  )
}

// TODO: Move a lot of this styling in to a global theme

const Logo = styled.Text`
  text-align: center;
  font-family: baba-pro;
  color: #fff;
  font-size: 44px;
  text-transform: uppercase;
  margin-top: 40px;
  padding-left: 12px;
`

const LogoSmall = styled(Logo)`
  margin: 5px 0 70px 0;
  padding: 0;
  font-size: 10px;
  font-family: sans-serif;
  letter-spacing: 2.6px;
  opacity: 0.7;
`

const IntroText = styled.Text`
  color: #fff;
  text-align: justify;
  opacity: 0.8;
  font-family: opensans-light;
  line-height: 26px; 
  padding: 0 20px; 
  position: relative;
  margin-top: 60px;
`