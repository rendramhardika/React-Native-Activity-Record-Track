import React, {Component} from 'react'
import {Alert, View, YellowBox} from 'react-native'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Item, Label, Input, ListItem, CheckBox, Form, List, H1, Textarea} from "native-base";
import Wizard from './Wizard'
import FormPart1 from './FormWizardPart/FormPart1.js'
import FormPart2 from './FormWizardPart/FormPart2.js'
import FormPart3 from './FormWizardPart/FormPart3.js'



export default class FormWizard extends Component{
    handleSubmitWizard = () => {
        Alert.alert('Wizard has been submitted')
    }

    render(){
        const steps = [
            { component: FormPart1, routeName: 'Step1' },
            { component: FormPart2, routeName: 'Step2' },
            { component: FormPart3, routeName: 'Step3' },
        ]

        return(
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
                
                <Wizard
                    handleSubmitWizard = {this.handleSubmitWizard}
                    steps = {steps}
                    title = 'Berita Acara'
                />
                {/* 
                    Modal for Switch
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.switchModal}
                    onRequestClose={()=>{
                        this.setModalVisibleSwitch(!this.state.switchModal)
                    }}>
                    <View style={{flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center', margin:10, }}>
                        <View >
                            <Card style={{flexDirection:'column', width:400}}>
                                <CardItem header>
                                    <Text>Switch</Text>
                                </CardItem>
                                <CardItem>
                                    <List>
                                        <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                            <Label>Jumlah</Label>
                                            <Input value={this.state.switchJumlah} onChangeText={(text)=>this.setState({switchJumlah:text})} keyboardType="numeric" />
                                        </Item>
                                        <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                            <Label>Vendor/Model</Label>
                                            <Input value={this.state.switchVendor} onChangeText={(text)=>this.setState({switchVendor:text})} />
                                        </Item>
                                        <Item stackedLabel style={{marginLeft:11, marginBottom:10}}>
                                            <Label>No. Aset/SN</Label>
                                            <Input value={this.state.switchNo} onChangeText={(text)=>this.setState({switchNo:text})} />
                                        </Item>
                                    </List>
                                </CardItem>
                                <CardItem>
                                    <Button style={{alignItems:'center'}} primary onPress={() => {this.addSwitch()}}>
                                        <Text> Tambah Switch </Text>
                                    </Button>
                                </CardItem>
                            </Card>
                        </View>
                    </View>
                </Modal>
                 */}
            </View>
            
        )
    }
}