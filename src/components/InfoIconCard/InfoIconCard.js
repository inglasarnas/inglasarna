import React from 'react';
import {Typography, Grid, makeStyles} from '@material-ui/core';
import {GoTools} from 'react-icons/go';

const useStyles= makeStyles((theme) => ({
    container: {
        background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.31) 0%, #FFFFFF 58.62%), url("https://lumon.com/sites/default/files/styles/large_gallery/public/images/sv/lumon-inglasad-balkong-03.jpg?itok=_-IHhWi3")',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        minHeight: '10vh',
        marginTop: '1vh',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
    },
    iconContainer : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'inherit',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2)
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px',
        width: '70px',
        borderRadius: '50%',
        backgroundColor: '#003595',
    },
    icon : {
        fontSize: '24px',
        color: '#FFFFFF'
    }

}));

const InfoIconCard = (props) => {
    const classes = useStyles();

    return(
        <Grid item container className={classes.container}>
            <Grid item md={1} className={classes.iconContainer}>
            <div className={classes.iconWrapper}>
            <GoTools className={classes.icon}/>
            </div>
            </Grid>
            <Grid item md={8}>
                <Typography variant="h4">{props.rubrik}</Typography>
                <Typography variant="body1">{props.text}</Typography>
            </Grid>
        </Grid>
    )
}

export default InfoIconCard;