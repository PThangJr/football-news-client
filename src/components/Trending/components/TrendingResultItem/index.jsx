import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';
const TrendingResultItem = (props) => {
  const { results } = props;
  console.log(results);
  const homeClubName = results?.home?.clubId?.shortname;
  const awayClubName = results?.away?.clubId?.shortname;
  const homeGoals = results?.home?.goals;
  const awayGoals = results?.away?.goals;
  const logoHomeClub = results?.home?.clubId?.logo?.secure_url;
  const logoAwayClub = results?.away?.clubId?.logo?.secure_url;
  const linkYoutube = results?.video?.linkYoutube;
  const slug = results?.slug;
  // let homeClub = '';
  // let awayClub = '';
  //   let homeGoals = '';
  //   let awayGoals = '';
  //   let logoHomeClub = '';
  //   let awayHomeClub = '';
  return (
    <li className=" results-item">
      <Link href={linkYoutube} to={`/results/${slug}`} className=" results-club">
        <span className=" clubs clubs-home">
          <img src={logoHomeClub} alt="" className="clubs-logo logo-home" />
          <span className="clubs-name">{homeClubName}</span>
          <span className="clubs-goals">{homeGoals}</span>
        </span>
        -
        <span className=" clubs clubs-away">
          <span className="clubs-goals">{awayGoals}</span>
          <img src={logoAwayClub} alt="" className="clubs-logo logo-home" />
          <span className="clubs-name">{awayClubName}</span>
        </span>
      </Link>
    </li>
  );
};

TrendingResultItem.propTypes = {
  results: PropTypes.object,
};

export default TrendingResultItem;
