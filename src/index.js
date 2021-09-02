import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import anonymous1 from './anonymous1.jpg'
import anony1 from './anony1.jpg'
import anony2 from './anony2.jpg'
import anony3 from './anony3.jpg'
import anony4 from './anony4.jpg'

import html from './html.jpg'
import css from './css.png'
import js from './js.png'
import bs from './bs.png'
import likefb from './likefb.jpg'

// import { icon1 } from '../node_modules/react-icons/lib'

const date = new Date()
const day = date.getDay()
const month = date.getMonth()
const year = date.getFullYear()


function Post(props) {
  return <div className='main-div'>
    <div className='postDiv'>
      <div className='cmnt-head'>
        <img className='profile-img' src={props.profile}></img>
        <span className='nameanddate'>
          <h3>{props.name}</h3>
          <p className='cmntDate'> {day} / {month} / {year} </p>
        </span>
        <br />
      </div>
      <div className='cmnt-body'>
        <p>
          {props.para}
        </p>
        <img src={props.bodyimg} ></img>

      </div>
      <div className='cmnt-foot'>
        
        <div className='cmnt'>
        <img className='cmnt-img' src={props.profile}></img>
        <input placeholder={props.placeholder}></input>
        </div>
      </div>

    </div>
  </div>
}

ReactDOM.render(
  <div>
    <Post name='Sudofy' profile={anony1} bodyimg={html} placeholder='Comment on the post'
      para={` HTML (Hypertext Markup Language) is the code that is used to structure a web page
          and its content. For example, content could be structured within a set of paragraphs,
          a list of bulleted points, or using images and data tables.`} />,
    <Post name='Folio' profile={anony2} bodyimg={css} placeholder='Comment on the post'
      para={`CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying 
      out and structuring web pages (HTML or XML). This language contains coding elements and is 
      composed of these “cascading style sheets” which are equally called CSS files`} />
    <Post name='SaleSoft' profile={anony3} bodyimg={bs} placeholder='Comment on the post'
      para={`
      Bootstrap is a framework to help you design websites faster and easier. It includes HTML and CSS based design 
      templates for typography, forms, buttons, tables, navigation, modals, image carousels, etc. It also gives you
       support for JavaScript plugins`} />
    <Post name='Genitech' profile={anony4} bodyimg={js} placeholder='Comment on the post'
      para={`JavaScript is commonly used for creating web pages. It allows us to add dynamic behavior to 
      the webpage and add special effects to the webpage. On websites, it is mainly used for validation 
      purposes. JavaScript helps us to execute complex actions and also enables the interaction of 
      websites with visitors.`} />

  </div>
  , document.querySelector('#root'))




