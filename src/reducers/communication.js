import { createSlice } from '@reduxjs/toolkit';

export const communicationSlice = createSlice({
  name: 'communication',
  initialState: {
    name: 'yess i am working fine',
    isLoginRequired: true,
    selectedTab: 'campaign',
    campaignView: 'campaignTable',
    campaignStep: 1,
    campaignTypes: [
      {
        campaignTypeId: 1,
        campaignType: 'PROMOTIONAL_SMS',
        description: 'Promotinal SMS'
      },

      {
        campaignTypeId: 2,
        campaignType: 'NEWS_AND_UPDATES',
        description: 'New and Updates'
      },

      {
        campaignTypeId: 3,
        campaignType: 'PUSH_NOTIFICATIONS',
        description: 'Push Notifications'
      },

      {
        campaignTypeId: 4,
        campaignType: 'FLASH_POP_UP',
        description: 'Flash Pop Up'
      },

      {
        campaignTypeId: 5,
        campaignType: 'SUCCESSFUL_COMPLETION',
        description: 'Successful Completion'
      }
    ],
    campaignStatus: [
      {
        campaignStatusId: 1,

        campaignStatus: 'APPROVED',

        description: 'Approved'
      },

      {
        campaignStatusId: 2,

        campaignStatus: 'PENDING APPROVAL',

        description: 'Pending Approval'
      },

      {
        campaignStatusId: 3,

        campaignStatus: 'DRAFT',

        description: 'Draft'
      }
    ]
  },
  reducers: {
    test: (state) => {
      return { ...state, name: 'Ok' };
    },
    setIsLoginRequired: (state, action) => {
      return { ...state, isLoginRequired: action.payload };
    },
    setSelectedTab: (state, action) => {
      return { ...state, selectedTab: action.payload };
    },
    setCampaignView: (state, action) => {
      return { ...state, campaignView: action.payload };
    },
    setCampaignStep: (state, action) => {
      return { ...state, campaignStep: action.payload };
    },
    setCampaignTypes: (state, action) => {
      return { ...state, campaignTypes: action.payload };
    },
    setCampaignStatus: (state, action) => {
      return { ...state, campaignStatus: action.payload };
    }
  }
});

export const {
  test,
  setIsLoginRequired,
  setSelectedTab,
  setCampaignView,
  setCampaignStep,
  setCampaignStatus,
  setCampaignTypes
} = communicationSlice.actions;
export default communicationSlice.reducer;
