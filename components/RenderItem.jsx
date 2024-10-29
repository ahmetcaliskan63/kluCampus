import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';

const RenderItem = ({ item }) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  return (
    <View
      style={[styles.itemContainer, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, backgroundColor: item.backgroundColor }]}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={[styles.itemText, { color: item.textColor }]}>
        {item.text}
      </Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 120, // Görseli biraz daha aşağı aldık
  },
  image: {
    width: 150,
    height: 150,
  },
  itemText: {
    marginTop: 80, // Yazıyı biraz daha aşağı aldık
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});