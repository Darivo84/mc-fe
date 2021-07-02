import React from 'react'
import { Link } from 'react-router-dom'
 
import Navbar from '../components/navbar/Navbar';
import Copyright from '../components/copyright/Copyright';

// TODO: Make page functional and fill with dummy content for now.
import './documentation.css';

const Documentation = () => {
  return (
    <div>
      <Navbar />
      <div className="main-doc">
        <nav id="navigation">
          <div className="divider">
            <header>Documentation</header>
            <ul>
              <li>
                <Link to="#First_Section" className="docsLink" >First Section</Link>
              </li>
              <li>
                <Link to="#First_Section" className="docsLink" >Second Section</Link>
              </li>
              <li>
                <Link to="#First_Section" className="docsLink" >Third Section</Link>
              </li>
              <li>
                <Link to="#First_Section" className="docsLink" >Fourth Section</Link>
              </li>
              <li>
                <Link to="#First_Section" className="docsLink" >Fifth Section</Link>
              </li>
              <li>
                <Link to="#First_Section" className="docsLink" >Sixth Section</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="Content">
          <section id="First_section" class="main-section"> 
           <header>First section</header>
           <p>
            <code>First section paragraph</code>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <ul>
            <li>First list</li>
            <li>Second list</li>
            <li>Third list</li>
            <li>Fourth list</li>
            <li>Fifth list</li>
          </ul>
          
          <p>
            <code>First section paragraph</code>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <ol>
            <li>First list</li>
            <li>Second list</li>
            <li>Third list</li>
            <li>Fourth list</li>
            <li>Fifth list</li>
          </ol>
          </section>  
          
          <section id="Second_section" class="main-section">
            <header>Second section</header>
            <p>
              <code>Second section paragraph</code>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
              <ol>
              <li>First list</li>
              <li>Second list</li>
              <li>Third list</li>
              <li>Fourth list</li>
              <li>Fifth list</li>
            </ol>
            <p>
              <code>Second section paragraph</code>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
              <li>First list</li>
              <li>Second list</li>
              <li>Third list</li>
              <li>Fourth list</li>
              <li>Fifth list</li>
            </ul>
          </section>
  
          <section id="Third_section" class="main-section">
            <header>Third section</header>
            <p>
              <code>Third section paragraph</code>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
              <ol>
              <li>First list</li>
              <li>Second list</li>
              <li>Third list</li>
              <li>Fourth list</li>
              <li>Fifth list</li>
            </ol>
            <p>
              Third section paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
              <li>First list</li>
              <li>Second list</li>
              <li>Third list</li>
              <li>Fourth list</li>
              <li>Fifth list</li>
            </ul>
          </section>
          <section id="Fourth_section" class="main-section">
            <header>Fourth section</header>
            <p>
              Fourth section paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
              <li>First list</li>
              <li>Second list</li>
              <li>Third list</li>
              <li>Fourth list</li>
              <li>Fifth list</li>
            </ul>
            <p>
              Fourth section paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ol>
              <li>First list</li>
              <li>Second list</li>
              <li>Third list</li>
              <li>Fourth list</li>
              <li>Fifth list</li>
            </ol>
          </section>
          <section id="Fifth_section" class="main-section">
              <header>Fifth section</header>
              <p>
                Fifth section paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <ol>
                <li>First list</li>
                <li>Second list</li>
                <li>Third list</li>
                <li>Fourth list</li>
                <li>Fifth list</li>
              </ol>
              <p>
                Fifth section paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
                <ul>
                <li>First list</li>
                <li>Second list</li>
                <li>Third list</li>
                <li>Fourth list</li>
                <li>Fifth list</li>
              </ul>
          </section>
        </div>

      </div>
      <Copyright />
    </div>
  )
}

export default Documentation
