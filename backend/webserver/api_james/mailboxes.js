'use strict';

var authorize = require('../middleware/authorization');

module.exports = function(router) {

  /**
   * @swagger
   * /users/{username}/mailboxes/{mailboxName}:
   *   put:
   *     tags:
   *      - Mailboxes
   *     description: |
   *       Create a mailbox of the selected user.
   *     parameters:
   *       - $ref: "#/parameters/username"
   *       - $ref: "#/parameters/mailboxName"
   *     responses:
   *       204:
   *         $ref: "#/responses/mailbox_created"
   *       400:
   *         $ref: "#/responses/mailbox_400"
   *       401:
   *         $ref: "#/responses/cm_401"
   *       404:
   *         $ref: "#/responses/mailbox_404"
   *       500:
   *         $ref: "#/responses/cm_500"
   */

   /**
   * @swagger
   * /users/{username}/mailboxes/{mailboxName}:
   *   get:
   *     tags:
   *      - Mailboxes
   *     description: |
   *       Testing existence of a mailbox.
   *     parameters:
   *       - $ref: "#/parameters/username"
   *       - $ref: "#/parameters/mailboxName"
   *     responses:
   *       204:
   *         $ref: "#/responses/mailbox_existed"
   *       400:
   *         $ref: "#/responses/mailbox_400"
   *       401:
   *         $ref: "#/responses/cm_401"
   *       404:
   *         $ref: "#/responses/mailbox_404"
   *       500:
   *         $ref: "#/responses/cm_500"
   */

   /**
   * @swagger
   * /users/{username}/mailboxes:
   *   get:
   *     tags:
   *      - Users's Mailboxes
   *     description: |
   *       Listing all mailboxes of user.
   *     parameters:
   *       - $ref: "#/parameters/username"
   *     responses:
   *       204:
   *         $ref: "#/responses/mailbox_list"
   *       401:
   *         $ref: "#/responses/cm_401"
   *       404:
   *         $ref: "#/responses/mailbox_404"
   *       500:
   *         $ref: "#/responses/cm_500"
   */

   /**
   * @swagger
   * /users/{username}/mailboxes/{mailboxName}:
   *   delete:
   *     tags:
   *      - Mailboxes
   *     description: |
   *       Deleting a mailbox and its children
   *     parameters:
   *       - $ref: "#/parameters/username"
   *       - $ref: "#/parameters/mailboxName"
   *     responses:
   *       204:
   *         $ref: "#/responses/mailbox_deleted"
   *       400:
   *         $ref: "#/responses/mailbox_400"
   *       401:
   *         $ref: "#/responses/cm_401"
   *       404:
   *         $ref: "#/responses/mailbox_404"
   *       500:
   *         $ref: "#/responses/cm_500"
   */

   /**
   * @swagger
   * /users/{username}/mailboxes:
   *   delete:
   *     tags:
   *      - Mailboxes
   *     description: |
   *       Deleting user mailboxes.
   *     parameters:
   *       - $ref: "#/parameters/username"
   *     responses:
   *       204:
   *         $ref: "#/responses/user_mailboxes_deleted"
   *       401:
   *         $ref: "#/responses/cm_401"
   *       404:
   *         $ref: "#/responses/mailbox_404"
   *       500:
   *         $ref: "#/responses/cm_500"
   */
};
