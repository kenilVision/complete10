import React, {  useState } from 'react'
import Table from '../Component/Home/Table'
import Modal from '../Component/Home/Modal'
import Search from '../Component/Home/Search'
import Page from '../Component/Home/Page'
import { getSingleUser , putUser ,postUser ,getUser } from '../Api/User'



function Home() {

  const [modal,setmodel] = useState(false)
  
  const [queries, setQueries] = useState({
    total: 0,
    page: 1,
    limit: 5,
    search: "",
    sort: "",
  });

  const [form,setfrom] = useState({
    _id:'',
    FirstName: '',
    LastName: '',
    Email: '',
    MobileNumber: '',
    Hobbies: [],
    Gender: '',
    file:null
    })

    const [user ,setuser] = useState([])




    
//// FORM 

    const formloader =  async (id) =>{
      try{
          
          const response = await getSingleUser(id)
          const formattedData =  {
                _id: response.data._id,
                FirstName: response.data.FirstName,
                LastName: response.data.LastName,
                Email: response.data.Email,
                MobileNumber: response.data.MobileNumber,
                Hobbies: (response.data.Hobbies[0].replace(/[\[\]"]/g, '')).split(','),
                Gender: response.data.Gender,
              }
              setfrom(formattedData)
              setmodel(!modal)
      }
      catch(err){
          console.error('Error deleting user:', err);
      }

   }

   const updateForm = (e) => {
    const { name, value, type, checked, files } = e.target;
  
    if (type === 'checkbox') {
      if (checked) {
        setfrom((prevForm) => ({
          ...prevForm,
          Hobbies: [...prevForm.Hobbies, value],
        }));
      } else {
        setfrom((prevForm) => ({
          ...prevForm,
          Hobbies: prevForm.Hobbies.filter(hobby => hobby !== value),
        }));
      }
    } else if (type === 'file') {
      const file = files[0]; 
      setfrom((x) => ({
        ...x,
        [name]: file, 
      }));
    } else {
      
      setfrom((x) => ({
        ...x,
        [name]: value,
      }));
    }
  };
  

  const resetForm = () => {

    setfrom({
      _id:'',
      FirstName: '',
      LastName: '',
      Email: '',
      MobileNumber: '',
      Hobbies: [],
      Gender: '',
      file:null
      })
    
  };

  const Submitform = async (e) => {
    e.preventDefault();
  
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('FirstName', form.FirstName);
    formDataToSubmit.append('LastName', form.LastName);
    formDataToSubmit.append('Email', form.Email);
    formDataToSubmit.append('MobileNumber', form.MobileNumber);
    formDataToSubmit.append('Hobbies', JSON.stringify(form.Hobbies));
    formDataToSubmit.append('Gender', form.Gender);
  
  
    if (form._id && form._id.trim() !== '') {
      formDataToSubmit.append('_id', form._id);
    }
  

    if (form.file) {
      formDataToSubmit.append('file', form.file);
    }
    try {

      if (form._id) {
        await putUser(formDataToSubmit)

      } else {
        await postUser(formDataToSubmit);
      }
  

      setmodel(!modal);
      resetForm();
      resetQuery(); 
      getuser(); 
  
    } catch (error) {
      if (error.response?.data?.flag === 1) {
        alert("Email already exists");
      } else if (error.response?.data?.flag === 2) {
        alert("Valid Mobile Number is required");
      } else {
        console.error("Error submitting form data:", error.response?.data);
      }
    }
  };
  
  
/////// USER  
  const getuser = async () => {
    try {
      const queryString = new URLSearchParams(queries).toString();
      const response = await getUser(queryString);
        const formattedData = response.data.user.map((user) => {
          return {
            _id: user._id,
            FirstName: user.FirstName,
            LastName: user.LastName,
            Email: user.Email,
            MobileNumber: user.MobileNumber,
            Hobbies: user.Hobbies,
            Gender: user.Gender,
            filename: user.url,
          };
        });
        setTotal(response.data.totalPages||0)
        setuser(formattedData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
  }


/////Queries 

const setField = ({ name, value }) => {
  setQueries((prevState) => ({
    ...prevState,
    [name]: value,
    page: (name === 'search' || name === 'sort') ? 1 : prevState.page
  }));
};

   
    const resetQuery = () => {
      setQueries((prevState) => ({
        ...prevState,
        page: 1,
        search: "",
        sort: "",
      }));
    };
    

    const setTotal = (totalValue) => {
      setQueries((prevState) => ({
        ...prevState,
        total: totalValue,
      }));
    };
    
    
    const setPage = (pageValue) => {
      setQueries((prevState) => ({
        ...prevState,
        page: pageValue,
      }));
    };
    
    //queries
  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900 h-screen w-full">
      <div className="flex flex-col items-center  px-6 py-8 border-0  mx-auto min-h-screen w-full lg:py-0">
        <Search queries ={queries} setField={setField} />
        <div className="w-full max-w-xxl bg-white rounded-lg shadow  mb-5   dark:bg-gray-800 dark:border-gray-700 mt-10  ">
          <Table modal={modal}setmodel={setmodel} form={form} setform={setfrom} user={user} getuser={getuser} formloader={formloader} queries ={queries} resetQuery={resetQuery}/>
        </div>
        <div className='flex w-5xl'>
          <div className='ml-auto'></div>
          <Page queries ={queries} setPage={setPage} />
          <Modal modal={modal}setmodel={setmodel} form={form} setform={setfrom} resetForm={resetForm} updateForm={updateForm} Submitform={Submitform}/> 
        </div>
       </div>
    </section>
    
   
    </>
  )
}

export default Home
