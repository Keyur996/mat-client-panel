export class Client {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  birthDay?: Date;
  city?: string;
  gender?: string;
  hobbies?: string[];

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    birthDay: Date,
    city: string,
    gender: string,
    hobbies: string[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthDay = birthDay;
    this.city = city;
    this.gender = gender;
    this.hobbies = hobbies;
  }
}
