
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>();
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const startGameHandler = (selected:number) => {
    setSelected(selected);
    setGuessRounds(0);
    setGameStarted(true);
  }

  const gameOverHandler = (numOfRounds:number) => {
    setGuessRounds(numOfRounds);
  }

  const gameRestartHandler = () => {
    setGameStarted(false);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if(selected && guessRounds <= 0 && gameStarted) {
    content = <GameScreen  userChoice={selected} onGameOver={gameOverHandler}/>;
  }else if (guessRounds > 0 && gameStarted) {
    content = <GameOverScreen selectedNumber={selected} rounds={guessRounds} onGameRestart={gameRestartHandler}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
