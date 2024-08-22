import { useNavigate } from 'react-router-dom'
function Htmleditors() {

  const navigate = useNavigate()
  const handleNext = () => {
    navigate('/dashboard/html/basic')
  }
  return (
    <div className='Htmleditors-container'>
      <div className='Htmleditors-body'>
        <div className='Htmleditors-section1'>
          <h3>HTML Editors</h3>
          <p><strong>HTML editors</strong> are used to create and modify HTML code</p>
        </div>
        <div className='Htmleditors-section2'>
          <h4>What is an HTML editor?</h4>
          <p>An <strong>HTML editor</strong> is a tool/software that can create, edit, and manage HTML code. They provide various features to simplify the process of writing HTML code.</p>
        </div>
        <div className='Htmleditors-section3'>
          <h4>List of Html Editors</h4>
          <ul className='Htmleditors-menu'>
            <li>Notepad</li>
            <li>Sublime Text Editor</li>
            <li>Brackets</li>
            <li> Visual Studio Code</li>
            <li>Atom</li>
          </ul>
        </div>
        <div className='Htmleditors-section4'>
          <h5>1.Notepad</h5>
          <p>Notepad is a simple text editor that is also used to write HTML code. It is an inbuilt desktop application available in Windows OS. </p>
        </div>
        <div className='Htmleditors-section5'>
          <h5>2.Sublime Text Editor</h5>
          <p>Sublime is a cross-platform code editor tool. It supports all markup languages and is used as an editor for HTML. </p>
        </div>
        <div className='Htmleditors-section6'>
          <h5>3.Brackets</h5>
          <p>Brackets is an open-source software primarily used for Web development. It provides live HTML, CSS, and JavaScript editing functionality.</p>
        </div>
        <div className='Htmleditors-section7'>
          <h5>4.Visual Studio Code</h5>
          <p>It is one of the most popular code editors of today’s generation.</p>
        </div>
        <div className='Htmleditors-section8'>
          <h5>5.Atom</h5>
          <p>Atom is an open-source code editor tool for MAC, Linux, and Windows. We can use Atom to write and edit HTML code. Similar to the Notepad editor.</p>
        </div>
        <div className="Htmleditors-section9">
          <button className='Next' onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Htmleditors