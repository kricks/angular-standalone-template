export interface User {
    id: number,
    username: string,
    userDetails?: UserDetails;
}

export interface UserDetails extends User {
    birthdate: number,
    address?: string,
}