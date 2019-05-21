import React, { Component } from "react";
import { ScrollView, View, Modal, Alert } from "react-native";
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Item, Label, Input, ListItem, CheckBox, Form, List, H1, Textarea} from "native-base";
import DatePicker from "react-native-datepicker";

import SignatureCapture from 'react-native-signature-capture'

export default class FormPart1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            isCheckedPemeriksaanJaringan:false,
            isCheckedKabelJaringan:false,
            isCheckedPerangkatJaringan:false,
            isCheckedDeInstallPerangkatJaringan:false,
            isCheckedLainnya:false,
        };
    }

    render(){
        return(
            <ScrollView>
                <View style={{flexDirection:'column', margin:10}}>
                    <Card>
                        <CardItem>
                            <DatePicker
                                style={{ width: 200, marginLeft: 6 }}
                                date={this.state.date}
                                mode="date"
                                placeholder="Pilih Tanggal"
                                format="DD-MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: "absolute",
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                                }}
                                onDateChange={date => {
                                this.setState({ date: date });
                                }}
                            />
                        </CardItem>
                        <CardItem>
                            <Item stackedLabel style={{marginLeft:11, width:'100%'}}>
                                <Label>Lokasi</Label>
                                <Input />
                            </Item>
                        </CardItem>
                        <CardItem header style={{marginBottom:-10}}>
                            <Text> Jenis Kegiatan</Text>
                        </CardItem>
                        <CardItem>
                            <View style={{flex:1}}>
                                <ListItem>
                                    <CheckBox 
                                        checked={this.state.isCheckedPemeriksaanJaringan} 
                                        onPress={()=>this.setState({isCheckedPemeriksaanJaringan: !this.state.isCheckedPemeriksaanJaringan})}
                                    />
                                    <Text> Pemerikasaan Jaringan</Text>
                                </ListItem>
                                <ListItem>
                                    <CheckBox
                                        checked={this.state.isCheckedKabelJaringan} 
                                        onPress={()=>this.setState({isCheckedKabelJaringan: !this.state.isCheckedKabelJaringan})}
                                    />
                                    <Text> Instalasi Kabel Jaringan</Text>
                                </ListItem>
                                <ListItem>
                                    <CheckBox 
                                        checked={this.state.isCheckedPerangkatJaringan} 
                                        onPress={()=>this.setState({isCheckedPerangkatJaringan: !this.state.isCheckedPerangkatJaringan})}   
                                    />
                                    <Text> Instalasi Perangkat Jaringan</Text>
                                </ListItem>
                                <ListItem>
                                    <CheckBox 
                                        checked={this.state.isCheckedDeinstallPerangkatJaringan} 
                                        onPress={()=>this.setState({isCheckedDeinstallPerangkatJaringan: !this.state.isCheckedDeinstallPerangkatJaringan})}
                                    />
                                    <Text> De-Instalasi Perangkat Jaringan</Text>
                                </ListItem>
                                <ListItem>
                                    <CheckBox 
                                        checked={this.state.isCheckedLainnya} 
                                        onPress={()=>this.setState({isCheckedLainnya: !this.state.isCheckedLainnya})}
                                    />
                                    <Item inlineLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Input placeholder={".........."} />
                                    </Item>
                                </ListItem>
                            </View>
                        </CardItem>
                    </Card>
                </View>
            </ScrollView>
        )
    }
}