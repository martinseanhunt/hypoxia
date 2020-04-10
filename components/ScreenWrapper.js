import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import styled from 'styled-components/native'

// Wraps screen components in a linear gradient
// TODO: Find a better way to do this so I don't have to import it for each screen

export default function ScreenWrapper({ children }) {
  return (
    <StyledLinearGradient 
      colors={['#667db6', '#0082c8', '#0082c8', '#667db6']}
      style={{
        flex: 1
      }}
    >
      {children}
    </StyledLinearGradient>
  )
}

const StyledLinearGradient = styled(LinearGradient)`
  flex: 1;
  padding: 25px;
`