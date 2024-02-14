/* eslint-disable react/react-in-jsx-scope */
import {Button, StyleSheet, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
const UploadCSV = () => {
  const selectFiles = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: DocumentPicker.types.pdf,
      });
      console.log(doc);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Upload file" onPress={selectFiles} />
    </View>
  );
};
export default UploadCSV;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});
