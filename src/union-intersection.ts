type NobDev = {
    name : string
    English : string
    experience: number
}

// type JuniorDev = {
//     name: string
//     experience: number
//     expertise: string
// }

type JuniorDev = NobDev & {
    expertise: string
}

const newDev : NobDev | JuniorDev = {
    name : "Monirul Islam",
    experience: 1,
    expertise: "React",
    English : "Basic"
}