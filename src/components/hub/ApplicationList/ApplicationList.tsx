import '@styles/components/ApplicationList.scss';
import ApplicationItem from '../ApplicationItem/ApplicationItem';
import { ApplicationItemProps } from '@interfaces/ApplicationItem';

function ApplicationList() {
  let applicationList:ApplicationItemProps[] = [
    { imageSrc: 'https://via.placeholder.com/150', title: 'Dofus Quest' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Better Naio' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Craft' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Almanax' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Tuto' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Notes' },
    { imageSrc: 'https://via.placeholder.com/150', title: 'Portal' },

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
