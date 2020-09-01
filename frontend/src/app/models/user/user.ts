export interface User {
    id: number,
    username: string,
    email: string,
    profile_pic: string
    fullname: string
    password_hashes: string
    score: number
    found_pokemon: [
        {
            id: number,
            name: string,
            sprite: string,
            latitude: number,
            longitude: number
        }
    ]

}