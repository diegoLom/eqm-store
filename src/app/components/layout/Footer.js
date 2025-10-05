import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', background: '#f5f5f5' }}>
      <p>&copy; {new Date().getFullYear()} EQM Store. All rights reserved.</p>
    </footer>
  );
}