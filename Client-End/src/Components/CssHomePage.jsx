import { Routes, Route } from 'react-router-dom';
import '../scss/CssHomePage.scss';
import CssIntroduction from '../CSS/CSSComponents/CssIntroduction';
import CssSyntax from '../CSS/CSSComponents/CssSyntax';
import CssSelectors from '../CSS/CSSComponents/CssSelectors';
import CssHowto from '../CSS/CSSComponents/CssHowto';
import CssComments from '../CSS/CSSComponents/CssComments';
import CssPosition from '../CSS/CSSComponents/CssPosition';
import CssColors from '../CSS/CSSComponents/CssColors';
import CssBackgrounds from '../CSS/CSSComponents/CssBackgrounds';
import CssBorders from '../CSS/CSSComponents/CssBorders';
import CssMargins from '../CSS/CSSComponents/CssMargins';
import CssPadding from '../CSS/CSSComponents/CssPadding';
import CssHeightandWidth from '../CSS/CSSComponents/CssHeightandWidth';
import CssBoxModel from '../CSS/CSSComponents/CssBoxModel';
import CssOutline from '../CSS/CSSComponents/CssOutline';
import CssText from '../CSS/CSSComponents/CssText';
import CssFonts from '../CSS/CSSComponents/CssFonts';
import CssIcons from '../CSS/CSSComponents/CssIcons';
import CssLinks from '../CSS/CSSComponents/CssLinks';
import CssLists from '../CSS/CSSComponents/CssLists';
import CssTables from '../CSS/CSSComponents/CssTables';
import CssDisplay from '../CSS/CSSComponents/CssDisplay';
import CssMaxWidth from '../CSS/CSSComponents/CssMaxWidth';
import CSSDashboard from './CSSDashboard';

function CssHomePage() {
  return (
    <div className='CSSHomePage-Container'>
      <div className="StudentmainContent-body">
        <Routes>
          <Route path="/" element={<CSSDashboard />} />
          <Route path="/introduction" element={<CssIntroduction />} />
          <Route path="/syntax" element={<CssSyntax />} />
          <Route path="/selectors" element={<CssSelectors />} />
          <Route path="/howto" element={<CssHowto />} />
          <Route path="/comments" element={<CssComments />} />
          <Route path="/colors" element={<CssColors />} />
          <Route path="/backgrounds" element={<CssBackgrounds />} />
          <Route path="/borders" element={<CssBorders />} />
          <Route path="/margins" element={<CssMargins />} />
          <Route path="/padding" element={<CssPadding />} />
          <Route path="/height-width" element={<CssHeightandWidth />} />
          <Route path="/boxmodel" element={<CssBoxModel />} />
          <Route path="/outline" element={<CssOutline />} />
          <Route path="/text" element={<CssText />} />
          <Route path="/fonts" element={<CssFonts />} />
          <Route path="/icons" element={<CssIcons />} />
          <Route path="/links" element={<CssLinks />} />
          <Route path="/lists" element={<CssLists />} />
          <Route path="/tables" element={<CssTables />} />
          <Route path="/display" element={<CssDisplay />} />
          <Route path="/max-width" element={<CssMaxWidth />} />
          <Route path="/position" element={<CssPosition />} />

        </Routes>
      </div>
    </div>
  );
}

export default CssHomePage;
