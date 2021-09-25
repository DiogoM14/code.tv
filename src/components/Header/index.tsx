import { IoMdNotifications } from 'react-icons/io'
import { FiChevronDown } from 'react-icons/fi'

import { Container, Search, UserAndNotifications } from "./styles";

export function Header() {
  return (
    <Container>
      <Search 
        placeholder="Search"
      />

      <UserAndNotifications>
        <div>
          <img  
            src="https://github.com/diogom14.png"
          />

          <p>Diogo</p>
          <FiChevronDown size={20} color="#808191" />
        </div>

        <IoMdNotifications className="notification-icon" size={20} color="#808191" />
      </UserAndNotifications>
    </Container>
  )
}