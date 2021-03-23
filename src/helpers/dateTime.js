export function convertDate(date) {
    const values = date.split('-')
    return `${values[1]}/${values[2]}/${values[0]}`
}

export function convertTime(time) {
    const splitNum = time.split(':')
    const num = parseInt(splitNum[0])
    const dayNight = num > 12 ? 'PM' : 'AM'
    const adjustedTime = num > 12 ? num - 12 : num
    return `${adjustedTime}:${splitNum[1]} ${dayNight}`
}