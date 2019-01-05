import React from 'react';
import { Image,Button,TextInput,StyleSheet, Text, View } from 'react-native';


export default class CatFactTextView extends React.Component {

    render(){
        return(
            <Text style={{
                fontFamily : 'Avenir Next',
                textAlign : 'center',  
                fontWeight:'500',
                fontSize : 24, 
                flex : 4, 
              }}>{this.props.factText}</Text>
            
        );
    }
    
    }
    
    const styles = StyleSheet.create({
         
        
      });