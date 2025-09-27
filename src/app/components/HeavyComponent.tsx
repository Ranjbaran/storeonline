'use client';

import React from 'react';

const HeavyComponent = () => {
  return (
    <div className="p-4 bg-blue-100 border border-blue-500 rounded">
      <h2>این یه کامپوننت سنگین هست!</h2>
      <p>این کامپوننت فقط وقتی لود می‌شه که نیاز باشه.</p>
    </div>
  );
};

export default HeavyComponent;