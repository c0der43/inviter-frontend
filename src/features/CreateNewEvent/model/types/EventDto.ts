export interface EventDto {
    name: string,
    desc: string,
    date: string,
    time: string,
    duration: string,
    locationName: string,
    locationLat: string,
    locationLng: string,
    tags: number[],
    invitedCurators: number[]
}
