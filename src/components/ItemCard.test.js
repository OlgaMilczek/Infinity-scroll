import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ItemCard from './ItemCard';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('renders proper title from props element', () => {
    act(() => {
        const data = {
            title:'This is title' 
        }; 
        render(<ItemCard article = {data} />, container);  });  
    expect(container.textContent).toBe('This is title');

    act(() => {
        const data = {
            title:'This is another title' 
        }; 
        render(<ItemCard article = {data} />, container);  });  
    expect(container.textContent).toBe('This is another title');
});

test('links warks properly', () => {
    act(() => {
        const data = {
            url:'http://dummy.url.com' 
        }; 
        render(<ItemCard article = {data} />, container);  });
    expect(container.querySelector('a').getAttribute('href')).toBe('http://dummy.url.com');
    act(() => {
        const data = {
            url:'http://next.dummy.url.com/1224' 
        }; 
        render(<ItemCard article = {data} />, container);  });
    expect(container.querySelector('a').getAttribute('href')).toBe('http://next.dummy.url.com/1224');
});

test('background img links warks properly', () => {
    act(() => {
        const data = {
            thumb:'http://randomimg.jpg' 
        }; 
        render(<ItemCard article = {data} />, container);  });
    const img = container.getElementsByClassName('card-img-top')[0];
    expect(img.getAttribute('style')).toBe('background-image: url(http://randomimg.jpg);');
    act(() => {
        const data = {
            thumb:'http://randomimg2.jpg' 
        }; 
        render(<ItemCard article = {data} />, container);  });
    const img2 = container.getElementsByClassName('card-img-top')[0];
    expect(img2.getAttribute('style')).toBe('background-image: url(http://randomimg2.jpg);');
});
