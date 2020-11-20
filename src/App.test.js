import React from 'react';
import { act, waitFor, render } from '@testing-library/react';

import App from './App';


test('renders no more articles message for empty data', async () => {
    const fakeData = [];
    jest.spyOn(global, 'fetch').mockImplementation(() =>    
        Promise.resolve({      
            json: () =>  Promise.resolve(fakeData)
        })
    );
    await act(async () => {  
        const { container, unmount } = render(<App/>);
        await waitFor(() => expect(container).toHaveTextContent('There are no more articles to load'));
        unmount();
    });
});

test('renders error when fetch fails', async () => {
    const fakeErrorMsg = 'A fake error occurred';
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(Error(fakeErrorMsg)));
    await act(async () => {  
        const { container, unmount } = render(<App/>);
        await waitFor(() => expect(container).toHaveTextContent('Sorry, an error occurred...'));
        expect(container).toHaveTextContent('Please try again later');
        expect(container).toHaveTextContent(fakeErrorMsg);
        unmount();
    });
});


test('renders articles properly', async () => {
    const fakeTitle = 'Kwarantanny o 30 proc. w dwa dni. Czy wpłynie to na gospodarkę? Czy czeka nas lockdown? [ROZMOWA]';
    const fakeData = [{
        title: fakeTitle,
        thumb: 'https://oko.press/images/2020/10/KH200508_020.jpg',
        url: 'https://oko.press/kwarantanny-o-30-proc-w-dwa-dni-czy-wplynie-to-na-gospodarke-czy-czeka-nas-lockdown-rozmowa'
    }];
    jest.spyOn(global, 'fetch').mockImplementation(() =>    
        Promise.resolve({      
            json: () => Promise.resolve(fakeData)
        })  
    );
    await act(async () => {  
        const { container, unmount } = render(<App/>);
        await waitFor(() => expect(container).toHaveTextContent(fakeTitle));
        unmount();
    });
});

// TODO: add many more tests...