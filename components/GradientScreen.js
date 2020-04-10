import React from 'react'
import styled from 'styled-components'
import { LinearGradient } from 'expo-linear-gradient'

export default function HomeScreen({ children }) {
  return (
    <StyledLinearGradient colors={['#aae5f2', '#89f7fe']}>
      {children}
    </StyledLinearGradient>
  );
}

const StyledLinearGradient = styled(LinearGradient)`
  flex: 1
`