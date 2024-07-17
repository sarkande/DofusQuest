import '@styles/components/ApplicationList.scss';
import ApplicationItem from '../ApplicationItem/ApplicationItem';
import { ApplicationItemProps } from '@interfaces/ApplicationItem';

function ApplicationList() {
  let applicationList:ApplicationItemProps[] = [
    { imageSrc: 'https://via.placeholder.com/150', title: 'Dofus Quest', route: '/dofus-quest' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Better Naio', route: '/better-naio' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Craft', route: '/craft' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Almanax', route: '/almanax' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Tuto', route: '/tuto' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Notes', route: '/notes' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Portal', route: '/portal' },

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
