import React from 'react';
import { View, Text, Image, Platform, Button, Share } from 'react-native';
import { Link } from './routing';

const pokemon = props => {
    const { selectedPokemon } = props;
    // following code allows sharing on mobile device
    const handlePress = () => {
        Share.share({
            message: 'Check out my favorite pokemon',
            url: props.selectedPokemon.photoUrl
        });
    };
    const backButton = (
        <View>
            <Link to="/">
                <Text>Go Back</Text>
            </Link>
        </View>
    );
    if (!selectedPokemon) {
        return (
            <View>
                {backButton}
                <Text>No Pokemon Selected</Text>
            </View>
        );
    }
    return (
        <View>
            {backButton}
            <View>
                <Text>{`#${selectedPokemon.number}`}</Text>
            </View>
            <View>
                <Text>{`Name: ${selectedPokemon.name}`}</Text>
            </View>
            <View>
                <Text>{`Type: ${selectedPokemon.type}`}</Text>
            </View>
            <View>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: selectedPokemon.photoUrl }}
                />
            </View>
            {/*following code allows sharing on mobile device*/}
            {Platform.OS !== 'web' && (
                <View>
                    <Button title="Share" onPress={handlePress} />
                </View>
            )}
        </View>
    );
};

export default pokemon;