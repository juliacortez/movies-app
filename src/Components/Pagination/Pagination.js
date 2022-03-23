import React, { useContext, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import GlobalStateContext from "../../GlobalState/GlobalStateContext";
import { PaginationContainer } from "./styled";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
        '@media (max-width: 320px)' : {
          size: 'small'
        }
        },
        },
    }));


const AddPagination = () => {

    const classes = useStyles();

    const { currentPage, setCurrentPage, totalResults } = useContext(GlobalStateContext)

    const handleChange = (event, value) => {
      setCurrentPage(value);
      window.location.hash = value
    };

    const totalPages = Math.floor(totalResults / 10000)
  
    return (
      <PaginationContainer className={classes.root}>
        <Pagination className="pag"
          count={totalPages} 
          page={currentPage} 
          onChange={handleChange} 
          color="primary" 
          size="small"
        />
      </PaginationContainer>
    )
}

export default AddPagination