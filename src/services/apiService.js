export default class ApiService {
    _apiBase = 'https://restcountries.eu/rest/v2';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(res.status)
        }
        return await res.json();
    }

    async getAllCountry() {
        const countries = await this.getResource('/all/');
        return this._transformAllCountry(countries);
    }
    
    async getOneCountry(name) {
        const country = await this.getResource(`/name/${name}/`);
        return this._transformCountry(country);
    }

    async getSearchByRegion(region) {
        const countries = await this.getResource(`/region/${region}/`);
        return this._transformAllCountry(countries);
    }
//Africa, Americas, Asia, Europe, Oceania

    async getSearchByRegionBloc(regionalBlocs) {
        const countries = await this.getResource(`/regionalbloc/${regionalBlocs}/`);
        return this._transformAllCountry(countries);
    }
//EU (European Union)
// EFTA (European Free Trade Association)
// CARICOM (Caribbean Community)
// PA (Pacific Alliance)
// AU (African Union)
// USAN (Union of South American Nations)
// EEU (Eurasian Economic Union)
// AL (Arab League)
// ASEAN (Association of Southeast Asian Nations)
// CAIS (Central American Integration System)
// CEFTA (Central European Free Trade Agreement)
// NAFTA (North American Free Trade Agreement)
// SAARC (South Asian Association for Regional Cooperation)

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
        const listCountries = countries.map((country) => country.name)
        return {
            listCountries
        }
    }
};