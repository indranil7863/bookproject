import Image from 'next/image'

function Banner() {
  return (
    <div className='w-[50%]  mx-auto rounded-[10px]'>
        <div className='relative max-h-25 w-full flex items-center'>
            <Image className='absolute -z-1 rounded-[5px]' fill src={'/paper-bg-image.jpg'} alt='background-image'/>
            <div className='flex justify-around items-center w-full'>
                <h2 className='bg-red w-[50%]' >Create, Share and Trade Your Favourite Reads...</h2>
                <Image className=' rounded-[5px]' width={70} height={70} src={'/notebook-on-one-hand-holding.jpg'} alt='banner-image' />
            </div> 
        </div>
    </div>
  )
}

export default Banner