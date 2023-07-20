import React, { useState } from 'react';
import CampaignDetail from './CampaignDetails';
import confirmmesg from '../../../assets/images/confirmmesg.svg';
import Confirmb from './ConfirmBtn';
import CampaignDialog from './CampaignDialog';

const Confirmation = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const handleClick = (keyData) => {
    console.log({ keyData });
    switch (keyData) {
      case 'submitBtn':
        setIsShowPopup(true);
        break;
      default:
        break;
    }
  };
  return (
    <div className="confirm-wrapper">
      <img src={confirmmesg} />
      <strong>Confirm Details</strong>
      <CampaignDetail />
      <Confirmb handleClick={handleClick} />
      <CampaignDialog isShowPopup={isShowPopup} setIsShowPopup={setIsShowPopup} />
    </div>
  );
};

export default Confirmation;
