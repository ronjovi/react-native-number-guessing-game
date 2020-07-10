import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props:any) => {
    return <View style={{...styles.card, ...props.style}} >{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowRadius: 2,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 7,
        marginTop: 50,
        padding: 20
    }
});

export default Card;