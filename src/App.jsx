import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// page and layout imports
import Page from "./components/Page";
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/blogs",
    element: <Blogs />,
  },
  {
    id: 3,
    path: "/blogs/:id",
    element: <BlogDetails />,
  },
  {
    id: 4,
    path: "/contact",
    element: <Contact />,
  },
  {
    id: 10,
    path: "/*",
    element: <PageNotFound />,
  },
];

const apolloClient = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND}/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={<Page element={route.element} />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
