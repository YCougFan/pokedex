import React from 'react';
import {View, Text, FlatList, TouchableOpacity } from 'react-native';
import Pokemon from "./PokemonStore";

const Home = props => {
    const handlePress = (pokemon) => {
        props.selectPokemon(pokemon);
        props.history.push('pokemon');
    }
    return (
        <View>
            <h1>Choose a Pokemon</h1>
            {/*FlatList allows rendering in react-native*/}
            <FlatList
                data={Pokemon}
                keyExtractor={Pokemon => Pokemon.number}
                renderItem={({item}) =>
                    <TouchableOpacity onPress={() => handlePress(item)}>
                        <Text className="display">{item.name}</Text>
                    </TouchableOpacity>}
            />
        </View>
    );
};

export default Home;