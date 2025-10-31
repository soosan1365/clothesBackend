import React from 'react'
import { useState,useEffect } from 'react'
import { backendURL } from '../App'
import axios from 'axios'

const Orders = ({token}) => {
  const [orders,setOrders]=useState([])

  const  fetchAllorders=async()=>{
    if (!token) {
      return null
    }
    try {
      const response =await axios.post(backendURL + "/api/order/list",{},{Headers:{token}})
    console.log(response.data);
    
    } catch (error) {
      
    }
  }
  useEffect(() => {
  fetchAllorders()
  }, [token])
  return (
    <div>
      
    </div>
  )
}

export default Orders
