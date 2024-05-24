import { createSlice ,configureStore} from "@reduxjs/toolkit";
// import thunk from 'redux-thunk'




const initialState = {
    status : false,
    userData: null,
    posts:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
           
            state.status = true;
            state.userData = action.payload.userData; 
             console.log(state.userData+"login")
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
        
        rtest: (state, action) => {
                  console.log(action.payload);
                console.log(state.userData)
        },

        storepost:(state,action)=>{
            state.posts=action.payload.post
            console.log("store")

        }

        
     }
})
 const  AuthSlice=authSlice.reducer                                          
export const {login, logout,rtest,storepost} = authSlice.actions;

export const store = configureStore({                                                                 
    reducer: {
        auth : AuthSlice
        
    },
  //  middleware:[thunk] /
});










