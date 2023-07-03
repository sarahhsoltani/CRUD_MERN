import React from 'react'
import classnames  from "classnames"
function InputGroup({label,type,name,OnchageHandler,errors,value}) {
  return (
    <div>
          <div className="mb-3">
            <label  className="form-label">{label}</label>
            
            <input value={value} type={type} className={(classnames("form-control",{"is-invalid":errors}))} name={name} onChange={OnchageHandler}/>
            {
      errors && (<div class="invalid-feedback">
      {errors}
    </div>)
    }
        </div>
       
    </div>
  )
}

export default InputGroup                                                                                                                                                             