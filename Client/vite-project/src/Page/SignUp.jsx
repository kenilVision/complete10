import React,{useState ,useEffect  } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
const saltRounds = 10;
import { setProfile } from '../Api/Profile';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    MobileNumber: '',
    Email: '',
    Password: '',
  });

 useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const hashpassword = await bcrypt.hash(formData.Password, saltRounds);
    const data = {...formData , Password: hashpassword }
    console.log(data);
    await setProfile(data)
        .then((res)=>{
           console.log(res)
           navigate('/login');
        })
        .catch((err)=>{
          console.log(err)
        })


  };


  return (
    <section className="bg-gray-50 min-h-screen dark:bg-gray-900 ">
    <div className="flex flex-col items-center  px-6 py-8 mx-auto min-h-screen w-full lg:py-0">
      <div className="w-full max-w-lg bg-white rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700 mt-10  ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                First Name
              </label>
              <input
                type="text"
                name="FirstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First name"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Last Name
              </label>
              <input
                type="text"
                name="LastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last name"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Mobile Number
              </label>
              <input
                type="tel"
                name="MobileNumber"
                id="mobileNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder='Number'
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="••••••••"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? < NavLink to="/Login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</ NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>

  )
}

export default SignUp
