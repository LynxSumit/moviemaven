import React, {useEffect,useState} from 'react'
import { auth } from '../../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const AuthStatus = () => {
    const [authUser, setAuthUser] = useState(null)
    useEffect(()=>{
const listen = onAuthStateChanged(auth, (user)=>{
if(user){
    setAuthUser(user)
}else{
    setAuthUser(null)
}
})
return ()=>{
    listen()
}

    }, [])
    const SignOut = () => {
        signOut(auth)
    }
  return (
    <div className='text-center mt-5'>
      {
        authUser  ? <><p>{`Signned in as ${authUser.email}`}</p> <button className='btn btn-light' data-bs-theme="light" onClick={SignOut}>Sign Out</button></> : <>Signned Out</>
      }
    </div>
  )
}

export default AuthStatus
