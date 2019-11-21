export default class ApiService {
    _apiBase = 'https://restcountries.eu/rest/v2';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(res.status)
        }
        return await res.json();
    }

    getAllCountry = async () => {
        const countries = await this.getResource('/all/');
        return this._transformAllCountry(countries);
    }
    
    getOneCountry = async (name) => {
        const country = await this.getResource(`/name/${name}/`);
        return this._transformCountry(country);
    }


    _transformCountry(country) {
        return {
            name: country[0].name,
            capital: country[0].capital,
            population: country[0].population,
            area: country[0].area,
            flag: country[0].flag,
            region: country[0].region,
            regionalBlocs: country[0].regionalBlocs,
            currencies: country[0].currencies,
            borders: country[0].borders,
            timezones: country[0].timezones
        }
    }

    _transformAllCountry(countries) {
        const listItems = countries.map((country) => ({name: country.name, capital: country.capital}))
        return {
            listItems
        }
    }

};