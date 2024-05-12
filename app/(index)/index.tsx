
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Text, View } from '@gluestack-ui/themed';

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View>
      <Text>Главная</Text>
    </View>
  );
}

