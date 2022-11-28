import Image from 'next/image';

export default function LivaltaCellHY40() {
  return (
    <>
      <div className='w-full lg:w-5/6 lg:ml-8 lg:px-0'>
        <div className='w-full bg-orange p-5 block lg:flex'>
          <div className='w-1/2 lg:w-32 mx-auto lg:mx-0 pt-2 lg:pt-0'>
            <img
              src='/images/livalta-cell-hy40-logo-wo-1_11000px.png'
              alt='hy40'
              unsized='true'
            />
          </div>
          <div className='w-full flex justify-end'>
            <div className='w-full'>
              <div className='w-full text-center lg:text-right mt-8 lg:mt-0'>
                <p className='display italic'>Formulated for:</p>
              </div>
              <div className='w-full flex justify-center lg:justify-end icon-row pb-4 product-center-hy40'>
                <div className='relative'>
                  <div className='icon-bg-square orange'></div>
                  <div className='absolute top-0' style={{ left: '2rem' }}>
                    <Image
                      src='/images/icons/aqua.svg'
                      alt='Aqua'
                      width={75}
                      height={75}
                    />
                  </div>
                </div>
                <div className='relative'>
                  <div className='icon-bg-square orange'></div>
                  <div className='absolute top-0' style={{ left: '2rem' }}>
                    <Image
                      src='/images/icons/swine.svg'
                      alt='Swine'
                      width={70}
                      height={70}
                    />
                  </div>
                </div>
                <div className='relative'>
                  <div className='icon-bg-square orange'></div>
                  <div className='absolute top-0' style={{ left: '2.5rem' }}>
                    <Image
                      src='/images/icons/poultry.svg'
                      alt='Poultry'
                      width={65}
                      height={65}
                    />
                  </div>
                </div>
                <div className='relative'>
                  <div className='icon-bg-square orange'></div>
                  <div className='absolute top-0' style={{ left: '2rem' }}>
                    <Image
                      src='/images/icons/livalta-bovine-cow-icon-wo_2.svg'
                      alt='Cow'
                      width={75}
                      height={75}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-white block lg:flex px-4 lg:px-6 py-4'>
          <div className='w-full pt-4 lg:pt-8 px-4 lg:px-8 text-lg text-left text-blue-300 pb-8 lg:pb-32'>
            <p className='py-2'>
              Livalta™Cell HY40 brings together nutritional and functional yeast
              benefits. It is all about simple solutions to complex problems: it
              nurtures and protects the animal whilst contributing to
              profitability and convenience for a farmer or feed manufacturer.
              It is responsible and circular, carefully derived from selected
              non-GM strains of Saccharomyces cerevisiae.{' '}
            </p>
            <ul className='py-4'>
              <li className='flex my-4'>
                High nutritional value of proteins, vitamins and minerals
              </li>
              <li className='flex my-4'>
                Promotes gut development and functionality
              </li>
              <li className='flex my-4'>Supports natural defences</li>
              <li className='flex my-4'>
                Can contribute to a reduction in pathogen pressure
              </li>
              <li className='flex my-4'>
                Provides synergies with other feed additives
              </li>
            </ul>
            <a target='_blank' href='/videos/hy40' className='video-btn orange'>
              Watch the video
            </a>
          </div>
        </div>
        <div className='flex justify-center lg:justify-end'>
          <div className='w-11/12 block lg:flex relative'>
            <div
              className='hidden lg:block absolute left-0'
              style={{ top: '-6rem' }}
            >
              <img src='/images/icons/dot.png' alt='dot' unsized='true'></img>
            </div>
            <div className='mt-20 lg:my-20 mx-4 lg:mx-8 lg:ml-20'>
              <h5 className='outline tiny white text-xl md:text-25xl leading-10 uppercase text-center'>
                A perfect synergy of nutritional &amp; functional yeast benefits
              </h5>
              <p className='text-lg text-center text-blue-100 uppercase tracking-wider my-8'>
                For Poultry, Swine &amp; Aqua
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
[];
