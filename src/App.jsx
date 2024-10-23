import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import EditArticle from './components/articles/EditArticle'
import ViewArticle from './components/articles/ViewArticle'
import ListArticles from './components/articles/ListArticles'
import InsertArticle from './components/articles/InsertArticle'
import EditCategorie from './components/categories/EditCategorie'
import ViewCategorie from './components/categories/ViewCategorie'
import ListCategories from './components/categories/ListCategories'
import InsertCategorie from './components/categories/InsertCategorie'
import ListSCategorie from './components/scategories/ListSCategorie'
import EditSCategorie from './components/scategories/EditSCategorie'
import ViewSCategorie from './components/scategories/ViewSCategorie'
import InsertSCategorie from './components/scategories/InsertSCategorie'
import Menu from './components/Menu'


function App() {

  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/articles" element={<ListArticles />} />
          <Route path="/articles/add" element={<InsertArticle />} />
          <Route path="/articles/edit/:id" element={<EditArticle />} />
          <Route path="/articles/view/:id" element={<ViewArticle />} />
          <Route path="/categories" element={<ListCategories />} />
          <Route path="/categories/add" element={<InsertCategorie />} />
          <Route path="/categories/edit/:id" element={<EditCategorie />} />
          <Route path="/categories/view/:id" element={<ViewCategorie />} />
          <Route path="/scategorie" element={<ListSCategorie />} />
          <Route path="/scategorie/add" element={<InsertSCategorie />} />
          <Route path="/scategorie/edit/:id" element={<EditSCategorie />} />
          <Route path="/scategorie/view/:id" element={<ViewSCategorie />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
