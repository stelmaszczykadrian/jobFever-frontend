import {Search, SearchIconWrapper, StyledInputBase} from "./SearchBar.styles";
import SearchIcon from "@mui/icons-material/Search";
import React, {useState} from "react";
import Typography from "@mui/joy/Typography";

export default function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };


    return (
        <Typography>
            <Search>
                <form onSubmit={handleSubmit}>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{'aria-label': 'search'}}
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </form>
            </Search>
        </Typography>
    );
}