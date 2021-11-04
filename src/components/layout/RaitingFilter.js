
import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setRaiting, setLoading,removeFilter } from '../../actions/MovieAction';
import { Typography, Rating, Paper, IconButton, Tooltip, Grid,Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const MovieList = () => {
    const { valueRaiting } = useSelector(state => state.MoviesReducer);
    const dispatch = useDispatch();
    return (
        <Fragment>
            <Paper style={{ 'padding': '1%' }}>
                <Grid container item xs={12} direction="row" spacing={4}>
                    <Grid container item xs={6} >
                        <Typography component="legend">Filter</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Tooltip title="Remove Filter">
                            <IconButton onClick={()=>{dispatch(removeFilter())}}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Divider/>
                <Rating
                style={{'marginTop':'10px'}}
                    name="simple-controlled"
                    value={valueRaiting}
                    onChange={(event, newValue) => {
                        dispatch(setLoading(true));
                        dispatch(setRaiting(newValue));
                    }}
                />
            </Paper>
        </Fragment>
    )
}

export default MovieList;
