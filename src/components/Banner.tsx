import Image from 'next/image'
import PaperImage from '../../public/paper-bg-image.jpg'
import HandBookImage from '../../public/notebook-on-one-hand-holding.jpg'

function Banner() {
  return (
    <div className='w-[50%]  mx-auto rounded-[10px]'>
        <div className='relative max-h-25 w-full flex items-center'>
            <Image className='absolute h-25 w-full -z-1 rounded-[5px]' src={PaperImage} alt='background-image'/>
            <div className='flex justify-around items-center w-full'>
                <h2 className='bg-red w-[50%]' >Create, Share and Trade Your Favourite Reads...</h2>
                <Image className='w-20 rounded-[5px]' src={HandBookImage} alt='banner-image' />
            </div> 
        </div>
    </div>
  )
}

export default Banner