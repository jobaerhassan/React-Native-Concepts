/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
const UploadCSV = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [parsedData, setParsedData] = useState(null);
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
        const contentArr = content.split('\n');
        setParsedData(contentArr.slice(0, 5));
        console.log('this is parsed data', parsedData);
      } catch (error) {
        console.log('error while read file', error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Upload file" onPress={selectFiles} />
      <Button title="Read File" onPress={readFile} />
      <View>
        {parsedData &&
          parsedData.map(item => {
            const tempArr = item.split(',');
            return (
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text style={{flexGrow: 1}}>{tempArr[0]}</Text>
                <Text style={{flexGrow: 1}}>{tempArr[1]}</Text>
                <Text style={{flexGrow: 1}}>{tempArr[2]}</Text>
              </View>
            );
          })}
      </View>
    </View>
  );
};
export default UploadCSV;
const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
