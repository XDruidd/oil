export default interface card{
    name: string;
    star: number; //param 1-5
    comentary: number;
    country?: {
        name: string;
        src: string;
    }
    isStoce: boolean;
    price: number;
    id: number;
    code: string;
    src: string;
} 