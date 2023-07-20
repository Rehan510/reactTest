import React from 'react';
import AddDetail from './Detail';
import AddMessage from './AddMessage';
import Confrim from './Confirmation';
import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { setCampaignStep } from '../../../reducers/communication';

const Stages = () => {
  const { campaignStep } = useSelector((state) => state.communicationSlice);
  const dispatch = useDispatch();
  const createCampaignStep = {
    1: <AddDetail />,
    2: <AddMessage />,
    3: <Confrim />
  };
  const handleStep = (s) => {
    dispatch(setCampaignStep(s));
  };
  const steps = [
    { title: 'Add Details', step: 1 },
    { title: 'Add Message', step: 2 },
    { title: 'Confirmation', step: 3 }
  ];
  const getClass = (dd) => {
    let data = dd.step === campaignStep ? 'current-step' : 'next-step';
    if (dd.step < campaignStep) {
      data = 'complete-step';
    }
    return data;
  };
  return (
    <div>
      <div className="stages-wrapper">
        {steps.map((st, index) => {
          return (
            <>
              <div className={getClass(st)}>
                <span>0{index + 1}</span>
                <p
                  onClick={() => {
                    handleStep(st.step);
                  }}
                >
                  {st.title}
                </p>
              </div>
            </>
          );
        })}
      </div>
      <section className="details-wrapper">{get(createCampaignStep, campaignStep, null)}</section>
    </div>
  );
};

export default Stages;
