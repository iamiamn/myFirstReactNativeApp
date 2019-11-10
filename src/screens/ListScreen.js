import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
const ListScreen = ()=>{
  const friends = [
    {name : 'zhenkai', key : '1'},
    {name : 'zhenkai1', key : '2'},
    {name : 'zhenkai2', key : '3'},
    {name : 'zhenkai3', key : '4'},
  ];
  return (
    <FlatList
    horizontal = {true}
    showsHorizontalScrollIndicator={false}
     keyExtractor = {friend => friend.key}
      data = {friends}
      renderItem = {({item}) => {
        //element === {item:{name:'ffxx'}, index:0}
        //item ==={name:'fffx'}
        //item is embeded variable in side the function ,need to use curly brace
        return <Text style = {styles.myTextStyle}>{item.name}, key : {item.key}</Text>;
      }}
      />
  );
};

const styles = StyleSheet.create({
  myTextStyle :{
    marginVertical : 50,
    fontSize : 50
  }
});
export default ListScreen;
