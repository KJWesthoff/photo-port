import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe("Nav component", () => {
    // renders about test

    it('renders', ()=> {
        render(<Nav />);
    });


    it('matches snapshot', ()=>{
        const {asFragment} = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });

});


describe("emoji shows", () => {
    it('inserts emoji into the h2', ()=>{
        const { getByLabelText } = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe("links are showing", () =>{
    it('inserts text into links' , ()=>{
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');

    })
})