import data from './DummyReviews'
import React, { useState } from 'react'
import { Box, styled, TablePagination } from "@mui/material";
import ReviewResults from "./ReviewResults";

const StyleBox = styled(Box)({
  
  display:'grid',
  placeItems: 'center',
});

const FetchReviews = () => {
    const products = data.products;
    const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(6)

  const handleChangePage = (even, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


    if (products.length > 0) {
        return (
            <Box sx={{ display:"flex", flexWrap:'wrap', justifyContent:'center'}}>
          {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(prod => (
            <ReviewResults
              key={prod.id}
              id={prod.id}
              image={prod.image}
              name={prod.name}
              review={prod.review}
              />
            
            ))}
            
          <StyleBox mt={2} mb={6}
          sx={{width: '100%'}}>       
            <TablePagination
            rowsPerPageOptions={[4, 6, 8]}
            component="div"
            count={data.products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          </StyleBox>   
            </Box>
        )
  };
}
  
  export default FetchReviews;