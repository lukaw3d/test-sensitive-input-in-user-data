import React from 'react'
import ReactDOM from 'react-dom/client'

function FormDefault() {
  return (
    <form>
      <div><input placeholder="Default input" type="text" /></div>
      <div><textarea placeholder="Default textarea" /></div>
      <div><input type="submit" /></div>
    </form>
  )
}

function App() {
  return (
    <div>
      <FormDefault/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
