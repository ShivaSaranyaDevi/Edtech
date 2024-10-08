import HtmlExample from '../../assets/htmlExample(htmlIntroduction_section3).jpg'
import paragraph from '../../assets/htmlparagraphs.jpg'
import headings from '../../assets/htmlHeadings.jpg'
import links from '../../assets/htmlLinks.jpg'
import images from '../../assets/htmlImage.jpg'
import { useNavigate } from 'react-router-dom'

function HtmlBasic() {
  const navigate = useNavigate()
  const handleNext = () => {
    navigate('/dashboard/html/elements')
  }
  return (
    <div className='HtmlBasic-container'>
      <div className='HtmlBasic-body'>
        <div className='HtmlBasic-section1'>
          <h3>HTML Basic Examples</h3>
        </div>
        <div className='HtmlBasic-section2'>
          <h4>HTML Documents</h4>
          <p>All HTML documents must start with a document type declaration: <code>  &lt;!DOCTYPE html&gt;</code></p>
          <p>The HTML document itself begins with <code> &lt;html&gt;</code> and ends with <code> &lt;/html&gt;</code></p>
          <p>The visible part of the HTML document is between <code> &lt;body&gt;</code> and <code> &lt;/body&gt;</code> </p>
          <img src={HtmlExample} alt='Html-document' className='Html-Example-image'></img>
        </div>
        <div className='HtmlBasic-section3'>
          <h4>The  &lt;!DOCTYPE html&gt; Declaration</h4>
          <p>The <code> &lt;!DOCTYPE html&gt;</code> declaration represents the document type, and helps browsers to display web pages correctly.</p>
          <p>It must only appear once, at the top of the page (before any HTML tags).</p>
          <p>The <code> &lt;!DOCTYPE html&gt;</code> declaration is not case sensitive.</p>
        </div>
        <div className='HtmlBasic-section4'>
          <h4>HTML Headings</h4>
          <p>HTML headings are defined with the <code> &lt;h1&gt;</code> to <code> &lt;h1&gt;</code> tags.</p>
          <p><code> &lt;h1&gt;</code> defines the most important heading. <code> &lt;h6&gt;</code> defines the least important heading: </p>
          <img src={headings} alt='Html-heading' className='Html-headings-image'></img>
        </div>
        <div className='HtmlBasic-section5'>
          <h4>HTML Paragraphs</h4>
          <p>HTML paragraphs are defined with the <code> &lt;p&gt;</code></p>
          <img src={paragraph} alt='Html-paragraph' className='Html-paragraph-image'></img>
        </div>
        <div className='HtmlBasic-section6'>
          <h4>HTML Links</h4>
          <p>HTML links are defined with the <code> &lt;a&gt;</code> tag</p>
          <img src={links} alt='Html-links' className='Html-links-image'></img>
          <p>The link's destination is specified in the href attribute. </p>
        </div>
        <div className='HtmlBasic-section7'>
          <h4>HTML Images</h4>
          <p>HTML links are defined with the <code> &lt;img&gt;</code> tag</p>
          <p>The source file (<code>src</code>), alternative text (<code>alt</code>), <code>width</code> and <code>height</code> are provided as attributes:</p>

          <img src={images} alt='Html-images' className='Html-images-image'></img>
        </div>
        <div className="HTMLElements-section8">
          <button className='Next' onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default HtmlBasic