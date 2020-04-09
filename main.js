const allCharacters = [];
const positionCharacters = document.getElementById("display-characters");

const newGame = () => {
  const characterType = document.getElementById("characterType").value;
  const characterName = document.getElementById("characterName").value;

  switch (characterType) {
    case "Dwarf":
      var myDwarf = new Dwarf(characterName);
      allCharacters.push(myDwarf);
      // display(myDwarf);
      break;
    case "Elf":
      var myElf = new Elf(characterName);
      myElf.takeDamage(20);
      allCharacters.push(myElf);
      // display(myElf);
      break;
    case "Human":
      var myHuman = new Human(characterName);
      allCharacters.push(myHuman);
      //  display(myHuman);
      break;
    case "Orc":
      var myOrc = new Orc(characterName);
      allCharacters.push(myOrc);
      //   display(myOrc);
      break;
  }
  displayCharacter(allCharacters);

  if (allCharacters.length == 2) {
    const battlePlace = document.getElementById("battle-place");
    battlePlace.innerHTML += `
    <div class="col-md-6">
    <button type="button" id="a-attack-b" class="btn btn-danger"> ${allCharacters[0].constructor.name} attacks ${allCharacters[1].constructor.name}</button>
    </div>
    <div class="col-md-6">
    <button type="button" id="b-attack-a" class="btn btn-success"> ${allCharacters[1].constructor.name} attacks ${allCharacters[0].constructor.name}</button>
    </div>`;
    document.getElementById("a-attack-b").onclick = aAttackB;
    document.getElementById("b-attack-a").onclick = bAttackA;
  }
};

const aAttackB = () => {
  if (allCharacters[0].attackCapacity > allCharacters[0].attackCost) {
    allCharacters[0].dealDamage(allCharacters[1]);
    document.getElementById("battle-message").innerHTML = `
    <div>
    <p class="font-weight-bold"> ${allCharacters[0].name} says :</p> 
    <p class="font-italic"> ${allCharacters[0].message}</p>
    <p class="font-weight-bold"> ${allCharacters[1].name} says : </p> 
    <p class="font-italic"> ${allCharacters[1].message} </p>
    </div>`;
    displayCharacter(allCharacters);
  } else {
    document.getElementById("battle-message").innerHTML = `<div>
    ${allCharacters[0].name} has not enough attack Capacity </div>`;
  }
};

const bAttackA = () => {
  if (allCharacters[1].attackCapacity > allCharacters[1].attackCost) {
    allCharacters[1].dealDamage(allCharacters[0]);
    document.getElementById("battle-message").innerHTML = `
    <div>
    <p class="font-weight-bold"> ${allCharacters[1].name} says :</p> 
    <p class="font-italic"> ${allCharacters[1].message}</p>
    <p class="font-weight-bold"> ${allCharacters[0].name} says : </p> 
    <p class="font-italic"> ${allCharacters[0].message} </p>
    </div>`;
    displayCharacter(allCharacters);
  } else {
    document.getElementById("battle-message").innerHTML = `  <div>
    ${allCharacters[1].name} has not enough attack Capacity</div>`;
  }
};

const displayForm = () => {
  var x = document.getElementById("myForm");
  x.style.display = "block";
};

function displayCharacter(allCharacters) {
  positionCharacters.innerHTML = "";
  allCharacters.forEach((character) => {
    positionCharacters.innerHTML += `<div class="m-3 card col-md-5" style="width: 18rem;">
  <img height="500px" class="card-img-top" src="./Image/${character.avatar}" alt="Card image cap">
  <div class="card-body">
    <h5 class="text-center card-title">${character.name}</h5>
    <p class="text-center card-text font-weight-bold text-info">${character.constructor.name}</p>
    <p class="card-text"><span class="font-weight-bold">Reputation</span> : ${character.reputation}</p>
    <pclass="card-text"> <span class="font-weight-bold">Skill</span> :  ${character.skill}</p>
    <p class="card-text"><span class="font-weight-bold">Healthy Point</span> :  ${character.healthyPoint}</p>
    <p class="card-text"><span class="font-weight-bold">Attack Capacity</span> :  ${character.attackCapacity}</p>
    <p class="card-text"><span class="font-weight-bold">Attack Cost</span> :  ${character.attackCost}</p>
    <p class="card-text"><span class="font-weight-bold">State</span> :  ${character.state}</p>
    </div>
</div>`;
  });
  console.log(allCharacters);
}

document.getElementById("create").onclick = newGame;
document.getElementById("newGame").onclick = displayForm;
