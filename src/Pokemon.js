import React from 'react';
import { View, Text, Image, Platform, Button, Share } from 'react-native';
import { Link } from './routing';

import './index.css';

import Card from '@material-ui/core/Paper';
import Paper from '@material-ui/core/Paper';

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
            <Link to="/" className='back'>
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
        <Paper className='paperback'>
            <View>
                <Card className='number'>{`#${selectedPokemon.number}`}</Card>
            </View>
            <View>
                <Card className='name'>{`Name: ${selectedPokemon.name}`}</Card>
            </View>
            <View>
                <Card className='type'>{`Type: ${selectedPokemon.type}`}</Card>
            </View>
            <View>
                <Image className='image'
                    style={{ width: 200, height: 200 }}
                    source={{ uri: selectedPokemon.photoUrl }}
                />
            </View>
            {backButton}
            {/*following code allows sharing on mobile device*/}
            {Platform.OS !== 'web' && (
                <View>
                    <Button title="Share" onPress={handlePress} />
                </View>
            )}
        </Paper>
    );
};

export default pokemon;