// main.js

// Possible names and occupations for freelancers
const names = ["Alice", "Bob", "Carol", "Ethan", "Gabriel", 
"Kenneth", "Charles", "Timothy", "Steven"];
const occupations = ["Writer", "Teacher", "Programmer"];

// Initial freelancers array with two entries
const freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];

// Function to render freelancers onto the age
function renderFreelancers() {
  // Get the container element for displaying freelancers
  const freelancersList = document.getElementById("freelancers-list");
  // Clear the existing content
  freelancersList.innerHTML = "";

  // Loop through each freelancer and create HTML elements to display their information
  freelancers.forEach(freelancer => {
    const freelancerElement = document.createElement("div");
    freelancerElement.innerHTML = `
      <p>Name: ${freelancer.name}</p>
      <p>Occupation: ${freelancer.occupation}</p>
      <p>Starting Price: $${freelancer.startingPrice}</p>
      <hr>
    `;
    // Append the freelancer's information to the container
    freelancersList.appendChild(freelancerElement);
  });
}

// Function to generate a random freelancer and add it to the freelancers array
function generateRandomFreelancer() {
  // Randomly select a name, occupation, and starting price
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomStartingPrice = Math.floor(Math.random() * 100) + 1;

  // Create a new freelancer object
  const newFreelancer = { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
  // Push the new freelancer into the freelancers array
  freelancers.push(newFreelancer);
  // Call the render function to update the displayed data
  renderFreelancers();
  // Call the function to calculate the average starting price
  calculateAverageStartingPrice();
}

// Function to calculate the average starting price of freelancers
function calculateAverageStartingPrice() {
  // Calculate the total starting price using the reduce method
  const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
  // Calculate the average starting price
  const averageStartingPrice = totalStartingPrice / freelancers.length;
  // Get the message element and update its content
  const messageElement = document.getElementById("average-price-message");
  messageElement.textContent = `Average Starting Price: $${averageStartingPrice.toFixed(2)}`;
}

// Set interval to add a new freelancer every 5 seconds
setInterval(() => {
  generateRandomFreelancer();
}, 5000);

// Initial rendering of freelancers and calculation of average starting price
renderFreelancers();
calculateAverageStartingPrice();
