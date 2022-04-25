import React, { useEffect } from 'react';
import { useState } from 'react';
import { data } from '../../data';
import RecipeReviewCard from '../RecipeReviewCard/RecipeReviewCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Recipes = () => {
    const getDataFromLocalStorage = () =>
        localStorage.getItem('localStorageFavList')
            ? JSON.parse(localStorage.getItem('localStorageFavList'))
            : [];

    const [favList, setFavList] = useState(getDataFromLocalStorage);
    const [list, setList] = useState(data);
    const [shownList, setShownList] = useState(list);

    useEffect(() => {
        localStorage.setItem('localStorageFavList', JSON.stringify(favList));
    }, [favList]);

    const filterShownList = (category) => {
        const newList = list.filter((recipe) => recipe.category === category);
        setShownList(newList);
    };

    const isFav = (id) =>
        favList.find((recipe) => recipe.id === id) ? true : false;

    const addToFavList = (id) => {
        const currentRecipe = list.find((recipe) => recipe.id === id);
        setFavList([...favList, currentRecipe]);
    };

    const removeFromFavList = (id) => {
        const newFavList = favList.filter((recipe) => recipe.id !== id);
        setFavList(newFavList);
    };

    return (
        <Wrapper>
            <Link
                className='favorite-page-button'
                to='/favorites'
                style={{
                    textDecorationColor: 'transparent',
                }}
            >
                <Button
                    variant='contained'
                    style={{
                        marginLeft: '1rem',
                    }}
                    onClick={() => setShownList(favList)}
                >
                    Go to my Favorite Recipes page
                </Button>
            </Link>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs aria-label='basic tabs example'>
                        <Button label='All' onClick={() => setShownList(list)}>
                            All
                        </Button>
                        <Button
                            label='Vegan'
                            onClick={() => filterShownList('vegan')}
                        >
                            Vegan
                        </Button>
                        <Button
                            label='Vegetarian'
                            onClick={() => filterShownList('vegetarian')}
                        >
                            vegetarian
                        </Button>
                        <Button
                            label='Pescatarian'
                            onClick={() => filterShownList('pescatarian')}
                        >
                            pescatarian
                        </Button>
                    </Tabs>
                </Box>
            </Box>
            <article>
                {shownList.map((recipe) => {
                    return (
                        <RecipeReviewCard
                            {...recipe}
                            key={recipe.id}
                            addToFavList={addToFavList}
                            removeFromFavList={removeFromFavList}
                            isFav={isFav(recipe.id)}
                        />
                    );
                })}
            </article>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    article {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        & > * {
            margin: 1rem;
        }
    }
`;

export default Recipes;
