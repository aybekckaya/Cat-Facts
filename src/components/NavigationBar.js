

import React from 'react';
import { Button,TextInput,StyleSheet, Text, View } from 'react-native';


export default class NavigationBar extends React.Component {

render(){
    return(
    <View style={styles.NavigationBar}>
        <Text style={styles.NavigationBarTitle}>{this.props.headerText}</Text>
      </View>
    );
}

}

const styles = StyleSheet.create({
     
    NavigationBar: {
      height: 80, 
      paddingTop: 30,
      shadowColor: '#000000',
      shadowOffset : {width:0 , height:2},
      shadowOpacity: 0.3, 
      justifyContent : 'center', 
      alignItems : 'center', 
      backgroundColor: '#F19066',
  
    },
    NavigationBarTitle: {
      fontSize: 24 ,
      textAlign: 'center',
      color : '#ffffff',
      fontFamily : 'Avenir Next', 
      fontWeight:'700',
      
    }, 

  });
  