'use strict';

var authorize = require('../middleware/authorization');

module.exports = function(router) {
  /**
   * @swagger
   * /quota/count:
   *   put:
   *     tags:
   *      - Quota Count
   *     description: |
   *       Updating per quotaroot mail count limitation
   *     parameters:
   *       - $ref: "#/parameters/quota_count"
   *     responses:
   *       204:
   *         $ref: "#/responses/quota_updated"
   *       400:
   *         $ref: "#/responses/quota_value_invalid"
   *       500:
   *         $ref: "#/responses/cm_500"
   */

   /**
   * @swagger
   * /quota/count:
   *   get:
   *     tags:
   *      - Quota Count
   *     description: |
   *       Reading per quotaroot mail count limitation
   *     responses:
   *       200:
   *         $ref: "#/responses/cm_200"
   *       500:
   *         $ref: "#/responses/cm_500"
   */


   /**
   * @swagger
   * /quota/count:
   *   delete:
   *     tags:
   *      - Quota Count
   *     description: |
   *       Removing per quotaroot mail count limitation by updating to unlimited value
   *     responses:
   *       204:
   *         $ref: "#/responses/quota_deleted"
   *       500:
   *         $ref: "#/responses/cm_500"
   */

  /**
   * @swagger
   * /quota/size:
   *   put:
   *     tags:
   *      - Quota Size
   *     description: |
   *       Updating per quotaroot size limitation
   *     parameters:
   *       - $ref: "#/parameters/quota_size"
   *     responses:
   *       204:
   *         $ref: "#/responses/quota_updated"
   *       400:
   *         $ref: "#/responses/quota_value_invalid"
   *       500:
   *         $ref: "#/responses/cm_500"
   */

   /**
   * @swagger
   * /quota/size:
   *   get:
   *     tags:
   *      - Quota Size
   *     description: |
   *       Reading per quotaroot size limitation
   *     responses:
   *       200:
   *         $ref: "#/responses/cm_200"
   *       500:
   *         $ref: "#/responses/cm_500"
   */

   /**
   * @swagger
   * /quota/size:
   *   delete:
   *     tags:
   *      - Quota Size
   *     description: |
   *       Removing per quotaroot size limitation by updating to unlimited value
   *     responses:
   *       204:
   *         $ref: "#/responses/quota_deleted"
   *       500:
   *         $ref: "#/responses/cm_500"
   */

  /**
   * @swagger
   * /quota:
   *   put:
   *     tags:
   *      - Quota
   *     description: |
   *       Updating count and size at the same time
   *     parameters:
   *       - $ref: "#/parameters/quota"
   *     responses:
   *       204:
   *         $ref: "#/responses/quota_updated"
   *       400:
   *         $ref: "#/responses/quota_value_invalid"
   *       500:
   *         $ref: "#/responses/cm_500"
   */

   /**
   * @swagger
   * /quota:
   *   get:
   *     tags:
   *      - Quota
   *     description: |
   *       Reading count and size at the same time
   *     responses:
   *       200:
   *         $ref: "#/responses/quota"
   *       500:
   *         $ref: "#/responses/cm_500"
   */

};
