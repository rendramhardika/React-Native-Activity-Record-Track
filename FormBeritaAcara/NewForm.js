import React, {Component} from 'react'
import {ScrollView, View, Alert, Modal, Picker} from 'react-native'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Item, Label, Input, ListItem, CheckBox, Form, List, H1, Textarea, Drawer} from "native-base";
import DatePicker from 'react-native-datepicker'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignatureCapture from 'react-native-signature-capture'

import Sidebar from './Sidebar.js'
export default class NewForm extends Component{
    constructor(props){
        super(props)
        this.state={
            switchModal:false,
            kabelModal:false,
            perangkatModal:false,
            checkTypeModal:false,
            netCheckModal:false,
            diagnoseModal:false,

            date: "",
            lokasi:"",
            signClient:"",
            signTimJaringan:"",

            recordPost:[],

            perangkatJenis:"",

            perangkat:[],
            perangkatJumlah:"",
            perangkatVendor:"",
            perangkatNo:"",
            
            kabel:[],
            kabelJenis:"",
            panjangKabel:"",

            fiber:[],
            fiberJenis:"",
            fiberVendor:"",
            fiberNo:"",
            
            
            jumlahRJ45:"",
        }
    }

    openDrawer = () => {
        this.drawer._root.open()
    }

    closeDrawer = () => {
        this.drawer._root.close()
    }


    // TOGGLE MODAL
    setModalVisibleSwitch = (visible) => {
        this.setState({switchModal: visible})
    }

    setModalVisiblePerangkat = (visible) => {
        this.setState({perangkatModal: visible})
    }

    setModalVisibleCheck = (visible) => {
        this.setState({checkTypeModal:visible})
    }

    setModalVisiblenetCheck = (visible) => {
        this.setState({netCheckModal:visible})
    }

    setModalVisibleDiagnose = (visible) => {
        this.setState({diagnoseModal:visible})
    }


    // FUNCTION FOR SIGNATURE
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


    // FUNCTION FOR ADD
    addPerangkat = () =>{
        if(this.state.perangkatVendor != '' && this.state.perangkatJumlah != '' && this.state.perangkatNo !=''){
            var perangkatArray = [...this.state.perangkat]
            perangkatArray.push({
                jenis:this.state.perangkatJenis,
                model: this.state.perangkatVendor,
                no_aset:this.state.perangkatNo,
                jumlah:this.state.perangkatJumlah
            })
            this.setState({perangkat:perangkatArray})    
            this.setState({
                perangkatJenis:"",
                perangkatVendor:"",
                perangkatNo:"",
                perangkatJumlah:""
            })
            this.setModalVisiblePerangkat(!this.state.perangkatModal)
        }
        else{
            Alert.alert("Data tidak boleh kosong!")
        }
        
    }

    addKabel = () =>{
        if(this.state.kabelJenis != '' && this.state.panjangKabel != ''){
            var kabelArray = [...this.state.kabel]
            kabelArray.push({
                jenis:this.state.kabelJenis,
                panjang:this.state.panjangKabel,
            })
            this.setState({kabel:kabelArray})    
            this.setState({
                perangkatJenis:"",
                kabelJenis:"",
                panjangKabel:"",
            })
            this.setModalVisiblePerangkat(!this.state.perangkatModal)
        }
        else{
            Alert.alert("Data tidak boleh kosong!")
        }
    }
    
    addFiber = () =>{
        var fiberArray = [...this.state.fiber]
        fiberArray.push({
            jenis:this.state.fiberJenis,
            model:this.state.fiberVendor,
            no_aset:this.state.fiberNo
        })
        this.setState({fiber:fiberArray})    
        this.setState({
            perangkatJenis:"",
            fiberJenis:"",
            fiberVendor:"",
            fiberNo:"",
        })
        this.setModalVisiblePerangkat(!this.state.perangkatModal)
    }

    addRJ = () =>{
        this.setModalVisiblePerangkat(!this.state.perangkatModal)
    }

    render(){
        return(
            // <Drawer ref={(ref)=>{this.drawer=ref}} content={<Sidebar navigator={this.navigator} />} onClose={()=>this.closeDrawer()}>
                <Container>

                    {/* Modal for CheckType */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.checkTypeModal}
                        onRequestClose={()=>{
                            this.setModalVisibleSwitch(!this.state.checkTypeModal)
                        }}>
                        <View style={{flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center', margin:10, }}>
                            <View >
                                <Card style={{flexDirection:'column', width:400}}>
                                    <CardItem header>
                                        <Text>Jenis Kegiatan</Text>
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
                                    <CardItem>
                                        <Button style={{alignItems:'center'}} primary onPress={() => {this.setModalVisibleCheck(!this.state.checkTypeModal)}}>
                                            <Text> Selesai </Text>
                                        </Button>
                                    </CardItem>
                                </Card>
                            </View>
                        </View>
                    </Modal>

                    {/* Modal for add Component */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.perangkatModal}
                        onRequestClose={()=>{
                            this.setModalVisiblePerangkat(!this.state.perangkatModal)
                        }}>
                        <View style={{flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center', margin:10, }}>
                            <View >
                                <Card style={{flexDirection:'column', width:400}}>
                                    <CardItem header>
                                        <Text>Komponen</Text>
                                    </CardItem>
                                    <CardItem>
                                        <List>
                                            <Item>
                                                <Picker
                                                    mode="dialog"
                                                    selectedValue={this.state.perangkatJenis}
                                                    style={{height:50, width:380}}
                                                    onValueChange={(itemValue, itemIndex)=> this.setState({perangkatJenis:itemValue})}
                                                >
                                                    <Picker.Item label="Pilih Perangkat" value="" />
                                                    <Picker.Item label="Switch" value="Switch" />
                                                    <Picker.Item label="Wireless" value="Wireless" />
                                                    <Picker.Item label="Kabel" value="Kabel" />
                                                    <Picker.Item label="Konektor RJ-45" value="RJ45" />
                                                    <Picker.Item label="Fiber Device" value="Fiber Device" />
                                                </Picker>
                                            </Item>
                                            {this.state.perangkatJenis == 'Kabel' ?
                                                (
                                                    <List>
                                                        <Picker
                                                            mode="dialog"
                                                            selectedValue={this.state.kabelJenis}
                                                            style={{height:50, width:380}}
                                                            onValueChange={(itemValue, itemIndex)=> this.setState({kabelJenis:itemValue})}
                                                        >
                                                            <Picker.Item label="Pilih Kabel" value="" />
                                                            <Picker.Item label="FO" value="FO" />
                                                            <Picker.Item label="UTP" value="UTP" />
                                                            <Picker.Item label="listrik" value="Listrik" />
                                                        </Picker>
                                                    
                                                        <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                                            <Label>Panjang Kabel</Label>
                                                            <Input value={this.state.panjangKabel} onChangeText={(text)=>this.setState({panjangKabel:text})} keyboardType="numeric" />
                                                        </Item>
                                                    </List>
                                                    
                                                )
                                                :
                                                (
                                                    this.state.perangkatJenis == 'RJ45' ?
                                                    (
                                                        <List>
                                                            <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                                                <Label>Jumlah</Label>
                                                                <Input value={this.state.jumlahRJ45} onChangeText={(text)=>this.setState({jumlahRJ45:text})} keyboardType="numeric" />
                                                            </Item>
                                                        </List>
                                                    )
                                                    :
                                                    (
                                                        this.state.perangkatJenis == 'Fiber Device' ?
                                                        (
                                                            <List>
                                                                <Picker
                                                                    mode="dialog"
                                                                    selectedValue={this.state.fiberJenis}
                                                                    style={{height:50, width:380}}
                                                                    onValueChange={(itemValue, itemIndex)=> this.setState({fiberJenis:itemValue})}
                                                                >
                                                                    <Picker.Item label="Pilih Fiber Device" value="" />
                                                                    <Picker.Item label="SFP" value="SFP" />
                                                                    <Picker.Item label="Fiber Optic Converter" value="Fiber Optic Converter" />
                                                                </Picker>
                                                                <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                                                    <Label>Vendor/Model</Label>
                                                                    <Input value={this.state.fiberVendor} onChangeText={(text)=>this.setState({fiberVendor:text})} />
                                                                </Item>
                                                                <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                                                    <Label>No. Aset/SN</Label>
                                                                    <Input value={this.state.fiberNo} onChangeText={(text)=>this.setState({fiberNo:text})} />
                                                                </Item>
                                                            </List>
                                                        )
                                                        :
                                                        (
                                                            <List>
                                                                <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                                                    <Label>Jumlah</Label>
                                                                    <Input value={this.state.perangkatJumlah} onChangeText={(text)=>this.setState({perangkatJumlah:text})} keyboardType="numeric" />
                                                                </Item>
                                                                <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                                                    <Label>Vendor/Model</Label>
                                                                    <Input value={this.state.perangkatVendor} onChangeText={(text)=>this.setState({perangkatVendor:text})} />
                                                                </Item>
                                                                <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                                                    <Label>No. Aset/SN</Label>
                                                                    <Input value={this.state.perangkatNo} onChangeText={(text)=>this.setState({perangkatNo:text})} />
                                                                </Item>
                                                            </List>
                                                        )
                                                    )
                                                )
                                            }                   
                                        </List>
                                    </CardItem>
                                    <CardItem>
                                        {this.state.perangkatJenis == 'Kabel' ?
                                            (
                                                <Button style={{alignItems:'center'}} primary onPress={() => {this.addKabel()}}>
                                                    <Text> Tambah Perangkat </Text>
                                                </Button>
                                            )   
                                            :
                                            (
                                                this.state.perangkatJenis == 'RJ45' ?
                                                (
                                                    <Button style={{alignItems:'center'}} primary onPress={() => {this.addRJ()}}>
                                                        <Text> Tambah Perangkat </Text>
                                                    </Button>
                                                )
                                                :
                                                (
                                                    this.state.perangkatJenis =='Fiber Device' ?
                                                    (
                                                        <Button style={{alignItems:'center'}} primary onPress={() => {this.addFiber()}}>
                                                        <Text> Tambah Perangkat </Text>
                                                    </Button>
                                                    )
                                                    :
                                                    (
                                                        <Button style={{alignItems:'center'}} primary onPress={() => {this.addPerangkat()}}>
                                                            <Text> Tambah Perangkat </Text>
                                                        </Button>
                                                    )
                                                )  
                                            )
                                        }
                                    </CardItem>
                                </Card>
                            </View>
                        </View>
                    </Modal>

                    {/* Modal for Network Check */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.netCheckModal}
                        onRequestClose={()=>{
                            this.setModalVisibleSwitch(!this.state.netCheckModal)
                        }}>
                        <View style={{flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center', margin:10, }}>
                            <View >
                                <Card style={{flexDirection:'column', width:400}}>
                                    <CardItem header>
                                        <Text>Pemriksaan Jaringan</Text>
                                    </CardItem>
                                    <CardItem>
                                        
                                    </CardItem>
                                    <CardItem>
                                        <Button style={{alignItems:'center'}} primary onPress={() => {this.setModalVisiblenetCheck(!this.state.netCheckModal)}}>
                                            <Text> Selesai </Text>
                                        </Button>
                                    </CardItem>
                                </Card>
                            </View>
                        </View>
                    </Modal>
                    

                    <Header>
                        <Left>
                            <Button trasnsparent>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Form Berita Acara</Title>
                        </Body>
                    </Header>
                    <Content>
                        <View style={{flexDirection:'column', margin:10}}>
                            <Card style={{flex:2}}>
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
                                        <Input value={this.state.lokasi} onChangeText={(text) => this.setState({lokasi: text})} />
                                    </Item>
                                </CardItem>
                            </Card>
                            
                            {/* Button to add record */}
                            <Card>
                                <CardItem style={{flex:1, flexDirection:'column'}}>
                                    <Button style={{margin:3}} primary onPress={() => {this.setModalVisibleCheck(!this.state.CheckTypeModal)
                                    }}>
                                        <Text> Jenis Kegiatan </Text>
                                    </Button>
                                    <Button style={{margin:3}} primary onPress={() => {this.setModalVisiblePerangkat(!this.state.perangkatModal)
                                    }}>
                                        <Text> Tambah Perangkat </Text>
                                    </Button>
                                    <Button style={{margin:3}} primary onPress={() => {this.setModalVisiblenetCheck(!this.state.netCheckModal)
                                    }}>
                                        <Text> Pemeriksaan Jaringan </Text>
                                    </Button>
                                    <Button style={{margin:3}} primary onPress={() => {this.setModalVisibleDiagnose(!this.state.diagnoseModal)
                                    }}>
                                        <Text> Diagnosa Pemeriksaan </Text>
                                    </Button>
                                </CardItem>
                            </Card>

                            {/* To display current records */}
                            <Card>
                                <CardItem header>
                                    <Text>Records</Text>
                                </CardItem>
                                { 
                                    this.state.perangkat.length !== 0 ?
                                        (
                                            <CardItem>
                                                <View style={{flex:1}}>
                                                    {this.state.perangkat.map((data, index)=>
                                                        <List>
                                                            <ListItem itemDivider key={index}>
                                                                <Text>{data.jenis} - {index}</Text>
                                                            </ListItem>
                                                            <ListItem >
                                                                <Text>
                                                                    Vendor    : {data.model}{"\n"}
                                                                    No Serial : {data.no_aset}{"\n"}
                                                                    Jumlah    : {data.jumlah} unit
                                                                </Text>
                                                            </ListItem>
                                                            
                                                        </List>                    
                                                    )}
                                                </View>
                                            </CardItem>
                                        )
                                        :
                                        (
                                            <CardItem><Text>No Perangkat</Text></CardItem>
                                        )
                                }
                                
                                {   
                                    this.state.kabel.length !== 0 ?
                                        (
                                            <CardItem>
                                                <View style={{flex:1}}>
                                                    {this.state.kabel.map((dataKabel, index)=>
                                                        <List>
                                                            <ListItem itemDivider key={index}>
                                                                <Text>{dataKabel.jenis} - {index}</Text>
                                                            </ListItem>
                                                            <ListItem >
                                                                <Text>
                                                                    Panjang Kabel : {dataKabel.panjang} meter
                                                                </Text>
                                                            </ListItem>
                                                            
                                                        </List>                    
                                                    )}
                                                </View>
                                            </CardItem>
                                        )
                                        :
                                        (
                                            <CardItem><Text>No Kabel</Text></CardItem>
                                        )
                                }

                                {   
                                    this.state.fiber.length !== 0 ?
                                        (
                                            <CardItem>
                                                <View style={{flex:1}}>
                                                    {this.state.fiber.map((dataFiber, index)=>
                                                        <List>
                                                            <ListItem itemDivider key={index}>
                                                                <Text>Fiber Device- {index}</Text>
                                                            </ListItem>
                                                            <ListItem >
                                                                <Text>
                                                                    Jenis       : {dataFiber.jenis}{"\n"}
                                                                    Vendor      : {dataFiber.model}{"\n"}
                                                                    No Serial   : {dataFiber.no_aset}
                                                                </Text>
                                                            </ListItem>  
                                                        </List>                    
                                                    )}
                                                </View>
                                            </CardItem>
                                        )
                                        :
                                        (
                                            <CardItem><Text>No Fiber Device</Text></CardItem>
                                        )
                                }

                                {   
                                    this.state.jumlahRJ45 !== "" ?
                                        (
                                            <CardItem>
                                                <View style={{flex:1}}>
                                                    <List>
                                                        <ListItem itemDivider>
                                                            <Text>Konektor RJ-45</Text>
                                                        </ListItem>
                                                        <ListItem >
                                                            <Text>
                                                                Jumlah : {this.state.jumlahRJ45} unit
                                                            </Text>
                                                        </ListItem>
                                                    </List>                    
                                                </View>
                                            </CardItem>
                                        )
                                        :
                                        (
                                            <CardItem><Text>No Konektor RJ-45</Text></CardItem>
                                        )
                                }
                                
                            </Card>
                            <Card>
                                <CardItem>
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
                                </CardItem>
                            </Card>
                        </View>
                    </Content>
                </Container>
            // </Drawer>
        )
    }
}