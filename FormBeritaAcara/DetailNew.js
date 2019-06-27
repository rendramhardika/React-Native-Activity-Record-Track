import React, {Component} from 'react'
import {ScrollView, View, Alert} from 'react-native'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Item, Label, Input, ListItem, CheckBox, Form, List, H1, Textarea} from "native-base";
import DatePicker from 'react-native-datepicker'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class DetailNew extends Component{
    constructor(props){
        super(props)
        this.state={
            date: "",
            lokasi:"",
        }
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Form Berita Acara</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{flexDirection:'column', margin:10}}>
                        <Card>
                            <CardItem>
                                <List>
                                    <ListItem>
                                        <Text>Tanggal : {this.state.date}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>Lokasi : {this.state.lokasi}</Text>
                                    </ListItem>
                                </List>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </Container>
        )
    }
}