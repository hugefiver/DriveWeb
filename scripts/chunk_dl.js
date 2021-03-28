export async function download(url) {
    return await (await fetch(url, { referrer: '' })).blob()
}
