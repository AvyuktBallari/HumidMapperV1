import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MapChart from './components/MapChart.jsx';
import { useParams } from 'react-router-dom';
import useData from './hooks/useData';

function Map() {
    const { farm } = useParams();
    const baseurl = `https://plant.zayaan.adiavi.com/farms/${farm}/`;
    const [timeAgo, setTimeAgo] = useState(5);
    const { data: realData, fetchData } = useData(timeAgo, baseurl);

    // Calculate time ago in hours
    const hoursAgo = Math.floor(timeAgo / 60);
    const minutesAgo = timeAgo % 60;

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

                        <div className="bg-[#0f0f0f] border border-gray-900 rounded-lg max-w-2xl mx-auto mb-8">
                            <div className="p-6 flex flex-col h-full">
                                <div className="space-y-4 flex-grow flex flex-col justify-between">
                                    <div>
                                        {/* Time Ago Display */}
                                        <p className="text-emerald-400 text-lg font-semibold text-center mb-2">
                                            Viewing data from {hoursAgo === 0 ? 'Now' : `${hoursAgo} hours ago`}
                                        </p>


                                        <input
                                            type="range"
                                            defaultValue="1440"
                                            max="1440"
                                            step="60"
                                            className="w-full appearance-none bg-[#212121] h-2 rounded-full"
                                            onChange={(e) => setTimeAgo(1445 - e.target.value)}
                                        />
                                        <div className="flex justify-between text-sm text-emerald-400 mt-2">
                                            <span>24 Hours Ago</span>
                                            <span>Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl mx-auto m-40">
                            <div className="sm:h-96 flex items-center justify-center">
                                <MapChart inputData={realData} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Map;
