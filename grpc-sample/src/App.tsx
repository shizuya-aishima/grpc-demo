import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Chats } from './features/chats'
import { Counter } from './features/counter/Counter'
import { Home } from './features/home'
import logo from './logo.svg'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <Routes>
          <Route index element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/chats' element={<Chats />} />
        </Routes>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className='App-link'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'>
            React
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'>
            Redux
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'>
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className='App-link'
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'>
            React Redux
          </a>
        </span>
      </header>
    </div>
  )
}

export default App
