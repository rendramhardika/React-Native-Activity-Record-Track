/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AddBeritaAcara from './AddBeritaAcara/AddBeritaAcara.js'
import FormWizard from './FormBeritaAcara/FormWizard.js'
import NewForm from './FormBeritaAcara/NewForm.js'
import FormBA from './FormBeritaAcara/FormBA.js'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Detailnew from './FormBeritaAcara/DetailNew.js'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

        //Form Without Wizard
        // <FormBA />
        
        //Form using Wizard
        // <FormWizard />

        //New design form
        <NewForm />
      
      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
