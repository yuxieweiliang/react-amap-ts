import React from 'react';
import './App.css';
import { Map } from 'react-amap'

const AMAP_KEY = 'aa6f82706ed1cf190e087e0b3b756cec'
const VERSION = '1.4.15'


interface MapInterface {
    zoomIn(): any,
    zoomOut(): any
}

interface ZoomCtrlInterface {
    __map__?: MapInterface
}
const ZoomCtrl = (props: ZoomCtrlInterface) => {
    const map = props.__map__;
    if (!map) {
        console.log('组件必须作为 Map 的子组件使用');
        return null;
    }
    const style = {
        position: 'absolute',
        top: '10px',
        left: '10px',
        background: '#fff',
        padding: '10px'
    } as React.CSSProperties;
    const zoomIn = () => map.zoomIn();
    const zoomOut = () => map.zoomOut();

    return (<div style={style}>
        <button onClick={zoomIn}>zoom in</button>
        <button onClick={zoomOut}>zoom out</button>
    </div>);
};

function App() {
  return (
    <div className="App">
        <Map amapkey={AMAP_KEY} version={VERSION} ><ZoomCtrl /></Map>
    </div>
  );
}

export default App;
