import { unwrapResult } from '@reduxjs/toolkit';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchResultDetail } from './resultDetailSlice';
import './style.scss';
import Youtube from 'react-youtube';
import NewSuggestion from '../../../News/component/NewSuggestion';
import SkeletonElement from '../../../Loading/Skeleton/SkeletonElement';
const ResultDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const pathnameSplit = location.pathname.split('/');
  const params = pathnameSplit[pathnameSplit.length - 1];
  const [result, setResult] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const action = await dispatch(fetchResultDetail(params));
        const data = unwrapResult(action);
        console.log(data);
        setResult(data.result);
      } catch (error) {
        console.log('New Detail has errors : ', error);
      }
    })();
    // dispatch(fetchResultDetail('manchester-united-vs-brighton'));
  }, [dispatch, params]);
  console.log(result);
  const tournament = result?.tournament?.name;
  const homeClubName = result?.home?.clubId?.name;
  const awayClubName = result?.away?.clubId?.name;
  const homeGoals = result?.home?.goals;
  const awayGoals = result?.away?.goals;
  const homeRedCards = result?.home?.redCards;
  const awayRedCards = result?.away?.redCards;
  const homeScores = result?.home?.scores;
  const awayScores = result?.away?.scores;
  const logoHomeClub = result?.home?.clubId?.logo?.secure_url;
  const logoAwayClub = result?.away?.clubId?.logo?.secure_url;
  const linkYoutube = result?.video?.linkYoutube;
  const videoId = result?.video?.videoId;
  let endTime = result?.endTime;
  endTime = endTime && moment(endTime).format('DD/MM/YYYY');
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
          {!result && (
            <div className="result-detail">
              <SkeletonElement className="result-detail-header" style={{ width: '200px', height: '30px' }} />
              <div className="scoreboard">
                <div className="club">
                  <div className="club__name">
                    <SkeletonElement className="club__name-img" type="circle" style={{ width: '40px' }} />
                    <SkeletonElement className="club__name-text" style={{ width: '150px', height: '25px' }} />
                  </div>
                </div>
                <div className="club__goals">
                  <SkeletonElement style={{ width: '30px', height: '25px' }} className="home-goals"></SkeletonElement>-
                  <SkeletonElement style={{ width: '30px', height: '25px' }} className="away-goals"></SkeletonElement>
                </div>
                <div className="club">
                  <div className="club__name">
                    <SkeletonElement className="club__name-img" type="circle" style={{ width: '40px' }} />
                    <SkeletonElement className="club__name-text" style={{ width: '150px', height: '25px' }} />
                  </div>
                </div>
              </div>
              <div className="goals">
                <ul className="goals-list">
                  <SkeletonElement
                    className="goals-item"
                    style={{ width: '150px', height: '22px', marginBottom: '10px' }}
                  />
                  <SkeletonElement className="goals-item" style={{ width: '150px', height: '22px' }} />
                </ul>
                <ul className="goals-list">
                  <SkeletonElement
                    className="goals-item goals-item--away"
                    style={{ width: '150px', height: '22px', marginBottom: '10px' }}
                  />
                  <SkeletonElement className="goals-item goals-item--away" style={{ width: '150px', height: '22px' }} />
                </ul>
              </div>
            </div>
          )}
          {result && (
            <div className="result-detail">
              <div className="result-detail-header">
                <span className="tournament">{tournament}</span>
                <span className="end-time">{endTime}</span>
              </div>
              <div className="scoreboard">
                <div className="club">
                  <div className="club__name">
                    <img src={logoHomeClub} alt="" className="club__name-img" />
                    <span className="club__name-text">{homeClubName}</span>
                  </div>
                </div>
                <div className="club__goals">
                  <span className="home-goals">{homeGoals}</span>
                  <span className="text">-</span>
                  <span className="away-goals">{awayGoals}</span>
                </div>
                <div className="club">
                  <div className="club__name">
                    <img src={logoAwayClub} alt="" className="club__name-img" />
                    <span className="club__name-text">{awayClubName} </span>
                  </div>
                </div>
              </div>
              <div className="goals">
                <ul className="goals-list">
                  {homeScores &&
                    homeScores.map((score) => {
                      return (
                        <li key={score._id} className="goals-item goals-item--home">
                          <span className="goals__player">
                            <i className="fas fa-futbol"></i>
                            {score.player}
                          </span>
                          <span className="goals__time">{score.goalAt}</span>
                          <span className="goals__penalty">{score.penalty && '(P)'}</span>
                          <span className="goals__OG">{score.ownGoal && '(OG)'}</span>
                        </li>
                      );
                    })}
                </ul>
                <ul className="goals-list">
                  {awayScores &&
                    awayScores.map((score) => {
                      return (
                        <li key={score._id} className="goals-item goals-item--away">
                          <span className="goals__player">
                            <i className="fas fa-futbol"></i>
                            {score.player}
                          </span>
                          <span className="goals__time">{score.goalAt}</span>
                          <span className="goals__penalty">{score.penalty && '(P)'}</span>
                          <span className="goals__OG">{score.ownGoal && '(OG)'}</span>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="red-card">
                <ul className="red-card-list">
                  {homeRedCards &&
                    homeRedCards.map((redCard) => {
                      return (
                        <li key={redCard._id + 1} className="red-card-item red-card-item--home">
                          <span className="red-card__image"></span>
                          <span className="red-card__player ">{redCard.player}</span>
                          <span className="red-card__time">{redCard.time}</span>
                        </li>
                      );
                    })}
                </ul>
                <ul className="red-card-list">
                  {awayRedCards &&
                    awayRedCards.map((redCard) => {
                      return (
                        <li key={redCard._id} className="red-card-item red-card-item--away">
                          <span className="red-card__image"></span>
                          <span className="red-card__player ">{redCard.player}</span>
                          <span className="red-card__time">{redCard.time}</span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          )}
          {!result && <SkeletonElement className="note" style={{ height: '30px', width: '80%' }} />}
          {result && (
            <div className="note">
              Note: Bản quyền video thuộc
              <a
                className="author-video"
                href={`https://www.youtube.com/channel/${result?.video?.channelId}`}
                target={'_blank'}
              >
                {result?.video?.author}
              </a>
            </div>
          )}
          {!result && (
            <div className="video">
              <SkeletonElement style={{ height: '400px' }} className="video-youtube" />
            </div>
          )}
          {result && videoId && (
            <div className="video">
              <Youtube videoId={videoId} className="video-youtube" />
            </div>
          )}
        </div>
        <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
          <NewSuggestion maxItem={5} />
        </div>
      </div>
    </div>
  );
};

export default ResultDetail;
