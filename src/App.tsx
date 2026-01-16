import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-radial">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
