document.addEventListener("DOMContentLoaded", function () {
  function plusCards() {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cards");
    cardDiv.innerHTML = `
          <div class="card">
            <div class="image">
              <img src="img/Potion_of_Swiftness.png" alt="">
            </div>
            <h4>Speed Potion</h4>
            <div class="text">
              <p><b>$25</b></p>
              <p>VROOM VROOM!!!</p>
              <button class="buy">GET</button>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="img/Potion_of_Harming_JE3.png" alt="">
            </div>
            <h4>Instant Damage Potion</h4>
            <div class="text">
              <p><b>$317</b></p>
              <p>AAAAAAAAAAAAAAAAAAAAA.</p>
              <button class="buy">GET</button>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="img/Potion_of_Night_Vision_JE3.png" alt="">
            </div>
            <h4>Night Vision Potion</h4>
            <div class="text">
              <p><b>$55</b></p>
              <p>This one isn't for the sleepys.</p>
              <button class="buy">GET</button>
            </div>
          </div>

        `;

    const moreButton = document.getElementById("more");

    if (moreButton) {
      moreButton.appendChild(cardDiv); // Adiciona os cards corretamente
    } else {
      console.error("Elemento #more não encontrado!");
    }
  }

  document.querySelector("#more button").addEventListener("click", plusCards);
});
