import { FC } from 'react';
import { IPInfo, Search } from './components';
import { IPData } from '../../interfaces/IPData';

interface Props {
  ipData: IPData | null;
  handleChangeIpAddress: ( ipAddress: string ) => void;
}

export const Header: FC<Props> = ({ ipData, handleChangeIpAddress }) => {
  return (
    <header className='bg-blue-pattern bg-cover h-52 w-100'>
      <div className='flex flex-col items-center pt-5'>
        <h1 className='font-rubik text-white text-2xl text-center'>
                IP Address Tracker
        </h1>

        <Search handleChangeIpAddress={ handleChangeIpAddress } />

        <IPInfo ipData={ ipData } />
      </div>
    </header>
  );
};