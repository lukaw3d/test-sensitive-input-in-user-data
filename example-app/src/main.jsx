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

function FormSensitive() {
  const [visible, setVisible] = React.useState(false)

  return (
    <form autoComplete="off">
      <div>
        <input placeholder="Sensitive password" autoComplete="off" type={visible ? 'text' : 'password'} />
        <label>
          Toggle
          <input type="checkbox" value={visible} onChange={e => setVisible(e.target.checked)} />
        </label>
      </div>
      <div><textarea placeholder="Sensitive textarea" autoComplete="off" /></div>
      <div><input type="submit" /></div>
    </form>
  )
}

function App() {
  return (
    <div>
      <FormDefault/>
      <br />
      <br />
      <FormSensitive/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
