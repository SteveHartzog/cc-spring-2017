import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@autoinject
export class DataService {
    public userCache = [];

    constructor(private http: HttpClient) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('https://api.github.com/');
        });
    }
    public async getAureliaTeam() {
        if (this.userCache.length === 0) {
            return await this.http.fetch('orgs/aurelia/members')
                .then(response => response.json())
                .then(users => this.userCache = users as any);
        } else {
            return this.userCache;
        }
    }
}