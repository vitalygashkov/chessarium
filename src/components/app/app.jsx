import { Route, Routes } from 'react-router-dom';
import { Home, Courses, Textbooks, Contacts, About, NotFound } from '../../pages';
import { Layout } from '../layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/textbooks" element={<Textbooks />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
