import React, { ReactNode } from 'react'

const App = ({title=100}:{title:number})=> {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default App
