import React from 'react';
import '../../css/about_user/edit_buttons.scss'

export const EditButtons = ({ save, cancel, name, iconName }) => {
  return (
    <div className={`edit_buttons_group` + ` ` + `${name}`} >
      <button className='save' onClick={() => save(name, iconName)}>Saqlash</button>
      <button className='cancel' onClick={()=>cancel(name)}>Bekor qilish</button>
    </div>
  );
};
