import React from 'react'
import ContentCSS from "./content.module.css"
function Content() {
  return (
    <div className='card'>
      <h1>This my content component</h1>
      <button className={ContentCSS.btn}>Click me</button>
    </div>
  )
}

export default Content
