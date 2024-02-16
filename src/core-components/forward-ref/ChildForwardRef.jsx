import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const ChildParentRef = () => {
  return (
    <View style={styles.container}>
      <Text>this is child</Text>
    </View>
  );
};
export default ChildParentRef;
const styles = StyleSheet.create({
  container: {},
});
