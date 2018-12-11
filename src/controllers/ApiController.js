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
    send_location: (location_json) => {
        return fetch(apiUrl + '/users/send_location', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(location_json),
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
    get_user_addresses: (user_id) => {
        //console.log('userid from api controller',user_id)
        return fetch(apiUrl + '/users/get_user_addresses', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "user_id": user_id
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
    delete_address: (address_id) => {
        //console.log('userid from api controller',user_id)
        return fetch(apiUrl + '/users/delete_address', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "address_id": address_id
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
    forget_password: (user_email) => {
        //console.log('userid from api controller',user_id)
        return fetch(apiUrl + '/users/forget_password', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "user_email": user_email
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
    send_report: (user_name, user_report) => {
        return fetch(apiUrl + '/users/send_report', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "user_name": user_name,
                "user_report":user_report
            }),
        }).catch((error) => {
                console.error(error);
            });
    }
};

module.exports = ApiController