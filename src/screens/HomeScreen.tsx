import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const navigateToDetails = () => {
    navigate('Details');
  };
  const navigateToBottomTabs = () => {
    navigate('BottomTabs');
  };
  const navigateToDrawer = () => {
    navigate('Drawer');
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Details Screen" onPress={navigateToDetails} />
      <Button title="BottomTabs" onPress={navigateToBottomTabs} />
      <Button title="Drawer" onPress={navigateToDrawer} />
    </View>
  );
};

export default HomeScreen;
