
export const getApiResource = async (url) => {
    const resource = await fetch(url);
    if (!resource.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${resource.status}`)
    }
    return await resource.json();
}