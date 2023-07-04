import { FC } from 'react';
import { IPData } from '../../../interfaces/IPData';

interface Props {
  ipData: IPData | null;
}

export const IPInfo: FC<Props> = ({ ipData }) => {

  return (
    <div className='flex flex-row relative -bottom-6 h-32 shadow-md w-10/12 rounded-xl overflow-hidden bg-white z-full'>
      <div className='bg-white h-full w-1/4 pl-6 pt-7'>
        <h2 className='text-2xs font-rubik text-dark-gray font-bold tracking-widest'>
          IP ADDRESS
        </h2>
        <span className='block mt-2 font-bold font-rubik text-xl text-very-dark-gray tracking-wide w-2/3'>
          { ipData?.ip ? ipData.ip : '-' }
        </span>
      </div>

      <div className='divider' />

      <div className='bg-white h-full w-1/4 pl-6 pt-7'>
        <h2 className='text-2xs font-rubik text-dark-gray font-bold tracking-widest'>
          LOCATION
        </h2>
        <span className='block mt-2 font-bold font-rubik text-xl text-very-dark-gray tracking-wide w-2/3'>
          { ipData?.location ? `${ipData.location.city}, ${ipData.location.country}` : '-' }
        </span>
      </div>

      <div className='divider' />

      <div className='bg-white h-full w-1/4 pl-6 pt-7'>
        <h2 className='text-2xs font-rubik text-dark-gray font-bold tracking-widest'>
          TIMEZONE
        </h2>
        <span className='block mt-2 font-bold font-rubik text-xl text-very-dark-gray tracking-wide w-2/3'>
          { ipData?.location.timezone ? `UTC ${ipData.location.timezone}` : '-' }
        </span>
      </div>

      <div className='divider' />

      <div className='bg-white h-full w-1/4 pl-6 pt-7'>
        <h2 className='text-2xs font-rubik text-dark-gray font-bold tracking-widest'>
          ISP
        </h2>
        <span className='block mt-2 font-bold font-rubik text-xl text-very-dark-gray tracking-wide w-2/3'>
          { ipData?.isp ? (ipData.isp).split(' ').slice(0,2).join(' ') : '-' }
        </span>
      </div>
    </div>
  );
};