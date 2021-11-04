import { Grid, LinearProgress,Alert } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cleanMovie, viewDetail } from '../../actions/DetailAction';
import MovieDetail from '../layout/movie/MovieDetail';
import _ from 'lodash'

const DetailPage = ({ match }) => {

    const { params: { id } } = match;
    const { loading,movieDetail } = useSelector((state) => state.DetailReducer);
    const dispatch = useDispatch();

    React.useEffect(() => {

        dispatch(viewDetail(id));
        return () => {
            dispatch(cleanMovie());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (loading) return  <Box sx={{ width: '100%' }}><LinearProgress /></Box>

    if(_.isEmpty(movieDetail)) return <Alert severity="error">Por favor Comunicarse con el administrador</Alert>

    return (
        <Box sx={{ flexGrow: 1, padding: '2%' }}>
            <Grid container spacing={3}>
                <MovieDetail/>
            </Grid>
        </Box>
    )
}

export default DetailPage;
