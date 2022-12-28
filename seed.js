const axios = require('axios');
const {addOrUpdateCharacter} = require('./dynamo')

const seedData = async () => {
    const url = 'https://hp-api.onrender.com/api/characters'
    try {
        const {data: characters} = await axios.get(url, { 
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        });
        // console.log(characters);
        const characterPromises = characters.map((character, i) => 
            addOrUpdateCharacter({...character, id: i + ''})
        )
        await Promise.all(characterPromises)
    } catch (err) {
        console.log(err);
        console.log('AAHHHHHHHHHH');
    }
}

seedData()