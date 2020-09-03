import React from 'react'
import { IconContext } from 'react-icons'
import { FaReact } from 'react-icons/fa' // fontawsome lib
import { MdHome } from 'react-icons/md' // material design lib
import { FcAndroidOs } from "react-icons/fc"
import { FcGoogle } from "react-icons/fc"
import { GrFacebook } from "react-icons/gr";
import { GrAmazon } from "react-icons/gr";

function IconsDemo() {
  return (
    <div>
    <h1>react-icons libs</h1>

    <IconContext.Provider value={{ color : 'purple', size : '2.5rem'}} >
    <button>
      <FaReact />
    </button>
      <button><MdHome />
    </button>
    </IconContext.Provider>
    
    
    <button>
      <FcAndroidOs size='2.5rem' />
    </button>
    <button>
      <FcGoogle size='2.5rem' />
    </button>

    <GrFacebook size='2.5rem'/>
    <GrAmazon size='2.5rem' />
      
    </div>
  )
}

export default IconsDemo
