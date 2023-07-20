import React from 'react';
import CompaignTabs from './CompaignTabs';
import NewCampaign from './newCampaign';
import Notification from './Notification';
import CampaignDetail from './CampaignDetail'
import RejectedCampaign from './rejectedCampaign/RejectedCampaign'

import { useSelector } from 'react-redux';

const Campaign = () => {
  const { campaignView } = useSelector((state) => state.communicationSlice);
  const views = {
    campaignTable: <CompaignTabs />,
    newCampaign: <NewCampaign />,
    notification: <Notification />,
    campaignDetail: <CampaignDetail />,
    rejectedCampaign: <RejectedCampaign />
  };
  return <div>{views[campaignView]}</div>;
};

export default Campaign;
