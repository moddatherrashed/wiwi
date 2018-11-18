import { AsyncStorage } from 'react-native'

const apiUrl = "http://www.swiss-touch-tech-solutions.ch/wiwiapi";

let ApiController = {
    sign_in: (mobile_number, password) => {
        return fetch(apiUrl + '/users/sign_in', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobile_number: mobile_number,
                password: password
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response :", JSON.stringify(responseJson));
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
    },
    sign_up: (mobile_number, user_email, password) => {
        return fetch(apiUrl + '/users/sign_up', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_email: user_email,
                mobile_number: mobile_number,
                password: password
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response :", JSON.stringify(responseJson));
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
    },
    get_resturants: () => {
        return fetch(apiUrl + '/get_resturants', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response :", JSON.stringify(responseJson));
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
    },
    get_catagory: (resturant_id) => {
        return fetch(apiUrl + '/get_catagory', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                resturant_id: resturant_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response :", JSON.stringify(responseJson));
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
    },
    get_extentions: (category_id) => {
        return fetch(apiUrl + '/get_extentions', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                category_id: category_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response :", JSON.stringify(responseJson));
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
    },
    get_products: (extention_id) => {
        return fetch(apiUrl + '/get_products', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                extention_id: extention_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response :", JSON.stringify(responseJson));
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
    },
};

module.exports = ApiController