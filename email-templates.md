# Template 1: Contact Form Acknowledgment

```html
<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 12px; color: #cbd5e1;">
  <div style="color: #f1f5f9; font-size: 14px;">
    <strong>Thank you for contacting us, {{name}}!</strong>
  </div>
  <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: rgba(56, 189, 248, 0.2);">
    <table role="presentation" style="width: 100%;">
      <tr>
        <td style="vertical-align: top; padding-right: 15px;">
          <div style="padding: 10px; background-color: rgba(56, 189, 248, 0.15); border-radius: 8px; font-size: 28px; text-align: center; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;" role="img" aria-label="user">
            👤
          </div>
        </td>
        <td style="vertical-align: top;">
          <div style="color: #38bdf8; font-size: 16px; font-weight: 600;">
            {{name}}
          </div>
          <div style="color: #64748b; font-size: 13px; margin-top: 4px;">
            {{time}} | {{email}}
          </div>
          <p style="font-size: 14px; margin-top: 10px; color: #cbd5e1;">
            <strong>Subject:</strong> {{subject}}
          </p>
        </td>
      </tr>
    </table>
  </div>

  <div style="margin-top: 20px; padding: 20px; background: rgba(26, 41, 66, 0.4); border: 1px solid rgba(56, 189, 248, 0.12); border-radius: 8px;">
    <p style="font-size: 14px; color: #cbd5e1; margin-bottom: 12px;">
      <strong style="color: #f1f5f9;">Your Message:</strong>
    </p>
    <p style="font-size: 13px; color: #cbd5e1; line-height: 1.6; padding: 12px; background: rgba(15, 23, 42, 0.5); border-left: 3px solid #38bdf8; border-radius: 4px;">
      {{message}}
    </p>
  </div>
</div>

<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(56, 189, 248, 0.12);">
  <p style="color: #cbd5e1; margin-bottom: 16px;">
    Hi {{name}},
  </p>
  
  <p style="color: #cbd5e1; line-height: 1.6; margin-bottom: 16px;">
    Thank you for reaching out! We've received your message regarding <strong style="color: #38bdf8;">{{subject}}</strong>, and we appreciate you taking the time to contact us.
  </p>

  <p style="color: #cbd5e1; line-height: 1.6; margin-bottom: 16px;">
    I'll review your inquiry and get back to you as soon as possible. Typically, you can expect a response within <strong>2-3 business days</strong>. If your matter is urgent, feel free to reach out directly via your preferred contact method.
  </p>

  <div style="margin: 20px 0; padding: 16px; background: rgba(52, 211, 153, 0.1); border-left: 4px solid #34d399; border-radius: 4px;">
    <p style="color: #34d399; font-size: 13px; font-weight: 600;">
      ✓ Message received and confirmed
    </p>
  </div>

  <p style="color: #cbd5e1; line-height: 1.6; margin-bottom: 16px;">
    In the meantime, feel free to explore my portfolio at:
    <br/>
    <a href="{{website_url}}" style="color: #38bdf8; text-decoration: none; font-weight: 500;">
      {{website_url}}
    </a>
  </p>

  <p style="color: #cbd5e1; margin-top: 24px; margin-bottom: 8px;">
    Best regards,<br/>
    <strong style="color: #f1f5f9;">Michael Otieno Ouma</strong><br/>
    <span style="color: #64748b; font-size: 13px;">Full-Stack Developer & Founder of Spectre</span>
  </p>
</div>

<footer style="margin-top: 30px; padding-top: 20px; border-top: 1px dashed rgba(56, 189, 248, 0.1); font-size: 11px; color: #64748b; text-align: center;">
  <p>This is an automated acknowledgment. Please do not reply to this email.</p>
  <p style="margin-top: 8px;">
    <a href="{{website_url}}" style="color: #38bdf8; text-decoration: none;">Portfolio</a> | 
    <a href="{{website_url}}/projects" style="color: #38bdf8; text-decoration: none;">Projects</a> | 
    <a href="{{website_url}}/contact" style="color: #38bdf8; text-decoration: none;">Contact</a>
  </p>
</footer>
```

# Template 2: Personal Response

```html
<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; color: #cbd5e1; background-color: #0f172a; padding: 20px;">
  <p style="color: #f1f5f9; margin-bottom: 16px;">
    Hi {{name}},
  </p>

  <p style="line-height: 1.6; margin-bottom: 16px;">
    Thank you again for your interest in {{inquiry_type}}. I've reviewed your message and I'm excited about the opportunity to discuss this further.
  </p>

  <div style="margin: 24px 0; padding: 20px; background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.12); border-radius: 8px;">
    <p style="color: #38bdf8; font-weight: 600; margin-bottom: 12px;">
      📋 Next Steps
    </p>
    <ul style="margin: 0; padding-left: 20px; color: #cbd5e1;">
      <li style="margin-bottom: 8px;">Let's schedule a brief call to discuss your requirements</li>
      <li style="margin-bottom: 8px;">I'll share relevant project examples that align with your needs</li>
      <li>We'll explore how I can best contribute to your project</li>
    </ul>
  </div>

  <p style="line-height: 1.6; margin-bottom: 16px;">
    Feel free to reach out directly to arrange a time that works best for you. I'm flexible and ready to collaborate.
  </p>

  <p style="color: #cbd5e1; margin-top: 24px; margin-bottom: 8px;">
    Looking forward to connecting,<br/>
    <strong style="color: #f1f5f9;">Michael Otieno Ouma</strong>
  </p>

  <p style="color: #64748b; font-size: 12px; margin-top: 4px; margin-bottom: 0;">
    Full-Stack Developer & Founder of Spectre<br/>
    <a href="{{website_url}}" style="color: #38bdf8; text-decoration: none;">{{website_url}}</a>
  </p>
</div>
```