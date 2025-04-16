import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
   <div>
    <Slider {...settings}>
        <div className='!flex items-center bg-gray-100 px-6'>
            <div className=''>
                <div className='text-6xl font-bold'>Tarzını Konuşturmanın Tam Zamanı</div>
                <div className='text-lg my-4'>Tıkla, en yeni ürünleri hemen keşfetmeye başla!</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img className='w-[400px]' src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/e783e052-9360-4afb-adb8-c4e9c0f5db07/NIKE+AIR+MAX+NUAXIS.png' alt=''/>
        </div>
        <div className='!flex items-center bg-gray-100 px-6'>
        <div className=''>
                <div className='text-6xl font-bold'>Adımlarına Enerji Kat</div>
                <div className='text-lg my-4'>              Tarz seninle başlar, adımlarınla devam eder! Hayatı dolu dolu yaşarken enerjinden ödün verme. 
              İster okulda ister sokakta ister arkadaş buluşmalarında… Sana hem tarz kazandıracak hem de gün boyu rahat ettirecek modeller burada! 
              Yeni sezonun enerjisiyle tanış, sen de farkını ortaya koy!
</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
        <div>
        </div>
        <img className='w-[400px]' src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/841f15c3-9cfb-4ff1-8c03-85dc5a0d39bd/WMNS+NIKE+INITIATOR.png' alt=''/>
        </div>
        
    </Slider>
   </div>
  )
}

export default SliderComp