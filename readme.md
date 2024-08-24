## Documentation Link - https://documenter.getpostman.com/view/32023239/2sAXjF8F17

## Configuration

- **MONGO_URI:** The connection string for MongoDB database.
- **PORT:** The port on which the server will run. Default is 8000.
- **JWT_SECRET:** A secret key used to sign JWT tokens.

## Usage

- **User Authentication:** Users can log in to the application, and a JWT token will be issued upon successful authentication.

- **Survey Management:** Authenticated users can create surveys, take surveys, and view survey results.

## API Endpoints

### Authentication

- **`POST /api/auth/login:`** Authenticate a user and receive a JWT token.

```javascript
Request:
{
  "username": "Dhamodharan",
  "password": "password123"
}

Response:

{
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM5ODczMDU5OWNiYjdlZmM1YTNhNDEiLCJpYXQiOjE3MjQ0ODcyNDksImV4cCI6MTcyNDQ5MDg0OX0.6NwgWYrwthfAOJHWEtaeGRjPoJpAya8ih60r1RAMHRk"
}

```

### Survey

- **`POST /api/surveys/create:`** Create a new survey (protected route).

```javascript

Request:

{
  "title": "User Experience Survey",
  "questions": [
    {
      "text": "Are you satisfied with our service?",
      "answers": { "yes": 0, "no": 0 }
    },
    {
      "text": "Would you recommend us to others?",
      "answers": { "yes": 0, "no": 0 }
    }
  ]
}

Response:

{
    "title": "User Experience Survey",
    "questions": [
        {
            "text": "Are you satisfied with our service?",
            "answers": {
                "yes": 0,
                "no": 0
            },
            "_id": "66c9a06c40177d64a08fb6f7"
        },
        {
            "text": "Would you recommend us to others?",
            "answers": {
                "yes": 0,
                "no": 0
            },
            "_id": "66c9a06c40177d64a08fb6f8"
        }
    ],
    "createdBy": "66c98730599cbb7efc5a3a41",
    "_id": "66c9a06c40177d64a08fb6f6",
    "__v": 0
}
```

- **`POST /api/surveys/take:`** Submit answers to a survey (protected route).

```javascript
Request:

{
  "surveyId": "66c9a06c40177d64a08fb6f6",
  "answers": ["yes", "no"]
}

Response:

{
    "_id": "66c9a06c40177d64a08fb6f6",
    "title": "User Experience Survey",
    "questions": [
        {
            "answers": {
                "yes": 1,
                "no": 0
            },
            "text": "Are you satisfied with our service?",
            "_id": "66c9a06c40177d64a08fb6f7"
        },
        {
            "answers": {
                "yes": 0,
                "no": 1
            },
            "text": "Would you recommend us to others?",
            "_id": "66c9a06c40177d64a08fb6f8"
        }
    ],
    "createdBy": "66c98730599cbb7efc5a3a41",
    "__v": 0
}
```

- **`GET /api/surveys/results/:id:`** Get the results of a specific survey by ID (protected route).

```javascript
Response:
{
    "_id": "66c9a06c40177d64a08fb6f6",
    "title": "User Experience Survey",
    "questions": [
        {
            "answers": {
                "yes": 1,
                "no": 0
            },
            "text": "Are you satisfied with our service?",
            "_id": "66c9a06c40177d64a08fb6f7"
        },
        {
            "answers": {
                "yes": 0,
                "no": 1
            },
            "text": "Would you recommend us to others?",
            "_id": "66c9a06c40177d64a08fb6f8"
        }
    ],
    "createdBy": "66c98730599cbb7efc5a3a41",
    "__v": 0
}
```

## Technologies Used

- **Node.js:** Backend runtime environment.

- **Express.js:** Web framework for Node.js.

- **MongoDB:** NoSQL database for storing users and surveys.

- **Mongoose:** ODM (Object Data Modeling) library for MongoDB.

- **JWT (JsonWebToken):** For securing authentication.

- **bcryptjs:** For hashing passwords.
