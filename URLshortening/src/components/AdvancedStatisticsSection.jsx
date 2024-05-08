export function AdvancedStatisticsSection () {
  return (
    <section className='flex flex-col items-center pt-28 pb-36 font-poppins bg-gray-200'>
      <h2 className='text-4xl font-bold text-VeryDarkViolet'>Advanced Statistics</h2>
      <div className='w-[480px] mt-4 mb-16 text-[16px] font-medium text-GrayishViolet text-center leading-7'>
        <p>Track how your links are performing across the web with</p>
        <p>our advanced statistics dashboard</p>
      </div>
      <div className='flex gap-7 relative'>
        <span className='bg-Cyan w-full h-2 absolute top-1/2' />
        <div className='w-[300px] border bg-white px-6 pb-9 pt-16 relative rounded-lg'>
          <div className='border absolute top-[-40px] bg-DarkViolet w-20 h-20 rounded-full flex items-center justify-center'>
            <img src='/icon-brand-recognition.svg' alt='Icon Brand Recognition' height='35px' width='35px' />
          </div>
          <h4 className='text-VeryDarkBlue font-bold text-xl mb-4'>Brand Recognition</h4>
          <p className='text-GrayishViolet text-sm font-medium'>
            Boost your brand recognition with each click. Generic links don&apos;t mean a thing.Branded links help instil confidence in your content.
          </p>
        </div>
        <div className='w-[300px] border bg-white px-6 pb-9 pt-16 relative rounded-lg top-7'>
          <div className='border absolute top-[-40px] bg-DarkViolet w-20 h-20 rounded-full flex items-center justify-center'>
            <img src='/icon-detailed-records.svg' alt='Icon Detailed Records' height='35px' width='35px' />
          </div>
          <h4 className='text-VeryDarkBlue font-bold text-xl mb-4'>Detailed Records</h4>
          <p className='text-GrayishViolet text-sm font-medium'>
            Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className='w-[300px] border bg-white px-6 pb-9 pt-16 relative rounded-lg top-[66px]'>
          <div className='border absolute top-[-40px] bg-DarkViolet w-20 h-20 rounded-full flex items-center justify-center'>
            <img src='/icon-fully-customizable.svg' alt='Icon Fully Customizable' width='35px' height='35px' />
          </div>
          <h4 className='text-VeryDarkBlue font-bold text-xl mb-4'>Fully Customizable</h4>
          <p className='text-GrayishViolet text-sm font-medium'>
            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  )
}
