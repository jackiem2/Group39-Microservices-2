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

  // GET rating summary
  function getRatingSummary() {
  const summaryUrl = baseSummaryUrl + "?itemId=ITEM_123";

  fetch(summaryUrl)
    .then((response) => {
      console.log("\nGET /ratings/summary - HTTP status:", response.status);
      return response.json();
    })
    .then((data) => {
      console.log("\nSummary Response:");
      console.log(JSON.stringify(data, null, 2));

      // After summary renders, get list
      getRatingList();
    })
    .catch((error) => {
      console.error("Error retrieving summary:", error);
    });
}

// GET list of ratings
function getRatingList() {
  const listUrl =
    baseListUrl + "?itemId=ITEM_123&page=1&pageSize=10";

  fetch(listUrl)
    .then((response) => {
      console.log("\nGET /ratings/list - HTTP status:", response.status);
      return response.json();
    })
    .then((data) => {
      console.log("\nList Response:");
      console.log(JSON.stringify(data, null, 2));

      console.log("\nRatings Microservice Test Completed.");
    })
    .catch((error) => {
      console.error("Error retrieving rating list:", error);
    });
}