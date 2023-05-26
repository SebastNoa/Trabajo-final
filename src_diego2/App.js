import { useState } from 'react';

import Panel1 from './components/Panel1';
import Panel2 from './components/Panel2';
import Panel3 from './components/Panel3';


function MyApp() {
  const [activePanel, setActivePanel] = useState('panel1');
  
  const handlePanelChange = (panel) => {
    setActivePanel(panel);
  };


  return (
    <div>
      <button onClick={() => handlePanelChange('panel1')}>Panel 1</button>
      <button onClick={() => handlePanelChange('panel2')}>Panel 2</button>
      <button onClick={() => handlePanelChange('panel3')}>Panel 3</button>

      {activePanel === 'panel1' && <Panel1 />}
      {activePanel === 'panel2' && <Panel2 />}
      {activePanel === 'panel3' && <Panel3 />}

    </div>
  );
}

export default MyApp;