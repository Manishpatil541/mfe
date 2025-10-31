import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyels = makeStyles((theme) => {
    return createStyles({
        bar: {
            width: '100%',
            '& > * + *': {
                makeStyles
            }
        }
    })
});

export default () => {
    const classes = useStyels();

    return (
        <div className={classes.bar}>
            <LinearProgress />
        </div>
    );
}