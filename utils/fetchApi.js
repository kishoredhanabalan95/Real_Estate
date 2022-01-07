import axios from 'axios';

export const baseUrl = 'https://bayout.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '10d5438734mshe5eab6dd6a4ce40p1ad4a3jsneeb183b9770c'
        }
    });

    return data;
}