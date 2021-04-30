import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
const TrendingResultItem = (props) => {
  const { results } = props;
  // console.log(results);
  const tournament = results?.tournament?.slug;

  const homeClubName = results?.home?.clubId?.codename;
  const awayClubName = results?.away?.clubId?.codename;
  const homeClubShortname = results?.home?.clubId?.shortname || results?.home?.clubId?.name;
  const awayClubShortname = results?.away?.clubId?.shortname || results?.away?.clubId?.name;
  const homeGoals = results?.home?.goals;
  const awayGoals = results?.away?.goals;
  const homeLogoClub = results?.home?.clubId?.logo?.secure_url;
  const awayLogoClub = results?.away?.clubId?.logo?.secure_url;
  const linkYoutube = results?.video?.linkYoutube;
  const slug = results?.slug;
  // let homeClub = '';
  // let awayClub = '';
  //   let homeGoals = '';
  //   let awayGoals = '';
  //   let homeLogoClub = '';
  //   let awayHomeClub = '';
  return (
    <li className="results-item results-item--trending">
      <Link href={linkYoutube} to={`/${tournament}/results/${slug}`} className="results-link hide-on-mobile">
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
      <Link
        href={linkYoutube}
        to={`/${tournament}/results/${slug}`}
        className="results-link hide-on-laptop hide-on-desktop hide-on-desktop-sm"
      >
        {/* <div className="end-time">{endTime}</div> */}

        <div className="results-content">
          <p className="clubs clubs--home">
            <span className="clubs__name">{homeClubShortname}</span>
            <img src={homeLogoClub} alt="" className="clubs__logo" />
          </p>
          <p className="scores">
            <span className="scores__home">{homeGoals}</span>
            <span>-</span>
            <span className="scores__home">{awayGoals}</span>
          </p>
          <p className="clubs clubs--away">
            <img src={awayLogoClub} alt="" className="clubs__logo" />
            <span className="clubs__name">{awayClubShortname}</span>
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
