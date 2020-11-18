import React from 'react'; 

function ItemCard(props) {
    /*Component is used to create cart for single post element. 
    It is call by App. 
    It's takes single object from API as the props. */

    return (
        <div className = 'card m-1 mb-3 shadow bg-white rounded'>
            <div style={ { backgroundImage: `url(${props.article.thumb})`} } className='card-img-top'/>
            <div className='card-body'> 
                <a href={props.article.url} className='stretched-link text-decoration-none'>
                    <h5 className ='card-title '>{props.article.title}</h5>
                </a>
            </div>
        </div>
    );
}

export default ItemCard;