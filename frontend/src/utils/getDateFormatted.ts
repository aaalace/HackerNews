

export function getDateFormatted(date: string): string {
    if (date.indexOf("T") == -1) return ""
    const dt = date.split('T')[0]
    const tm = date.split('T')[1].slice(0, -1).split(':').slice(0, 2).join(":")
    return [dt, tm].join(' | ')
}