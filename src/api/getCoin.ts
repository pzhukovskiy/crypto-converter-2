import axios from "axios"

export const getCoin = async () => {
    const {data} = await axios.get('https://api.coincap.io/v2/assets');
    return data.data;
}

export const getCoinHistory = async (crypto: string) => {
    const {data} = await axios.get(`https://api.coincap.io/v2/assets/${crypto}/history?interval=d1`);
    return data.data;
}

export const getCoinById = async (id: string) => {
    const {data} = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
    return data.data;
}