# Hello World API

A simple REST API built with Node.js and Express that provides various "Hello World" endpoints.

## Features

- Multiple Hello World endpoints
- JSON response format
- Health check endpoint
- Error handling
- Timestamp information

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Running the Application

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on port 3000 by default. You can change this by setting the `PORT` environment variable.

## API Endpoints

### 1. Basic Hello World
**GET** `/`

Returns a basic "Hello, World!" message.

**Response:**
```json
{
  "message": "Hello, World!",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "status": "success"
}
```

### 2. Hello with Custom Name
**GET** `/hello/:name?`

Returns a personalized greeting. The `name` parameter is optional.

**Examples:**
- `GET /hello` → "Hello, World!"
- `GET /hello/John` → "Hello, John!"

**Response:**
```json
{
  "message": "Hello, John!",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "status": "success"
}
```

### 3. POST Hello World
**POST** `/hello`

Accepts a JSON body with a `name` field and returns a personalized greeting.

**Request Body:**
```json
{
  "name": "Alice"
}
```

**Response:**
```json
{
  "message": "Hello, Alice!",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "status": "success",
  "receivedData": {
    "name": "Alice"
  }
}
```

### 4. Health Check
**GET** `/health`

Returns the health status of the API.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "uptime": 123.456
}
```

## Testing the API

You can test the API using curl, Postman, or any HTTP client:

### Using curl:

```bash
# Basic Hello World
curl http://localhost:3000/

# Hello with custom name
curl http://localhost:3000/hello/YourName

# POST request
curl -X POST http://localhost:3000/hello \
  -H "Content-Type: application/json" \
  -d '{"name": "YourName"}'

# Health check
curl http://localhost:3000/health
```

### Using a web browser:
Simply visit `http://localhost:3000/` to see the basic Hello World response.

## Project Structure

```
hello-world-api/
├── package.json      # Project dependencies and scripts
├── server.js         # Main Express server file
├── README.md         # This file
└── hello.js          # Original simple script (can be removed)
```

## Dependencies

- **express**: Web framework for Node.js
- **nodemon**: Development dependency for auto-restarting the server

## Environment Variables

- `PORT`: The port number to run the server on (default: 3000)

## Error Handling

The API includes proper error handling:
- 404 errors for undefined routes
- JSON parsing errors
- Server errors

## License

MIT License 