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