
export class User {

  constructor(
      public id: string, 
      public name: string,
      public email: string,
      public password: string,
      public img: string,
      public role: string, 
      public google: boolean, 
  ) {}
}