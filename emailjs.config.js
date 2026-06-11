/**
 * emailjs.config.js
 * ─────────────────────────────────────────────────────────────
 * Runtime EmailJS configuration for plain HTML projects.
 * Values here mirror those in .env — keep both files in sync.
 *
 * HOW TO GET YOUR KEYS
 * ─────────────────────
 * 1. Public Key      → https://dashboard.emailjs.com/admin/account
 * 2. Service ID      → https://dashboard.emailjs.com/admin  (Email Services tab)
 * 3. Template IDs    → https://dashboard.emailjs.com/admin/templates
 *
 * TEMPLATE VARIABLE NAMES EXPECTED BY EMAILJS
 * ─────────────────────────────────────────────
 * Notification template (templateId):
 *   {{from_name}}      – sender's full name
 *   {{from_email}}     – sender's email address
 *   {{company}}        – sender's company (optional)
 *   {{project_type}}   – selected project type
 *   {{budget}}         – selected budget range
 *   {{message}}        – message body
 *   {{reply_to}}       – same as from_email (sets Reply-To header)
 *
 * Auto-reply template (autoReplyTemplateId):
 *   {{to_name}}        – visitor's first name
 *   {{to_email}}       – visitor's email  (set as "To Email" in template)
 *   {{from_name}}      – your name shown in the reply
 *   {{reply_to}}       – your email address
 */

const EMAILJS_CONFIG = {
  /** Your EmailJS public key */
  publicKey: 'YOUR_PUBLIC_KEY',

  /** Service ID (e.g. 'service_xxxxxx') */
  serviceId: 'YOUR_SERVICE_ID',

  /** Template ID for the notification email you receive */
  templateId: 'YOUR_TEMPLATE_ID',

  /** Template ID for the auto-reply sent to the visitor */
  autoReplyTemplateId: 'YOUR_AUTOREPLY_TEMPLATE_ID',
};
