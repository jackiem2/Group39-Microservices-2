# Microservice #1 : Search Microserivce
# Overview
This microservice allows users to submit, update, and view ratings and comments for items.

**User Story**

> As a signed-in user
> I want to submit a rating on an item
> So that I I can share my opinion and view other users' ratings

## 1. How to Programmatically REQUEST Data

- **Method:** `GET`, `POST`  
- **Data:** `JSON`
- **Base URL:** `HTTP`

```text
http://localhost:5002

```
### Example for REQUESTING 

- SEND POST TO `"Ratings Service /ratings"` WITH BODY:
 itemId = "ITEM_123"
 rating = 5
 comment = "Great quality!"

 ```json
 {
  "message": "Rating saved successfully",
  "itemId": "ITEM_123",
  "latestRating": 5,
  "comment": "Great quality!",
  "userId": "USER_001"
}
 ```

- SEND GET TO `"Ratings Service /ratings/summary"` WITH QUERY:
 itemId = "ITEM_123"

 ```json
 {
  "itemId": "ITEM_123",
  "averageRating": 4.6,
  "totalReviews": 18
}
```

- SEND GET TO `"Ratings Service /ratings/list"` WITH QUERY:
 itemId = "ITEM_123"
 page = 1
 pageSize = 10
 
```json
{
  "itemId": "ITEM_123",
  "page": 1,
  "pageSize": 10,
  "ratings": [
    { "userId": "USER001", "rating": 5, "comment": "Great!" },
    { "userId": "USER112", "rating": 4, "comment": "Pretty good" }
  ]
}
```
## 2. How to Programmatically RECEIVE Data

## 3. UML Sequence Diagram – Search Microservice
