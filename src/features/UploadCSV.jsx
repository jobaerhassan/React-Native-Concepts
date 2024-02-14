/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
const UploadCSV = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const selectFiles = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: DocumentPicker.types.allFiles,
      });
      const filePath = doc[0].uri;
      setSelectedDoc(filePath);
      console.log(filePath);
    } catch (error) {
      console.log('Error picking document:', error);
    }
  };
  const readFile = async () => {
    if (selectedDoc) {
      try {
        const content = await RNFS.readFile(selectedDoc);
        console.log('document content', content);
      } catch (error) {
        console.log('error while read file', error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Upload file" onPress={selectFiles} />
      <Button title="Read File" onPress={readFile} />
    </View>
  );
};
export default UploadCSV;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});
