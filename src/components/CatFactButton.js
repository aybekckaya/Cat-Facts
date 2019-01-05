import React from 'react';
import {TouchableOpacity, Image,Button,TextInput,StyleSheet, Text, View } from 'react-native';


export default class CatFactButton extends React.Component {

    render(){
        return(
            <View style={styles.ButtonHolderView}>
         
         <TouchableOpacity onPress={this.props.onPress} underlayColor='white'>
            <View style={styles.ButtonStyle}>
                <Text style={styles.ButtonText}>Got It</Text>
            </View>
            </TouchableOpacity> 
       
        
            </View>
             
            
        );
    }
    
    }
    
    const styles = StyleSheet.create({
        ButtonText: {
            fontFamily: 'Avenir Next',
            fontWeight:'bold',
            fontSize:24,
            textAlign:'center',
            color:'#ffffff',
           
          }, 
          ButtonStyle: {
            justifyContent: 'center',
            alignItems: 'center', 
             height:50, 
          }, 
          ButtonHolderView: {
            backgroundColor : '#E66767',
            height:50
          }, 
        
      });