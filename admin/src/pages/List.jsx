import React, { useState, useEffect } from 'react'
import { backendURL } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list")
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  const removeProduct = async (id) => {
    try {
      const respose = await axios.post(backendURL + "/api/product/remove", { id }, { headers: { token } })
      if (respose.data.success) {
        toast.success(respose.data.message);
        await fetchList();
      } else {
        toast.error(respose.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);

    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className='mb-2'>
        All Products List
      </p>
      <div className='flex flex-col gap-2'>
        {/* list table title */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 test-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {/* product list */}
        <div>
          {list.map((item ,index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] py-1 px-2 items-center border text-smitems-checked: gap-2]' key={index}>
              <img src={item.image[0]} alt={item.name} className='w-12 object-cover' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeProduct(item._id)} className=' cursor-pointer text-lg'>X</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default List
