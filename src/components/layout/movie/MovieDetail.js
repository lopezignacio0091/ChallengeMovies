import * as React from 'react';
import { useSelector } from 'react-redux';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card, Rating, CardContent, Divider, Grid } from '@mui/material';
import _ from 'lodash';

export default function MovieDetail() {

    const { movieDetail } = useSelector((state) => state.DetailReducer);
  


    return (
        <React.Fragment>
            <Grid item xs={4}>
                <CardMedia sx={{ width: '100%', }}
                    component="img"
                    image={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                    alt="img"
                />
            </Grid>
            <Grid item xs={8}>
                <Card sx={{ minWidth: 275, boxShadow: 'none' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16, color: '#00a650' }} gutterBottom>
                            Date: {movieDetail.release_date}
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: '#999' }} color="text.secondary" gutterBottom>
                            Status: {movieDetail.status}
                        </Typography>
                        <br></br>
                        <Typography variant="h5" component="div">
                            {movieDetail.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Vote<br></br>
                            <Rating name="read-only" value={Math.trunc(movieDetail.vote_average) / 2} readOnly />
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: 14, color: '#999' }} color="text.secondary" gutterBottom>
                            Genero:
                        </Typography>
                        <Typography variant="body1" component="div">
                            {movieDetail.genres[0].name}
                        </Typography>
                        <br></br>
                        <Divider />
                        <br></br>
                        <Typography variant="h5" component="div">
                            Productions
                        </Typography>
                        {!_.isEmpty(movieDetail) &&
                            movieDetail.production_companies.length > 0 && movieDetail.production_companies.map((elem, index) => (
                                <Typography key={index} variant="body2">
                                    * {elem.name}
                                </Typography>
                            ))
                        }
                        <br></br>
                        <Divider />
                        <Typography variant="h5" component="div">
                            More Info
                        </Typography>
                        <Typography>
                                {movieDetail.overview}
                            </Typography>
                    </CardContent>
                </Card>
            </Grid>
         
        </React.Fragment>
    );
}