// https://api.myjson.com/bins/lbnn3

var request = new XMLHttpRequest();

request.open('GET', '//api.jsonbin.io/b/5ad0fec4003aec63328d2634', true );

request.onload = function() {

    var data = JSON.parse(this.response);
    console.log(data);



    data.characters.forEach(character => {
        console.log(character.name);
    

        const characterContainer = document.querySelector('.character-container');

        const individualCharacter = document.createElement('div');
        individualCharacter.setAttribute('class', 'character');

        const characterName = document.createElement('h3');
        characterName.setAttribute('class', 'character-name');
        characterName.innerHTML = `${character.name}`;

        const characterBio = document.createElement('p');
        characterBio.setAttribute('class', 'character-bio');
        characterBio.innerHTML = `${character.description}`;

        const characterImage = document.createElement('img');
        const characterImageSrc = `${character.image}`
        characterImage.setAttribute('class', 'character-image');
        characterImage.setAttribute('src', characterImageSrc);

        characterContainer.appendChild(individualCharacter);
        individualCharacter.appendChild(characterImage);
        individualCharacter.appendChild(characterName);        
        individualCharacter.appendChild(characterBio);
    })

}

request.send();