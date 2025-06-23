import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import routeName from '../../routes/routeName';

const RootAnimationRenderer = () => {
  const navigation = useNavigation<any>(); // @TODO: change any type

  const menuItems = [
    {
      id: 'ball',
      title: 'Ball Animation',
      onPress: () => navigation.navigate(routeName.ballAnimationRenderer),
    },
    {
      id: 'carousel',
      title: 'Carousel Animation',
      onPress: () => {
        navigation.navigate(routeName.carouselAnimationRenderer);
      },
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Animation Examples</Text>
      <ScrollView
        contentContainerStyle={styles.menuContainer}
        scrollEnabled={true}>
        {menuItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={item.onPress}>
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default RootAnimationRenderer;
