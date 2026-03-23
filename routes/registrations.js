const express = require('express');
const {
    getRegistrations,
    getRegistration,
    createRegistration,
    updateRegistration,
    deleteRegistration,
    getRegistrationStats
} = require('../controllers/registrations');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: Registrations
 *   description: Registration management API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Registration:
 *       type: object
 *       required:
 *         - apptDate
 *         - company
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated MongoDB ObjectId
 *         apptDate:
 *           type: string
 *           format: date-time
 *           description: Interview date (May 10-13, 2022)
 *         user:
 *           type: string
 *           description: User ID (auto-set from token)
 *         company:
 *           type: string
 *           description: Company ID
 *         createdAt:
 *           type: string
 *           format: date-time
 *     RegistrationStats:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         totalRegistrations:
 *           type: integer
 *         companyStats:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               companyName:
 *                 type: string
 *               numRegistrations:
 *                 type: integer
 */

/**
 * @swagger
 * /registrations/stats:
 *   get:
 *     summary: Get registration statistics
 *     description: Get total count of registrations and breakdown by company. Admin only.
 *     tags: [Registrations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved registration statistics
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegistrationStats'
 *       401:
 *         description: Not authorized
 *       403:
 *         description: Forbidden - admin only
 *       500:
 *         description: Server error
 */
router.route('/stats').get(protect, authorize('admin'), getRegistrationStats);

/**
 * @swagger
 * /registrations:
 *   get:
 *     summary: Get all registrations (admin gets all, user gets own)
 *     tags: [Registrations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of registrations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 count:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Registration'
 *       401:
 *         description: Not authorized
 *   post:
 *     summary: Create a new registration
 *     tags: [Registrations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - apptDate
 *               - company
 *             properties:
 *               apptDate:
 *                 type: string
 *                 format: date-time
 *                 description: Interview date (May 10-13, 2022)
 *               company:
 *                 type: string
 *                 description: ID of the company to register with
 *     responses:
 *       201:
 *         description: Registration created successfully
 *       400:
 *         description: User already registered or bad request
 *       401:
 *         description: Not authorized
 */
router.route('/').get(protect, getRegistrations).post(protect, createRegistration);

/**
 * @swagger
 * /registrations/{id}:
 *   get:
 *     summary: Get single registration
 *     tags: [Registrations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Registration data
 *       401:
 *         description: Not authorized
 *       404:
 *         description: Registration not found
 *   put:
 *     summary: Update a registration
 *     tags: [Registrations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Registration'
 *     responses:
 *       200:
 *         description: Registration updated successfully
 *       401:
 *         description: Not authorized
 *       404:
 *         description: Registration not found
 *   delete:
 *     summary: Delete a registration
 *     tags: [Registrations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Registration deleted successfully
 *       401:
 *         description: Not authorized
 *       404:
 *         description: Registration not found
 */
router.route('/:id').get(protect, getRegistration).put(protect, updateRegistration).delete(protect, deleteRegistration);

module.exports = router;
