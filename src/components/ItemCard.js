import React from 'react'; 

function ItemCard(props) {
    /*Component is used to create cart for single post element. 
    It is call by App. 
    It's takes single object from API as the props. */
    let smallImageURL;
    let imgURL = props.article.thumb;

    if (imgURL.endsWith('.jpg')){
        smallImageURL= imgURL.replace('.jpg', '-440x280.jpg');
    } else if (imgURL.endsWith('.png')) {
        smallImageURL= imgURL.replace('.png', '-440x280.png');
    } else if(imgURL.endsWith('.jpeg')) {
        smallImageURL= imgURL.replace('.jpeg', '-440x280.jpeg');
    }
    
    return (
        <div className = 'card m-1 mb-3 shadow bg-white rounded'>
            <div style={ { backgroundImage: `url(${smallImageURL})`} } className='card-img-top'/>
            <div className='card-body'> 
                <a href={props.article.url} className='stretched-link text-decoration-none'>
                    <h5 className ='card-title '>{props.article.title}</h5>
                </a>
            </div>
        </div>
    );
}

export default ItemCard;