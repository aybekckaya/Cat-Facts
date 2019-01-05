/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableHighlight, TouchableOpacity,  Platform, Alert,StyleSheet, Text, View,Button, Image, Dimensions} from 'react-native';
import NavigationBar from './src/components/NavigationBar'
import CatImageView from './src/components/CatImageView'
import CatFactTextView from './src/components/CatFactTextView'

export default class App extends Component {
  

  constructor(props) {
    super(props);
    this.deviceWidth = Dimensions.get('window').width
    this.deviceHeight = Dimensions.get('window').height
    this.state = {
      imageSource: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      factText : 'Cats Are Cool :)'
    }
    this.sampleFunc = this.sampleFunc.bind(this);
  }

  sampleFunc() {
    //Alert.alert('You tapped the button!');
    this.setState({
      imageSource : 'https://instagram.fbtz1-4.fna.fbcdn.net/vp/2b92e644e312ca7f6c303a78bfc38e3d/5CC511FD/t51.2885-15/e35/47692971_1181622368673563_9017054887388657536_n.jpg?_nc_ht=instagram.fbtz1-4.fna.fbcdn.net'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar headerText='Cat Facts'></NavigationBar>
        <CatImageView imageSource={this.state.imageSource} width={this.deviceWidth}></CatImageView>
        
        <CatFactTextView factText={this.state.factText}></CatFactTextView>
        
        <View style={styles.ButtonHolderView}>
        
        <TouchableOpacity onPress={this.sampleFunc} underlayColor='white'>
        <View style={styles.ButtonStyle}>
            <Text style={styles.ButtonText}>Got It</Text>
        </View>
        </TouchableOpacity>  
       
        
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#F7D794',
  },
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
