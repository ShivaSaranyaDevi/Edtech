/* eslint-disable react/prop-types */
import '../scss/HtmlSidebar.scss';
import { Link } from 'react-router-dom';

function HtmlSidebar({isHtmlOpen}) {
  return (
    <div className={`HtmlSidebar-Container ${isHtmlOpen ? 'open' : 'collapsed'}`}>
      <div className='HtmlSidebar-body'>
        <ul className='HtmlSidebar-menu'>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/introduction">HTML Introduction</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/editors">HTML Editors</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/basic">HTML Basic</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/elements">HTML Elements</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/attributes">HTML Attributes</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/headings">HTML Headings</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/paragraphs">HTML Paragraphs</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/styles">HTML Styles</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/formatting">HTML Formatting</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/quotations">HTML Quotations</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/comments">HTML Comments</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/colors">HTML Colors</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/css">HTML CSS</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/links">HTML Links</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/images">HTML Images</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/favicon">HTML Favicon</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/pagetitle">HTML Page Title</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/tables">HTML Tables</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/lists">HTML Lists</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/block-inline">HTML Block&Inline</Link></li>
          <li className='HtmlSidebar-content'><Link to="/dashboard/html/div">HTML Div</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default HtmlSidebar;
