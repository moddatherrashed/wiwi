import { AsyncStorage } from 'react-native'

const apiUrl = "http://www.swiss-touch-tech-solutions.ch/wiwiapi/users";

let ApiController = {
    sign_in: (mobile_number, password) => {
        return fetch(apiUrl + '/sign_in', {
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
    }
};

module.exports = ApiController