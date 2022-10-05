import './styles/App.css';
import React, { useEffect, useState } from 'react';
import { AppRouter } from './Components/AppRouter';
import { AuthContext } from './context';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])
  return(
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <AppRouter />
    </AuthContext.Provider>
    
  )
}

export default App;
