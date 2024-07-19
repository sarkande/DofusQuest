import '@styles/pages/Settings.scss';
import { NavLink } from 'react-router-dom';

function Settings() {
  return (
    <div className="Settings">
        <h1>Settings</h1>
        <NavLink to="/hub">Go to Hub</NavLink>
    </div>
  );
}

export default Settings;
