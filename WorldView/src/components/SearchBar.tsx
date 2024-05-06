interface SearchBar {
    common : string
}


//component Search bar avec entête de page
export const SearchBar = ({common} : SearchBar) => {
    return (
        <header>
            <input
                type={common}
                placeholder="Search here"
            />
        </header>
    )
}