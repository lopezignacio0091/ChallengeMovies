import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea, CardActions, CardHeader, Grid, IconButton, Rating, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { green, grey } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setLoading } from '../../../actions/DetailAction';
import PreviewIcon from '@mui/icons-material/Preview';
const MovieItem = ({ data }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id, title, vote_average, release_date, overview } = data;

    return (
        <Card
            sx={{
                backgroundColor: '#fffff',
            }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: grey[400] }} aria-label="recipe">
                            <Tooltip title="View Detail">
                                <IconButton onClick={() => { dispatch(setLoading(true)); history.push(`/Detail/${id}`) }}>
                                    <PreviewIcon />
                                </IconButton>
                            </Tooltip>
                        </Avatar>
                    }
                    title={release_date}
                />
                <CardContent sx={{ height: '100%' }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div" color="text.secondary">
                        Vote<br></br>
                        <Rating name="read-only" value={Math.trunc(vote_average) / 2} readOnly />
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom color={green[900]}>
                        {overview}
                    </Typography>
                </CardContent>
        </Card >
    );
}

MovieItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default MovieItem;