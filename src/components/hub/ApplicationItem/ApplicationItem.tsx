import React from 'react';
import '@styles/components/ApplicationItem.scss';
import { ApplicationItemProps } from '@interfaces/ApplicationItem';

const ApplicationItem: React.FC<ApplicationItemProps> = ({ imageSrc, title }) => {


  return (
    <div className="application-item">
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
