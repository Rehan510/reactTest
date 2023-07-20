import React from 'react';
import { Modal } from 'antd';
import confirmModalEllipse from '../../../assets/images/confirmModalEllipse.svg';
import check_mark from '../../../assets/images/check_mark.png';

const CampaignDialog = ({ setIsShowPopup, isShowPopup }) => {
  const CloseBtn = () => {
    setIsShowPopup(false);
  };
  return (
    <Modal open={isShowPopup} onCancel={CloseBtn} width={348} footer={null}>
      <div className="Dialog-wrapper">
        <div className="img-wrapper">
          <img className="confirmImage" src={confirmModalEllipse} />
          <img src={check_mark} />
        </div>
        <h1>Campaign Request Submitted</h1>
        <p>Your campaign request has been sent for approval</p>
        <button onClick={CloseBtn}>CLOSE</button>
      </div>
    </Modal>
  );
};
export default CampaignDialog;
