/**
 * @swagger
 * parameter:
 *   username:
 *     name: username
 *     in: path
 *     description: The user that will be created mailbox on (the use must be full email address and should be an existing on user Resource)
 *     required: true
 *     type: string
 *   mailboxName:
 *     name: mailboxName
 *     in: path
 *     description: The mailbox name should be created. It should not be empty, nor contain # & % * characters
 *     required: true
 *     type: string
 */
