import des from '../../assets/images/des.jpg';
import "./searchStyle.css"
const Search = () => {
    return (
        <>

            <div id="background_search">
                <img src={des} alt="picture" />
            </div>

            <div id='search_box'>
                    <input type="text" placeholder='Type Here ...'  />
            </div>

        </>
    )
}

export default Search;