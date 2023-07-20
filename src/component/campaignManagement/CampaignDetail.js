import React from 'react';
import CampaignDetails from './newCampaign/CampaignDetails';
import CurrentInfo from '../campaignManagement/newCampaign/CurrentInfo';
import { useDispatch } from 'react-redux';
import { setCampaignView } from '../../reducers/communication';

const Campaigndetail = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCampaignView('campaignTable'));
  };
  return (
    <>
        <CurrentInfo
        handleBack={handleClick}
        label={'Campaign 123'}
        handlePrev={handleClick}
        previous={'Campaign List'}
        next={'Create New Campaign'}
      />
      <section className="details-wrapper">
        <div className="created-campaign-wrapper">
          <strong>Confirm Details</strong>
          <CampaignDetails />
        </div>
      </section>
    </>
  );
};

export default Campaigndetail;
