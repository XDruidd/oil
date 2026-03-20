interface parameters{
    name: string;
    param: string[];
    saveAll?: boolean
}
export default interface sideBar{
    minPrice: number;
    maxPrice: number;
    param: parameters[];
}