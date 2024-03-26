/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import {useNavigation} from '@react-navigation/native';
import routeName from '../../routes/routeName';
const UploadCSV = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [disable, setDisable] = useState(true);
  const navigation = useNavigation();
  const selectFiles = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: DocumentPicker.types.allFiles,
      });
      const filePath = doc[0].uri;
      setSelectedDoc(filePath);
    } catch (error) {
      console.log('Error picking document:', error);
    }
  };
  useEffect(() => {
    if (selectedDoc) {
      readFile();
    }
  }, [selectedDoc]);
  const readFile = async () => {
    if (selectedDoc) {
      try {
        const content = await RNFS.readFile(selectedDoc);
        const contentArr = content.split('\n');
        setParsedData(createSeparateArray(contentArr.slice(0, 5)));
        setDisable(false);
      } catch (error) {
        console.log('error while read file', error);
      }
    }
  };

  const mapData = () => {
    navigation.navigate(routeName.mapCsv, {parsedData: parsedData});
  };
  return (
    <View style={styles.container}>
      <Button title="Upload file" onPress={selectFiles} />
      <Button title="Map the data" onPress={mapData} disabled={disable} />
    </View>
  );
};
export default UploadCSV;
const styles = StyleSheet.create({
  container: {
    gap: 20,
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 50,
  },
});
const createSeparateArray = (data = []) => {
  const final = [];
  let j = 0;
  const finalLength = data[0].split(',').length;
  while (j < finalLength) {
    final[j] = [];
    for (let i = 0; i < data.length; i++) {
      let tempArr = data[i].split(',');
      final[j].push(tempArr[j]);
    }
    j++;
  }
  return final;
};
