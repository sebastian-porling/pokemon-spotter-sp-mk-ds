// export interface User {
//     id: number,
//     username: string,
//     email: string,
//     profile_pic: string
//     fullname: string
//     password_hashes: string
//     score: number
//     found_pokemon: [
//         {
//             id: number,
//             name: string,
//             sprite: string,
//             latitude: number,
//             longitude: number
//         }
//     ]

// }
export interface User {
        id: string,
        displayName: string,
        score: number,
        photoURL: string,
        found_pokemon: []
}