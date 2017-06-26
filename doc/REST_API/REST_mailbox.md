# /api/mailboxes

## PUT /api/users/{usernameToBeUsed}/mailboxes/{mailboxNameToBeCreated}

Create a mailbox of the selected user.

**Parameters**

- usernameToBeUsed: The user that will be created mailbox on (the use must be full email address and should be an existing on user Resource)
- mailboxNameToBeCreated: The mailbox name should be created. It should not be empty, nor contain # & % * characters

**Request Headers:**

- Accept: application/json

**Request JSON Object:**

- value: The attribute value.

**Response Headers:**

- Content-Length: Document size
- Content-Type: application/json

**Status Codes:**

- 204 The mailbox now exists on the server
- 400 Invalid mailbox name.
- 404 The user name does not exist
- 500 Internal error

**Request:**

    PUT /api/users/test@localhost.com/mailboxes/fromJira
    Accept: application/json
    Host: localhost:8000


**Response:**

    HTTP/1.1 204 OK

## GET /api/users/{usernameToBeUsed}/mailboxes/{mailboxNameToBeChecked}

Testing existence of a mailbox.

**Parameters**

- usernameToBeUsed: The user must be full email address and should be an existing on user Resource)
- mailboxNameToBeChecked: It should not be empty

**Status Codes:**

- 204 The mailbox exists
- 400 Invalid mailbox name
- 404 The user name does not exist, the mailbox does not exist
- 500 Internal error

**Request:**

    GET /api/users/test@localhost.com/mailboxes/fromJira
    Accept: application/json
    Host: localhost:8000

**Response:**

## GET /api/users/{usernameToBeUsed}/mailboxes

Listing all mailboxes of user

**Parameters**

- usernameToBeUsed: The user must be full email address and should be an existing on user Resource)

**Status Codes:**

- 200 The mailboxes list was successfully retrieved
- 404 The user name does not exist
- 500 Internal error

**Request:**

    GET /api/users/test@localhost.com/mailboxes
    Accept: application/json
    Host: localhost:8000

**Response:**

    HTTP/1.1 204 OK
    X-ESN-Items-Count: 2
    [
        {
            mailboxName: "INBOX",
        },
        {
            mailboxName: "SENT",
        }
    ]

## DELETE /api/users/{usernameToBeUsed}/mailboxes/{mailboxNameToBeDeleted}

Deleting a mailbox and its children

**Parameters**

- usernameToBeUsed: The user must be full email address and should be an existing on user Resource)
- mailboxNameToBeDeleted: It should not be empty

**Status Codes:**

- 204 The mailbox now does not exist on the server
- 400 Invalid mailbox name
- 404 The user name does not exist
- 500 Internal error

**Request:**

    DELETE /api/users/test@localhost.com/mailboxes/fromJira
    Accept: application/json
    Host: localhost:8000

**Response:**

    HTTP/1.1 204 OK

## DELETE /api/users/{usernameToBeUsed}/mailboxes

Deleting user mailboxes

**Parameters**

- usernameToBeUsed: The user must be full email address and should be an existing on user Resource)

**Status Codes:**

- 204 The user do not have mailboxes anymore
- 404 The user name does not exist
- 500 Internal error

**Request:**

    DELETE /api/users/test@localhost.com/mailboxes
    Accept: application/json
    Host: localhost:8000

**Response:**

    HTTP/1.1 204 OK

