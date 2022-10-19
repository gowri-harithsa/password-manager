import {React, useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AddInputMultiline} from '../components/AddSiteInputfield';
import {useRoute} from '@react-navigation/native';
import {ResetBtn} from '../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {AddSitesInput} from '../components/AddSiteInputfield';
import {DetailsInput} from '../components/DetailsInputField';
const Edit = ({navigation}) => {
  const siteData = useSelector(state => state.siteDetail.value);

  const route = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewAddInput}>
          <DetailsInput title="URL" value={route.params.siteData.url} />
          <DetailsInput title="Site Name" value={siteData.name} />
          <DetailsInput title="Sector/Folder" value={siteData.folder} />
          <DetailsInput title="User Name" value={siteData.username} />
          <DetailsInput title="Site Password" value={siteData.sitePassword} />
          <AddInputMultiline title="Notes" value={siteData.notes} />
        </View>
        <View style={styles.viewBtn}>
          <ResetBtn label="Update" />
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
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  viewBtn: {
    flexDirection: 'row',
    width: '200%',
    marginTop: 40,
  },
});
