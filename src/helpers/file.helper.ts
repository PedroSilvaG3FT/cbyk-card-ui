export const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })

export async function dataUrlToFile(
    dataUrl: string,
    fileName: string
): Promise<File> {
    const res: Response = await fetch(dataUrl)
    const blob: Blob = await res.blob()
    return new File([blob], fileName, { type: 'image/png' })
}
