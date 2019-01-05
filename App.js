/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import axios from 'axios';
import {AsyncStorage, TouchableHighlight, TouchableOpacity,  Platform, Alert,StyleSheet, Text, View,Button, Image, Dimensions} from 'react-native';
import NavigationBar from './src/components/NavigationBar'
import CatImageView from './src/components/CatImageView'
import CatFactTextView from './src/components/CatFactTextView'
import CatFactButton from './src/components/CatFactButton'


export default class App extends Component {
  

  constructor(props) {
    super(props);
    this.deviceWidth = Dimensions.get('window').width
    this.deviceHeight = Dimensions.get('window').height

    


    this.state = {
      imageSource: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      factText : ''
    }
    this.sampleFunc = this.sampleFunc.bind(this);

   
  }


  componentDidMount() {
    this.sampleFunc();
  }
  

  sampleFunc() {
    fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        imageSource : responseJson.file,
      })
    })
    .catch((error) => {
      console.error(error);
    });

    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        factText : responseJson.text,
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar headerText='Cat Facts'></NavigationBar>
        <CatImageView imageSource={this.state.imageSource} width={this.deviceWidth}></CatImageView>
        
        <CatFactTextView factText={this.state.factText}></CatFactTextView>

       <CatFactButton onPress={this.sampleFunc}></CatFactButton>
        
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
  
});
