import React from 'react';
import frameImage from '../../assets/images/frame.svg';
import { Pagination } from 'antd';
import Tablefilters from './TableFilters/TableFilters';
import { useDispatch } from 'react-redux';
import { setCampaignView } from '../../reducers/communication';
const Table = () => {
  const dispatch = useDispatch();

  const tableData = [
    {
      CreationDate: '12.02.2023',
      CampaignName: 'Campaign 111',
      CampaignType: 'Promotional SMS',
      Decision: 'Approved',
      CurrentStatus: 'Active'
    },
    {
      CreationDate: '12.02.2023',
      CampaignName: 'Campaign 222',
      CampaignType: 'Flash Popup',
      Decision: 'Pending for Approval',
      CurrentStatus: <img src={frameImage} />
    },
    {
      CreationDate: '12.02.2023',
      CampaignName: 'Campaign 333',
      CampaignType: 'Flash Popup',
      Decision: 'Rejected',
      CurrentStatus: <img src={frameImage} />
    },
    {
      CreationDate: '12.02.2023',
      CampaignName: 'Campaign 333',
      CampaignType: 'Flash Popup',
      Decision: 'Inactive',
      CurrentStatus: <img src={frameImage} />
    },
    {
      CreationDate: '12.02.2023',
      CampaignName: 'Campaign 111',
      CampaignType: 'Promotional SMS',
      Decision: 'Approved',
      CurrentStatus: 'Active'
    },
    {
      CreationDate: '12.02.2023',
      CampaignName: 'Campaign 222',
      CampaignType: 'Flash Popup',
      Decision: 'Pending for Approval',
      CurrentStatus: <img src={frameImage} />
    },
    {
      CreationDate: '12.02.2023',
      CampaignName: 'Campaign 333',
      CampaignType: 'Flash Popup',
      Decision: 'Rejected',
      CurrentStatus: <img src={frameImage} />
    },
    {
      CreationDate: '12.02.2023',
      CampaignName: 'Campaign 333',
      CampaignType: 'Flash Popup',
      Decision: 'Inactive',
      CurrentStatus: <img src={frameImage} />
    },
    {
      CreationDate: '12.02.2023',
      CampaignName: 'Campaign 333',
      CampaignType: 'Flash Popup',
      Decision: 'Inactive',
      CurrentStatus: <img src={frameImage} />
    }
  ];
  const onShowSizeChange = (current, pageSize) => {};
  const handleCampaign = (c) => {
    if (c !== 'Rejected') {
      dispatch(setCampaignView('campaignDetail'));
    }
    if (c === 'Rejected') {
      dispatch(setCampaignView('rejectedCampaign'));
    }
  };

  return (
    <div>
      <Tablefilters />
      <div className="compaign-table">
        <table>
          <tr>
            <th>Creation Date</th>
            <th>Campaign Name</th>
            <th>Campaign Type</th>
            <th>Decision</th>
            <th>Current Status</th>
          </tr>
          {tableData.map((tabled, index) => {
            return (
              <tr
                key={`key${index}`}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  handleCampaign(tabled.Decision);
                }}
              >
                <td>{tabled.CreationDate}</td>
                <td>{tabled.CampaignName}</td>
                <td>{tabled.CampaignType}</td>
                <td>{tabled.Decision}</td>
                <td>{tabled.CurrentStatus}</td>
              </tr>
            );
          })}
        </table>
        <div className="table-footer">
          <p>Showing 1 to 10 of 100 entries</p>
          <Pagination showQuickJumper showSizeChanger={false} onShowSizeChange={onShowSizeChange} total={100} />
        </div>
      </div>
    </div>
  );
};

export default Table;
