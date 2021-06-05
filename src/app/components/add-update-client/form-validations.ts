export const formValidations = {
  firstName: [{ type: 'required', message: 'firstName is Required' }],
  lastName: [{ type: 'required', message: 'lastName is reqired' }],
  email: [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Email is not Valid' },
  ],
  birthDay: [{ type: 'required', message: 'Birthdate is required' }],
  city: [{ type: 'required', message: 'City is required' }],
  hobbies: [{ type: 'mustMatch', message: 'At least a hobby needed' }],
};
