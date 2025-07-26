import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [clickCount, setClickCount] = useState(0);

  const generateRandomColor = () => {
    console.log('generateColor()');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return `#${randomColor}`;
  }
  
  return (
    <View style={[styles.container, {backgroundColor: generateRandomColor()}]}>
      <Text style={[styles.buttonMargin, styles.boldText]}>오늘도 빡코딩!!</Text>
      <Text style={[styles.buttonMargin, styles.boldText]}>클릭수! {clickCount}</Text>
      <StatusBar style="auto" />
      <Button style={styles.buttonMargin} title='버튼이다!' onPress={e => {
        setClickCount(clickCount + 1);
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999000',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 26
  },
  boldText: {
    fontSize: 26
  },
  buttonMargin: {
    marginBottom: 20
  }
});
