export class User {
id: number;
username: string;
    constructor(id: number, username: string) {
        this.id = id;
        this.username = username;
    }
}

export class UserDetails extends User {
    birthDate: Date;
    address?: string;
    constructor(id: number, username: string, birthdate: Date, address?: string) {
        super(id, username);
        this.birthDate = birthdate;
        this.address = address;
    }
}