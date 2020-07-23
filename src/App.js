import React, {useState} from 'react';
import useFetchJobs from "./useFetchJobs";
import {Container} from 'react-bootstrap';
import Job from './job';
import JobsPagination from './jobsPagination';
import Spinner from './spinner';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page)

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Github JobSeeker</h1>
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
