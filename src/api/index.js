import axios from '../untils/http';


export const getTest = (params) => axios.get('test', params )
export const postTest = (data) => axios.post('test', data )

export default {}