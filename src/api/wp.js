/**
 * Request data from the Wordpress API.
 */
import WP_API from '../../config/api';

// add trailing slash to url
const BASE_URL = WP_API.baseUrl.replace(/\/?$/, '/');

/**
 * Method for getting data from the provided end point url.
 *
 * @param {string} endPoint  Valid Wordpress WP_API End point string.
 * @returns {Promise}
 */
const api = (endPoint) => {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL + endPoint)
            .then((resp) => resp.json())
            .then((response) => {
                resolve(response);
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
function fetchPages() {
    return api(WP_API.endpoints.pages).then((response) => {
        return response;
    });
}

/**
 * Method for getting data from the Posts end point url.
 *
 * @returns {Promise}
 */
function fetchPosts() {
    return api(WP_API.endpoints.posts).then((response) => {
        return response;
    });
}

export {
    fetchPages,
    fetchPosts
};

