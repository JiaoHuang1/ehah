import React from 'react';
import { Link } from 'react-router-dom';

const CategoryNavBar = () => {
    return (
        <div className="category-navbar">
            <ul className="dropdown">
               <li className="dropbtn">
                   <Link className="link" to='/search/categories?category=Restaurant'>
                       Restaurant
                   </Link>

                   <ul className="dropdown-content">

                       <li className="inner-li">
                           <Link className="submenu" to='/search/categories?category=Fast Food'>
                               Fast Food
                           </Link>
                           {/* <a href="/search/categories?category=Fast Food">test</a> */}
                       </li>

                       <li className="inner-li">
                           <Link className="submenu" to='/search/categories?category=Breakfast & Brunch'>
                               Breakfast & Brunch
                           </Link>
                       </li>

                       <li className="inner-li">
                           <Link className="submenu" to='/search/categories?category=Chinese'>
                               Chinese
                           </Link>
                       </li>

                       <li className="inner-li">
                           <Link className="submenu" to='/search/categories?category=American'>
                               American
                           </Link>
                       </li>

                       <li className="inner-li">
                           <Link className="submenu" to='/search/categories?category=Takeout'>
                               Takeout
                           </Link>
                       </li>

                   </ul>

               </li>
            </ul>
               <li className="outer-li">
                   <Link className="link" to='/search/categories?category=Home Service'>
                       Home Service
                   </Link>
               </li>

               <li className="outer-li">
                   <Link className="link" to='/search/categories?category=Auto Service'>
                       Auto Service
                   </Link>
               </li>

               <li className="outer-li">
                   <Link className="link" to='/search/categories?category=Hotel'>
                       Hotel
                   </Link>
               </li>
            
        </div>
    )
}


export default CategoryNavBar