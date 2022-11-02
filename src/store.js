import Reducer from './redux/Reducer';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userIdReducer from './redux/UserIdSlice' ;
import userCountReducer from './redux/UserCountSlice';
import userStateReducer from './redux/UserStateSlice';
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducer = combineReducers({
  siteDetail: Reducer,
  userId: userIdReducer,
  userCount: userCountReducer,
  userState: userStateReducer,
});

const persistRed = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistRed,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const store = configureStore({
//     reducer: {
//         siteDetail : Reducer
//     },
// });
