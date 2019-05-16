import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Item, Label, Input, ListItem, CheckBox, Form, List} from "native-base";
import DatePicker from "react-native-datepicker";
import { Grid, Col, Row } from "react-native-easy-grid";
// import SignatureCapture from 'react-native-signature-capture'
import SignaturePad from 'react-native-signature-pad'

export default class FormBeritaAcara extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      isCheckedPemeriksaanJaringan:false,
      isCheckedKabelJaringan:false,
      isCheckedPerangkatJaringan:false,
      isCheckedDeInstallPerangkatJaringan:false,
      isCheckedLainnya:false,
      signClient:'',
    };
  }

  signaturePadChange(base64DataUrl){
    this.setState({
      signClient:base64DataUrl
    })
  }

  signaturePadError(error){
    console.error(error)
  }

  render() {
    return ( 
        <Container>
          <Header>
            <Left>
              <Button trasnsparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Form Berita Acara</Title>
            </Body>
          </Header>
          <Content>
            <Card>
              <Row style={{ borderBottomColor:'black', borderBottomWitdh:0.8, alignItems: "center", justifyContent: "center", fontColor:'#000'}}>
                <CardItem header>
                  <Text>Berita Acara</Text>
                </CardItem>
              </Row>
              <Row style={{flexDirection:'column'}}>
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
                    <Item floatingLabel style={{marginLeft:11}}>
                        <Label>Lokasi:</Label>
                        <Input />
                    </Item>
                </CardItem>
              </Row>
              <CardItem header style={{marginBottom:-10}}>
                <Text> Jenis Kegiatan</Text>
              </CardItem>
              <CardItem>
                <Row style={{flexDirection:'column'}}>
                  <ListItem>
                      <CheckBox checked={this.state.isCheckedPemeriksaanJaringan} onPress={()=>this.setState({isCheckedPemeriksaanJaringan: !this.state.isCheckedPemeriksaanJaringan})}/>
                      <Text> Pemerikasaan Jaringan</Text>
                  </ListItem>
                  <ListItem>
                    <CheckBox checked={this.state.isCheckedKabelJaringan} onPress={()=>this.setState({isCheckedKabelJaringan: !this.state.isCheckedKabelJaringan})}/>
                    <Text> Instalasi Kabel Jaringan</Text>
                  </ListItem>
                  <ListItem>
                      <CheckBox checked={this.state.isCheckedPerangkatJaringan} onPress={()=>this.setState({isCheckedPerangkatJaringan: !this.state.isCheckedPerangkatJaringan})}/>
                      <Text> Instalasi Perangkat Jaringan</Text>
                  </ListItem>
                  <ListItem>
                    <CheckBox checked={this.state.isCheckedDeinstallPerangkatJaringan} onPress={()=>this.setState({isCheckedDeinstallPerangkatJaringan: !this.state.isCheckedDeinstallPerangkatJaringan})}/>
                    <Text> De-Instalasi Perangkat Jaringan</Text>
                  </ListItem>
                </Row>
              </CardItem>
              <CardItem header>
                <Text> Dengan Perincian</Text>
              </CardItem>
              <CardItem>
                <Row style={{flexDirection:'column'}}>
                  <List>
                    <ListItem itemDivider style={{marginBottom:10}}>
                      <Text>Switch</Text>
                    </ListItem>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>Jumlah:</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>Vendor / Model:</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>No Seri:</Label>
                        <Input />
                    </Item>

                    <ListItem itemDivider style={{marginBottom:10}}>
                      <Text>Wireless</Text>
                    </ListItem>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>Jumlah:</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>Vendor / Model:</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>No Seri:</Label>
                        <Input />
                    </Item>

                    <ListItem itemDivider style={{marginBottom:10}}>
                      <Text>Kabel UTP</Text>
                    </ListItem>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>Jumlah:</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>Vendor / Model:</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>No Seri:</Label>
                        <Input />
                    </Item>

                    <ListItem itemDivider style={{marginBottom:10}}>
                      <Text>Konektor RJ 45</Text>
                    </ListItem>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>Jumlah:</Label>
                        <Input />
                    </Item>

                    <ListItem itemDivider style={{marginBottom:10}}>
                      <Text>NIC</Text>
                    </ListItem>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>Jumlah:</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>Vendor / Model:</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{marginLeft:11, marginBottom:10}}>
                        <Label>No Seri:</Label>
                        <Input />
                    </Item>
                  </List>
                </Row>
              </CardItem>
              <CardItem header>
                <Text>Mengetahui</Text>
              </CardItem>
            </Card>
          </Content>
          <Signature />
        </Container>      
    );
  }
}
