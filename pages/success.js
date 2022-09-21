import React,{useEffect} from 'react'
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import { runFireworks } from '../lib/utils';

import { useStateContext } from '../context/StateContext';

const Success = () => {

  const {setCartItems,setTotalPrice,settotalQuantities,setShowCart}=useStateContext();

  useEffect(()=>{
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    settotalQuantities(0);
    runFireworks();
    setShowCart(false);
  },[])
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />          
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Your order is being prepared. Until then check out our other products</p>
        <p className='description'>
          If you want to tell us something. Feel free to call us
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>Continue browsing!</button>
        </Link>
      </div>
    </div>
  )
}

export default Success