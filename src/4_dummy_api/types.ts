enum Genders {
    Female = 'female',
    Male = 'male'
}

enum Roles {
    Admin = 'admin',
    User = 'user',
    Moderator = 'moderator'
}

interface ICoordinate {
    lat: number,
    lng: number,
}

interface IAddress {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    country: string,
    coordinates: ICoordinate
}

interface ICrypto {
    coin: string,
    wallet: string,
    network: string,
}

interface ICompany {
    department: string,
    name: string,
    title: string,
    address: IAddress
}

interface IBank {
    cardExpire: string,
    cardNumber: string,
    iban: string,
    cardType: string,
    currency: string,
}

interface IHair {
    color: string,
    type: string
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Genders,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    ip: string,
    macAddress: string,
    university: string,
    ein: string,
    ssn: string,
    userAgent: string,
    role: Roles,
    address: IAddress
    hair: IHair,
    bank: IBank,
    company: ICompany,
    crypto: ICrypto
}

export interface IResponseUsers {
    users: IUser[]
}