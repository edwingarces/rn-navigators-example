import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

const ProfileScreen = () => {
  const { navigate, openDrawer, replace } = useNavigation();
  const openDrawerMenu = () => {
    openDrawer();
  };
  const navigateToHome = () => {
    replace('Home');
  };
  const navigateToHomeInTabs = () => {
    navigate('BottomTabs', { screen: 'Home' });
  };
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="Open Drawer" onPress={openDrawerMenu} />
      <Button title="Go to Home" onPress={navigateToHome} />
      <Button title="Go to Home in Tabs" onPress={navigateToHomeInTabs} />
    </View>
  );
};

export default ProfileScreen;

/*
	•	navigate: Navegación estándar entre pantallas.
	•	push: Crear múltiples instancias de una misma pantalla.
	•	goBack: Volver a la pantalla anterior.
	•	replace: Reemplazar la pantalla actual y evitar regresar.
	•	reset: Reiniciar el historial de navegación.
	•	popToTop: Volver a la primera pantalla del stack.
	•	navigate con parámetros: Navegar hacia pantallas anidadas dentro de un navegador específico.
	•	pop: Retroceder varios pasos en el stack.
*/
