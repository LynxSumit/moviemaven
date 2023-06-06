import React , {useState} from 'react'
import {  auth } from '../../utils/firebase'
import { createUserWithEmailAndPassword} from 'firebase/auth'
const SignUp = () => {
    const [displayName , setDisplayName] = useState('')
    const [email , setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [confirmPass , setConfirmPass] = useState('')
    const ResetFormFirlds = () => {
        setDisplayName("")
        setEmail("")
        setPassword("")
        setConfirmPass("")
    }
    const submitHandler = async (e) =>{
e.preventDefault()
if(password !== confirmPass){
    alert("Password does not match")
    return

}

await createUserWithEmailAndPassword(auth,email , password).then((userCred)=>{console.log(userCred)})
    .catch((err)=> console.log(err.message)) 
    ResetFormFirlds()
    }
  return (
    <form onSubmit={submitHandler}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Enter Your Name  </label>
      <input type="text" value={displayName} onChange={(e)=> setDisplayName(e.target.value)} className="form-control" id="name" />
      
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Enter your Email </label>
      <input type="name" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="email" />
      
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Enter Your Password</label>
      <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" id="password" />
      
    </div>
    <div className="mb-3">
      <label htmlFor="ConfirmPassword" className="form-label">Confirm Password </label>
      <input type="password" value={confirmPass} onChange={(e)=> setConfirmPass(e.target.value)} className="form-control" id="ConfirmPassword"/>
    </div>
    
    <button type="submit" className="btn btn-light">Sign Up</button>
  </form>
  )
}

export default SignUp
