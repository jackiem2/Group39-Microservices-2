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

- SEND GET TO `"Ratings Service /ratings/summary"` WITH QUERY:
 itemId = "ITEM_123"

- SEND GET TO `"Ratings Service /ratings/list"` WITH QUERY:
 itemId = "ITEM_123"
 page = 1
 pageSize = 10

## 2. How to Programmatically RECEIVE Data

## 3. UML Sequence Diagram – Search Microservice
