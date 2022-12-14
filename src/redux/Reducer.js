import {createSlice} from '@reduxjs/toolkit';

const facebook = require('../assets/images/facebook.png');
const youtube = require('../assets/images/youtube.png');
const twitter = require('../assets/images/twitter.png');
const instagram = require('../assets/images/instagram.png');

const IMAGE_ICON = [facebook, youtube, twitter, instagram];

const initialState = [
  {
    id: 1,
    src: IMAGE_ICON[0],
    url: 'www.facebook.com',
    name: 'Facebook',
    folder: 'Social Media',
    username: 'ssmraok',
    sitePassword: '123456',
    uri: 'accounts.facebook.com',
    notes: '',
    userId: 1,
  },
  {
    id: 2,
    src: IMAGE_ICON[1],
    url: 'www.youtube.com/ssmraok',
    name: 'YouTube',
    folder: 'Social Media',
    username: 'ssmraok',
    sitePassword: '123456',
    uri: 'accounts.youtube.com',
    notes: '',
    userId: 1,
  },
  {
    id: 3,
    src: IMAGE_ICON[2],
    url: 'www.twitter.com',
    name: 'Twitter',
    folder: 'Social Media',
    username: 'ssmraok',
    sitePassword: '123456',
    uri: 'accounts.twitter.com',
    notes: '',
    userId: 2,
  },
  {
    id: 4,
    src: IMAGE_ICON[3],
    url: 'www.instagram.com',
    name: 'Instagram',
    folder: 'Social Media',
    username: 'ssmraok',
    sitePassword: '123456',
    uri: 'accounts.instagram.com',
    notes: '',
    userId: 2,
  },
];

export const siteSlice = createSlice({
  name: 'siteDetail',
  initialState: {
    allValues: initialState,
    value: [],
    filterValue: [],
  },
  reducers: {
    getUserData: (state, action) => {
      state.value = state.allValues.filter(item => {
        return item.userId == action.payload;
      });
      state.filterValue = state.value;
    },
    addSite: (state, action) => {
      state.allValues.push(action.payload);
      state.value.push(action.payload);
      state.filterValue.push(action.payload);
    },
    editSite: (state, action) => {
      state.value.map(site => {
        if (site.id === action.payload.id) {
          site.url = action.payload.url;
          site.name = action.payload.name;
          site.folder = action.payload.folder;
          site.username = action.payload.username;
          site.sitePassword = action.payload.sitePassword;
          site.notes = action.payload.notes;
        }
      });
      state.filterValue.map(site => {
        if (site.id === action.payload.id) {
          site.url = action.payload.url;
          site.name = action.payload.name;
          site.folder = action.payload.folder;
          site.username = action.payload.username;
          site.sitePassword = action.payload.sitePassword;
          site.notes = action.payload.notes;
        }
      });
      state.allValues.map(site => {
        if (site.id === action.payload.id) {
          site.url = action.payload.url;
          site.name = action.payload.name;
          site.folder = action.payload.folder;
          site.username = action.payload.username;
          site.sitePassword = action.payload.sitePassword;
          site.notes = action.payload.notes;
        }
      });
    },
    filterSite: (state, action) => {
      state.value = state.filterValue.filter(site =>
        site.name.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    deleteSite: (state, action) => {
      state.value = state.value.filter(site => site.id !== action.payload.id)
      state.filterValue = state.filterValue.filter(site => site.id !== action.payload.id)
      state.allValues = state.allValues.filter(site => site.id !== action.payload.id)
    },
    filterDropDown: (state, action) => {
      if(action.payload == 'All'){
        state.value= state.filterValue
      }else{
        state.value = state.filterValue.filter(site =>
          site.folder.toLowerCase().includes(action.payload.toLowerCase()),
        );
      }
    }
  },
});

export const {addSite, editSite, filterSite, deleteSite, filterDropDown, getUserData} = siteSlice.actions;
export default siteSlice.reducer;
