import { createSlice } from '@reduxjs/toolkit';
import staticMethods from 'antd/es/message';

export const campaignSlice = createSlice({
  name: 'campaign',
  initialState: {
    selectedCampaignTypeFilters: [],
    selectedCampaignStatusFilters: [],
    selectedCampaignType: null,
    campaignName: null,
    messageType: 'onetime',
    startDate: null,
    endDate: null,
    time: null,
    selectedFrequency: 'everyDay',
    days: [],
    userTypesBase: [
      {
        userTypeId: 1,
        userType: 'ALL_USER_BASE',
        description: 'All User Base'
      },
      {
        userTypeId: 2,
        userType: 'ALL_RETAILER_BASE',
        description: 'All Retailer Base'
      },
      {
        userTypeId: 3,
        userType: 'ALL_CONSUMER_BASE',
        description: 'All Consumer Base'
      },
      {
        userTypeId: 4,
        userType: 'ALL_GSM_BASE',
        description: 'All GSM Base'
      },
      {
        userTypeId: 5,
        userType: 'ALL_OFS_BASE',
        description: 'All OFS Base'
      },
      {
        userTypeId: 6,
        userType: 'ALL_GSM_DIGITAL_BASE',
        description: 'All GSM Digital Base'
      },
      {
        userTypeId: 7,
        userType: 'ALL_GSM_SALES_AND_DISTRIBUTION_BASE',
        description: 'All GSM Sales and Distribution Base'
      },
      {
        userTypeId: 8,
        userType: 'ALL_HYBRID_GSM',
        description: 'All Hybrid GSM'
      },
      {
        userTypeId: 9,
        userType: 'CUSTOM_BASE',
        description: 'Custom Base'
      }
    ],
    selectedCustomeBase: null,
    message: null,
    fileDetail: null
  },
  reducers: {
    setSelectedCampaignTypeFilters: (state, action) => {
      return { ...state, selectedCampaignTypeFilters: action.payload };
    },
    setSelectedCampaignStatusFilters: (state, action) => {
      return { ...state, selectedCampaignStatusFilters: action.payload };
    },
    setSelectedCampaignType: (state, action) => {
      return { ...state, selectedCampaignType: action.payload };
    },
    setCampaignName: (state, action) => {
      return { ...state, campaignName: action.payload };
    },
    setMessageType: (state, action) => {
      return { ...state, messageType: action.payload };
    },
    setStartDate: (state, action) => {
      return { ...state, startDate: action.payload };
    },
    setEndDate: (state, action) => {
      return { ...state, endDate: action.payload };
    },
    setTime: (state, action) => {
      return { ...state, time: action.payload };
    },
    setFrequecny: (state, action) => {
      return { ...state, selectedFrequency: action.payload };
    },
    setDays: (state, action) => {
      return { ...state, days: action.payload };
    },
    setSelectedCustomeBase: (state, action) => {
      return { ...state, selectedCustomeBase: action.payload };
    },
    setMessage: (state, action) => {
      return { ...state, message: action.payload };
    },
    setFileDetail: (state, action) => {
      return { ...state, fileDetail: action.payload };
    }
  }
});

export const {
  setMessageType,
  setCampaignName,
  setSelectedCampaignTypeFilters,
  setSelectedCampaignStatusFilters,
  setSelectedCampaignType,
  setStartDate,
  setEndDate,
  setTime,
  setFrequecny,
  setDays,
  setSelectedCustomeBase,
  setMessage,
  setFileDetail
} = campaignSlice.actions;
export default campaignSlice.reducer;
