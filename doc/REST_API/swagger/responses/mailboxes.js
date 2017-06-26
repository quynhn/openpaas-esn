/**
  * @swagger
  * response:
  *   mailbox_created:
  *     description: OK. The mailbox now exists on the server.
  *   mailbox_existed:
  *     description: The mailbox exists
  *   mailbox_deleted:
  *     description: The mailbox now does not exist on the server
  *   user_mailboxes_deleted:
  *     description: The user do not have mailboxes anymore
  *   mailbox_list:
  *     description: Listing all mailboxes of user
  *     schema:
  *       $ref: "#/definitions/mailboxes"
  *   mailbox_400:
  *     description: Invalid mailbox name.
  *   mailbox_404:
  *     description: The user name does not exist.
  */
