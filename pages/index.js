import Products from '../components/Products/Products';

export default function Home() {
  return (
    <div className='bg-[#040a47]'>
      <div id='products' className='page-content pt-16 z-1'>
        <div className='products w-full mb-20'>
          <Products />
        </div>
      </div>
    </div>
  );
}
