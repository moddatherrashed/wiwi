import React from 'react'
import { Text } from 'react-native'
import { Button } from 'native-base'

const Button = (props) => {
    return (
        <Button rounded
            style={props.btnStyle} >
            <Text style={props.textBtnStyle}>{prop.title}</Text>
        </Button>
    )
}

export { Button }