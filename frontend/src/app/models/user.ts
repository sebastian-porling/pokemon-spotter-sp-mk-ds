export interface User {
    uid: string;
    displayName: string;
    photoURL: string;
    score: number;
    found_pokemon: [
        {
            id: number;
            name: string;
            sprite: string;
            gender: string;
            latitude: number;
            longitude: number;
            shiny: boolean;
        }
    ];
}
