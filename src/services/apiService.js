class ApiService {
    _apiBase = 'https://restcountries.eu/rest/v2';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(res.status)
        }
        return await res.json();
    }

    getAllPlanet() {
        return this.getResource('/all/');
    }
    
    getOnePlanet(name) {
        return this.getResource(`/name/${name}/`);
    }

    getSearchByRegion(region) {
        return this.getResource(`/region/${region}/`);
    }

    getSearchByRegionBloc(regionalbloc) {
        return this.getResource(`/regionalbloc/${regionalbloc}/`);
    }
};

const api = new ApiService();
api.getAllPlanet()
.then((body) => console.log(body))