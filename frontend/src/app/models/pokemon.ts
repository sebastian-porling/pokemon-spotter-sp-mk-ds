export interface Pokemon{
    id: number;
    name: string;
    sprite: string;
    spotted: number;
    genders: {
        male: boolean,
        female: boolean,
        genderless: boolean
    };
}