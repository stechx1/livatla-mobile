import Image from 'next/image'

export default function ProtoCell() {
  // trigger new deployment
  return (
    <>
      <div className="w-full lg:w-5/6 lg:mr-8 lg:px-0">
        <div className="w-full bg-purple p-5 lg:pt-6 block lg:flex">
          <div className="w-1/2 lg:w-64 mx-auto lg:mx-0 pt-2 lg:pt-0">   
            <img src="/images/protocell.png" alt="hy40"  unsized="true" className="mx-auto lg:hidden" />
            <div className="logo-product h-auto flex items-center">
              <img src="/images/protocell.png" alt="protocell"  unsized="true" className="mx-auto hidden lg:block" />
            </div>
          </div>
          <div className="w-full block lg:flex justify-end">
            <div className="w-full">
              <div className="w-full text-center lg:text-right mt-8 lg:mt-0">
                <p className="display italic">Formulated for:</p>
              </div>
              <div className="w-full flex justify-center lg:justify-end icon-row pb-4 product-center-proto">
                <div className="relative hy-40-icons">
                  <div className="icon-bg-square purple"></div>
                  <div className="absolute top-0" style={{'left': '2rem'}}><Image src="/images/icons/aqua.svg" alt="Aqua" width={75} height={75} /></div>
                </div>
                <div className="relative">
                  <div className="icon-bg-square purple"></div>
                  <div className="absolute top-0" style={{'left': '2rem'}}><Image src="/images/icons/swine.svg" alt="Swine" width={70} height={70} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white block lg:flex px-4 lg:px-6 py-4">
          <div className="w-full pt-4 px-4 lg:pt-8 lg:px-8 text-lg text-left text-blue-300 pb-8 lg:pb-32">
            <p className="py-2">ProtoCell is a functional and circular protein, carefully manufactured from corn based bioethanol co-product streams; it contains soluble and highly available corn protein together with yeast cells, recovered using an innovative, patented separation process.</p>
            <ul className="py-4">
              <li className="flex my-4">Synergy of Plant and Yeast components</li>
              <li className="flex my-4">Alternative Protein Source</li>
              <li className="flex my-4">High Quality and Consistency</li>
              <li className="flex my-4">Sustainable Product</li>
            </ul>
            <p className="p-2">Besides being a high quality protein, ProtoCell provides several functional benefits related to its yeast contents.</p>
            <a target="_blank" href="/videos/protocell" className="video-btn purple">Watch the video</a>
            {/* <p className="p-2">Besides being a high quality protein, ProtoCell provides several functional benefits related to inactive yeast.<br /><br /><span className="ondo-medium">A breakthrough innovation in co-product technology.</span></p> */}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-11/12 block lg:flex relative">
            <div className="hidden lg:block absolute left-0" style={{'top': '-6rem'}}>
              <img src="/images/icons/dot.png" alt="Dot" unsized="true"></img>
            </div>
            <div className="mt-20 lg:my-20 mx-4 lg:mx-8 lg:ml-20">
              <h5 className="outline tiny white text-xl md:text-25xl leading-10 uppercase text-center">A breakthrough innovation in co-product technology</h5>
              <p className="text-lg text-center text-blue-100 uppercase tracking-wider my-8">For Aqua &amp; Swine</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ display: !protoCellCta?"block":"none" }}>
        <div className="fixed">
          <div className="w-full bg-blue-400-transparent-25">
            <div className="w-1/2 p-8">
              <div className="flex justify-center">
                <h2 className="uppercase text-3xl lg:text-4xl outline small b-100">Protocell Technical Data</h2>
                <p className="text-red text-2xl">[.pdf]</p>
              </div>
            </div>
          </div>
          <div className="">
            
          </div>
        </div>

      </div> */}
    </>
  )
}
