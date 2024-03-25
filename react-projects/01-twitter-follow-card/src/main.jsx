import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const createButton = ({text}) => {
  return (
    <button>{text}</button>
  )
}

root.render(
  <React.Fragment>
{createButton({text: 'button 1'})}
{createButton({text: 'button 2'})}
  </React.Fragment>
)
