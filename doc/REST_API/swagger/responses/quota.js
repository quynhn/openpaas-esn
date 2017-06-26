/**
  * @swagger
  * response:
  *   quota_updated:
  *     description: OK. The value updated.
  *   quota_value_invalid:
  *     description: The body is not a positive integer.
  *   quota_deleted:
  *     description: The value is updated to unlimited value.
  *   quota:
  *     description: Getting count and size at the same time
  *     schema:
  *       $ref: "#/definitions/quota"
  */
