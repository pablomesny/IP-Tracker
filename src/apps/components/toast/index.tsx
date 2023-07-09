import { FC } from 'react';

interface Props {
    message: string;
    type: string;
}

export const Toast:FC<Props> = ({ message, type }) => {
  return (
    <div className={`flex flex-row justify-between items-center absolute bottom-12 left-8 w-80 h-10 ${ (type === 'error') ? 'bg-red-500' : ''}`}>
      <img className='w-4 h-4 ml-4' src="/icons/error-icon.svg" alt="Error icon" />
      <p className='text-white font-rubik mr-4'>{ message }</p>
    </div>
  );
};
