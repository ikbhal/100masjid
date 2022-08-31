import './App.css';
import {masjidList} from './data.js';

function App() {
  return (

    <div className="App">
      <h1>100 Masjid</h1>
      <div className="masjid-list">
        {masjidList.map((masjid, index) =>{
          return (
            <div key={index} className="masjid">
              {index+1}. {masjid.name} <br/>
              {masjid.address} <br/>
              {masjid.contact} <br/>
              <a href={masjid.gmap} >gmap </a><br/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
