import React from "react"
import style from './style.css'

export default function Component (){
  return(
    <div className="footer d-flex">
        <div className="f-item">
          <ul className="icon">
            <li className="ml-4"><i class="fa fa-twitter" aria-hidden="true"></i></li>
            <li className="ml-4"><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
            <li className="ml-4"><i class="fa fa-dribbble" aria-hidden="true"></i></li>
          </ul>
        </div>
        <div className="f-item">
            <p>
              © 2020 - All Rights Lecensed
            </p>
        </div>
      </div>
  )
}