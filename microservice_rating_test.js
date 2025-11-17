// Base URLs 
const basePostUrl = "http://localhost:5002/ratings";
const baseSummaryUrl = "http://localhost:5002/ratings/summary";
const baseListUrl = "http://localhost:5002/ratings/list";

// Using sample data from assignment 6
const ratingData = {
  itemId: "ITEM_123",
  rating: 5,
  comment: "Amazing quality!"
};

// Make POST request
fetch(basePostUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(ratingData)
})
  .then((response) => {
    console.log("POST /ratings - HTTP status:", response.status);
    return response.json();
  })
  .then((data) => {
    console.log("\nPOST Response:");
    console.log(JSON.stringify(data, null, 2));
    
    getRatingSummary();
  })
  .catch((error) => {
    console.error("\nError sending rating:", error);
  });
