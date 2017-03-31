import { autoinject } from 'aurelia-framework';
import { DataService } from '../resources/services/data-service';

@autoinject
export class Users {
  public heading = 'Github Users';
  public users: any = [];

  constructor(private ds: DataService) {
    this.getTeam();
  }

  async getTeam() {
    this.users = await this.ds.getAureliaTeam()
  }
}