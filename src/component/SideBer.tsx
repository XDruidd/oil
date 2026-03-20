import { Box, Checkbox, Divider, InputLabel, Slider, Typography } from "@mui/material";
import Filter from "../assets/svg/filter.svg" 
import React from "react";
import type ISideBar from "./interface/ISideBar";
import CheckBox from "../assets/svg/checkBox.svg";
import CheckBoxActive from "../assets/svg/checkBoxActive.svg";

type SelectedFilters = Record<string, string[]>;

interface SideBarProps {
    sideData: ISideBar;
    selected: SelectedFilters;
    setSelected: React.Dispatch<React.SetStateAction<SelectedFilters>>;
    value: number[];
    setValue: React.Dispatch<React.SetStateAction<number[]>>;
}
function SideBar({ sideData, selected, setSelected, value, setValue }: SideBarProps){


    const handleChange = (_event: Event, newValue: number[], activeThumb: number) => {
        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - sideData.minPrice), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + sideData.minPrice)]);
        }
    };

    const handleToggle = (category: string, value: string) => {
        setSelected((prev) => {
            const currentCategoryValues = prev[category] || [];
            
            const isAlreadySelected = currentCategoryValues.includes(value);
            
            const nextValues = isAlreadySelected
            ? currentCategoryValues.filter((item) => item !== value)
            : [...currentCategoryValues, value];

            return {
            ...prev,
            [category]: nextValues,
            };
            
        });
    };
    return(

        <>
        <Box sx={{padding:"0 3rem 0 1rem"}}>
            <Box display={"flex"}justifyContent={"space-between"} >
                <Typography fontSize={18}>Filters</Typography>
                <img src={Filter}/>
            </Box>
            <Box>
                <Typography color="#929292" fontSize={14}>
                    Price Catalog
                </Typography>
                <Box>
                <Slider 
                    getAriaLabel={() => 'Minimum distance'}
                    value={value}
                    onChange={handleChange}
                    disableSwap
                    min={sideData.minPrice}
                    max={sideData.maxPrice}
                    size="small"
                    sx={
                        { 
                            color: "#A1ABFF",
                            padding: "12px 0",
                            height: 8,
                                '& .MuiSlider-thumb': {
                                    width: 13,         
                                    height: 13,
                                    transform: 'translate(-50%, -55%)', 
                                    backgroundColor: '#fff',
                                    border: '2px solid currentColor',
                                '&:hover': {
                                    boxShadow: "none",
                                    animation: "none"
                                },
                                '&.Mui-active': {
                                    animation: "none",
                                    boxShadow: "none"
                                },
                                '&.Mui-focusVisible': {
                                    boxShadow: 'none',
                                },
                            },
                        }
                    }

                />
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography>{value[0]}$</Typography>
                    <Typography>{value[1]}$</Typography>
                </Box>
                </Box>
                <Divider sx={{margin: "15px 0"}}></Divider>
                {sideData.param.map((item, index) =>(
                        
                        <Box key={index}>
                        <Typography color="#929292" fontSize={14}>
                            {item.name}
                        </Typography>
                        {item.param.map((param, indexParam) => (
                            
                            <InputLabel key={indexParam} sx={{ display: "flex", justifyContent: "space-between", mt: "8px", mb: "8px" }}>
                                <Typography fontSize={14}>{param}</Typography>
                                <Checkbox
                                    checked={selected[item.name]?.includes(param) || false}
                                    onChange={() => handleToggle(item.name, param)} 
                                    icon={<img src={CheckBox} />}
                                    checkedIcon={<img src={CheckBoxActive} />}
                                    sx={{
                                        padding: 0,
                                        borderRadius: "40px",
                                        color: "#A1A1AA",
                                        '&.Mui-checked': {
                                            color: "#000",
                                        }
                                    }}
                                    disableRipple />
                            </InputLabel>

                        )
                        )}
                        {item.saveAll && <Typography fontSize={14} fontWeight={550} color="#4B551E" textTransform="uppercase">Save all</Typography>}
                        {index+1 != sideData.param.length && <Divider sx={{ margin: "15px 0" }}></Divider>}
                    </Box>
                    ) 
                )}
            </Box>
        </Box>
        </>
    )
}
export default SideBar;