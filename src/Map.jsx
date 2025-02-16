import React, { useState } from 'react'
import Navbar from './components/Navbar'
// import Hero from './components/Dashboard/Hero'
import Footer from './components/Footer'
import { MapPin, Settings, Droplet } from 'lucide-react'
import MapChart from './components/MapChart'
import { useParams } from 'react-router-dom'
import useData from './hooks/useData'

function Map() {
  const { farm } = useParams()
  const testData = [
    { id: 1, busy: 100, x: 200, y: 401 },
    { id: 1, busy: 100, x: 600, y: 200 },
  ]
  const baseurl = 'https://plant.zayaan.adiavi.com/farms/' + farm + '/'
  const [timeAgo, setTimeAgo] = useState('24 Hours')
  const realData = useData(5, `${baseurl}room_data/`)

  return (
    <div>
      <Navbar />
      <div>
        <div className="min-h-screen font-cute text-[#cfcfcf] font-inter py-12 px-4 sm:px-6 lg:px-14">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-left mb-4">
              TSA Farm Statistics
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-left mb-8 text-slate-300">
              Monitor and optimize your farm's water usage with real-time soil humidity sensors.
              <br />
              Save water, improve yields, and farm sustainably.
            </p>

            <div className="bg-[#0f0f0f] border border-     gray-900 rounded-lg max-w-2xl mx-auto mb-8">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-emerald-400 mb-4">
                  <h3 className="font-semibold"></h3>
                </div>
                <div className="space-y-4 flex-grow flex flex-col justify-between ">
                  <div>
                    <input
                      type="range"
                      defaultValue="100"
                      max="100"
                      step="1"
                      className="w-full appearance-none bg-[#212121] h-2 rounded-full"
                    />
                    <div className="flex justify-between text-sm text-emerald-400 mt-2">
                      <span>24 Hours Ago</span>
                      <span>Now</span>
                    </div>
                  </div>
                  <button className="w-full hover:cursor-pointer bg-white text-black mt-auto py-2 rounded-md">
                    Set Time
                  </button>
                </div>
              </div>
            </div>

            <div className=" rounded-xl mx-auto m-40">
              <div className=" sm:h-96  flex items-center justify-center">
                <MapChart inputData={realData} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Map