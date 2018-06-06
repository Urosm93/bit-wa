import React from 'react';

export const Header = (props) => {
  const { title, state, stateSetting } = props
  return (
    <nav>
      <div className="nav-wrapper" >
        <div className="container">
          <a className="brand-logo center">{title}</a>
          {
            state ?
              <i className="material-icons right" onClick={() => stateSetting(state)} >view_list</i>
              : <i className="material-icons right" onClick={() => stateSetting(state)}>view_module</i>

          }
        </div>


      </div>
    </nav>
  )
}