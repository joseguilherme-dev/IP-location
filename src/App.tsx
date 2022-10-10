import { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import {
  UilWifi,
  UilLocationPoint,
  UilSearch,
  UilClockEight,
  UilMoneyBill
} from '@iconscout/react-unicons'

import { MapContainer, TileLayer, useMap } from 'react-leaflet'




function App() {
  const [ip, setIp] = useState<any>()
  const [data, setData] = useState<any>({})
  const [error, setError] = useState<boolean>(false)

  async function handleSubmit(e: any=false, userIp: any=false) {
    await axios.get('https://api.techniknews.net/ipgeo/' + (userIp || ip))
    .then((response) => {
      setData(response.data)
      setIp(response.data.ip)
      if (response.data.status === 'fail')
        setError(true)
      else
        setError(false)
    })
  }

  function getLocation() {
    if (data.city)
      return `${data.city}, ${data.regionName} - ${data.country} (${data.continent})`
    else
      return ''
  }

  function getValue(variable: string){
    return (data[variable]? data[variable] : '')
  }

  function getMaps(){
    if (error) return ''
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyAGf4lRqghBFSHhG70jJLmlhUh61MkEqEI&q=${data.lat},%20%20${data.lon}`
  }

  useEffect(() => {
    const requestUserIp = async () => {
      const event = false;
      const userIP = ' ';
      await handleSubmit(event, userIP)
    }
    requestUserIp()
  }, [])

  return (
    <div className='flex flex-col max-w-lg mx-auto mt-2 px-6 mb-5'>
      <div className='row my-10 text-center'>
        <h1 className='text-4xl text-center font-black color-complementary'>
          IP Location
        </h1>
        <small className='text-center color-third font-medium'>
          Find someone by their IP.
        </small>
      </div>

      <div className='row mt-[30px]'>
        <div

        className={!error ? 'hidden' : 'h-10 bg-[#FF0000] rounded flex items-center justify-center mb-3'}>
          <h3>
            <strong>Ops!</strong> The inserted IP invalid.
          </h3>
        </div>
        <div className='input-group'>
          <div className='input-icon-group rounded'>
            <UilWifi className='input-icon' size='18' color="#FFECEF"/>
          </div>
          <button
          type='submit'
          onClick={(e) => {handleSubmit(e)}}
          className='search-icon-group rounded hover:bg-[#634c80]'>
            <UilSearch className='search-icon' size='18' color="#FFECEF"/>
          </button>
          <input
            autoFocus
            value={ip}
            onChange={(e) => setIp(e.target.value)}
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
            value={getLocation()}
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
            value={getValue('lat')}
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
            value={getValue('lon')}
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
            value={getValue('timezone')}
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
            defaultValue={getValue('currency')}
            className='w-full rounded p-1 bg-fourth' type='text'/>
        </div>
      </div>

      <div className='row mt-3'>
          <div className='map rounded'>
            <iframe
            className='rounded'
            scrolling="no"
            loading='lazy'
            src={getMaps()}>
            </iframe>
          </div>
      </div>
    </div>
  )
};

export default App;
