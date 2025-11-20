import React from 'react';
import RevisionCard from './RevisionCard';

const topics = [
  { title: 'React Router', description: 'Navigate using <Routes> and <Route> with dynamic pages.' },
  { title: 'useState', description: 'Track and update component state.' },
  { title: 'useEffect', description: 'Side-effects like fetching data or listening to events.' },
  { title: 'useRef', description: 'Access DOM nodes or persist values across renders.' },
  { title: 'Props', description: 'Pass data between components.' },
  { title: 'Component Composition', description: 'Use children or pass components as props.' }
];

const Home = () => (
  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
    {topics.map((item, index) => (
      <RevisionCard key={index} title={item.title} description={item.description} />
    ))}
  </div>
);

export default Home;
