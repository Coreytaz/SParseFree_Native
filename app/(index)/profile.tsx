import { StyleSheet } from 'react-native';

import React from 'react';
import { Text, View } from '@gluestack-ui/themed';

export default function TabTwoScreen() {
    return (
        <View>
            <Text>Профиль</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
