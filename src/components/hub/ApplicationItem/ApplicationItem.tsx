import React from 'react';
// import { ipcRenderer } from 'electron';
import '@styles/components/ApplicationItem.scss';
import { ApplicationItemProps } from '@interfaces/ApplicationItem';

const ApplicationItem: React.FC<ApplicationItemProps> = ({ imageSrc, title, route }: ApplicationItemProps) => {
  const handleClick = () => {
    // ipcRenderer.send('open-new-window', route);
  };

  return (
    <div className="application-item" onClick={handleClick}>
      <figure
        className="application-item__container">
        <img
          className="application-item__container--icon"
          src={imageSrc}
          alt={title}
        />
        <figcaption className="application-item__container--title">{title}</figcaption>
      </figure>
    </div>
  );
};

export default ApplicationItem;
