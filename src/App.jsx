import React, { useState } from 'react'
import FoodForm from './scripts/FoodForm'
import User from './scripts/User'
import { Container } from './styles/StyledComponent'

function App() {

  const [view, setView] = useState("foodForm");
  const [values, setValues] = useState(null);

  const handleView = (page) => {
    setView(page);
  };

  const handleFetchValues = (userInfomation) => {
    setValues(userInfomation);
    setView("user");
  };

  return (
    <Container className='App' content="evenly">
        {
          view === "foodForm" && (<FoodForm handleFetchValues={handleFetchValues} />)
        }
        {
          view === "user" && (<User {...values} />)
        }
      </Container>
  )
}

export default App
