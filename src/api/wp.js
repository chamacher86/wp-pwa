/**
 * Request data from the Wordpress API.
 */

import axios from 'axios';
import API from '../../config/app';

/**
 * Method for getting data from the provided end point url.
 *
 * @param {string} endPoint  Valid Wordpress API End point string.
 * @returns {Promise}
 */
const api = (endPoint) => {
    return new Promise((resolve, reject) => {
        // add trailing slash to url
        let url = API.baseUrl.replace(/\/?$/, '/');
        axios.get(url + endPoint).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
};

/**
 * Method for getting data from the Pages end point url.
 *
 * @returns {Promise}
 */
function getPages() {
    return api(API.endpoints.pages).then((response) => {
        return response;
    });
}

/**
 * Method for getting data from the Posts end point url.
 *
 * @returns {Promise}
 */
function getPosts() {
    return api(API.endpoints.posts).then((response) => {
        return response;
    });
}

export { getPages, getPosts }

