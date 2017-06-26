# /api/quota

## POST /api/quota/count

Updating per quotaroot mail count limitation

**Request Headers:**

- Accept: application/json

**Request JSON Object:**

{The new value}

**Response Headers:**

**Status Codes:**

- 204 Value updated
- 400 The body is not a positive integer
- 500 Internal error

**Request:**

    POST /api/quota/count
    Accept: application/json
    Host: localhost:8080
    {
      1024000000
    }

**Response:**

    HTTP/1.1 204 Value updated

## GET /api/quota/count

Reading per quotaroot mail count limitation

**Status Codes:**

- 200 OK
- 500 Internal error

**Request:**

    GET /api/quota/count
    Accept: application/json
    Host: localhost:8080

**Response:**

    100000

## DELETE /api/quota/count

Removing per quotaroot mail count limitation

**Request Headers:**

- Accept: application/json

**Response Headers:**

**Status Codes:**

- 204 Value updated to UNLIMITED
- 500 Internal error

**Request:**

    DELETE /api/quota/count
    Accept: application/json
    Host: localhost:8080

**Response:**

    HTTP/1.1 204 Value updated

## POST /api/quota/size

Updating per quotaroot size limitation

**Request Headers:**

- Accept: application/json

**Request JSON Object:**

{The new value}

**Response Headers:**

**Status Codes:**

- 204 Value updated
- 400 The body is not a positive integer
- 500 Internal error

**Request:**

    POST /api/quota/size
    Accept: application/json
    Host: localhost:8080
    {
      1024000000
    }

**Response:**

    HTTP/1.1 204 Value updated

## GET /api/quota/size

Reading per quotaroot size limitation

**Status Codes:**

- 200 OK
- 500 Internal error

**Request:**

    GET /api/quota/size
    Accept: application/json
    Host: localhost:8080

**Response:**

    100000

## DELETE /api/quota/size

Removing per quotaroot size limitation

**Request Headers:**

- Accept: application/json

**Response Headers:**

**Status Codes:**

- 204 Value updated to UNLIMITED
- 500 Internal error

**Request:**

    DELETE /api/quota/size
    Accept: application/json
    Host: localhost:8080

**Response:**

    HTTP/1.1 204 Value updated

## POST /api/quota

Managing count and size at the same time

**Request Headers:**

- Accept: application/json

**Request JSON Object:**

- count: The quota count.
- size: The quota size

**Response Headers:**

**Status Codes:**

- 200 Success
- 500 Internal error

**Request:**

    POST /api/quota
    Accept: application/json
    Host: localhost:8080
    {
        "count":    52,
        "size":     42
    }

**Response:**

    HTTP/1.1 204 Value updated

## GET /api/quota

Reading count and size at the same time

**Status Codes:**

- 200 OK
- 500 Internal error

**Request:**

    GET /api/quota/size
    Accept: application/json
    Host: localhost:8080

**Response:**

    {
            "count":    52,
            "size":     42
    }
