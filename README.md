# Microservice #1 : Search Microserivce
# Overview
This microservice allows users to submit, update, and view ratings and comments for items.

**User Story**

> As a signed-in user
> I want to submit a rating on an item
> So that I I can share my opinion and view other users' ratings

## 1. How to Programmatically REQUEST Data

- **Method:** REST API `GET`, `POST`  
- **Data:** `JSON`
- **Base URL:** `HTTP`

```text
http://localhost:5002

```
### Example for REQUESTING 

- 1. SEND POST TO `"Ratings Service /ratings"` WITH BODY:
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

- 2. SEND GET TO `"Ratings Service /ratings/summary"` WITH QUERY:
 itemId = "ITEM_123"

 ```json
 {
  "itemId": "ITEM_123",
  "averageRating": 4.6,
  "totalReviews": 18
}
```

- 3. SEND GET TO `"Ratings Service /ratings/list"` WITH QUERY:
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
When another program sends a valid request to the Ratings Microservice, the service responds with JSON.
The JSON allows the calling program to display:

- latest rating

- average rating

- total reviews

- all user comments

### Example for RECEIVING
- REQUEST WAS SENT TO "Ratings Microservice"

- WAIT FOR RESPONSE

```text
IF response received:
    READ DATA TYPE = JSON
        DISPLAY:
          averageRating
          totalReviews
          list of ratings/comments
ELSE:
    SHOW "Rating could not be loaded"
```

### Example JSON object 
```json
{
  "itemId": "ITEM_123",
  "averageRating": 4.6,
  "totalReviews": 18,
  "ratings": [
    { "userId": "USER001", "rating": 5, "comment": "Great!" }
  ]
}
```
## Installation & Running the Microservice
-  Install Express

Open your terminal inside the project folder and run:
```text
npm install express
```

-  Start the Microservice
Once Express is installed, start the server with:
```text
npm start
```
- If everything is working, you will see:
```text
Ratings Microservice running on http://localhost:5002
```

## 3. UML Sequence Diagram – Search Microservice
