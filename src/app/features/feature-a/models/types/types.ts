type LegalStatus = 'single' | 'married' | 'divorced' | 'widowed';

type User = {
    id: number;
    username: string;
}

// Inheritance
type UserDetails = User & {
    birthDate: Date;
    legalStatus: LegalStatus;
    address: string;
}