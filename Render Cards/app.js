// Drivers Data
import { mockData } from "./mockData.js";

// Sorted data by points
const sortedData = mockData.sort((a, b) => {
  return b.points - a.points;
});

const root = document.querySelector("#root");

// Rendering the data
const cardData = sortedData.map(
  (
    { firstName, lastName, points, team, number, image, country, hex },
    index
  ) => {
    const container = document.createElement("div");
    container.innerHTML = `
    <div class="container">
        <div class="card">
          <div class="card_top">
          <p class="driver_place">${index + 1}</p>
          <div class="points_container">
            <div>
              <p class="driver_points">${points}</p>
              <p class="points">PTS</p>
            </div>
            <button class="points_btn">Add Point</button>
          </div>
        </div>
        <div class="card-main">
          <div class="name_country">
            <div class="driver_name">
              <span class="name_span"></span>
              <div class="driver_full-name">
                <h3 class="driver_first-name">${firstName}</h3>
                <h2 class="driver_last-name">${lastName}</h2>
              </div>
            </div>
            <div class="driver_flag">
              <p class="flag">${country}</p>
            </div>
          </div>
          <div class="driver_team">
            <h3 class="team">${team}</h3>
          </div>
          <div class="driver_picture">
            <div class="bg-pattern">
              <div class="driver">
                <p class="driver_number">${number}</p>
                <img
                  src="${image}"
                  alt="pilot"
                  class="pilot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    root.appendChild(container);
  }
);

// Event Listener on the Buttons
const addBtn = document.querySelectorAll(".points_btn");

addBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // Increment points
    const incrementPoints = event.target.parentElement.querySelector(
      ".points_container p:first-child"
    );
    incrementPoints.textContent = +incrementPoints.textContent + 1;
  });
});
