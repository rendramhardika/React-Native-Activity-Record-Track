import React, { Component } from "react";
import { ScrollView, View, Modal, Alert } from "react-native";
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Item, Label, Input, ListItem, CheckBox, Form, List, H1, Textarea} from "native-base";
import DatePicker from "react-native-datepicker";

import SignatureCapture from 'react-native-signature-capture'

export default class FormPart3 extends Component{
    constructor(props){
        super(props)
        this.state={
            signClient:'',
            signTimJaringan:'',
        }
    }

    saveSignClient = () => {
        this.refs["signClient"].saveImage();
    }

    resetSignClient() {
        this.refs["signClient"].resetImage();
    }

    saveSignJaringan = () =>{   
        this.refs["signTimJaringan"].saveImage();
        
    }

    resetSignJaringan() {
        this.refs["signTimJaringan"].resetImage();
    }

    _onSaveEventClient = (result) => {
        //result.encoded - for the base64 encoded png
        //result.pathName - for the file path name
        // this.setState({ signClient : result.encoded }, () => console.log(this.state.signClient))
            // console.log(result.encoded)
            console.log('mahardika')
    }

    _onSaveEventJaringan = (result) => {
        //result.encoded - for the base64 encoded png
        //result.pathName - for the file path name
        // this.setState({ signClient : result.encoded }, () => console.log(this.state.signClient))
            // console.log(result.encoded)
            console.log('rendra')
    }

    _onDragEvent() {
         // This callback will be called when the user enters signature
        console.log("dragged");
    }

    render(){
        return(
            <ScrollView>
            <Card>
                <View style={{flex:1, flexDirection:'column'}}>
                    <Form ref="signature" style={{justifyContent:'center'}}>
                        <View style={{flex:1,margin:10}}>
                            <Label style={{fontWeight:'bold'}}>Mengetahui,</Label>
                            <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                <Label>Nama Lengkap (Client)</Label>
                                <Input name="namaClient" type="textInput" />
                            </Item>
                            <View style={{height:500}}>
                                <SignatureCapture
                                    style={{flex:1}}
                                    ref="signClient"
                                    onSaveEvent={this._onSaveEventClient}
                                    onDragEvent={this._onDragEvent}
                                    saveImageFileInExtStorage={false}
                                    showNativeButtons={false}
                                    showTitleLabel={true}
                                    viewMode={"portrait"}
                                />
                                <View style={{ flex: 1, flexDirection: "row" }}>
                                    <Button success style={{flex: 1, justifyContent: "center", alignItems: "center", height: 50, margin: 10}} onPress={() => { this.saveSignClient() } } >
                                        <Text>Save</Text>
                                    </Button>

                                    <Button warning style={{flex: 1, justifyContent: "center", alignItems: "center", height: 50, margin: 10}} onPress={() => { this.resetSignClient() } } >
                                        <Text>Reset</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>

                        <View style={{margin:10}}>
                            <Item stackedLabel style={{marginLeft:11, marginBottom:5}}>
                                <Label>Nama Lengkap (Tim Administrasi Jaringan)</Label>
                                <Input name="namaTimJaringan" type="textInput" />
                            </Item>
                            <View style={{height:500}}>
                                <SignatureCapture
                                    style={{flex:1, borderColor:'red'}}
                                    ref="signTimJaringan"
                                    onSaveEvent={this._onSaveEventJaringan}
                                    onDragEvent={this._onDragEvent}
                                    saveImageFileInExtStorage={false}
                                    showNativeButtons={false}
                                    showTitleLabel={true}
                                    viewMode={"portrait"}
                                    backgroundColor={'gray'}  
                                />
                                <View style={{ flex: 1, flexDirection: "row" }}>
                                    <Button success style={{flex: 1, justifyContent: "center", alignItems: "center", height: 50, margin: 10}} onPress={() => { this.saveSignJaringan() } } >
                                        <Text>Save</Text>
                                    </Button>

                                    <Button warning style={{flex: 1, justifyContent: "center", alignItems: "center", height: 50, margin: 10}} onPress={() => { this.resetSignJaringan() } } >
                                        <Text>Reset</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </Form>
                </View>
                </Card>
            </ScrollView>
        )
    }
}