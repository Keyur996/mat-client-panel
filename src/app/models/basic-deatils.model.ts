export class BasicDetails {
  firstName?: string;
  lastName?: string;
  email?: string;
  birthDay?: Date;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    birthDay: Date
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthDay = birthDay;
  }
}
