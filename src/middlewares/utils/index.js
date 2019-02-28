import axios from 'axios';

export const loadCities = async (req, res, next) => {
    try {
        let response = await axios.post('https://api.novaposhta.ua/v2.0/json/Address/getCities', {
            "apiKey": "921c7d9aa9f26b8cc870884107dfaa5c",
            "modelName": "Address",
            "calledMethod": "getCities"
        });

        res.send({
            citiesList: response.data.data
        });
    } catch(e) {
        next(e);
    }
};

export const loadPostOffices = async (req, res, next) => {
    try {
        let response = await axios.post('https://api.novaposhta.ua/v2.0/json/AddressGeneral/getWarehouses', {
            "apiKey": "921c7d9aa9f26b8cc870884107dfaa5c",
            "modelName": "AddressGeneral",
            "calledMethod": "getWarehouses",
            "methodProperties": {
                "Language": "ru",
                "CityRef": req.query.ref
            }
        });

        res.send({
            postOfficesList: response.data.data
        });
    } catch(e) {
        next(e);
    }
};