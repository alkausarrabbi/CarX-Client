import  { useEffect, useState } from 'react';
import initializeAuthentication from '../Components/FireBase/firebase.init';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,onAuthStateChanged,updateProfile ,signInWithPopup,GoogleAuthProvider} from "firebase/auth";


initializeAuthentication();


const useFirebase = () => {

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const [user,setUser]=useState({});
const [authError, setAuthError] = useState('');
const [isLoading, setIsLoading] = useState(true);
const [userAdmin,setUserAdmin]=useState(false);




// using this function ,user will be registered
const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name,'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message);
           
        })
        .finally(() => setIsLoading(false));
}

// using this , user can sign in by google
const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName,'PUT');
            setAuthError('');
            const destination = location?.state?.from || '/dashboard';
            history.replace(destination);
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
}


// using this function ,user will be login
const loginUser=(email,password,history,location)=>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/dashboard';
    history.replace(destination);
    setAuthError('')})
  .catch((error) => {setAuthError(error.message)})
  .finally(()=>setIsLoading(false))

}

// Observed User is Login or Not
useEffect(()=>{

    const unSubscribed =onAuthStateChanged(auth, (user) => {
           if (user) {
               setUser(user);
             
           } else {
             setUser({})
           }
           setIsLoading(false);
         });
         return ()=>unSubscribed;
   },[auth])


//    observed Admin

useEffect(()=>{
    const url=`https://protected-eyrie-74731.herokuapp.com/users/${user.email}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setUserAdmin(data.admin))
},[user.email])



const logoutUser=()=>{
    setIsLoading(true);
    signOut(auth).then(() => {
        
      }).catch((error) => {
        
      })
      .finally(()=>setIsLoading(false))
}


const saveUser=(email,displayName,method)=>{

     const user={email,displayName};
      fetch('https://protected-eyrie-74731.herokuapp.com/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}


    return {
        user,
        userAdmin,
        registerUser,
        loginUser,
        logoutUser,
        authError,
        isLoading,
        signInWithGoogle
    };
};

export default useFirebase;