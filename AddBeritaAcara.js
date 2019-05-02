import React, {Component} from 'react'
import { Header, ThemeProvider, Icon, CheckBox, Card, Input, ListItem, Label, Text, Title, List} from 'react-native-elements';
import {View, ScrollView} from 'react-native'
import DatePicker from 'react-native-datepicker'
import {Grid, Col, Row} from 'react-native-easy-grid'


export default class AddBeritaAcara extends Component{
    constructor(props){
        super(props)
        this.state={
            date:"",
            lokasi:"",
            jenis_pemeriksaan:"",

            isCheckedPemeriksaanJaringan:false,
            isCheckedKabelJaringan:false,
            isCheckedPerangkatJaringan:false,
            isCheckedDeInstallPerangkatJaringan:false,
            isCheckedLainnya:false,
        }
    }


    render(){
        return(
            <ScrollView>
                <View style={{padder:5}}>
                         
                    <Header
                        placement="left"
                        leftComponent={{icon:'menu', color:'#fff'}}
                        centerComponent={{ text: 'Form Berita Acara', style: { color: '#fff', fontSize:20 } }}
                        containerStyle={{height:70}}
                    />

                    <Row style={{ justifyContent:'center', alignItems:'center', marginBottom:15, marginTop:10, borderBottomColor:'black', borderBottomWidth:0.8, paddingBottom:10 }}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'#000'}}>Berita Acara</Text>
                    </Row>
                
                    <Row style={{marginLeft:10}}>
                        <DatePicker
                            style={{width: 200, marginLeft:6, marginBottom:10}}
                            date={this.state.date}
                            mode="date"
                            placeholder="Pilih Tanggal"
                            format="DD-MM-YYYY"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({date:date})}}
                        />
                    </Row>
                
                    <Row style={{marginBottom:10, marginLeft:10}}>
                        <Input
                            label='Lokasi'
                            placeholder='Masukkan Lokasi'
                            leftIcon={<Icon
                                    name="location-on"
                                    size={18}
                                    color='black'
                            />}
                        />
                    </Row>
                    <Row style={{flexDirection:'column', marginLeft:10}}>
                        <CheckBox
                            left
                            title='Pemeriksaan Jaringan'
                            checked={this.state.isCheckedPemeriksaanJaringan}
                            onPress={() => this.setState({isCheckedPemeriksaanJaringan: !this.state.isCheckedPemeriksaanJaringan})}
                        />
                    
                        <CheckBox
                            left
                            title='Instalasi Kabel Jaringan'
                            checked={this.state.isCheckedKabelJaringan}
                            onPress={() => this.setState({isCheckedKabelJaringan: !this.state.isCheckedKabelJaringan})}
                        />

                        <CheckBox
                            left
                            title='Instalasi Perangkat Jaringan'
                            checked={this.state.isCheckedPerangkatJaringan}
                            onPress={() => this.setState({isCheckedPerangkatJaringan: !this.state.isCheckedPerangkatJaringan})}
                        />

                        <CheckBox
                            left
                            title='De-Instalasi Perangkat Jaringan'
                            checked={this.state.isCheckedDeInstallPerangkatJaringan}
                            onPress={() => this.setState({isCheckedDeInstallPerangkatJaringan: !this.state.isCheckedDeInstallPerangkatJaringan})}
                        />

                        <CheckBox
                            left
                            title={
                                <Input
                                    containerStyle={{width:360}}
                                    placeholder='Lainnya'
                                />
                            }
                            checked={this.state.isCheckedLainnya}
                            onPress={() => this.setState({isCheckedLainnya: !this.state.isCheckedLainnya})}
                        />
                        
                    </Row>
                
                
                    <Row style={{marginLeft:21, marginTop:7}}>
                        <Text style={{fontSize:17, fontWeight:'bold'}}>Dengan Perincian:</Text>
                    </Row>
                </View>
            </ScrollView>
            
            
        )
    }
}
