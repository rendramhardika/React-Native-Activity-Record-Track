import React, { Component } from "react"
import {View, FlatList} from 'react-native'
import {Button, Text, Container, List, ListItem, Content, Icon} from 'native-base'

const routes = ['page1', 'page2', 'page3']

export default class Sidebar extends Component{
    render(){
        return(
            <Container>
                <Content>
                    <FlatList
                        dataArray={routes}
                        contentContainerStyle={{marginTop:120}}
                        renderRow={data=>{
                            return(
                                <ListItem button onPress={()=> this.props.navigation(data)}>
                                    <Text>{data}</Text>
                                </ListItem>
                            )
                        }}
                    />
                </Content>
            </Container>
        )
    }
}