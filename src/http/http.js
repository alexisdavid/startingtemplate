/**
 *  @version 1.0.0
 *  @author Alexis
 *  @description Cliente HTTP para todas las peticiones Web basada en superagent: GET, POST, DELETE, PUT, PATCH
 *  @param {String} url: "/EndPoint"
 *  @param {Object} data: Payload
*/

import request from "superagent";

// Web API URL
const baseUrl = "http://127.0.0.1:8000/api/";
// const baseUrl = "http://192.168.1.3:8000/api/";



class Request {

    get(url, data) {
       
        const result = request
        
            .get(baseUrl + url)
            .query(data)
           
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                const { status } = error;
                if (status >= 400) {
                    return { message: error.message, statusCode: status };
                }
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    post(url, data) {
        const result = request
            .post(baseUrl + url)
            
            .send(data)
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    delete(url, data) {
        const result = request
            .delete(baseUrl + url)
            .send(data)
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    put(url, data) {
        const result = request
            .put(baseUrl + url)
            .send(data)
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    patch(url, data) {
        const result = request
            .patch(baseUrl + url)
            .send(data)
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

}

export default Request;
