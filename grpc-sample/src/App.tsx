import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Chats } from './features/chats'
import { Counter } from './features/counter/Counter'
import { Home } from './features/home'
import { CreateRoom } from './features/room/create'

const App = () => {
  return (
    <div className='App'>
      <main className='App-header'>
        <Home />
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path='/counter' element={<Counter />} />
          <Route path='/room/create' element={<CreateRoom />} />
          <Route path='/chats' element={<Chats />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
