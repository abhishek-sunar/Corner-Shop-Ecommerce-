import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './reducerSlice/userSlice'


export default configureStore({
  reducer: {
    user: userSlice,
  }
})