import React, {useState} from 'react';
import useFetchJobs from "./useFetchJobs";
import {Container} from 'react-bootstrap';
import Job from './job'

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error} = useFetchJobs(params, page)

  return (
    <Container className="my-4">
      {loading && <h1>Loading data...</h1>}
      {error && <h2>Something went wrong, try to reload.</h2>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  )
}

export default App;
