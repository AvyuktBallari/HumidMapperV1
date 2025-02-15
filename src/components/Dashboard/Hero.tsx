import { Droplet, MapPin, Settings } from 'lucide-react';
import Map from './Map';
import Footer from '../Footer';

export default function Hero() {
  return (
    <div>
      <div className="min-h-screen font-cute text-[#cfcfcf] font-inter py-12 px-4 sm:px-6 lg:px-14">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-left mb-4">
            Nicholas House Statistics
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-left mb-8 text-slate-300">
            Monitor and optimize your farm's water usage with real-time soil humidity sensors.
            <br />
            Save water, improve yields, and farm sustainably.
          </p>

          <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#0f0f0f] border border-gray-900 rounded-lg">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-emerald-400 mb-4">
                  <MapPin className="h-5 w-5" />
                  <h3 className="font-semibold">Sensor Range</h3>
                </div>
                <div className="space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <input
                      type="range"
                      defaultValue="50"
                      max="100"
                      step="1"
                      className="w-full appearance-none bg-[#212121] h-2 rounded-full"
                    />
                    <div className="flex justify-between text-sm text-emerald-400 mt-2">
                      <span>0km</span>
                      <span>100km</span>
                    </div>
                  </div>
                  <button className="w-full hover:cursor-pointer bg-white text-black mt-auto py-2 rounded-md">
                    Apply Range
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#0f0f0f] border border-gray-900 rounded-lg">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-emerald-400 mb-4">
                  <Settings className="h-5 w-5" />
                  <h3 className="font-semibold">Sensor Filters</h3>
                </div>
                <div className="space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <select className="w-full bg-[#212121] border-slate-600 text-slate-100 rounded-md py-2 px-3">
                      <option value="all">All Sensors</option>
                      <option value="humidity">Humidity Only</option>
                      <option value="temperature">Temperature Only</option>
                    </select>
                    <select className="w-full bg-[#212121] border-slate-600 text-slate-100 rounded-md py-2 px-3">
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="warning">Warning</option>
                    </select>
                  </div>
                  <button className="w-full bg-white text-black hover:cursor-pointer mt-auto py-2 rounded-md">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#0f0f0f] border border-gray-900 rounded-lg">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-emerald-400 mb-4">
                  <Droplet className="h-5 w-5" />
                  <h3 className="font-semibold">Quick Stats</h3>
                </div>
                <div className="space-y-4 flex-grow flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#212121] p-3 rounded-lg">
                      <div className="text-sm text-emerald-400">Active Sensors</div>
                      <div className="text-2xl font-bold text-slate-100">24</div>
                    </div>
                    <div className="bg-[#212121] p-3 rounded-lg">
                      <div className="text-sm text-emerald-400">Avg Humidity</div>
                      <div className="text-2xl font-bold text-slate-100">67%</div>
                    </div>
                  </div>
                  <button className="w-full border hover:cursor-pointer border-slate-600 text-black bg-white mt-auto py-2 rounded-md">
                    View Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0f0f0f] rounded-xl shadow-lg overflow-hidden border border-gray-900">
            <div className="h-60 sm:h-96 bg-[#0f0f0f] flex items-center justify-center">
              <Map />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}