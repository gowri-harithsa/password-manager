import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const Flatlist = ({navigation}) => {
  const siteData = useSelector(state => state.siteDetail.value);
  console.log('flat list', siteData);
  return (
    <View>
      <FlatList
        data={siteData}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Site Details', {item})}>
            <View style={styles.flatList}>
              <View style={styles.viewImageNames}>
                <Image source={item.src} style={styles.image} />
                <View style={styles.viewNameCopy}>
                  <Text style={styles.componentName}>{item.name}</Text>
                  <Text style={styles.componentCopy}>Copy Password</Text>
                </View>
              </View>
              <View style={styles.viewURI}>
                <Text style={styles.textURI}>{item.url}</Text>
              </View>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    padding: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderRadius: 12.6,
    paddingEnd: 15,
  },
  componentName: {
    height: 24,
    color: '#0E95FF',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    marginVertical: 5,
  },
  componentCopy: {
    color: '#0E85FF',
    fontSize: 11.34,
  },
  viewImageNames: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewNameCopy: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  viewURI: {
    marginVertical: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  textURI: {
    letterSpacing: 0.5,
  },
  image: {
    marginLeft: 20,
    marginTop: 10,
  },
});

export default Flatlist;
