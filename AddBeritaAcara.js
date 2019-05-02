import React, {Component} from 'react'
import { Header, ThemeProvider, Icon, CheckBox } from 'react-native-elements';

export default class AddBeritaAcara extends Component{
    constructor(props){
        super(props)
        this.state={
            isCheckedPemeriksaanJaringan:false,
            isCheckedKabelJaringan:false,
            isCheckedPerangkatJaringan:false,
            isCheckedDeInstallPerangkatJaringan:false,

        }
    }

    render(){
        return(
            <ThemeProvider>          
                <Header
                    placement="left"
                    leftComponent={{icon:'menu', color:'#fff'}}
                    centerComponent={{ text: 'Form Berita Acara', style: { color: '#fff', fontSize:20 } }}
                />
                <CheckBox
                    left
                    title='Pemeriksaan Jaringan'
                    checked={this.state.isCheckedPemeriksaanJaringan}
                    onPress={() => this.setState({isChecked: !this.state.isCheckedPemeriksaanJaringan})}
                />
                <CheckBox
                    left
                    title='Instalasi Kabel Jaringan'
                    checked={this.state.isCheckedKabelJaringan}
                    onPress={() => this.setState({isChecked1: !this.state.isCheckedKabelJaringan})}
                />
                <CheckBox
                    left
                    title='Instalasi Perangkat Jaringan'
                    checked={this.state.isCheckedPerangkatJaringan}
                    onPress={() => this.setState({isChecked1: !this.state.isCheckedPerangkatJaringan})}
                />
                <CheckBox
                    left
                    title='De-Instalasi Perangkat Jaringan'
                    checked={this.state.isCheckedDeInstallPerangkatJaringan}
                    onPress={() => this.setState({isChecked1: !this.state.isCheckedDeInstallPerangkatJaringan})}
                />
            </ThemeProvider>
            
        )
    }
}
