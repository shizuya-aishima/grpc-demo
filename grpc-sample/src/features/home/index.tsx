import { CSSProperties } from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle: CSSProperties = { color: 'blue' }

export const Home: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to='/counter'>
            counter
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to='/room/create'>
            CreateRoom
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to='/chats'>
            chats
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
