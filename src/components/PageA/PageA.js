import React from 'react';
import styled from 'styled-components';
import Recipes from '../Recipes/Recipes';

const pageA = () => {
    return (
        <Wrapper>
            <img
                src='https://cdn0.woolworths.media/content/content/nemo-1492-header-logo.png'
                alt='fresh ideas for home'
            />
            <h1>Healthier recipes for you</h1>
            <h3>Put a healthier twist on your favorite seasonal dishes</h3>
            <p>
                Make seasonal fruit and vegetables the star of your meals. Enjoy
                these recipes and stay nourished with these healthier and
                nutritionally approved recipes.
            </p>
            <Recipes />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 1rem;
    img {
        width: 70%;
        display: inline-block;
    }
`;

export default pageA;
