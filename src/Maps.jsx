import { Search } from "lucide-react"
import { RoughNotation } from "react-rough-notation";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
const companies = [
  {
    name: "Sample Garden",
    linkname: "samplegarden",
    description: "A demo house for testing",
  },
  {
    name: "Mandy's Garden",
    linkname: "gardenstore",
    description: "Real store demo",
  },
]
const Maps = () => {
  return (
    <div className="font-cute text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-6xl text-[#cfcfcf] md:text-8xl font-cute font-extrabold text-center mt-20 mb-8">
          Farming{" "}
          <br /> <span className="text-5xl md:text-8xl">
            <RoughNotation
              animate={false}
              type="highlight"
              show={true}
              color="#d2cbc6"
            >
              <span className="text-[#2e1a05]">Made Easy</span>
            </RoughNotation>
            </span>
        </h1>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="search"
              placeholder="Search for maps..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#0f0f0f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-1000 focus:ring-[#332a2a]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companies.map((company) => (
            <div key={company.name} className="bg-[#0f0f0f] border border-[#332a2a] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
              <p className="text-gray-400 mb-4">{company.description}</p>
              <p className="mb-4">Access ground, humidity, sensor and AI data.</p>
              <a className="bg-white cursor-auto text-black hover:cursor-pointer font-semibold py-2 px-4 rounded" aria-disabled>
                Coming Soon
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Maps
