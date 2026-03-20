import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header'
import TabPanel from './component/TabPanel';
import { Box } from '@mui/material';
import Card from './component/Card';
import type ICard from './component/interface/ICard';
import oil1 from './assets/oil1.png';
import oil2 from './assets/oil2.png';
import oil3 from './assets/oil3.png';

import country from './assets/country.png';

const cards : ICard[] = [
  {
  name: 'Extra Virgin Olive Oil Planeta Val di Mazara - 500ml',
  star: 4,
  comentary: 97,
  isStoce: true,
  country: {
    name: "Val di Mazara",
    src: country
  },
  price: 699,
  id: 12345689,
  code: "000086213",
  src: oil1
},
{
  name: 'Monini Classico Extra Virgin Olive Oil for Salads 1L',
  star: 4,
  comentary: 97,
  isStoce: true,
  price: 699,
  id: 12345689,
  code: "000086213",
  src: oil2
},
{
  name: 'Borges Classic Olive Oil for frying and stewing',
  star: 4,
  comentary: 97,
  isStoce: true,
  country: {
    name: "Val di Mazara",
    src: country
  },
  price: 499,
  id: 12345689,
  code: "000086213",
  src: oil3
  }
]

function App() {
  const [headerMenu, headerMenuSet] = useState(0)
  const [cardGet, cardSet] = useState<ICard[]>([]);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      headerMenuSet(newValue);
  };
  useEffect(() => {
      if (cardGet.length < 18) {
        
        for (let index = 0; index < 6; index++) {
          cardSet((prev) => [...prev, ...cards]);          
        }
      }
  }, []);
  return (
    <>
      <Header handleChange={handleChange} value={headerMenu}></Header>
      <main>
        <TabPanel value={headerMenu} index={0}>
          <Box sx={{display:"flex", justifyContent: "end", gap: "10px", flexWrap:"wrap"}}>
            {cardGet.map((item, index)=> (
              <Card key={index} {...item}></Card>
            ))}
          </Box>
          <Box>123</Box>
        </TabPanel>
        <TabPanel value={headerMenu} index={1}>Cometions</TabPanel>
        <TabPanel value={headerMenu} index={2}>Dishes</TabPanel>
        <TabPanel value={headerMenu} index={3}>Competition</TabPanel>
        <TabPanel value={headerMenu} index={4}>News</TabPanel>
        
      </main>
    </>
  )
}

export default App
