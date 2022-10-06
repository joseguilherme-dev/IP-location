import { useState } from 'react'
import './index.css'
import {
  UilWifi,
  UilLocationPoint,
  UilMapPinAlt,
  UilClockEight,
  UilMoneyBill
} from '@iconscout/react-unicons'
import ReactCountryFlag from "react-country-flag"

import { MapContainer, TileLayer, useMap } from 'react-leaflet'



function App() {
  return (
    <div className='flex flex-col max-w-lg mx-auto mt-2 color-third px-6 mb-5'>
      <div className='row my-10 text-center'>
        <h1 className='text-4xl text-center font-black color-complementary'>
          IP Location
        </h1>
        <small className='text-center'>
          Find someone by their IP.
        </small>
      </div>

      <div className='row mt-[30px]'>
        <div className='input-group'>
          <div className='input-icon-group rounded'>
            <UilWifi className='input-icon' size='18' color="#FFECEF"/>
          </div>
          <input
            disabled
            defaultValue={'192.168.0.1'}
            className='w-full rounded p-1 bg-fourth' type='text'/>
        </div>
      </div>

      <div className='row mt-2'>
        <div className='input-group'>
          <div className='input-icon-group rounded'>
            <UilLocationPoint className='input-icon' size='18' color="#FFECEF"/>
          </div>
          <input
            disabled
            defaultValue={'Brazil - Brasília, 72603-717'}
            className='w-full rounded p-1 bg-fourth' type='text'/>
        </div>
      </div>

      <div className='flex flex-row gap-6 mt-2'>
        <div className='input-group basis-1/2'>
          <div className='input-icon-group rounded'>
            <p className='input-icon text-sm font-black text-center'>
              LAT
            </p>
          </div>
          <input
            disabled
            defaultValue={'-15.7792'}
            className='w-full rounded p-1 bg-fourth' type='text'/>
        </div>

        <div className='input-group basis-1/2'>
          <div className='input-icon-group rounded'>
            <p className='input-icon text-sm m-0 p-0 font-black text-center'>
              LON
            </p>
          </div>
          <input
            disabled
            defaultValue={'-47.9341'}
            className='w-full rounded p-1 bg-fourth' type='text'/>
        </div>
      </div>

      <div className='row mt-2'>
        <div className='input-group'>
          <div className='input-icon-group rounded'>
            <UilClockEight className='input-icon' size='18' color="#FFECEF"/>
          </div>
          <input
            disabled
            defaultValue={'America/Sao_Paulo'}
            className='w-full rounded p-1 bg-fourth' type='text'/>
        </div>
      </div>

      <div className='row mt-2'>
        <div className='input-group'>
          <div className='input-icon-group rounded'>
            <UilMoneyBill className='input-icon' size='18' color="#FFECEF"/>
          </div>
          <input
            disabled
            defaultValue={'BRL'}
            className='w-full rounded p-1 bg-fourth' type='text'/>
        </div>
      </div>

      <div className='row mt-3'>
          <div className='map rounded'>
            <iframe
            className='rounded'
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-15.7792,%20%20-47.9341+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">
              distance maps</a>
            </iframe>
          </div>
      </div>
    </div>
  )
};

export default App;
