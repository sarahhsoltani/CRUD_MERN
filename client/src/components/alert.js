import React from 'react'

function Alert({message,show}) {
  return (
    <div className="alert alert-success" role="alert" style={{display:show?"block":"none"}}>
    {message} <a href="#" className="alert-link"></a>
  </div>
  )
}

export default Alert