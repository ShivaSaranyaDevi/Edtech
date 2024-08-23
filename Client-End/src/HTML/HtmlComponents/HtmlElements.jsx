import HtmlExample from '../../assets/htmlExample(htmlIntroduction_section3).jpg'
import paragraph from '../../assets/htmlparagraphs.jpg'
import headings from '../../assets/htmlHeadings.jpg'
import links from '../../assets/htmlLinks.jpg'
import images from '../../assets/htmlImage.jpg'
import { useNavigate } from 'react-router-dom'

function HTMLElements() {
  const navigate = useNavigate()
  const handleNext = () => {
    navigate('/dashboard/html/attributes')
  }
  return (
    <div className='HTMLElements-container'>
      <div className='HTMLElements-body'>
        <div className='HTMLElements-section1'>
          <h3>HTML Elements</h3>
          <p>An HTML file is made of elements. These elements are responsible for creating web pages and define content in that webpage. An element in HTML usually consist of a start tag <code>&lt;tag name&gt;</code>, close tag <code> &lt;/tag name&gt; </code> and content inserted between them.</p>
          <p><strong> Technically, an element is a collection of start tag, attributes, end tag, content between them</strong>.</p>
          <p>Such as:</p>
        </div>
        <div className='HTMLElements-section2'>
          <h4>HTML Documents</h4>
          <p>All HTML documents must start with a document type declaration: <code>  &lt;!DOCTYPE html&gt;</code></p>
          <p>The HTML document itself begins with <code> &lt;html&gt;</code> and ends with <code> &lt;/html&gt;</code></p>
          <p>The visible part of the HTML document is between <code> &lt;body&gt;</code> and <code> &lt;/body&gt;</code> </p>
          <img src={HtmlExample} alt='Html-document' className='Html-Example-image'></img>
        </div>
        <div className='HTMLElements-section3'>
          <h4>The  &lt;!DOCTYPE html&gt; Declaration</h4>
          <p>The <code> &lt;!DOCTYPE html&gt;</code> declaration represents the document type, and helps browsers to display web pages correctly.</p>
          <p>It must only appear once, at the top of the page (before any HTML tags).</p>
          <p>The <code> &lt;!DOCTYPE html&gt;</code> declaration is not case sensitive.</p>
        </div>
        <div className='HTMLElements-section4'>
          <h4>HTML Headings</h4>
          <p>HTML headings are defined with the <code> &lt;h1&gt;</code> to <code> &lt;h1&gt;</code> tags.</p>
          <p><code> &lt;h1&gt;</code> defines the most important heading. <code> &lt;h6&gt;</code> defines the least important heading: </p>
          <img src={headings} alt='Html-heading' className='Html-headings-image'></img>
        </div>
        <div className='HTMLElements-section5'>
          <h4>HTML Paragraphs</h4>
          <p>HTML paragraphs are defined with the <code> &lt;p&gt;</code></p>
          <img src={paragraph} alt='Html-paragraph' className='Html-paragraph-image'></img>
        </div>
        <div className='HTMLElements-section6'>
          <h4>HTML Links</h4>
          <p>HTML links are defined with the <code> &lt;a&gt;</code> tag</p>
          <img src={links} alt='Html-links' className='Html-links-image'></img>
          <p>The link's destination is specified in the href attribute. </p>
        </div>
        <div className='HTMLElements-section7'>
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

export default HTMLElements