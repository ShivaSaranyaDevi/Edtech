/* eslint-disable react/no-unescaped-entities */
import HtmlExample from '../../assets/htmlExample(htmlIntroduction_section3).jpg'
import tags from '../../assets/htmltags(htmlIntroduction_section5).jpg'
import { useNavigate } from 'react-router-dom'
function HtmlIntroduction() {

  const navigate = useNavigate()
  const handleNext = () => {
    navigate('/dashboard/html/editors')
  }
  return (
    <div className="HtmlIntroduction-Container">
      <div className="HtmlIntroduction-body">
        <div className="HtmlIntroduction-section1">
          <h3>HTML Introduction</h3>
          <p>HTML, or <strong> HyperText Markup Language</strong>, is the standard markup language used to create web pages. It’s a combination of Hypertext, which defines the link between web pages, and Markup language, which is used to define the text document within tags to structure web pages. This language is used to annotate text so that machines can understand and manipulate it accordingly. HTML is human-readable and uses tags to define what manipulation has to be done on the text. This guide will help you understand the workings of HTML and explain it with examples.</p>
        </div>
        <div className="HtmlIntroduction-section2">
          <h3>What is HTML?</h3>
          <ul>
            <li>HTML stands for Hyper Text Markup Language</li>
            <li>HTML is the standard markup language for creating Web pages</li>
            <li>HTML describes the structure of a Web page</li>
            <li>HTML consists of a series of elements</li>
            <li>HTML elements tell the browser how to display the content</li>
            <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
            </li>
          </ul>
        </div>
        <div className="HtmlIntroduction-section3">
          <h3>HTML Example</h3>
          <img src={HtmlExample} alt='Html-Example' className='Html-Example-image'></img>
        </div>
        <div className="HtmlIntroduction-section4">
          <h3>Example Explained</h3>
          <ul>
            <li>The <code className='example-explanation'>&lt;!DOCTYPE html&gt;</code> declaration defines that this document is an HTML5 document</li>
            <li>The <code className='example-explanation'>&lt;html&gt;</code>  element is the root element of an HTML page</li>
            <li>The <code className='example-explanation'>&lt;head&gt;</code>  element contains meta information about the HTML page</li>
            <li>The <code className='example-explanation'>&lt;title&gt;</code>  element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
            <li>The <code className='example-explanation'> &lt;body&gt;</code> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
            <li>The <code className='example-explanation'>&lt;h1&gt; </code> element defines a large heading</li>
          </ul>
        </div>
        <div className="HtmlIntroduction-section5">
          <h3>What is an HTML Element?</h3>
          <p>An HTML element is defined by a start tag, some content, and an end tag:</p>
          <img src={tags} alt='Html-Example' className='Html-tags-image'></img>
        </div>
        <div className="HtmlIntroduction-section6">
          <button className='Next' onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default HtmlIntroduction