import './styles/App.css';
import React, { useState } from 'react';
import { AppRouter } from './Components/AppRouter';
import { AuthContext } from './context';


function App() {
  const [isAuth, setIsAuth] = useState(false)
  return(
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <AppRouter />
    </AuthContext.Provider>
    
  )
}

export default App;
