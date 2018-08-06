import React from 'react';
import {View, Text, FlatList, TouchableOpacity } from 'react-native';
// FlatList allows rendering in react-native
import Pokemon from "./PokemonStore";

const Home = props => {
    const handlePress = (pokemon) => {
        props.selectPokemon(pokemon);
        props.history.push('pokemon');
    }
    return (
        <View>
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