import React from 'react'
import { Col, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../../HomePage/ProductCard';


function SaperatorByGenre(props) {

    const {oneGenre,prodlist} = props;

    

    return (
        <>
            <h3 className="text-dark py-2">{oneGenre.genre}</h3>
            <Row className="mx-0 mb-4">
                
                { prodlist.slice(0,6).map( (product,i) =>  <Col key={i} className="col-lg-2 col-md-3 col-sm-4 col-6 pt-2">
                                                                <ProductCard product={product} />
                                                            </Col> ) }
                
                <Link to={'/products-by-genre/'+oneGenre.gen_id}>  See all {oneGenre.genre} here... </Link>
                <NavDropdown.Divider />
            </Row>
            
        </>
    )
}

export default SaperatorByGenre



// ===================================================BACKUP FOR FIND_BY_CATEGORY_ONLY
// function AllProductsByAllGenre(props) {
//     const {category,prodlist} = props;
//     return (
//         <>
//             <h3 className="text-dark py-2">{category}</h3>
//             <Row className="mx-0 mb-4">
//                 { prodlist.slice(0,6).map( (product,i) =>  <Col key={i} className="col-md-2 col-sm-3 col-6">
//                                                                 <ProductCard product={product} />
//                                                             </Col> ) }
                
//                 <Link to="/product-by-category/2">  See all {category} here... </Link>
//                 <NavDropdown.Divider />
//             </Row>
//         </>
//     )
// }
// export default AllProductsByAllGenre