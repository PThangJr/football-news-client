import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.scss';
import moment from 'moment';
const TrendingResultItem = (props) => {
  const { results, fullname } = props;
  const match = useRouteMatch();
  console.log(results);
  const homeClubName = fullname ? results?.home?.clubId?.name : results?.home?.clubId?.shortname;
  const awayClubName = fullname ? results?.away?.clubId?.name : results?.away?.clubId?.shortname;
  const homeGoals = results?.home?.goals;
  const awayGoals = results?.away?.goals;
  const logoHomeClub = results?.home?.clubId?.logo?.secure_url;
  const logoAwayClub = results?.away?.clubId?.logo?.secure_url;
  const linkYoutube = results?.video?.linkYoutube;
  let endTime = results?.endTime;
  endTime = endTime && moment(endTime).format('DD/MM/YYYY');
  const slug = results?.slug;
  // let homeClub = '';
  // let awayClub = '';
  //   let homeGoals = '';
  //   let awayGoals = '';
  //   let logoHomeClub = '';
  //   let awayHomeClub = '';
  return (
    <li className=" results-item">
      <Link href={linkYoutube} to={`${match.url}/${slug}`} className=" results-club">
        {/* <span className="end-time">{endTime}</span> */}
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
