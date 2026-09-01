import Canvas from './components/Canvas';
import LayerPanel from './components/LayerPanel';
import PropertiesPanel from './components/PropertiesPanel';
import Toolbar from './components/Toolbar';

export default function TemplateEditor(){
  return (
    <div>
      <Toolbar />
      <div>
        <LayerPanel />
        <Canvas />
        <PropertiesPanel />
      </div>
    </div>
  );
}
