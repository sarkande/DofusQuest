import '@styles/components/ApplicationList.scss';

import ApplicationItem from '../ApplicationItem/ApplicationItem';
import { ApplicationItemProps } from '@interfaces/ApplicationItem';

import questIcon from '@images/icons/icon_quest.png';
import naioIcon from '@images/icons/icon_naio.png';
import craftIcon from '@images/icons/icon_craft.png';
import almanaxIcon from '@images/icons/icon_almanax.png';
import tutoIcon from '@images/icons/icon_tuto.png';
import notesIcon from '@images/icons/icon_notes.png';
import portalIcon from '@images/icons/icon_portal.png';
import settingsIcon from '@images/icons/icon_settings.png';


function ApplicationList() {
  let applicationList:ApplicationItemProps[] = [
    { imageSrc: questIcon, title: 'Dofus Quest', route: '/dofus-quest' },
    { imageSrc: naioIcon, title: 'Better Naio', route: '/better-naio' },
    { imageSrc: craftIcon, title: 'Craft', route: '/craft' },
    { imageSrc: almanaxIcon, title: 'Almanax', route: '/almanax' },
    { imageSrc: tutoIcon, title: 'Tuto', route: '/tuto' },
    { imageSrc: notesIcon, title: 'Notes', route: '/notes' },
    { imageSrc: portalIcon, title: 'Portal', route: '/portal' },
    { imageSrc: settingsIcon, title: 'Paramètres', route: '/settings', internal: true },

  ];

  return (
   <div className="application-list">
    <h2 className='application-list__title'>Application List</h2>
    <div className="application-list__container">
      {applicationList.map((application, index) => (
        <ApplicationItem key={index} {...application} />
      ))}
    </div>
   </div>
  );
}

export default ApplicationList;
