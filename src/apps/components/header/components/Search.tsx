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
    <form className='search__container'>
      <input
        className='search__input'
        type="text" 
        placeholder="Seach for any IP address or domain"
        value={ inputValue }
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button 
        onClick={ handleSubmit }
        className='search__button'
      >
        <img src="/icons/icon-arrow.svg" alt="arrow" className="search__button__icon" />
      </button>
    </form>
  );
};
