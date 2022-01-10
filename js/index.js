const card=  document.getElementsByClassName("card");
const selectedCard = document.getElementById('selected__card');

const showByIndex = (index)=>{
    switch (index) {
        case 0:
          return "Dr Octopus";
        case 1:
          return "Mysterio";
        case 2:
          return "Electro";
        case 3:
          return "Green Goblin";
    }
}
[].forEach.call(card, (card, index) => {
    card.addEventListener("click", () => {
        selectedCard.innerText = `Selected Villain: ${showByIndex(index)}`;
    });
  });
