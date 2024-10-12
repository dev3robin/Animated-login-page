import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
const iconsMap = {
  PersonIcon: PersonIcon,
  LockIcon: LockIcon,
  EmailIcon:EmailIcon
};

function Inputfield(props) {
  const IconComponent = iconsMap[props.icon];
  return (
    <div className={`input-div ${props.id} ${props.isActive ? 'active' : ''}${props.isToggle ? 'toggle' : ''}`}>
      <input 
        type={props.type} 
      />
      <label>{props.placeholder}</label>
      <span>{IconComponent ? <IconComponent /> : null}</span>
    </div>
  );
}

export default Inputfield;
