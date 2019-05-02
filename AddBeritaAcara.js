import React, {Component} from 'react'
import { Header, ThemeProvider, Icon, CheckBox, Card, Input, ListItem, Label, Text } from 'react-native-elements';
import {View, ScrollView} from 'react-native'
import DatePicker from 'react-native-datepicker'


export default class AddBeritaAcara extends Component{
    constructor(props){
        super(props)
        this.state={
            date:"",
            lokasi:"",

            isCheckedPemeriksaanJaringan:false,
            isCheckedKabelJaringan:false,
            isCheckedPerangkatJaringan:false,
            isCheckedDeInstallPerangkatJaringan:false,
        }
    }

    render(){
        return(
            <ScrollView>
                <ThemeProvider>          
                <Header
                    placement="left"
                    leftComponent={{icon:'menu', color:'#fff'}}
                    centerComponent={{ text: 'Form Berita Acara', style: { color: '#fff', fontSize:20 } }}
                />
                <Card title="Berita Acara">
                    <DatePicker
                        style={{width: 200, marginLeft:13}}
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

                    <Card>
                        <Input
                            label='Lokasi'
                            placeholder='Masukkan Lokasi'
                            leftIcon={<Icon
                                    name="location-on"
                                    size={18}
                                    color='black'
                                />}
                            
                    />
                    </Card>
                    
                    <Card>
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
                    </Card>

                    <Card title="Dengan Perincian:" titleStyle={{textAlign:'left'}}>
                        
                    </Card>
                    
                        
                    
                </Card>
                
            </ThemeProvider>
            </ScrollView>
            
            
        )
    }
}
