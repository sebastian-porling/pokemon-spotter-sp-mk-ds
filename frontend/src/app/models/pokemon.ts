export interface Pokemon{
    id: number;
    name: string;
    sprite: string;
    spotted: number;
    gender: {
        male: boolean,
        female: boolean,
        genderless: boolean
    };
}