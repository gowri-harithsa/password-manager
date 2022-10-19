import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AddInputMultiline} from '../components/AddSiteInputfield';
import {DetailsInput} from '../components/DetailsInputField';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {ResetBtn} from '../components/CustomButton';

const Details = ({navigation}) => {
  const siteData = useSelector(state => state.siteDetail.value);

  const route = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewAddInput}>
          <DetailsInput title="URL" value={route.params.item.url} />
          <DetailsInput title="Site Name" value={route.params.item.name} />
          <DetailsInput
            title="Sector/Folder"
            value={route.params.item.folder}
          />
          <DetailsInput title="User Name" value={route.params.item.username} />
          <DetailsInput
            title="Site Password"
            value={route.params.item.sitePassword}
          />
          <AddInputMultiline title="Notes" value={route.params.item.notes} />
        </View>
        <View style={styles.viewBtn}>
          <ResetBtn
            label="Edit"
            onPress={() => navigation.navigate('EditSite', {siteData})}
          />
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
