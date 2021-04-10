import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.scss';
import moment from 'moment';
const ResultItem = (props) => {
  const { results, fullname, date } = props;
  console.log(results);
  const tournament = results?.tournament?.slug;
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
  const match = useRouteMatch();
  // let homeClub = '';
  // let awayClub = '';
  //   let homeGoals = '';
  //   let awayGoals = '';
  //   let logoHomeClub = '';
  //   let awayHomeClub = '';
  return (
    <li className=" results-item">
      <Link href={linkYoutube} to={`/${tournament}/results/${slug}`} className=" results-club">
        {/* {date && <span className="end-time">{endTime}</span>} */}
        <div className=" clubs clubs-home">
          <img src={logoHomeClub} alt="" className="clubs-logo logo-home" />
          <span className="clubs-name">{homeClubName}</span>
        </div>
        <div className="clubs__goals">
          <span className="home-goals">{homeGoals}</span>
          <span>-</span>
          <span className="away-goals">{awayGoals}</span>
        </div>
        <div className=" clubs clubs-away">
          <img src={logoAwayClub} alt="" className="clubs-logo logo-home" />
          <span className="clubs-name">{awayClubName}</span>
        </div>
      </Link>
    </li>
  );
};

ResultItem.propTypes = {
  results: PropTypes.object,
};

export default ResultItem;
