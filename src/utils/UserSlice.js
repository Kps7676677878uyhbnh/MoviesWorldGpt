// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     user : null
// }

// export const UserSlice = createSlice({
//     name : "User",
//     initialState,
//     reducers : {
//         addUser : (state , action) => {
//             return action.payload;

//         },
//         removeUser : (state , action) => {
//             return null
//         },
//     }
// })

// export const {addUser , removeUser} = UserSlice.actions;

// export default UserSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  User: null,
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;   // ✅ Mutates just the field inside the slice
    // return action.payload;
    },
    removeUser: (state) => {
      state.user = null;             // ✅ Keeps the shape consistent
    // return null;
    },
  },
});

export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
