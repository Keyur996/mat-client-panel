import { OtherDeatils } from './other-deatils.model';
import { BasicDetails } from './basic-deatils.model';

export class Client {
  client: {};
  constructor(basic: BasicDetails, other: OtherDeatils) {
    this.client = { ...basic, ...other };
  }
}
