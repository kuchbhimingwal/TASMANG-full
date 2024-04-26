import React from 'react'
import {useLocation} from 'react-router-dom';

function Project() {
  const location = useLocation();
  return (
    <div>{location.state.projectId}</div>
  )
}

export default Project