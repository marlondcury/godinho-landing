import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import AreaPage from './pages/AreaPage'
import LawyerPage from './pages/LawyerPage'
import BlogListPage from './pages/BlogListPage'
import BlogPostPage from './pages/BlogPostPage'

// import.meta.env.BASE_URL reflete o `base` configurado em vite.config.js
// (ex: '/godinho-landing/'), para as rotas funcionarem corretamente quando o
// site fica numa subpasta, como acontece no GitHub Pages.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <ScrollManager />
        <div className="min-h-screen bg-ink">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/areas/:slug" element={<AreaPage />} />
              <Route path="/equipe/:slug" element={<LawyerPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
