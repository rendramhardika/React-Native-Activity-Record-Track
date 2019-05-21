import React, { Component } from "react";
import { ScrollView, View, Modal, Alert } from "react-native";
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Item, Label, Input, ListItem, CheckBox, Form, List, H1, Textarea} from "native-base";
import DatePicker from "react-native-datepicker";

import SignatureCapture from 'react-native-signature-capture'

export default class FormPart2 extends Component{
    constructor(props){
        super(props)
        this.state={
            isCheckedFO:false,
            isCheckedSFP:false
        }
    }
    render(){
        return(
            <ScrollView>
                <View style={{flexDirection:'column', margin:10}}>
                    <Card>
                        <CardItem header>
                            <Text>Dengan Perincian:</Text>
                        </CardItem>
                        <CardItem>
                            <View style={{flex:1}}>
                                <List>
                                    <ListItem itemDivider style={{marginBottom:10}}>
                                        <Text>Switch</Text>
                                    </ListItem>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Jumlah</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Vendor / Model</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>No. Aset/SN</Label>
                                        <Input />
                                    </Item>

                                    <ListItem itemDivider style={{marginBottom:10}}>
                                        <Text>Wireless</Text>
                                    </ListItem>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Jumlah</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Vendor / Model</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>No. Aset/SN</Label>
                                        <Input />
                                    </Item>

                                    <ListItem itemDivider style={{marginBottom:10}}>
                                        <Text>Kabel</Text>
                                    </ListItem>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>UTP</Label>
                                        <Input placeholder={'panjang (M)'} />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>FO</Label>
                                        <Input placeholder={'panjang (M)'} />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Listrik</Label>
                                        <Input placeholder={'panjang (M)'} />
                                    </Item>

                                    <ListItem itemDivider style={{marginBottom:10}}>
                                        <Text>Konektor RJ 45</Text>
                                    </ListItem>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Jumlah</Label>
                                        <Input />
                                    </Item>

                                    <ListItem itemDivider style={{marginBottom:10}}>
                                        <Text>Fiber Device</Text>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox 
                                            checked={this.state.isCheckedDSFP} 
                                            onPress={()=>this.setState({isCheckedDSFP: !this.state.isCheckedDSFP})}
                                        />
                                        <Text> SFP</Text>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox 
                                            checked={this.state.isCheckedFO} 
                                            onPress={()=>this.setState({isCheckedFO: !this.state.isCheckedFO})}
                                        />
                                        <Text> Fiber Optic Converter</Text>
                                    </ListItem>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Vendor / Model:</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>No. Aset/SN:</Label>
                                        <Input />
                                    </Item>
                                </List>
                            </View>
                        </CardItem>
                    </Card>
                </View>
            </ScrollView>
        )
    }
}