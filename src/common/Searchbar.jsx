import PropTypes from 'prop-types';
import { Search } from "@mui/icons-material";
import { TextField, Toolbar } from "@mui/material";







const Searchbar = ({onSearchInput}) => {
    

    

    const handleInput = (e)=>{
        if(e.key != 'Enter'){
            return
        }
        onSearchInput(e.target.value)
        e.target.value = ''
    }
    
    return(
        <Toolbar sx={{display:"flex", justifyContent:"center", mt:'10px'}}>
            <TextField label={<Search/>} onKeyDown={handleInput}/>
        </Toolbar>
    )
}

Searchbar.propTypes = {
	onSearchInput: PropTypes.func,
}
export default Searchbar;