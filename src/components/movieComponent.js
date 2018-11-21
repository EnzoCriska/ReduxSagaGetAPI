import React, { Component } from 'react';
import { Text, View, Image, Alert, Platform, TextInput, FlatList, StyleSheet } from 'react-native';
import Button from "react-native-button";

export default class MovieComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            movieName: '',
            releaseYear: ''
        }
    }

    render() {
        return (
            <View style = {style.container}>
                <Text style = {style.title}>Saga Movie</Text>
                <Text style= {{ margin: 10, color: 'black', fontSize: 20}}> new Movie Infomation</Text>
                <View style = {style.inputContainer}>
                    <TextInput style={style.input}
                        onChangeText = {(text) => this.setState({movieName: text})}
                        value={this.state.movieName}
                        placeholder= 'Enter new movie name'
                    />
                    <TextInput style={style.input}
                        onChangeText = {(text) => this.setState({releaseYear: text})}
                        value={this.state.releaseYear}
                        placeholder= 'releaseYear'
                        keyboardType= 'numeric'
                    />
                </View>
                <View style={{height: 70, flexDirection: 'row'}}>
                    <Button
                        containerStyle= {{padding: 10, margin: 10, width: 150, height: 45, borderRadius: 50, backgroundColor: 'green'}}
                        style = {{fontSize: 18, color: 'white'}}
                        onPress={() =>{
                            this.props.onFetchMovie('asc')
                        }}
                    > Fetch Movie</Button>
                    <Button
                        containerStyle= {{padding: 10, margin: 10, width: 150, height: 45, borderRadius: 50, backgroundColor: 'green'}}
                        style = {{fontSize: 18, color: 'white'}}
                        onPress={() =>{ 
                            const {movieName, releaseYear} = this.state;
                            if (!movieName.length || !releaseYear.length){
                                alert('you need type to movieName and releaseYear');
                                return;
                            }
                            this.props.onAddMovie({name: movieName, releaseYear: releaseYear});
                        }}
                    > Add Movie</Button>
                </View>
                <FlatList
                    data={this.props.movies}
                    keyExtractor= {(item)=> item.name}
                    renderItem={({item, index}) => <Text 
                    style={{padding: 10,
                        fontWeight: 'bold', 
                        fontSize: 17,
                        color: 'white',
                        backgroundColor: (index %2 === 0)? 'dodgerblue' : 'mediumseagreen'}}>
                        {`${item.name}, releaseYear=${item.releaseYear}`}</Text>
                         }
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 34 : 0
    },
    title:{
        margin: 10,
        fontWeight: 'bold',
        color: 'green',
        fontSize: 20
    },
    inputContainer:{
        height: 100,
        margin: 10
    },
    input:{
        flex: 1,
        margin: 5,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
  

})