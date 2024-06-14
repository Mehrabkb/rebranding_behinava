import './Content.css';
import React , {Component} from 'react';
import CInOneSee from './CInOneSee/CInOneSee';
import Branding from './Branding/Branding';
import ConceptualIdentity from './ConceptualIdentity/ConceptualIdentity';
import Tone from './Tone/Tone';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Tagline from './Tagline/Tagline';
function Content(){
      return (
        <Router>
        <div className='row'>
        <div className='col-12 col-md-3'>
            <Menu />
        </div>
        <div className='col-12 col-md-9'>
            
            <Routes>
                <Route path="/" element={<CInOneSee />} />
                <Route path="/branding" element={<Branding />} />
                <Route path="/conceptual-identity" element={<ConceptualIdentity />} />
                <Route path="/Tone" element={<Tone />} />
                <Route path="/Tagline" element={<Tagline />} />
            </Routes>
            
        </div>
    </div>
    </Router>
      )
}

export default Content;