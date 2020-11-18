import serverInfo from '../config/serverConfig';

async function fetchData(page) {
    const response = await fetch(`${serverInfo.address}?_page=${page}&_limit=12`, 
        {
            mode: 'cors',
        });
    try {
        return await response.json();
    } catch {
        throw Error('Error fetching data.');
    }
}

export default fetchData;