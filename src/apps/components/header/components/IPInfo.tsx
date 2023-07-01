export const IPInfo = () => {
  return (
    <div className='flex flex-row relative -bottom-6 h-32 shadow-md w-10/12 rounded-xl overflow-hidden bg-white'>
      <div className='bg-white h-full w-1/4 pl-6 pt-7'>
        <h2 className='text-2xs font-rubik text-dark-gray font-bold tracking-widest'>
                IP ADDRESS
        </h2>
        <span className='block mt-2 font-bold font-rubik text-xl text-very-dark-gray tracking-wide w-2/3'>
                192.212.174.101
        </span>
      </div>

      <div className='divider' />

      <div className='bg-white h-full w-1/4 pl-6 pt-7'>
        <h2 className='text-2xs font-rubik text-dark-gray font-bold tracking-widest'>
                LOCATION
        </h2>
        <span className='block mt-2 font-bold font-rubik text-xl text-very-dark-gray tracking-wide w-2/3'>
                Brooklyn, NY 10001
        </span>
      </div>

      <div className='divider' />

      <div className='bg-white h-full w-1/4 pl-6 pt-7'>
        <h2 className='text-2xs font-rubik text-dark-gray font-bold tracking-widest'>
                TIMEZONE
        </h2>
        <span className='block mt-2 font-bold font-rubik text-xl text-very-dark-gray tracking-wide w-2/3'>
                UTC -05:00
        </span>
      </div>

      <div className='divider' />

      <div className='bg-white h-full w-1/4 pl-6 pt-7'>
        <h2 className='text-2xs font-rubik text-dark-gray font-bold tracking-widest'>
                ISP
        </h2>
        <span className='block mt-2 font-bold font-rubik text-xl text-very-dark-gray tracking-wide w-2/3'>
                SpaceX Starlink
        </span>
      </div>
    </div>
  );
};
