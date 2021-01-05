export class Users {
  id:number;
  name:string;
  username:string;
  email:string;
  address:Address
  phone:string;
  website:string;
  company:string;
}
export class Address{
  street:string;
  suite:string;
  city:string;
  zipcode:string;
  geo:Geo
}
export class Geo{
  lat:string;
  lng:string;
}

export class Company{
  name:string;
  catchPhrase:string;
  bs:string;
}
