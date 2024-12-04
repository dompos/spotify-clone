export const searchFetch = async (artistName) => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_API_KEY,
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error(error);
    }

};

export const searchFetchRandom = async (artistName) => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_API_KEY,
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.data[Math.floor(Math.random() * result.data.length)];
    } catch (error) {
        console.error(error);
    }

};

export const albumFetch = async (id) => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/album/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_API_KEY,
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};


export const artistFetch = async (id) => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_API_KEY,
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

