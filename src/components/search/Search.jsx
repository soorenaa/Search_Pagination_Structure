import des from '../../assets/images/des.jpg';
import "./searchStyle.css"
const Search = ({query,search}) => {
    return (
        <>

            <div id="background_search">
                <img src={des} alt="picture" />
            </div>

            <div id='search_box'>
                    <input type="text" placeholder='Type Here ...' value={query.text} onChange={search} />
            </div>

        </>
    )
}

export default Search;