import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RecipeReviewCard from '../RecipeReviewCard/RecipeReviewCard';

const PageB = () => {
    const getDataFromLocalStorage = () =>
        localStorage.getItem('localStorageFavList')
            ? JSON.parse(localStorage.getItem('localStorageFavList'))
            : [];
    const [favList, setFavList] = useState(getDataFromLocalStorage());

    useEffect(() => {
        localStorage.setItem('localStorageFavList', JSON.stringify(favList));
    }, [favList]);

    const removeFromFavList = (id) => {
        const newFavList = favList.filter((recipe) => recipe.id !== id);
        setFavList(newFavList);
    };
    const addToFavList = (id) => {
        const currentRecipe = favList.find((recipe) => recipe.id === id);
        setFavList([...favList, currentRecipe]);
    };

    return (
        <Wrapper>
            <Link to='/'>Go Back to Recipes Page</Link>
            <div className='cards-container'>
                {favList.map((recipe) => {
                    return (
                        <RecipeReviewCard
                            removeFromFavList={removeFromFavList}
                            addToFavList={addToFavList}
                            {...recipe}
                            isFav
                            key={recipe.id}
                        />
                    );
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .button-link {
        text-decoration: none;
        margin: 1rem;
    }
    .cards-container {
        display: flex;
        flex-wrap: wrap;
        margin-top: 2rem;
        justify-content: space-evenly;
        & > * {
            margin: 1rem;
        }
    }
`;

export default PageB;
