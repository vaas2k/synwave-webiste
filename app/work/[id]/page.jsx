
import React from 'react'
import  SingleProduct from '../../../components/ourwork/SingleProduct'

const Page = ({params}) => {

    const id = decodeURIComponent(params.id);
    return (
    <div>
      <SingleProduct id={id} />
    </div>
  )
}

export default Page