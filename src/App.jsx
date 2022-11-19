import { Layout } from "./components/Layout/Layout";
import { GenresPage } from "./pages/GenresPage/GenresPage";
import { BookPage } from "./pages/BookPage/BookPage";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Category } from "./components/Category/Category";
import { CartPage } from "./pages/CartPage/CartPage";

export function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<GenresPage />}>
                            <Route path=":categoryId" element={<Category />}></Route>
                        </Route>
                        <Route path="/book/:bookId" element={<BookPage />}></Route>
                        <Route path="/cart" element={<CartPage />}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}