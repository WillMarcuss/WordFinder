function search(){
let wordsInput = document.getElementById("input").value
const searchType = document.getElementById("dropdown").value
let tempURL = ``
if(searchType == 'ml'){
    const input = wordsInput.replace(' ','+')
    tempURL = `https://api.datamuse.com/words?${searchType}=${input}`;
} else{
    const input = wordsInput
    tempURL = `https://api.datamuse.com/words?${searchType}=${input}`;
}

const url = tempURL

fetch(url)
    .then(response => response.json())
    .then(data => {
        const synonyms = data.map(item => item.word);
        console.log(synonyms)
        if(synonyms.length == 0){
            document.getElementById("output").value = `No words found in database!`
        } else{
            document.getElementById("output").value = synonyms.join(', ')
        }
        console.log(`${searchType} for ${input}: ${synonyms.join(', ')}`);
        let selected = document.getElementById("dropdown").options[document.getElementById("dropdown").selectedIndex].text
        document.getElementById("label").innerHTML = "Here are "+ selected + " for "+ wordsInput
    })
    .catch(error => console.error(error));

}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("search").addEventListener('click', search)
})