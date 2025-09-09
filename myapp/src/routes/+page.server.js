// Inladen directus data
export async function load ({url, params}) {

    // Link naar url data 
    const mymemberResponse = await fetch('https://fdnd.directus.app/items/person?fields=name,bio&filter[id][_eq]=148')
    const mymemberData = await mymemberResponse.json();

    // Data check
    console.log(mymemberData)

   // Leden teruggeven
    return {mymembers: mymemberData.data}
}