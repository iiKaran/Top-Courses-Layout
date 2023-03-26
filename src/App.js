import Navbar from './Components/Navbar'
import './App.css';
import Filter from './Components/Filter'
import { filterData,apiUrl } from './data';
import { useEffect, useState } from 'react';
import Cards_cont from './Components/Cards_cont'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './Components/Spinner';
function App() {
  // creating state to store the courses  
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,changeCategory]= useState(filterData[0].title);
  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setCourses(output.data);
      setLoading(true);
    }
    catch(error) {
        // toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div id='app'>
      <ToastContainer />
    <Navbar />
    <Filter filterData = {filterData} category={category} changeCategory={changeCategory}/>
    {/* {console.log(courses)} */}
    {loading ? <Spinner/> : <Cards_cont courses = {courses} category={category}/>}
    </div>
    
  );
}

export default App;
