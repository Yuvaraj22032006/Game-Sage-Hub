import React from 'react';
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CategoryList from './pages/CategoryList';
import ItemDetail from './pages/ItemDetail';
import AboutUs from './pages/AboutUs';
import Auth from './pages/Auth';

const CategoryWrapper: React.FC = () => {
  const { game, category } = useParams<{ game: string; category: string }>();
  if (!game || !category) return null;
  
  // Type guard
  if ((game !== 'genshin' && game !== 'wuthering')) return <div className="pt-24 text-center text-white">Invalid Game Realm</div>;
  
  return <CategoryList game={game as 'genshin' | 'wuthering'} category={category} />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* List Views */}
          <Route path="/:game/:category" element={<CategoryWrapper />} />
          
          {/* Detail Views */}
          <Route path="/:game/:category/:id" element={<ItemDetail />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;