import "@styles/pages/Settings.scss";
import { NavLink } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Settings() {
  return (
    <div className="Settings">
      <h1>Settings</h1>
      <NavLink to="/hub">Go to Hub</NavLink>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
    </div>
  );
}

export default Settings;
