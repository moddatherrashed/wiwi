import React from 'react'
import { TextInput } from 'react-native'

const Input = (porps) => {
    return (
        <TextInput
            secureTextEntry={props.secureTextEntry ? true : false}
            style={props.inputTextStyle}
            placeholder={props.inputPlaceholder}
            underlineColorAndroid='transparent' />
    )
}

export { Input }