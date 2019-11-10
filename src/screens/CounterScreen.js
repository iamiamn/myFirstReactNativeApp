import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () =>{
  const [counter, setCounter] = useState(0);

  return <View>
    <Button
      title = "Increase"
      onPress = {()=>{
        //don't modify the counter var directly
        return setCounter(counter + 1);
      }
      }
    />
    <Button
      title = "Decrease"
      onPress = {()=>{
        //don't modify the counter var directly
        return setCounter(counter - 1);
      }
      }
    />
    <Text>current number : {counter}</Text>
  </View>;
};
const styles = StyleSheet.create({});
export default CounterScreen;
