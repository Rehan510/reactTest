import React from 'react';
import { Tabs } from 'antd';
import Table from './Table';

const CompaignTabs = () => {
  const onChange = (key) => {};
  const items = [
    {
      key: '1',
      label: `Campaign List`,
      children: <Table />
    },
    {
      key: '2',
      label: `Trigger Notifications`,
      children: `Content of Tab Pane 2`
    }
  ];

  return (
    <div className="tabs-wrapper">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default CompaignTabs;
