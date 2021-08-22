import { createStore } from 'redux'
import usersReducers from '../reducer/userReducer';



const store = createStore( usersReducers ) 
   

export default store;
