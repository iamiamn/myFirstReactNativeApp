import React from 'react';
import {Text, View, Image, Button, StyleSheet} from 'react-native';
const ImageDetail = props =>{
  console.log(props);
  return (
    <View>
      <Image source = {props.imageSource} />
      <Text>{props.title}</Text>
      <Text> image score - {props.score} </Text>
    </View>
  );

};
const styles = StyleSheet.create({});
export default ImageDetail;
