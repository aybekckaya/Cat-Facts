import React from 'react';
import { Image,Button,TextInput,StyleSheet, Text, View } from 'react-native';


export default class CatFactTextView extends React.Component {

    render(){
        return(
            <Text style={{
                fontFamily : 'Avenir Next',
                textAlign : 'center',  
                fontWeight:'300',
                fontSize : 20, 
                lineHeight: 30,
                flex : 4, 
                padding: 16,
                color: 'rgba(0, 0, 0, 0.40)'
              }}>{this.props.factText}</Text>
            
        );
    }
    
    }
    
    const styles = StyleSheet.create({
         
        
      });