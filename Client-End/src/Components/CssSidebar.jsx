/* eslint-disable react/prop-types */
import '../scss/CssSidebar.scss';
import { Link } from 'react-router-dom';

function CssSidebar({isCssOpen}) {
  return (
    <div className={`CssSidebar-Container ${isCssOpen ? 'open' : 'collapsed'}`}>
      <div className='CssSidebar-body'>
        <ul className='CssSidebar-menu'>
          <li className='CssSidebar-content'><Link to="/dashboard/css/introduction"> CSS Introduction</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/syntax"> CSS Syntax</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/selectors"> CSS Selectors</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/howto"> CSS How To</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/comments"> CSS Comments</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/colors"> CSS Colors</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/backgrounds"> CSS Backgrouds</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/borders"> CSS Borders</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/margins"> CSS Margins</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/padding"> CSS Padding</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/height-width"> CSS height/width</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/boxmodel"> CSS Box Model</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/outline"> CSS Outline</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/text"> CSS Text</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/fonts"> CSS Fonts</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/icons"> CSS Icons</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/links"> CSS Links</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/lists"> CSS Lists</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/tables"> CSS Tables</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/display"> CSS Display</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/max-width"> CSS Max-width</Link></li>
          <li className='CssSidebar-content'><Link to="/dashboard/css/position"> CSS Position</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default CssSidebar;
