import Image from 'next/image';

export default function LivaltaCellPSY() {
  return (
    <>
      <div className='w-full lg:w-5/6 lg:ml-8 lg:px-0'>
        <div className='w-full bg-orange p-5 block lg:flex'>
          <div className='w-1/2 lg:w-32 mx-auto lg:mx-0 pt-2 lg:pt-0'>
            <img
              src='/images/products/psy-product.svg'
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
                  <div className='absolute top-0 pt-1' style={{ left: '2rem' }}>
                    <Image
                      src='/images/products/cat.svg'
                      alt='cat'
                      width={75}
                      height={75}
                    />
                  </div>
                </div>
                <div className='relative'>
                  <div className='icon-bg-square orange'></div>
                  <div className='absolute top-0' style={{ left: '2rem' }}>
                    <Image
                      src='/images/products/dog.svg'
                      alt='dog'
                      width={70}
                      height={70}
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
              Livalta™Cell PSY is an enzymatically treated and sustainably
              sourced non-GMO yeast developed exclusively for pets: with
              excellent palatability, exceptionally high levels of beta-glucans
              and mannan oligosaccharides as well as highly digestible protein.
              One solution for pet food with many potential functions:
            </p>
            <ul className='py-4'>
              <li className='flex my-4'>Palatability enhancer</li>
              <li className='flex my-4'>Maintaining gut health</li>
              <li className='flex my-4'>Immune system support</li>
            </ul>
            <p className='py-2'>
              Suitable for all applications and diets including meat-based,
              vegetarian, vegan, grain-free and hypoallergenic. Clean label
              friendly.
            </p>
            <p style={{ fontSize: '16px' }} className='py-2 text-xs'>
              Livalta™Cell PSY: simple complexity for the wellbeing of cats and
              dogs.
            </p>
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
                SIMPLE COMPLEXITY – ONE SOLUTION, MANY FUNCTIONS
              </h5>
              <p className='text-lg text-center text-blue-100 uppercase tracking-wider my-8'>
                For Pets
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
[];
