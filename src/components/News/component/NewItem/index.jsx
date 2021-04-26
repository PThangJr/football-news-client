import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import CardItem from '../../../Card/CardItem';

const NewItem = (props) => {
  const { dataNew } = props;
  const params = useParams();
  const { tournaments, slug } = dataNew;
  let tournament = tournaments.filter((tour) => tour.slug === params.tournament);
  tournament = tournament.length > 0 ? tournament : tournaments;
  const linkImage = dataNew?.thumbnail?.secure_url;
  return <CardItem {...dataNew} linkImage={linkImage} linkTo={`/${tournament[0]?.slug}/new-detail/${slug}`} />;
};

NewItem.propTypes = {
  dataNew: PropTypes.object,
};

export default NewItem;
