import React, {useState, useEffect} from 'react';
import './App.css';
import data from './assets/data.json'
import Job from './components/Job'


function App() {

  const [jobs, setJobs] = useState(data);
  useEffect(() => setJobs(data), []);

  const [filters, setFilters] = useState([]);

  const filterByTags = ({role, level, tools, languages}) => {
    
    if (filters.length === 0){
      return true;
    } 
    
    const tags = [role, level];

    if (tools){
      tags.push(...tools);
    }

    if(languages){
      tags.push(...languages);
    }

    return filters.every(filter => tags.includes(filter));
  }


  const filteredJobs = jobs.filter(filterByTags);

  
  const handleTagClick = (tag) => {
    if(filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(f => f !== passedFilter));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  return (
    <div className="App">
      <header className=' bg-teal-600 mb-20'>
        <img src={document.documentElement.clientWidth > 768 ? './images/bg-header-desktop.svg' : './images/bg-header-mobile.svg'} className={document.documentElement.clientWidth > 768 ? '' : 'w-screen'} alt='background'/>
      </header> 
        {filters.length > 0 && (
          <div className='flex flex-wrap p-4 py-2 -my-32 z-10 relative bg-white shadow-lg my-6 m-6 mb-16 rounded md:mx-32 md:mb-10'>
          {filters.map(filter =>
         <span onClick = {() => handleFilterClick(filter)} 
          className='cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 p-2 my-2 rounded text-sm'>{filter} 
            <span className='bg-teal-500 text-teal-100 p-2 ml-2 rounded-r text-lg -mr-2'>x</span>
          </span>)}
          <button onClick={() => clearFilters()} className='text-teal-500 ml-auto text-sm mr-4 underline'>Clear</button>
      </div>)}
      {filteredJobs.map(job => <Job job={job} key={job.id} handleTagClick={handleTagClick}></Job>)}
    </div>
  );
}

export default App;
