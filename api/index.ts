import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Serve index.html for all routes (SPA routing)
  const indexPath = path.join(process.cwd(), 'public', 'index.html');
  
  if (fs.existsSync(indexPath)) {
    const html = fs.readFileSync(indexPath, 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
}
