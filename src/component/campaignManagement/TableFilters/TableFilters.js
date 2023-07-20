import React from 'react';
import CampaignType from './CampaignType';
import CampaignStatus from './CampaignStatus';
import DatePicker from './DatePicker';
import { useDispatch } from 'react-redux';
import { setCampaignView, setCampaignStep } from '../../../reducers/communication';
const Tablefilters = () => {
  const dispatch = useDispatch();
  const hanldeCreateCampaign = () => {
    dispatch(setCampaignView('newCampaign'));
    dispatch(setCampaignStep(1));
  };
  return (
    <div className="table-filter">
      <DatePicker />
      <CampaignStatus />
      <CampaignType />
      <button
        className="create-button"
        onClick={() => {
          hanldeCreateCampaign();
        }}
      >
        Create Campaign
      </button>
    </div>
  );
};

export default Tablefilters;
