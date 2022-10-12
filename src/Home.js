import React from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import NewCarousel from './NewCarousel'

function Home() {
  return (
    <div className="flex flex-col gap-3">
      <Navbar/>
      <Navbar2/>      
      <section className="h-[65vh] lg:h-[75vh] flex flex-col items-center bg-hip bg-center bg-no-repeat md:bg-lghip lg:bg-lghip">
        <p className="text-4xl lg:text-6xl font-semibold lg:p-3 mt-20">iPhone 14</p>
        <p className="text-lg lg:text-3xl">Big and bigger.</p>
        <div className="p-3">
        <a className="text-blue-500 text-lg lg:text-xl mr-6 "
        href='/iphone14p'>Learn more &gt; </a>
        <a className="text-blue-500 text-lg lg:text-xl"
        href='/iphone14p'>Buy &gt; </a>
        </div>
      </section>

      <section className="h-[65vh] lg:h-[75vh] flex flex-col items-center bg-hipp bg-center bg-no-repeat md:bg-lghipp lg:bg-lghipp">
        <p className="text-4xl lg:text-6xl text-white font-semibold lg:p-3 mt-20">iPhone 14 Pro</p>
        <p className="text-lg lg:text-3xl text-white">Pro.Beyond.</p>
        <div className="p-3">
        <a className="text-blue-500 text-lg lg:text-xl mr-6 "
        href='/iphone14pro'>Learn more &gt; </a>
        <a className="text-blue-500 text-lg lg:text-xl"
        href='/iphone14pro'>Buy &gt; </a>
        </div>
      </section>

      <section className="h-[65vh] lg:h-[75vh] flex flex-col items-center bg-hiw bg-center bg-no-repeat md:bg-lghiw lg:bg-lghiw">
        <div className="bg-hiwlogo h-[50px] w-[150px] bg-no-repeat bg-center lg:p-3 mt-10"></div>
        <p className="text-lg lg:text-3xl">Adventure awaits.</p>
        <div className="p-3">
        <a className="text-blue-500 text-lg lg:text-xl mr-6 "
        href='/iphone14pro'>Learn more &gt; </a>
        <a className="text-blue-500 text-lg lg:text-xl"
        href='/iphone14pro'>Buy &gt; </a>
        </div>
      </section>

      {/* Grid for big screen*/}
      <div className="lg:grid grid-cols-2 gap-3">

      <section className="h-[65vh] flex flex-col items-center bg-hsw bg-center bg-no-repeat md:bg-lghsw lg:bg-lghsw">
        <div className="bg-hswlogo h-[50px] w-[150px] bg-no-repeat bg-center mt-10"></div>
        <p className="text-lg text-white">A healthy leap ahead.</p>
        <div className="p-3">
        <a className="text-blue-500 text-lg mr-6 "
        href='/iphone14pro'>Learn more &gt; </a>
        <a className="text-blue-500 text-lg"
        href='/iphone14pro'>Buy &gt; </a>
        </div>
      </section>

      <section className="h-[65vh] flex flex-col items-center bg-hap bg-center bg-no-repeat md:bg-lghap lg:bg-lghap">
        <p className="text-4xl lg:text-5xl text-white font-semibold mt-20">AirPods Pro</p>
        <p className="text-lg text-white">Rebuilt from the sound up.</p>
        <div className="p-3">
        <a className="text-blue-500 text-lg mr-6 "
        href='/iphone14pro'>Learn more &gt; </a>
        <a className="text-blue-500 text-lg"
        href='/iphone14pro'>Buy &gt; </a>
      </div>
      </section>

      <section className="h-[65vh] flex flex-col items-center bg-hse bg-center bg-no-repeat md:bg-lghse lg:bg-lghse">
        <div className="bg-hselogo h-[50px] w-[150px] bg-no-repeat bg-center mt-10"></div>
        <p className="text-lg">A great deal to love.</p>
        <div className="p-3">
        <a className="text-blue-500 text-lg mr-6 "
        href='/iphone14pro'>Learn more &gt; </a>
        <a className="text-blue-500 text-lg"
        href='/iphone14pro'>Buy &gt; </a>
        </div>
      </section>

      <section className="h-[65vh] flex flex-col items-center bg-hfit bg-center bg-no-repeat md:bg-lghfit lg:bg-lghfit">
        <div className="bg-hfitlogo h-[50px] w-[150px] bg-no-repeat bg-center mt-10"></div>
        <p className="text-lg">Fitness for everyone.</p>
        <p className="text-lg">Now all you need is iPhone.</p>
        <div className="p-3">
        <a className="text-blue-500 text-lg mr-6 "
        href='/iphone14pro'>Learn more &gt; </a>
        <a className="text-blue-500 text-lg"
        href='/iphone14pro'>Notify me &gt; </a>
        </div>
      </section>

      <section className="h-[65vh] flex flex-col items-center bg-hma bg-center bg-no-repeat md:bg-lghma lg:bg-lghma">
        
        <p className="text-4xl lg:text-5xl font-semibold mt-10">MacBook Air</p>
        <div className="bg-hmalogo h-[50px] w-[200px] bg-no-repeat bg-center"></div>
        <div className="p-1">
        <a className="text-blue-500 text-lg mr-6 "
        href='/iphone14pro'>Learn more &gt; </a>
        <a className="text-blue-500 text-lg"
        href='/iphone14pro'>Buy &gt; </a>
        </div>
      </section>

      <section className="h-[65vh] flex flex-col items-center bg-hc bg-center bg-no-repeat md:bg-lghc lg:bg-lghc">
        <div className="bg-hclogo h-[50px] w-[150px] bg-no-repeat bg-center mt-10"></div>
        <p className="text-lg">Get up to 3% Daily Cash Back</p>
        <p className="text-lg">with every purchase</p>
        <div className="p-3">
        <a className="text-blue-500 text-lg mr-6 "
        href='/iphone14pro'>Learn more &gt; </a>
        <a className="text-blue-500 text-lg"
        href='/iphone14pro'>Buy &gt; </a>
        </div>
      </section>

      </div>

      <div className="h-auto w-screen ">
        <NewCarousel/>
      </div>

      <div className=" w-screen bg-[#F5F5F7] text-gray-600p p-4 text-xs md:text-base lg:text-base flex flex-col justify-evenly">
        <p>1. iPhone 8 or later users may subscribe without an Apple Watch later this fall.</p>
        <p>A subscription is required for Apple Fitness+.</p>
        <p>Apple Fitness+ requires iOS 14.3 or later, iPadOS 14.3 or later, watchOS 7.2 or later, and tvOS 14.3 or later.</p>
        <p>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings &gt; General &gt; Software Update. Tap Download and Install.</p>
        <p>Available for qualifying applicants in the United States.</p>
        <p>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
        <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>
      </div>


    </div>
  )
}

export default Home