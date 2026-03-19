import { useState } from 'react'
import './App.css'
import Header from './component/Header'

function App() {
  const [headerMenu, headerMenuSet] = useState(0)
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      headerMenuSet(newValue);
  };
  return (
    <>
      <Header handleChange={handleChange} value={headerMenu}></Header>
    </>
  )
}

export default App
