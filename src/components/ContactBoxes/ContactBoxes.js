import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import ContactBox from './ContactBox';
import {contactInfo} from '../../assets/assets';

const ContactBoxes = () => {
    return(
        <Grid container spacing={5}>
            {contactInfo.map((info) => {
                return(
                    <Grid item xs={10}>
                        <ContactBox image={info.image} name={info.name} info={info.contact} />
                        </Grid>
                )
            })}
        </Grid>
    )
}

export default ContactBoxes;