import { Grid, Alert } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllMovies } from '../../actions/MovieAction';
import MovieList from '../layout/movie/MovieList';
import MovieLoading from '../layout/movie/MovieLoading';
import RaitingFilter from '../layout/RaitingFilter';
import '../../scss/main.scss';
import Footer from '../layout/Footer';

const MainPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    }, [])

    const { loading, error } = useSelector(state => state.MoviesReducer);

    if (loading) return <MovieLoading />

    if (error) return <Alert severity="error">Error al cargar la data </Alert>


    return (
        <>
        <Box
            sx={{
                marginTop: '1%',
                padding: '2%',
                backgroundColor: 'rgb(234, 238, 243)',
            }}
        >
            <Grid container >
                <Grid item xs={12} container justifyContent="center" className="gridItem">
                    <RaitingFilter />
                </Grid>
                <Grid item xs className="gridItem">
                    <MovieList />
                </Grid>
            </Grid>
        </Box>
        <Footer/>
        </>
    )
}

export default MainPage
