/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `subject` (text, not null) — message subject line
  - `message` (text, not null) — the message body
  - `read` (boolean, default false) — whether Priya has read the message
  - `created_at` (timestamptz, default now()) — when the message was sent

2. Security
- Enable RLS on `contact_messages`.
- This is a public contact form on a portfolio site with no sign-in, so the
  anon-key client must be able to INSERT new messages. Reads, updates, and
  deletes are intentionally blocked for anon/authenticated here — only the
  service-role key (used server-side) can read or manage messages. This keeps
  visitor-submitted messages private to the site owner while still letting
  anyone submit the form.

3. Important Notes
- No `user_id` column or auth dependency — this is a single-tenant portfolio.
- Only INSERT is exposed to anon; SELECT/UPDATE/DELETE are denied so submitted
  messages cannot be enumerated or tampered with from the browser.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to submit a contact message.
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT TO anon, authenticated WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies: messages are private to the owner
-- (service-role key only). Anon cannot read or enumerate submissions.
