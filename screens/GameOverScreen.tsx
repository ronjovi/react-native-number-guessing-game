import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const GameOverScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number of rounds {props.rounds}</Text>
            <Text>Number was {props.selectedNumber}</Text>
            <Button title="NEW GAME" onPress={props.onGameRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen;