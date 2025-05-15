export async function fetchCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all");

    return res.json()
}

export async function fetchCountryDetail(countryCode) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);

    const data = await res.json()

    return data[0]
}