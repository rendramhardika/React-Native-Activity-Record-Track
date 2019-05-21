import React, { Component } from "react";
import { ScrollView, View, Modal, Alert } from "react-native";
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Item, Label, Input, ListItem, CheckBox, Form, List, H1, Textarea} from "native-base";
import DatePicker from "react-native-datepicker";

import SignatureCapture from 'react-native-signature-capture'

export default class FormBA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      isCheckedPemeriksaanJaringan:false,
      isCheckedKabelJaringan:false,
      isCheckedPerangkatJaringan:false,
      isCheckedDeInstallPerangkatJaringan:false,
      isCheckedLainnya:false,
      isCheckedFO:false,
      isCheckedSFP:false,
      signClient:'',
      signTimJaringan:'',
      modalVisible:false,
    };
  }

    setModalVisible(visible){
        this.setState({modalVisible:visible})
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
            <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {Alert.alert('Modal Has Been Closed')}}>
                <View style={{marginTop: 22}}>
                    <View stlyle={{margin:20}}>
                        <Text>
                            helloworls
                        </Text>
                        <Button info onPress={() => {this.setModalVisible(false)}}>
                            <Text>Hide Modal</Text>
                        </Button>
                    </View>
                </View>
            </Modal>

            <View style={{flex:1, flexDirection:'column'}}>
                <View>
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
                </View>
                <View>                    
                    <View style={{margin:10, borderBottomColor:'#000', borderBottomWitdh:0.8, alignItems: "center", justifyContent: "center", fontColor:'#000'}}>
                        <H1>Berita Acara</H1>
                    </View>
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

                        <Card>
                            <CardItem header>
                                <Text>Hasil Pemeriksaan</Text>
                            </CardItem>
                            <CardItem>
                                <View style={{flex:1}}>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>IP Komputer</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>IP Gateway</Label>
                                        <Input />
                                    </Item>
                                    <ListItem itemDivider style={{marginBottom:10}}>
                                        <Text>Ping Gateway</Text>
                                    </ListItem>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Loss (%)</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Min (ms)</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Max (ms)</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Avg (ms)</Label>
                                        <Input />
                                    </Item>

                                    <ListItem itemDivider style={{marginBottom:10}}>
                                        <Text>Ping ke 202.0.107.1</Text>
                                    </ListItem>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Loss (%)</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Min (ms)</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Max (ms)</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Avg (ms)</Label>
                                        <Input />
                                    </Item>

                                    <ListItem itemDivider style={{marginBottom:10}}>
                                        <Text>Ping ke 8.8.8.8</Text>
                                    </ListItem>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Loss (%)</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Min (ms)</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Max (ms)</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Avg (ms)</Label>
                                        <Input />
                                    </Item>

                                    <ListItem itemDivider style={{marginBottom:10}}>
                                        <Text>Speedtest dari Speedtest.net</Text>
                                    </ListItem>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Download (Mbps)</Label>
                                        <Input />
                                    </Item>
                                    <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                        <Label>Upload (Mbps)</Label>
                                        <Input />
                                    </Item>
                                </View>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <View style={{flex:1}}>
                                    <Label style={{fontWeight:'bold'}}>Diagnosa Permasalahan</Label>
                                    <Textarea rowSpan={5} bordered style={{marginBottom:20}}>
                                    </Textarea>

                                    <Label style={{fontWeight:'bold'}}>Penanganan Masalah</Label>
                                    <Textarea rowSpan={5} bordered>
                                    </Textarea>
                                </View>
                            </CardItem>
                        </Card>
                        
                    </View>
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
            </View>
        </ScrollView>
      )
  }
}
