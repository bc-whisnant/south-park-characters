// https://api.myjson.com/bins/lbnn3

var request = new XMLHttpRequest();

request.open('GET', '//api.jsonbin.io/b/5ad0fec4003aec63328d2634/1', true );

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
    })
}

request.send();

const buttonContainer = document.querySelector('.button-container');

const normalButton = document.createElement('button');
normalButton.setAttribute('class', 'normal');
normalButton.innerHTML = 'Normal';

const heroButton = document.createElement('button');
heroButton.setAttribute('class', 'hero');
heroButton.innerHTML = 'Hero';

buttonContainer.appendChild(normalButton);
buttonContainer.appendChild(heroButton);

document.querySelector('.normal').addEventListener('click', function() {
    console.log('clicked');
})

document.querySelector('.normal').addEventListener('click', function() {
    var nodes = document.querySelectorAll('.character');
    var first = nodes[0];
    var firstImage = document.getElementsByTagName('img')[0];
    firstImage.setAttribute('src', 'images/cartman.png');
    var firstName = document.getElementsByTagName('h3')[0];
    firstName.innerText = 'Eric Cartman';

    var nodes = document.querySelectorAll('.character');
    var second = nodes[1];
    var secondImage = document.getElementsByTagName('img')[1];
    secondImage.setAttribute('src', 'images/kenny.png');
    var second = document.getElementsByTagName('h3')[1];
    second.innerText = 'Kenny McCormick';

    var nodes = document.querySelectorAll('.character');
    var third = nodes[2];
    var thirdImage = document.getElementsByTagName('img')[2];
    thirdImage.setAttribute('src', 'images/kyle.png');
    var third = document.getElementsByTagName('h3')[2];
    third.innerText = 'Kyle Broflovski';

    var nodes = document.querySelectorAll('.character');
    var fourth = nodes[3];
    var fourthImage = document.getElementsByTagName('img')[3];
    fourthImage.setAttribute('src', 'images/stan.png');
    var fourth = document.getElementsByTagName('h3')[3];
    fourth.innerText = 'Stan Marsh';
    
});

document.querySelector('.hero').addEventListener('click', function() {
    
    var nodes = document.querySelectorAll('.character');
    var nodeNames = document.querySelectorAll('.name');

    var first = nodes[0];
    var firstImage = document.getElementsByTagName('img')[0];
    firstImage.setAttribute('src', 'images/cartman2.png');
    var firstName = document.getElementsByTagName('h3')[0];
    firstName.innerText = 'The Coon';
    // console.log(first);
    var nodes = document.querySelectorAll('.character');
    var second = nodes[1];
    var secondImage = document.getElementsByTagName('img')[1];
    secondImage.setAttribute('src', 'images/kenny2.png');
    var second = document.getElementsByTagName('h3')[1];
    second.innerText = 'Mysterion';

    var nodes = document.querySelectorAll('.character');
    var third = nodes[2];
    var thirdImage = document.getElementsByTagName('img')[2];
    thirdImage.setAttribute('src', 'images/kyle2.png');
    var third = document.getElementsByTagName('h3')[2];
    third.innerText = 'The Human Kite';

    var nodes = document.querySelectorAll('.character');
    var fourth = nodes[3];
    var fourthImage = document.getElementsByTagName('img')[3];
    fourthImage.setAttribute('src', 'images/stan2.png');
    var fourth = document.getElementsByTagName('h3')[3];
    fourth.innerText = 'Toolshed';
    
});