import axios from 'axios'
export const fetchCars = () => {
    return async (dispatch) => {
        try {
             const response = await axios({
                 url: 'http://localhost:4000/car',
                 method: 'GET'
             })
            //  dispatch({
            //      type: 'FETCH_CARS',
            //      payload: response.data
            //  })
        } catch (error) {
            console.log(error)
        }
    }
}