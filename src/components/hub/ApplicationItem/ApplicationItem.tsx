import React from 'react';
import '@styles/components/ApplicationItem.scss';
import { ApplicationItemProps } from '@interfaces/ApplicationItem';
import { NavLink } from 'react-router-dom';

const ApplicationItem: React.FC<ApplicationItemProps> = ({ imageSrc, title, route, internal }: ApplicationItemProps) => {
  const handleClick = () => {
    if (internal) return;
      if (window.require) {
        const { ipcRenderer } = window.require('electron');
        ipcRenderer.send('open-new-window', route);
      }
    
  };

 
  return internal ? (
    <NavLink to={route} className="application-item">
      <figure className="application-item__container">
        <img className="application-item__container--icon" src={imageSrc} alt={title} />
        <figcaption className="application-item__container--title">{title}</figcaption>
      </figure>
    </NavLink>
  ) : (
    <div className="application-item" onClick={handleClick}>
      <figure className="application-item__container">
        <img className="application-item__container--icon" src={imageSrc} alt={title} />
        <figcaption className="application-item__container--title">{title}</figcaption>
      </figure>
    </div>
  );
};

export default ApplicationItem;