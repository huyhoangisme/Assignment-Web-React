import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'app/api/auth/models';
import { Params } from 'app/api/users';
import { RootState } from '../store';

interface userState {
  loading: boolean;
  users: User[] | null;
  totalUser?: number;
}
const initialState: userState = {
  loading: false,
  users: null,
};
const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    getAllUserStart: (state, actions: PayloadAction<Params>) => {
      state.loading = true;
    },
    getAllUserSuccess: (state, actions: PayloadAction<User[]>) => {
      state.users = actions.payload;
    },
    getAllUserFailed: state => {
      state.loading = false;
    },
    getTotalUsers: (state, actions: PayloadAction<number>) => {
      state.loading = true;
      state.totalUser = actions.payload;
      state.loading = false;
    },
    deleteUserStart: (state, actions: PayloadAction<string>) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, actions: PayloadAction<string>) => {
      if (!actions.payload || !state.users) return;
      else {
        state.users = state.users.filter(user => user._id !== actions.payload);
      }
      state.loading = false;
    },
  },
});

export const userActions = userSlice.actions;

export const loadingSelector = (state: RootState) => state.users.loading;
export const usersSelector = (state: RootState) => state.users.users;
export const totalUserSelector = (state: RootState) => state.users.totalUser;
const userReducer = userSlice.reducer;
export default userReducer;
