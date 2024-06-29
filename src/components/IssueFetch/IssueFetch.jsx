import React from 'react'
import { useQuery, gql } from '@apollo/client';

const Get_Issues = gql`
  query Query {
    issues {
      email
      phone
      problem
      username
  }
}
`

const FormFetch = () => {
  const { loading, error, data } = useQuery(Get_Issues);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data)
  return (
    <div>
      {
        data.issues.map(({ id, username, phone, email, problem }) => { 
          return <div key={id} className='m-3 flex-col'>
              <p>Username : {username}</p>
              <p>Contact : {phone}</p>
              <p>Email : {email}</p>
              <p>Problem : {problem}</p>
            </div>
        })
      }
    </div>
  )
}

export default FormFetch
