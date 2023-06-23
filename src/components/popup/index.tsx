import React from 'react';
import './styles.css';
import { useConfiguration } from '../../lib/configuration';
import { PopupType } from '../../lib/configuration/use-configuration';
import Form from '../form';

interface AssetProps {
  type: PopupType;
  asset: string;
  title: string;
}

const popupStatus = {
  open: 'popup__wrapper-open',
  close: 'popup__wrapper-close',
};

const Popup = () => {
  const { title, asset, type } = useConfiguration();
  const [status, setStatus] = React.useState('');

  const handleClose = () => {
    setStatus(popupStatus.close);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setStatus(popupStatus.open);
    }, 2000);
  }, []);

  return (
    <div className={`popup ${status}`}>
      <button className='popup__button' onClick={() => handleClose()}>
        X
      </button>
      <Asset type={type} asset={asset} title={title} />
      <Form />
    </div>
  );
};

const Asset = ({ type, asset, title }: AssetProps) => {
  if (type === 'video') {
    return (
      <div className='popup__video-container'>
        <iframe
          title='Video'
          src={asset}
          className='popup__video'
          allowTransparency
          allowFullScreen
        />
      </div>
    );
  }

  return <img className='popup__game' src={asset} alt={title} />;
};
export default Popup;
