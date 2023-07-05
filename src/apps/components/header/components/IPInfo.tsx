import { FC } from 'react';
import { IPData } from '../../../interfaces/IPData';

interface Props {
  ipData: IPData | null;
}

export const IPInfo: FC<Props> = ({ ipData }) => {
  return (
    <div className='ip-info__container'>
      <div className='ip-info__item'>
        <h2 className='ip-info__title'>
          IP ADDRESS
        </h2>
        <span className='ip-info__content'>
          { ipData?.ip ? ipData.ip : '-' }
        </span>
      </div>

      <div className='divider' />

      <div className='ip-info__item'>
        <h2 className='ip-info__title'>
          LOCATION
        </h2>
        <span className='ip-info__content'>
          { ipData?.location ? `${ipData.location.city}, ${ipData.location.country}` : '-' }
        </span>
      </div>

      <div className='divider' />

      <div className='ip-info__item'>
        <h2 className='ip-info__title'>
          TIMEZONE
        </h2>
        <span className='ip-info__content'>
          { ipData?.location.timezone ? `UTC ${ipData.location.timezone}` : '-' }
        </span>
      </div>

      <div className='divider' />

      <div className='ip-info__item'>
        <h2 className='ip-info__title'>
          ISP
        </h2>
        <span className='ip-info__content'>
          { ipData?.isp ? (ipData.isp).split(' ').slice(0,2).join(' ') : '-' }
        </span>
      </div>
    </div>
  );
};