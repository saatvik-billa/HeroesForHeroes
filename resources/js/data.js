import axios from 'axios'

export const list = [
    {
        address: '7000 Villa Maria Ct, Austin, TX 78759', 
        title: "Alex's House",
        content: 'Hello',
        squareLink: 'https://checkout.square.site/pay/c7f0c2493fe24b708b49b9c8d0cc3380'
    },
    {
        address: '7217 Fabion Drive, Austin, TX 78759', 
        title: 'Home',
        content: 'Hi',
        squareLink: 'https://facebook.com'
    },
    {
        address: '12400 Mellow Meadow Dr, Austin, TX 78750', 
        title: "Westwood High School",
        content: 'School',
        squareLink: 'https://twitter.com'
    }
]

export async function getCoordinates(obj) {
    const address = obj.address;
    const key = 'AIzaSyDLC3mud_dvTIR6fpIc-PAJ85XzKI1HT9g'
    const results = await axios(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`)
    obj.position = results.data.results[0].geometry.location
}
