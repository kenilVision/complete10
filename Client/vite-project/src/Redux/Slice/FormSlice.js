import { createSlice } from '@reduxjs/toolkit';

const initialState = {
_id:'',
FirstName: '',
LastName: '',
Email: '',
MobileNumber: '',
Hobbies: [],
Gender: '',
};

const profileSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateProfileField: (state, action) => {
        const { name, value } = action.payload;
        console.log(name + value)
        state[name] = value; 
      },
      updateProfileFieldEdit: (state, action) => {

        let hobbies = action.payload.Hobbies;
        if (Array.isArray(hobbies) && hobbies.length === 1 && typeof hobbies[0] === 'string') {
          hobbies = (hobbies[0].replace(/[\[\]"]/g, '')).split(',');
        }
        console.log(action.payload)
        state._id = action.payload._id
        state.FirstName = action.payload.FirstName
        state.LastName = action.payload.LastName
        state.Email = action.payload.Email
        state.MobileNumber = action.payload.MobileNumber
        state.Hobbies = hobbies
        state.Gender = action.payload.Gender
      },
        updateHobbies: (state, action) => {
      const { hobby, checked } = action.payload;
      if (checked) {
        state.Hobbies.push(hobby);
      } else {
        state.Hobbies = state.Hobbies.filter(h => h !== hobby);
      }
    },
    reset: (state, action) => {

        state._id = ""
        state.FirstName = ""
        state.LastName = ""
        state.Email = ""
        state.MobileNumber =""
        state.Hobbies = []
        state.Gender = ""
      },

    
  },
});

export const { updateProfileField, updateHobbies, updateProfileFieldEdit ,reset} = profileSlice.actions;

export default profileSlice.reducer;
