import { FC } from 'react';
import { IPData } from '../../interfaces/IPData';
import { IPInfo, Search } from './components';

interface Props {
  ipData: IPData | null;
  handleChangeIpAddress: ( ipAddress: string ) => void;
  isLoading: boolean;
}

export const Header: FC<Props> = ({ ipData, isLoading, handleChangeIpAddress }) => {
  return (
    <header className='bg-blue-pattern bg-cover h-52 w-100'>
      <div className='flex flex-col items-center pt-5'>
        <h1 className='font-rubik text-white text-2xl text-center'>
                IP Address Tracker
        </h1>

        <Search handleChangeIpAddress={ handleChangeIpAddress } isLoading={ isLoading } />

        <IPInfo ipData={ ipData } />
      </div>
    </header>
  );
};