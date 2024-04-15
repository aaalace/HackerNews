export function getDateFormatted(date: string): string {
    if (date.indexOf("T") == -1) return ""
    const dt = date.split('T')[0]
    const tm = date.split('T')[1].slice(0, -1)
    return [dt, tm].join(' | ')
}