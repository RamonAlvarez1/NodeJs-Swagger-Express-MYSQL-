const postsController = require("../controllers/posts.controller");

var express = require("express");

var router = express.Router();

router.post("/add-post", postsController.addPost);
/**
 * @swagger
 * /posts/add-post:
 *   post:
 *      description: Used to add post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - description
 *                 - imagePath
 *                 - addedByUserId
 *              properties:
 *                  description:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: This is sample post
 *                  imagePath:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: abc.png
 *                  addedByUserId:
 *                      type: integer
 *                      example: 145
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/get-all-post", postsController.getAllPosts);
/**
 * @swagger
 * /posts/get-all-post:
 *   get:
 *      description: Used to get all posts
 *      tags:
 *          - posts
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/add-post-comment", postsController.addPostComment);
/**
 * @swagger
 * /posts/add-post-comment:
 *   post:
 *      description: Used to add posts comment
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Comment
 *            description: Post Comment
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *                 - comment
 *                 - addedByUserId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1075
 *                  comment:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: Really nice post!
 *                  addedByUserId:
 *                      type: integer
 *                      example: 145
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/get-post-all-comments", postsController.getPostAllComments);
/**
 * @swagger
 * /posts/get-post-all-comments:
 *   get:
 *      description: Used to get all the comments
 *      tags:
 *          - posts
 *      parameters:
 *          - in: query
 *            name: postId
 *            type: integer
 *            description: Post id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/like-post", postsController.likePost);
/**
 * @swagger
 * /posts/like-post:
 *   put:
 *      description: Used to like a post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1075
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put("/dislike-post", postsController.dislikePost);
/**
 * @swagger
 * /posts/dislike-post:
 *   put:
 *      description: Used to dislike a post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1075
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete("/delete-post", postsController.deletePost);
/**
 * @swagger
 * /posts/delete-post:
 *   delete:
 *      description: Used to delete a post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: query
 *            name: postId
 *            type: integer
 *            description: Post id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;
