import React, { useEffect, useState } from 'react';

const Category = () => {

    // loaded Category Data
    const [category, setCategory] = useState([])


    // Fetch Category Data
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    console.log(category)


    return (
        <div className='category border-y-2'>
            <ul className="menu menu-horizontal px-1 ">
                {
                    category.map(cate => <li tabIndex={0}>
                        <a>
                            {cate.categoryName}
                            {
                                cate?.subcategory ? <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg> : ''
                            }
                            
                        </a>
                        <ul className="p-2 bg-base-100 z-10">
                            
                            {
                                cate?.subcategory?.map(sub => <li><a>{sub.name}</a></li>)
                            }
                        </ul>
                    </li>)
                }

            </ul>
        </div>
    );
};

export default Category;