/**
 * emailjs.config.js
 * ─────────────────────────────────────────────────────────────
 * Runtime EmailJS configuration for plain HTML projects.
 * This file is loaded by contact.html via a <script> tag.
 * Values here mirror those in .env — keep both files in sync.
 *
 * ─── HOW TO GET YOUR KEYS ────────────────────────────────────
 *  Public Key      → https://dashboard.emailjs.com/admin/account
 *  Service ID      → https://dashboard.emailjs.com/admin
 *                    (Email Services tab → your service → Service ID)
 *  Template IDs    → https://dashboard.emailjs.com/admin/templates
 *                    (click a template → Template ID shown at the top)
 *
 * ─── NOTIFICATION TEMPLATE VARIABLES (templateId) ────────────
 *  {{from_name}}      Full name (First + Last)
 *  {{from_email}}     Visitor's email address
 *  {{reply_to}}       Same as from_email — sets the Reply-To header
 *  {{company}}        Company / organisation (or "N/A")
 *  {{project_type}}   Selected project type from the dropdown
 *  {{budget}}         Selected budget range (or "Not specified")
 *  {{message}}        Message body
 *
 * ─── AUTO-REPLY TEMPLATE VARIABLES (autoReplyTemplateId) ─────
 *  {{to_name}}        Visitor's first name
 *  {{to_email}}       Visitor's email — MUST be the "To Email" field
 *                     in the EmailJS template dashboard settings
 *  {{from_name}}      "Michael Otieno Ouma"
 *  {{reply_to}}       "michael@spectre.dev"
 *  {{from_name_full}} Full name (First + Last) — used in recap
 *  {{company}}        Company / organisation (or "N/A")
 *  {{project_type}}   Selected project type
 *  {{budget}}         Selected budget range (or "Not specified")
 *  {{message}}        Message body — shown as recap in auto-reply
 */

const EMAILJS_CONFIG = {
  /** Your EmailJS public key — Account > API Keys */
  publicKey: 'YOUR_PUBLIC_KEY',

  /** Service ID of your connected email provider, e.g. 'service_xxxxxx' */
  serviceId: 'YOUR_SERVICE_ID',

  /** Template ID for the notification email YOU receive */
  templateId: 'YOUR_TEMPLATE_ID',

  /** Template ID for the auto-reply sent back TO THE VISITOR */
  autoReplyTemplateId: 'YOUR_AUTOREPLY_TEMPLATE_ID',
};
