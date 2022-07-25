// Drivers Data
const mockData = [
  {
    firstName: "Lewis",
    lastName: "Hamilton",
    number: 44,
    team: "Mercedes",
    points: 109,
    image: "https://i.ibb.co/Fs2XJFn/hamilton.png",
    country: "GB",
    hex: "#6CD3BF",
  },
  {
    firstName: "George",
    lastName: "Russel",
    number: 63,
    team: "Mercedes",
    points: 128,
    image: "https://i.ibb.co/f4zt6Jq/russel.png",
    country: "GB",
    hex: "#6CD3BF",
  },
  {
    firstName: "Max",
    lastName: "Verstappen",
    number: 1,
    team: "Red Bull Racing",
    points: 208,
    image: "https://i.ibb.co/BcBmc14/verstappen.png",
    country: "NL",
    hex: "#3671C6",
  },
  {
    firstName: "Sergio",
    lastName: "Perez",
    number: 11,
    team: "Red Bull Racing",
    points: 151,
    image: "https://i.ibb.co/pRTZDMg/perez.png",
    country: "MX",
    hex: "#3671C6",
  },
  {
    firstName: "Lando",
    lastName: "Norris",
    number: 4,
    team: "McLaren",
    points: 64,
    image: "https://i.ibb.co/pRK4GW5/norris.png",
    country: "GB",
    hex: "#3671C6",
  },
  {
    firstName: "Daniel",
    lastName: "Ricciardo",
    number: 3,
    team: "McLaren",
    points: 17,
    image: "https://i.ibb.co/Jtbwrd0/ricardo.png",
    country: "AU",
    hex: "#3671C6",
  },
  {
    firstName: "Fernando",
    lastName: "Alonso",
    number: 14,
    team: "Alpine",
    points: 29,
    image: "https://i.ibb.co/jMLB0zJ/alonso.png",
    country: "ES",
    hex: "#2392D1",
  },
  {
    firstName: "Esteban",
    lastName: "Ocon",
    number: 31,
    team: "Alpine",
    points: 52,
    image: "https://i.ibb.co/QdDMyZv/ocon.png",
    country: "FR",
    hex: "#2392D1",
  },
  {
    firstName: "Lance",
    lastName: "Stroll",
    number: 18,
    team: "Aston Martin",
    points: 3,
    image: "https://i.ibb.co/WgpkS4f/stroll.png",
    country: "CA",
    hex: "#358C75",
  },
  {
    firstName: "Sebastian",
    lastName: "Vettel",
    number: 5,
    team: "Aston Martin",
    points: 15,
    image: "https://i.ibb.co/xY4WYBc/vettel.png",
    country: "DE",
    hex: "#358C75",
  },
  {
    firstName: "Charles",
    lastName: "Leclerc",
    number: 16,
    team: "Ferrari",
    points: 170,
    image: "https://i.ibb.co/ZWm9cdX/leclerc.png",
    country: "MC",
    hex: "#F91437",
  },
  {
    firstName: "Carlos",
    lastName: "Sainz",
    number: 55,
    team: "Ferrari",
    points: 133,
    image: "https://i.ibb.co/JRVmVw4/sainz.png",
    country: "ES",
    hex: "#F91437",
  },
  {
    firstName: "Pierre",
    lastName: "Gasly",
    number: 10,
    team: "AlphaTauri",
    points: 16,
    image: "https://i.ibb.co/R6nYsRj/gasly.png",
    country: "FR",
    hex: "#5E8FAA",
  },
  {
    firstName: "Yuki",
    lastName: "Tsunoda",
    number: 22,
    team: "AlphaTauri",
    points: 11,
    image: "https://i.ibb.co/x6VcZDs/tsunoda.png",
    country: "JP",
    hex: "#5E8FAA",
  },
  {
    firstName: "Valtteri",
    lastName: "Bottas",
    number: 77,
    team: "Alfa Romeo",
    points: 46,
    image: "https://i.ibb.co/Qf0fBmX/bottas.png",
    country: "FI",
    hex: "#C92C4A",
  },
  {
    firstName: "Guanyu",
    lastName: "Zhou",
    number: 24,
    team: "Alfa Romeo",
    points: 5,
    image: "https://i.ibb.co/9hQGWzV/zsou.png",
    country: "CN",
    hex: "#C92C4A",
  },
  {
    firstName: "Mick",
    lastName: "Schumacher",
    number: 47,
    team: "Haas F1 Team",
    points: 12,
    image: "https://i.ibb.co/yRntVLX/schumacher.png",
    country: "DE",
    hex: "#B7BBBD",
  },
  {
    firstName: "Kevin",
    lastName: "Magnussen",
    number: 20,
    team: "Haas F1 Team",
    points: 22,
    image: "https://i.ibb.co/27YnfXb/magnussen.png",
    country: "DK",
    hex: "#B7BBBD",
  },
  {
    firstName: "Nicholas",
    lastName: "Latifi",
    number: 6,
    team: "Williams",
    points: 0,
    image: "https://i.ibb.co/27mk9VC/latifi.png",
    country: "CA",
    hex: "#37BFDC",
  },
  {
    firstName: "Alexander",
    lastName: "Albon",
    number: 23,
    team: "Williams",
    points: 3,
    image: "https://i.ibb.co/M6RWgFd/albon.png",
    country: "PH",
    hex: "#37BFDC",
  },
];
// Sorted data by points
const sortedData = mockData.sort((a, b) => {
  return b.points - a.points;
});

const root = document.querySelector("#root");

let place = 1;

// Rendering the data
const cardData = sortedData.map(
  ({ firstName, lastName, points, team, number, image, country }) => {
    const container = document.createElement("div");
    container.innerHTML = `
    <div class="container">
        <div class="card">
          <div class="card_top">
          <p class="driver_place">${place++}</p>
          <div class="points_container">
            <div>
              <p class="driver_points">${points}</p>
              <p class="points">PTS</p>
            </div>
            <button onclick="" class="points_btn">Add Point</button>
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
