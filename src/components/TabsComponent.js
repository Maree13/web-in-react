import './TabsComponent.css';
import { tabs } from '../data';
import { useState } from 'react';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(null); // Initially no tab is active

  const toggleTab = (id) => {
    if (activeTab === id) {
      setActiveTab(null); // If the same tab is clicked again, hide its content
    } else {
      setActiveTab(id); // Show the clicked tab's content
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => toggleTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {tabs.map(
        (tab) =>
          activeTab === tab.id && (
            <div key={tab.id} className="tab-content">
              <h2>{tab.title}</h2>
              <p>{tab.content}</p>
            </div>
          ),
      )}
    </div>
  );
};

export default TabsComponent;
