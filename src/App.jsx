import { Layout } from "./components/Layout/Layout";
import { GenresPage } from "./pages/GenresPage/GenresPage";
import { BookPage } from "./pages/BookPage/BookPage";
import { categorys } from "./constants/mock";

export function App() {
    return <Layout>
        {/*<BookPage book={categorys[0].books[0]}/>
        <GenresPage categorys={categorys}></GenresPage>*/}
        <BookPage book={categorys[0].books[0]} />
    </Layout>
}