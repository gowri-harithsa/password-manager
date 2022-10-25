import {React, useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AddSiteInput} from '../components/AddSiteInputfield';
import {AddInputMultiline} from '../components/AddSiteInputfield';
import {ResetBtn} from '../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {addSite} from '../redux/Reducer';
import Toast from 'react-native-simple-toast';
import {DropDownInput} from '../components/DetailSiteInputField';
import {AddPasswordInput} from '../components/AddSiteInputfield';

const source = require('../assets/images/facebook.png');

const AddSite = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const data = [
    {
      key: 'Social Media',
      value: 'Social Media',
    },
    {
      key: 'Shopping Sites',
      value: 'Shopping Sites',
    },
  ];
  const siteData = useSelector(state => state.siteDetail.value);
  const secureTextEntry = true;
  const [url, setURL] = useState();
  const [siteName, setsiteName] = useState();
  const [folder, setFolder] = useState();
  const [userName, setUserName] = useState();
  const [sitePassword, setPassword] = useState();
  const [notes, setNotes] = useState();
  const dispatch = useDispatch();

  const handleSave = () => {
    if ((url, siteName, folder, userName, sitePassword, notes != null)) {
      const siteObj = {
        id: siteData.length + 1,
        name: siteName,
        notes: notes,
        sitePassword: sitePassword,
        url: url,
        folder: selected,
        username: userName,
        src: source,
      };
      dispatch(addSite(siteObj));
      Toast.show('added Successfully', Toast.LONG);
      navigation.navigate('Home');
    } else {
      Toast.show('enter all details');
    }
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
          <AddSiteInput
            title="URL"
            placeholder={'Enter Site URL'}
            value={url}
            onChangeText={value => setURL(value)}
            secureTextEntry={false}
          />
          <AddSiteInput
            title="Site Name"
            placeholder={'Enter Site Name'}
            value={siteName}
            onChangeText={value => setsiteName(value)}
            secureTextEntry={false}
          />
          <DropDownInput
            title="Sector/Folder"
            data={data}
            setSelected={setSelected}
            values={selected}
          />
          <AddSiteInput
            title="User Name"
            placeholder={'Enter Username'}
            value={userName}
            onChangeText={value => setUserName(value)}
            secureTextEntry={false}
          />
          <AddPasswordInput
            title="Site Password"
            placeholder={'Enter Password'}
            value={sitePassword}
            onChangeText={value => setPassword(value)}
            secureTextEntry={secureTextEntry}
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
  passContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
  },
});
