import React from 'react';
import Button from './Button';
const ConfirmBtn = ({ handleClick }) => {
  const btnData = [
    { label: 'Back', className: 'back-btn', key: 'backBtn' },
    { label: 'Cancel', className: 'cancel-btn', key: 'cancelBtn' },
    { label: 'Save as Drafts', className: 'save-btn', key: 'saveBtn' },
    { label: 'Submit for Approval', className: 'submit-btn', key: 'submitBtn' }
  ];
  return (
    <div className="confirmBtn-wrapper">
      <div className="confirm-btn">
        {btnData.map((btn) => {
          return (
            <Button
              key={btn['key']}
              label={btn['label']}
              className={btn['className']}
              keyData={btn['key']}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ConfirmBtn;
