import { getSingleUser , putUser ,postUser  } from '../../Api/User'

export const initialFormState = {
    _id:'',
    FirstName: '',
    LastName: '',
    Email: '',
    MobileNumber: '',
    Hobbies: [],
    Gender: '',
    file:null
  };
  