import {React, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AddInputMultiline} from '../components/AddSiteInputfield';
import {useRoute} from '@react-navigation/native';
import {ResetBtn} from '../components/CustomButton';
import {useDispatch} from 'react-redux';
import {DetailsInput} from '../components/DetailSiteInputField';
import {Formik, Field} from 'formik';
import {editSite} from '../redux/Reducer';
import {DropDownInput} from '../components/DetailSiteInputField';
import Toast from 'react-native-simple-toast'

const Edit = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const siteid = route.params.siteData.id;
  const src = require('../assets/images/facebook.png');
  const [selected, setSelected] = useState('');
  const data = [
    {
      key: 'Social Media',
      value: 'Social Media',
    },
    {
      key: 'Shopping Apps',
      value: 'Shopping Apps',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewAddInput}>
          <Formik
            initialValues={{
              url: route.params.siteData.url,
              siteName: route.params.siteData.name,
              folder: route.params.siteData.folder,
              userName: route.params.siteData.username,
              password: route.params.siteData.sitePassword,
              notes: route.params.siteData.notes,
              src: route.params.siteData.src,
            }}
            onSubmit={async (values,) => {
              const obj = {
                id: siteid,
                url: values.url,
                name: values.siteName,
                folder: selected,
                username: values.userName,
                sitePassword: values.password,
                notes: values.notes,
                src: src,
              };
              dispatch(editSite(obj));
              Toast.show('Updated Succesfully!', Toast.SHORT)
              navigation.navigate('Home');
            }}>
            {({handleSubmit, isValid, values, handleChange}) => (
              <>
                <Field
                  component={DetailsInput}
                  name="url"
                  placeholder="URL"
                  title="URL"
                  onChangeText={handleChange('url')}
                  value={values.url}
                />
                <Field
                  component={DetailsInput}
                  name="siteName"
                  placeholder="Site Name"
                  title="Site Name"
                  onChangeText={handleChange('siteName')}
                  value={values.siteName}
                />
                <Field
                  component={DropDownInput}
                  name="folder"
                  placeholder="Folder"
                  title="Sector/Folder"
                  data={data}
                  setSelected={setSelected}
                  values={selected}
                />
                <Field
                  component={DetailsInput}
                  name="userName"
                  placeholder="user Name"
                  title="User Name"
                  onChangeText={handleChange('userName')}
                  value={values.userName}
                />
                <Field
                  component={DetailsInput}
                  name="password"
                  placeholder="Password"
                  title="Site Password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                />
                <Field
                  component={AddInputMultiline}
                  name="notes"
                  placeholder="Notes"
                  title="Notes"
                  onChangeText={handleChange('notes')}
                  value={values.notes}
                />
                <View style={styles.viewBtn}>
                  <ResetBtn label="Update" onPress={handleSubmit} />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  viewAddInput: {
    justifyContent: 'space-between',
  },
  viewBtn: {
    flexDirection: 'row',
    width: '200%',
    marginTop: 30,
  },
});
