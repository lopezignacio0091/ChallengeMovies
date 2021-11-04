import { Alert, Grid } from '@mui/material';
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';

const MovieList = () => {

    const { movies} = useSelector(state => state.MoviesReducer);

    if (movies.length === 0) return <Alert severity="info">No hay pelicula disponible</Alert>
    
    return (
        <Fragment>

            <Grid container spacing={1} alignItems="stretch">
                {movies.map((elem, index) => (
                    <Grid item xs={4} key={index}>
                        <MovieItem data={elem} />
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    )
}

export default MovieList;
