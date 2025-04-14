import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {ReadFromDB} from '../../Slice/ProfileSlice'
import { useNavigate } from 'react-router-dom'
import { getLogin } from '../../Api/Profile';
import Button from '../Common/Button';
import Input from '../Common/Input'
function LoginDetail() {


    const [Credential, SetCredential] = useState({  /// credential for login form
        Email: "", 
        Password: "" 
    });

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function Handler(e) {                          //  function to handle chane in form 
        const { name, value } = e.target;
        SetCredential({ ...Credential, [name]: value.trim() }); 
    }

  function SubmitHandler(e) {                     // submit buttom for form 
        e.preventDefault();
       getLogin(Credential)
            .then(res => {  
                const token = res.data.token;
                localStorage.setItem('token', JSON.stringify(token));
                dispatch(ReadFromDB())
                navigate('/');
            })
            .catch(err => console.log(err));
    }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
    <div className="flex flex-col items-center justify-center px-12 py-8 mx-auto h-full lg:py-0">
        <div className="w-full max-w-lg bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-10 space-y-6">
                <h1 className="text-2xl font-bold text-gray-900 text-center dark:text-white">
                    Sign in to your account
                </h1>
                <form className="space-y-6" onSubmit={SubmitHandler} autoComplete="off">
                    <div>
                        <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <Input
                            type="email"
                            name="Email"
                            id="Email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com"
                            onChange={Handler}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <Input
                            type="password"
                            name="Password"
                            id="Password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={Handler}
                            required
                        />
                    </div>
                    
                   
                     <Button 
                     text=" Sign in"  
                     className= "w-full text-center"
                     />
                    
                    <div className='text-center '>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <NavLink to='/SignUp' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</NavLink>
                    </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default LoginDetail
