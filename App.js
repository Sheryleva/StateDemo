import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  //TODO FIX IT
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Button style = {styles.Button1} title = "INCREASE" color= '#008000'
      onPress = {() =>{
        // counter++;
        setCounter(counter + 1);
        console.log(counter);
        }}/>
      <Button style = {styles.Button1} title = "DECREASE"  color= '#FF0000'
      onPress = {() =>{
        // counter--;
        setCounter(counter - 1);
        console.log(counter);}}/>
      <Text>Current Count {counter}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button1: {
    paddingTop:10,
    paddingBottom:10,
    marginTop: 15,
    marginRight:40,
    marginLeft:40,
    borderWidth: 1,
  },
  Button2: {
    paddingTop:10,
    paddingBottom:10,
    marginTop: 15,
    marginRight:40,
    marginLeft:40,
    borderWidth: 1,
  }

});
