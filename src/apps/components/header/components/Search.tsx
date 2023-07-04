import { FC, MouseEvent, useState } from 'react';

interface Props {
  handleChangeIpAddress: ( ipAddress: string ) => void;
}

export const Search: FC<Props> = ({ handleChangeIpAddress }) => {

  const [ inputValue, setInputValue ] = useState('');

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleChangeIpAddress(inputValue);
  };

  return (
    <form className='flex flex-row h-12 justify-center max-w-md w-full rounded-xl overflow-hidden mt-5'>
      <input
        className='flex-1 pl-6 font-rubik text-sm'
        type="text" 
        placeholder="Seach for any IP address or domain"
        value={ inputValue }
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button 
        onClick={ handleSubmit }
        className='bg-black w-12'
      >
        <img src="/icons/icon-arrow.svg" alt="arrow" className="mx-auto w-2.5 h-2.5" />
      </button>
    </form>
  );
};
