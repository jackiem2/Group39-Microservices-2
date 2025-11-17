// express server setup
const express = require("express");
const app = express();
const PORT = 5002;

app.use(express.json());

// sample data from Assignment 6: Sprint 2 Plan 
const SAMPLE_RATINGS = [
    {
    itemId: "ITEM_123",
    userId: "USER001",
    rating: 5,
    comment: "Great!",
    createdAt: "2025-11-10T10:00:00Z"
  },
  {
    itemId: "ITEM_123",
    userId: "USER112",
    rating: 4,
    comment: "Pretty good",
    createdAt: "2025-11-11T09:30:00Z"
  }
];

app.get("/", (req, res) => {
  res.send("Ratings Microservice is running. Use /ratings, /ratings/summary, or /ratings/list.");
});

// POST route for submitting or updating a rating
app.post("/ratings", (req, res) => {
  // read data from the request body
  const { itemId, rating} = req.body;

  // check for required fields
  if (!itemId) {
    return res.status(400).json({ error: "Missing required field 'itemId'" });
  }

  if (rating == null) {
    return res.status(400).json({ error: "Missing required field 'rating'" });
  }

  const ratingNumber = Number(rating);
  if (ratingNumber < 1 || ratingNumber > 5) {
    return res.status(400).json({ error: "Rating must be between 1 and 5" });
  }
  // push new rating
  SAMPLE_RATINGS.push({
    itemId,
    rating: ratingNumber,
    comment: comment || "",
    createdAt: new Date().toISOString()
  });

  // response
  res.json({
    message: "New rating added successfully",
    itemId,
    rating: ratingNumber,
    comment: comment || ""
  });

});

// GET rating summary
app.get("/ratings/summary", (req, res) => {
  const { itemId } = req.query;

  if (!itemId) {
    return res.status(400).json({ error: "Missing required query 'itemId'" });
  }

  const itemRatings = SAMPLE_RATINGS.filter(r => r.itemId === itemId);

  if (itemRatings.length === 0) {
    return res.json({
      itemId,
      averageRating: 0,
      totalReviews: 0
    });
  }

  const totalReviews = itemRatings.length;
  const sum = itemRatings.reduce((acc, r) => acc + r.rating, 0);
  const avg = sum / totalReviews;

  res.json({
    itemId,
    averageRating: Number(avg.toFixed(2)),
    totalReviews
  });
});
