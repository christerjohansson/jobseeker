import React, {useState} from 'react';
import useFetchJobs from "./useFetchJobs";
import {Container} from 'react-bootstrap';
import Job from './job';
import JobsPagination from './jobsPagination';
import Spinner from './spinner';
import SearchForm from './SearchForm';


function App() {
  const [params, setParams] = useState({description: '', location: '', full_time: false});
  const [page, setPage] = useState(1)
  const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page)

  function handleParamChange(e){
    const param = e.target.name
    const value = e.target.value    
    setPage(1)
    setParams(prevParams => {
      return {...prevParams, [param]: value}
    })
  }

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Github JobSeeker</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      <div className="text-center">
      {loading && <Spinner className="text-center"/>}
      </div>
      {error && <h2>Something went wrong, try to reload.</h2>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
    </Container>
  )
}
export default App;
