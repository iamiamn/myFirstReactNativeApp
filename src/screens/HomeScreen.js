import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const HomeScreen = (props) => {
//   console.log(props.navigation);
//
//   return (<View>
//     <Text style={styles.text}>Hi there</Text>
//     <Button
//       onPress = {()=> {
//         console.log('Button pressed');
//         return props.navigation.navigate('Components');
//         }
//       }
//       title="Go to Demo Button"/>
//     <TouchableOpacity
//     onPress = {() => {
//       console.log('list pressed');
//       return props.navigation.navigate('List');
//       }
//     }>
//       <Text>Go to List demo</Text>
//     </TouchableOpacity>
//     </View>);
// };
const HomeScreen = ({navigation}) => {
  console.log(navigation);

  return (<View>
    <Text style={styles.text}>Hi there</Text>
    <Button
      onPress = {()=> {
        console.log('Button pressed');
        return navigation.navigate('Components');
        }
      }
      title="Go to Demo Button"
    />
    <Button
      onPress = {() => navigation.navigate('List')}
      title = "Go to list button"
    />
    <Button
      onPress = {() => navigation.navigate('Image')}
      title = "Go to Image Button"
    />
    <Button
      onPress = {() => navigation.navigate('Counter')}
      title = "Go to Counter Demo"
    />
    </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
