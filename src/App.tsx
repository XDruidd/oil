import { useEffect, useState } from 'react'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import TabPanel from './component/TabPanel';
import { Box, Drawer, FormControl, MenuItem, Pagination, PaginationItem,  Select,  Typography, useMediaQuery, useTheme, type SelectChangeEvent} from '@mui/material';
import Card from './component/Card';
import type ICard from './component/interface/ICard';
import oil1 from './assets/oil1.png';
import oil2 from './assets/oil2.png';
import oil3 from './assets/oil3.png';
import SideBar from './component/SideBer';
import sideBarData from './component/sideBarData';
import Filter from './assets/svg/filter.svg';
import country from './assets/country.png';
import Down from './assets/svg/downIco.svg';

import React from 'react';
import ReclamBlock from './component/Reclam';
import MegaCard from './component/MegaCard';

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
type SelectedFilters = Record<string, string[]>;

function App() {
  const [headerMenu, headerMenuSet] = useState(0)
  const [cardGet, cardSet] = useState<ICard[]>([]);
  const [selected, setSelected] = useState<SelectedFilters>({});
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState<number[]>([]);
  const [totalPages, totalPagesSet] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sorting, setSorting] = React.useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const itemsPerPage = 18

  const siblingCount = isMobile ? 0 : isTablet ? 1 : 4;
  const paginationSize = isMobile ? "small" : isTablet ? "medium" : "large";

  const handleChangePage = (_event: React.ChangeEvent<unknown>, newValue: number) => {
    setCurrentPage(newValue);
  };
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    headerMenuSet(newValue);
  };

  const handleChangeSorting = (event: SelectChangeEvent) => {
    setSorting(event.target.value as string);
  };
  useEffect(() => {
      if (cardGet.length < 18) {
        
        for (let index = 0; index < 10; index++) {
          cardSet((prev) => [...prev, ...cards]);          
        }
      }
      setValue([sideBarData.minPrice, sideBarData.maxPrice])
  }, []);
  useEffect(()=>{
      const page = Math.ceil(cardGet.length / itemsPerPage)
      totalPagesSet(page != 0 ? page : 1)
  }, [cardGet])
  const sideBarContent = (
    <SideBar 
      setSelected={setSelected}
      selected={selected}
      sideData={sideBarData}
      value={value}
      setValue={setValue}
    />
  );

  return (
    <>
      <Header handleChange={handleChange} value={headerMenu}></Header>
      <main>
        <TabPanel value={headerMenu} index={0}>
          <Box sx={{display: "flex",padding: "0 0", justifyContent:"space-between"}}>
            <Box>
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box onClick={() => setOpen(true)}><img src={Filter}/></Box>
                <Drawer open={open} onClose={() => setOpen(false)}>
                  <Box sx={{ width: 280, p: 2 }}>
                    {sideBarContent}
                  </Box>
                </Drawer>
              </Box>
            </Box>
            <Box sx={{display:'flex', justifyContent:"end", alignItems:"center", gap: 1.5}}>
              <Typography>
                sorting:
              </Typography>
                <FormControl sx={{ 
                  width: "120px",   
                  minWidth: "120px" 
                }}>          
                  <Select
                  sx={{
                    height: "25px",
                    width:"100px",
                    borderRadius: "40px", 
                    
                    '& .MuiSelect-select': {
                      padding: "5px 14px", 
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center"
                    },
                    
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: "1px solid #14141233", 
                      borderWidth: "1px"
                    },
                    
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: "1px solid #14141233", 
                    }
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sorting}
                  label=""
                  onChange={handleChangeSorting}
                >
                  <MenuItem value={0}></MenuItem>
                  <MenuItem value={1}>New</MenuItem>
                  <MenuItem value={2}>Old</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={{display: "flex", justifyContent:"space-between"}}>
              <Box sx={{ 
                display: { xs: 'none', md: 'block' },
                flex: "0 0 200px" 
              }}>
                {sideBarContent}
              </Box> 
            <Box sx={{
                      justifyContent: "flex-start",
                      '@media (max-width:719px)': {
                        justifyContent: 'center'
                      }      
            }}>
          <Box sx={{
            display: "flex",
            flexWrap:"wrap",
            gap: "10px",
          }}>
            <MegaCard></MegaCard>
            <MegaCard></MegaCard>
          </Box>

              <Box sx={{display: 'flex', alignItems:"center"}}>
                
                {
                  Array.from({ length: totalPages }, (_, i) => i).map((num) => {
                    const start = num * itemsPerPage;
                    const end = (start + itemsPerPage) > cardGet.length ? cardGet.length : (start + itemsPerPage);
                    const pageItems = cardGet.slice(start, end)
                    
                    return (
                      <TabPanel value={currentPage} index={num+1} key={num+1+"-panel"} >
                        <Box sx={{
                          display:"flex",
                          gap: "10px",
                          rowGap:"30px",
                          flexWrap:"wrap",
                          flex: "1",
                          justifyContent: "space-around",
                          '@media (max-width:719px)': {
                          justifyContent: 'space-around'
                        }      
                        }}>
                          {pageItems.map((card, index) => (
                            <React.Fragment key={index}>
                              <Card key={index} {...card} />
                              {(index === 11 && currentPage === 1) && (
                                <ReclamBlock/>
                              )}
                            </React.Fragment>
                          ))}
                        </Box>
                      </TabPanel>
                      )  
                    }
                  )
                }
              
              </Box>
              <Box marginTop={5} display={'flex'} justifyContent="space-between">
                <Pagination 
                  size = {paginationSize}
                  count={totalPages} 
                  siblingCount={siblingCount} 
                  onChange={handleChangePage}
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      slots={{ 
                        previous: () => <Typography>&lt; Back</Typography>, 
                        next: () => <Typography>Next &gt;</Typography> 
                      }}
                      sx={{
                        '& .MuiTouchRipple-root': { display: 'none' }, 
                        '&.Mui-selected': {
                          background: '#fff',
                          color: '#A1ABFF',
                          '&:hover': {
                            background: 'none',
                          },
                        },
                        '&:hover': {
                            background: 'none',
                          },
                      }}
                    />
                  )}
                />
                <Typography sx={{display:"flex", gap: 1, alignItems:"center"}}>
                  <Typography sx={{display:"flex", gap: 3}}>Result per page <Typography>{totalPages}</Typography></Typography>
                  <img width={8} height={4.5} src={Down}/>
                </Typography>
              </Box>
            </Box>

          </Box>
        </TabPanel>
        <TabPanel value={headerMenu} index={1}>Cometions</TabPanel>
        <TabPanel value={headerMenu} index={2}>Dishes</TabPanel>
        <TabPanel value={headerMenu} index={3}>Competition</TabPanel>
        <TabPanel value={headerMenu} index={4}>News</TabPanel>
        
      </main>
      <Footer handleChange={handleChange} value={headerMenu}></Footer>
    </>
  )
}

export default App
