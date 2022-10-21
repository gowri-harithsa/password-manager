import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AddInputMultiline} from '../components/AddSiteInputfield';
import {DetailsInput} from '../components/DetailSiteInputField';
import {useRoute} from '@react-navigation/native';
import {ResetBtn} from '../components/CustomButton';
import {Formik, Field} from 'formik';

const Details = ({navigation}) => {

  const route = useRoute();
  const src = require('../assets/images/facebook.png');
  console.log('i am id', route.params.item.id)
  const siteData = route.params.item

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewAddInput}>
          <Formik
            initialValues={{
              url: route.params.item.url,
              siteName: '',
              folder: '',
              userName: '',
              password: '',
              notes: '',
              src: src
            }}>
            {({handleSubmit, isValid, values}) => (
              <>
                <Field
                  component={DetailsInput}
                  name="url"
                  placeholder="URL"
                  title="URL"
                  value={values.url}
                />
                <Field
                  component={DetailsInput}
                  name="siteName"
                  placeholder="Site Name"
                  title="Site Name"
                  value={route.params.item.name}
                />
                <Field
                  component={DetailsInput}
                  name="folder"
                  placeholder="Folder"
                  title="Sector/Folder"
                  value={route.params.item.folder}
                />
                <Field
                  component={DetailsInput}
                  name="userName"
                  placeholder="user Name"
                  title="User Name"
                  value={route.params.item.username}
                />
                <Field
                  component={DetailsInput}
                  name="password"
                  placeholder="Password"
                  title="Site Password"
                  value={route.params.item.sitePassword}
                />
                <Field
                  component={AddInputMultiline}
                  name="notes"
                  placeholder="Notes"
                  title="Notes"
                  value={route.params.item.notes}
                />
                <View style={styles.viewBtn}>
                  <ResetBtn
                    label="Edit"
                    onPress={() => {
                      navigation.navigate('EditSite', {siteData});
                      console.log(siteData.id);
                    }}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

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
    alignSelf: 'center',
  },
});
