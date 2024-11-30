import { createSlice } from '@reduxjs/toolkit'

const initialState = {userDetails: {}}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state,action) => {  
      state.userDetails = {...state,userDetails,...action.payload};
    },
    logoutUser: (state, action) => {
      return initialState
    }
  }
})

export const { loginUser, logoutUser} = userSlice.actions

const userReducer = userSlice.reducer
export default userReducer