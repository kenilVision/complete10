import React, {  useState } from 'react'
import Table from '../Component/Home/Table'
import Search from '../Component/Home/Search'
import Page from '../Component/Home/Page'
import { getSingleUser , putUser ,postUser ,getUser } from '../Api/User'




function Home() {

  const [mode,setmode] = useState(true)
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
              setmode(false)
              
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
      setmode(true)
    
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
        await putUser(formDataToSubmit); 
      } else {
        await postUser(formDataToSubmit); 
      }
  
      
      setmodel(!modal); 
      resetForm();      
      resetQuery();     
      getuser();        
    } catch (error) {
      console.log("Error:", error);

      
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
    <section className="bg-gray-50 dark:bg-gray-900 h-auto w-full">
      <div className="flex flex-col items-center   border-0  mx-auto min-h-screen w-full ">
        <Search queries ={queries} setField={setField}  modal={modal}setmodel={setmodel} form={form} setform={setfrom} resetForm={resetForm} updateForm={updateForm} Submitform={Submitform} mode={mode} setmode={setmode}/>
        <div className="w-full max-w-7xl bg-white rounded-lg shadow  py-4   dark:bg-gray-900 dark:border-gray-700   ">
          <Table modal={modal}setmodel={setmodel} form={form} setform={setfrom} user={user} getuser={getuser} formloader={formloader} queries ={queries} resetQuery={resetQuery}/>
        </div>
        <div className=' w-7xl py-4'>
          <Page queries ={queries} setPage={setPage} />
        </div>
       </div>
    </section>
    
   
    </>
  )
}

export default Home
