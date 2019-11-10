//Create a react component
//JSX looks like html, tell react native what we want to show
import React from 'react';//about how diff componnet work together, not use curly brace, mean load whole react
import {Text, StyleSheet, View} from 'react-native';//about take info from those componet to show in mobile app

const ComponentsScreen= () => {
  const greeting = 'Hi there!';//['as','bb'], 1234, but we can't show a JSX here
  const greeting2 = <Text>Hello to you!</Text>
  return <View>
    <Text style = {styles.textStyle}>This is the components HomeScree</Text>
    <Text style = {styles.subHeaderStyle}>{greeting}</Text>
    {greeting2}
  </View>
};
// const ComponentsScreen2 = () => {
//   return <Text style = {{fontSize : 30}}>This is use JSX components for style</Text>
// }
const styles = StyleSheet.create({
  textStyle:{
    fontSize : 30
  },
  subHeaderStyle:{
    fontSize : 20
  }
});//we need to apply this textStyle manually, we just create it here

export default ComponentsScreen;
// // @flow
// function total(numbers : Array<number>){
//   var result = 0;
//   var length = numbers
// }
