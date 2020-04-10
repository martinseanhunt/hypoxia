import * as React from 'react'
import { Text } from 'react-native'

// TODO: Would I rather just define the fonts in each component with styled components / a main theme?
// I think so! 

const StyledText = (props) => {
  const font = props.font || 'space-mono'
  return <Text {...props} style={[props.style, { fontFamily: font }]} />
}

export default StyledText