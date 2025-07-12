-- Create consultation_requests table
CREATE TABLE IF NOT EXISTS consultation_requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  business_name VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'pending'
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  business_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  query TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'unread'
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_consultation_requests_email ON consultation_requests(email);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at ON consultation_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for public insert access
CREATE POLICY "Allow public insert on consultation_requests" ON consultation_requests
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public insert on contact_messages" ON contact_messages
  FOR INSERT TO anon WITH CHECK (true);

-- Create policies for authenticated read access (for admin dashboard)
CREATE POLICY "Allow authenticated read on consultation_requests" ON consultation_requests
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read on contact_messages" ON contact_messages
  FOR SELECT TO authenticated USING (true);
