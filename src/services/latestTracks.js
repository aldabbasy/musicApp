import { base_url, API_KEY, tracks_url} from '../config/rest_config';
import axios from 'axios';

export async function getLatestTracks()
{
    try{
        var data;
        const api = axios.create({
            baseURL: `${base_url}`,
            headers: {
                'x-happi-key': `${API_KEY}`
            }
        });

        await api.get(`${tracks_url}`).then(res => {
            data = res.data;
        });
        //console.log(data);
        return data;
    }
    catch(ex){
        console.log(ex);
        return null;
    }
}