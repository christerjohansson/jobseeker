import React from "react";
import useFetchJobs from "./useFetchJobs";
import {Container} from 'react-bootstrap';

function App() {
  const {jobs, loading, error} = useFetchJobs()

  return (
    <Container>
      {loading && <h1>Loading data...</h1>}
      {error && <h2>Something went wrong, try to reload.</h2>}
      <p>{jobs.length}</p>
    </Container>
  )
}

export default App;
