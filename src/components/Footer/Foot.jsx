import React from 'react'
import './Foot.css'

function Foot() {
  return (
    <footer>
      <nav className="footer-nav">
        <div className='footer-nav-items'>
          <h2>Please contact us below</h2>
          <ul>
            <li>
              Email - <a href="mailto:keluskar.tanmay@gmail.com">keluskar.tanmay@gmail.com</a>
            </li>
            <li>
              Phone - <a href="tel:+918108248925">+918108248925</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default Foot