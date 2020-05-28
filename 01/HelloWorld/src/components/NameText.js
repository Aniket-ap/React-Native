import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

export default class NameText extends Component {
    render(){
        return(
            <Text style={styles.textStyle}>{this.props.name}</Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle : {
        backgroundColor : "#ea9a96",
        color : "#e5e5e5",
        paddingHorizontal : 15,
        paddingVertical : 10,
        fontSize : 30,
        marginBottom : 5,
        borderRadius : 10,
        fontStyle : "italic"
    }
})