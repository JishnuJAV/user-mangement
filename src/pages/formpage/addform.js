import React from 'react';
import Form  from '../../components/form/form'

 const addform = () => {
     const onSubmit =(deatils)=>{
        //Api callling Post method
        
// axios.post('https:sample-endpoint.com/user', {
//     deatils
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//      }
     }
    return (
        <div>
            <Form onSubmit={onSubmit} title ="Upload Photo"/>
        </div>
    )
}
export default addform;
