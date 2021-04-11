import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.scss';
import moment from 'moment';
const TrendingResultItem = (props) => {
  const { results, fullname } = props;
  const match = useRouteMatch();
  // console.log(results);
  const tournament = results?.tournament?.slug;

  const homeClubName = fullname ? results?.home?.clubId?.name : results?.home?.clubId?.shortname;
  const awayClubName = fullname ? results?.away?.clubId?.name : results?.away?.clubId?.shortname;
  const homeGoals = results?.home?.goals;
  const awayGoals = results?.away?.goals;
  const homeLogoClub = results?.home?.clubId?.logo?.secure_url;
  const awayLogoClub = results?.away?.clubId?.logo?.secure_url;
  const linkYoutube = results?.video?.linkYoutube;
  let endTime = results?.endTime;
  endTime = endTime && moment(endTime).format('DD/MM');
  const slug = results?.slug;
  // let homeClub = '';
  // let awayClub = '';
  //   let homeGoals = '';
  //   let awayGoals = '';
  //   let homeLogoClub = '';
  //   let awayHomeClub = '';
  return (
    <li className="results-item results-item--trending">
      <Link href={linkYoutube} to={`/${tournament}/results/${slug}`} className="results-link">
        {/* <div className="end-time">{endTime}</div> */}
        <div className="results-content">
          <p className="clubs clubs--home">
            <span className="clubs__name">{homeClubName}</span>
            <img src={homeLogoClub} alt="" className="clubs__logo" />
          </p>
          <p className="scores">
            <span className="scores__home">{homeGoals}</span>
            <span>-</span>
            <span className="scores__home">{awayGoals}</span>
          </p>
          <p className="clubs clubs--away">
            <img src={awayLogoClub} alt="" className="clubs__logo" />
            <span className="clubs__name">{awayClubName}</span>
          </p>
        </div>
      </Link>
    </li>
  );
};

TrendingResultItem.propTypes = {
  results: PropTypes.object,
};

export default TrendingResultItem;
