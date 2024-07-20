import '@styles/pages/Hub.scss';
import ApplicationList from 'components/hub/ApplicationList/ApplicationList';
import CharacterVisualizer from 'components/hub/CharacterVisualizer/CharacterVisualizer';
function Hub() {
  return (
    <div className="Hub">
      <ApplicationList />
      <CharacterVisualizer />
    </div>
  );
}

export default Hub;
