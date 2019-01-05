import React from 'react';
import { Image,Button,TextInput,StyleSheet, Text, View } from 'react-native';



export default class CatImageView extends React.Component {

    render(){
        return(
         <View style={{
            width: this.props.deviceWidth, 
            flex:5
         }}>
          <Image source={{uri:this.props.imageSource}}
            style={{
                flex:1,
              }} />
            </View>
            
        );
    }
    
    }
    
    const styles = StyleSheet.create({
         
        
      });