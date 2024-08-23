import React from 'react'

const Page = ({params}) => {
  
    const id = decodeURIComponent(params.id)
    return (
    <div>{id}</div>
  )
}

export default Page