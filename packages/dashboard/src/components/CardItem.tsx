import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IPage } from "../types/types";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

interface IMainProps extends IPage {
}
export default function CardItem({ title, templateId, active }: IMainProps) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {templateId.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {active}
                    <br />
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    {title}
                </Button>
            </CardActions>
        </Card>
    );
}
