import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAllImagePosts } from "./api/services";
import Pagination from "./common/paginaton/Pagination";
import { Search, ImageBox } from "./components/index";
import MainLayout from "./layout/MainLayoute";

function App({ pageTitle }) {
  const [post, setPost] = useState([]);
  const [query, setQuery] = useState({ text: "" });
  const [getFilteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    getAllImagePosts().then((result) => {
      setPost(result.data);
    });
  }, []);

  const contactSearch = (event) => {
    setQuery({ ...query, text: event.target.value });
    const allData = post.filter((post) => {
      return post.user.first_name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilteredContacts(allData);
    console.log(getFilteredContacts);
  };

  return (
    <>
      <MainLayout>
        <Helmet>
          <title>{pageTitle}</title>{" "}
        </Helmet>

        <Search query={query} search={contactSearch} />

        {query.text ? (
          <ImageBox currentPosts={getFilteredContacts} />
        ) : (
          <Pagination postPerPage={9} post={post} />
        )}
      </MainLayout>
    </>
  );
}

export default App;
