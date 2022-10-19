import {React, useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AddSitesInput} from '../components/AddSiteInputfield';
import {AddInputMultiline} from '../components/AddSiteInputfield';
import {ResetBtn} from '../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {addSite} from '../redux/Reducer';
import Toast from 'react-native-simple-toast';

const source = require('../assets/images/facebook.png');

const AddSite = ({navigation}) => {
  const siteData = useSelector(state => state.siteDetail.value);

  const [url, setURL] = useState();
  const [siteName, setsiteName] = useState();
  const [folder, setFolder] = useState();
  const [userName, setUserName] = useState();
  const [sitePassword, setPassword] = useState();
  const [notes, setNotes] = useState();
  const dispatch = useDispatch();

  const handleSave = () => {
    const siteObj = {
      id: siteData.length + 1,
      name: siteName,
      notes: notes,
      sitePassword: sitePassword,
      url: url,
      folder: folder,
      username: userName,
      src: source,
    };
    dispatch(addSite(siteObj));
    Toast.show('added Successfully', Toast.LONG);
    navigation.navigate('Home');
  };

  const handleReset = () => {
    setURL(' ');
    setsiteName(' ');
    setFolder(' ');
    setUserName(' ');
    setPassword(' ');
    setNotes(' ');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewAddInput}>
          <AddSitesInput
            title="URL"
            placeholder={'Enter Site URL'}
            value={url}
            onChangeText={value => setURL(value)}
          />
          <AddSitesInput
            title="Site Name"
            placeholder={'Enter Site Name'}
            value={siteName}
            onChangeText={value => setsiteName(value)}
          />
          <AddSitesInput
            title="Sector/Folder"
            placeholder={'Enter folder Name'}
            value={folder}
            onChangeText={value => setFolder(value)}
          />
          <AddSitesInput
            title="User Name"
            placeholder={'Enter Username'}
            value={userName}
            onChangeText={value => setUserName(value)}
          />
          <AddSitesInput
            title="Site Password"
            placeholder={'Enter Password'}
            value={sitePassword}
            onChangeText={value => setPassword(value)}
          />
          <AddInputMultiline
            title="Notes"
            placeholder={'Notes'}
            value={notes}
            multiline={true}
            onChangeText={value => setNotes(value)}
          />
        </View>
      </ScrollView>
      <View style={styles.viewBtn}>
        <ResetBtn label="Reset" onPress={handleReset} />
        <ResetBtn label="Save" onPress={handleSave} />
      </View>
    </SafeAreaView>
  );
};

export default AddSite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  viewAddInput: {
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  viewBtn: {
    flexDirection: 'row',
    width: '100%',
  },
});
