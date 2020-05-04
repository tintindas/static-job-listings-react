import React from 'react'

const Job = ({job, handleTagClick}) => {

    const tags = [job.role, job.level]

    if(job.languages){
        tags.push(...job.languages);
    }

    if(job.tools){
        tags.push(...job.tools);
    }


    return (
        <div className={`flex flex-col bg-white shadow-lg my-6 m-6 mb-16 p-2 rounded ${job.featured && 'border-l-4 border-teal-500 border-solid'} md:flex-row md:p-6 md:mx-32 md:mb-10`}>
          <div>
              <img className='w-16 h-16 -mt-10 mb-4 ml-3 md:mt-0 md:w-24 md:h-24 md:ml-0 md:mb-0' src={job.logo} alt={job.company}></img>
          </div>
          <div className='flex flex-col justify-between ml-4'>
              <h3 className='font-bold text-teal-500'>
                {job.company} 
                {job.new && <span className='bg-teal-500 text-teal-100 rounded font-bold px-2 py-1 ml-4 mr-1 rounded-full text-xs'>NEW!</span>} {job.featured && <span className='bg-gray-800 text-white rounded font-bold px-2 py-1 rounded-full text-xs'>FEATURED</span>}
              </h3>
              <h1 className='font-bold text-xl my-2'>{job.position}</h1>
              <p className='text-gray-500'>{job.postedAt} · {job.contract} · {job.location}</p>
          </div>
          <div className='flex flex-wrap items-center m-4 pt-2 border-t border-gray-500 border-solid md:ml-auto md:border-0 md:pt-0 md:m-0 md:-mt-4'>
            {tags ? tags.map(tag => <span onClick={() => handleTagClick(tag)} className='cursor-pointer text-teal-500 bg-teal-100 font-bold mt-4 mr-4 p-2 rounded text-sm'>{tag}</span>) : ''}
          </div>
        </div>
    )
}

export default Job;