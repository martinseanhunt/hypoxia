import * as React from 'react'
import { Dimensions, Animated } from 'react-native'

import styled from 'styled-components/native'

const BreatheCircle = ({ bpm, children }) => {
  const scaleAnimation = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    const beatTempo = 60000 / bpm

    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnimation, {
          toValue: 1,
          duration: beatTempo * 2
        }),
        Animated.timing(scaleAnimation, {
          toValue: 0,
          duration: beatTempo * 4
        }),
      ])
    ).start()
  },[])

  return (
    <OuterCircle>
      <Children>
        {children}
      </Children> 
      <InnerCircle style={{ transform: [{ scale: scaleAnimation }] }} />
    </OuterCircle>
  )
}

export default BreatheCircle

const circleSize = Math.floor(Dimensions.get('window').width / 100 * 70)

const OuterCircle = styled.View`
  border: 1px solid rgba(255,255,255,0.3);
  height: ${circleSize}px;
  width: ${circleSize}px;
  border-radius: ${circleSize / 2}px;
  margin: 0 auto;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`

const InnerCircle = styled(Animated.View)`
  height: ${circleSize}px;
  width: ${circleSize}px;
  border-radius: ${circleSize / 2}px;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.3);
  transform: scale(0);
`

const Children = styled.View`
  position: absolute;
`