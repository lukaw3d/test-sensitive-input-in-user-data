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
    <form
      autoComplete="off"
      autoCapitalize="off"
      autoCorrect="off"
      spellCheck={false}
    >
      <div>
        <input
          placeholder="Sensitive password"
          type={visible ? 'text' : 'password'}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
        />
        <label>
          Toggle
          <input type="checkbox" value={visible} onChange={e => setVisible(e.target.checked)} />
        </label>
      </div>
      <div>
        <textarea
          placeholder="Sensitive textarea"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
        /></div>
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
