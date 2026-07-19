import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";
import PageTransition from "../components/PageTransition";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import ProductSubcategoryPage from "../pages/ProductSubcategoryPage";
import ProductTypePage from "../pages/ProductTypePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import BuiltToSuitPage from "../pages/BuiltToSuitPage";
import DesignIntentPage from "../pages/DesignIntentPage";
import ResourcesPage from "../pages/ResourcesPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

const withTransition = (component) => <PageTransition>{component}</PageTransition>;

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={withTransition(<HomePage />)} />
            <Route path="products" element={withTransition(<ProductsPage />)} />
            <Route path="products/category/:categorySlug" element={withTransition(<ProductCategoryPage />)} />
            <Route
              path="products/category/:categorySlug/subcategory/:subcategorySlug"
              element={withTransition(<ProductSubcategoryPage />)}
            />
            <Route
              path="products/category/:categorySlug/subcategory/:subcategorySlug/products"
              element={withTransition(<ProductTypePage />)}
            />
            <Route path="products/:slug" element={withTransition(<ProductDetailPage />)} />
            <Route path="projects" element={withTransition(<ProjectsPage />)} />
            <Route path="projects/:slug" element={withTransition(<ProjectDetailPage />)} />
            <Route path="built-to-suit" element={withTransition(<BuiltToSuitPage />)} />
            <Route path="design-intent" element={withTransition(<DesignIntentPage />)} />
            <Route path="resources" element={withTransition(<ResourcesPage />)} />
            <Route path="about" element={withTransition(<AboutPage />)} />
            <Route path="contact" element={withTransition(<ContactPage />)} />
            <Route path="*" element={withTransition(<NotFoundPage />)} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;
