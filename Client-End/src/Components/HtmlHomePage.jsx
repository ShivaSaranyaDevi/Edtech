import { Routes, Route } from 'react-router-dom';
import '../scss/HtmlHomePage.scss';
import HtmlAttributes from '../HTML/HtmlComponents/HtmlAttributes';
import HtmlBasic from '../HTML/HtmlComponents/HtmlBasic';
import HtmlColors from '../HTML/HtmlComponents/HtmlColors';
import HtmlComments from '../HTML/HtmlComponents/HtmlComments';
import HtmlCss from '../HTML/HtmlComponents/HtmlCss';
import HtmlElements from '../HTML/HtmlComponents/HtmlElements';
import HtmlFormatting from '../HTML/HtmlComponents/HtmlFormatting';
import HtmlHeadings from '../HTML/HtmlComponents/HtmlHeadings';
import HtmlIntroduction from '../HTML/HtmlComponents/HtmlIntroduction';
import HtmlLinks from '../HTML/HtmlComponents/HtmlLinks';
import HtmlParagraphs from '../HTML/HtmlComponents/HtmlParagraphs';
import Htmlquotations from '../HTML/HtmlComponents/Htmlquotations';
import HtmlDiv from '../HTML/HtmlComponents/HtmlDiv';
import HtmlBlockandInline from '../HTML/HtmlComponents/HtmlBlockandInline';
import HtmlLists from '../HTML/HtmlComponents/HtmlLists';
import HtmlTables from '../HTML/HtmlComponents/HtmlTables';
import Htmleditors from '../HTML/HtmlComponents/Htmleditors';
import HtmlPageTitle from '../HTML/HtmlComponents/HtmlPageTitle';
import HtmlFavicon from '../HTML/HtmlComponents/HtmlFavicon';
import HtmlImages from '../HTML/HtmlComponents/HtmlImages';
import HtmlStyles from '../HTML/HtmlComponents/HtmlStyles';
import HtmlDashboard from './HtmlDashboard';

function HtmlHomePage() {
  return (
    <div className='HtmlHomePage-Container'>
      <div className="StudentmainContent-body">
        <Routes>
          <Route path="/" element={<HtmlDashboard />} />
          <Route path="/introduction" element={<HtmlIntroduction />} />
          <Route path="/editors" element={<Htmleditors />} />
          <Route path="/basic" element={<HtmlBasic />} />
          <Route path="/elements" element={<HtmlElements />} />
          <Route path="/attributes" element={<HtmlAttributes />} />
          <Route path="/headings" element={<HtmlHeadings />} />
          <Route path="/paragraphs" element={<HtmlParagraphs />} />
          <Route path="/styles" element={<HtmlStyles />} />
          <Route path="/formatting" element={<HtmlFormatting />} />
          <Route path="/quotations" element={<Htmlquotations />} />
          <Route path="/comments" element={<HtmlComments />} />
          <Route path="/colors" element={<HtmlColors />} />
          <Route path="/css" element={<HtmlCss />} />
          <Route path="/links" element={<HtmlLinks />} />
          <Route path="/images" element={<HtmlImages />} />
          <Route path="/favicon" element={<HtmlFavicon />} />
          <Route path="/pagetitle" element={<HtmlPageTitle />} />
          <Route path="/tables" element={<HtmlTables />} />
          <Route path="/lists" element={<HtmlLists />} />
          <Route path="/block-inline" element={<HtmlBlockandInline />} />
          <Route path="/div" element={<HtmlDiv />} />
        </Routes>
      </div>
    </div>
  );
}

export default HtmlHomePage;
