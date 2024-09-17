import { SeniorInterface, UserInterface, VisitInterface } from "./interfaces";

export const data: SeniorInterface[] = [
    {   
        id: '1',
        name: 'Mr Lim',
        gender: 'M',
        age: 78,
        languages: ['Hokkien', 'Mandarin'],
        lastVisitedDate: '10 Sep 2024',
        postalCode: '510773',
        address: '10 Hougang Avenue',
        lat: 1.37625,
        lon: 103.93609
    },
    {   
        id: '2',
        name: 'Ms Soh',
        gender: 'F',
        age: 85,
        languages: ['English', 'Cantonese'],
        lastVisitedDate: '13 Sep 2024',
        postalCode: '520123',
        address: 'Blk 15 Tampines Ave 3',
        lat: 1.37625,
        lon: 103.93609
    }
]


export const userData: UserInterface[] = [
    {
        id: '1',
        nric: "T123123A",
        name: 'Josephine',
        age: 24,
        gender: 'F',
        languages: ['English', 'Indonesian'],
        nric: '696i',
        address: 'Pasir Ris',
        totalVisits: 2,
        postalCode: '510773',
        address: "HelloAvenue",
        lat: 1.37625,
        lon: 103.93609,
        email: 'josephine.hemingway@gmail.com',
        mobile: '+65 8611 9550'
    }
]

export const visitsData: VisitInterface[] = [
    {   
        seniorId: '1',
        userId: '1',
        visitDate: '10 Sep 2024',
    },
    {   
        seniorId: '2',
        userId: '1',
        visitDate: '13 Sep 2024',
    },
]
