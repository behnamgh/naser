import React from 'react';
import CardItem from './CardItem';
import { IPage } from "../types/types";
import { Grid } from '@material-ui/core';

interface ICardListProps {
    items: IPage[]
}
const CardList = ({ items }: ICardListProps) => {
    return (
        <Grid container spacing={3}>
            {items && items.length && items.map(item => <Grid item xs={12} sm={4}>
                <CardItem {...item} />
            </Grid>)}
        </Grid>
    );
};

export default CardList;