import React from "react";
import styled from "styled-components";
import ProfileIcon from "../../Components/ProfileIcon";
import Emoji from "../../Components/Emoji";
import theme, { flexCenter } from "../../Styles/Theme";

const MyGroupBanner = ({ ranking }) => {
  const medal = {
    1: <Emoji symbol="🥇" />,
    2: <Emoji symbol="🥈" />,
    3: <Emoji symbol="🥉" />,
  };
  return (
    <BannerContents>
      <img src="/Images/mygroup_banner.png" alt="banner" />
      <div className="contents">
        <span className="title">
          RANKING <Emoji symbol="🏆" />
        </span>
        {ranking.map((rank, i) => {
          return (
            <div className="rankList" key={i}>
              {medal[i + 1]}
              <span className="rank">{i + 1}위 </span>
              <ProfileIcon size={30} img={rank.user_profile} />
              <span className="name">{rank.user_name}</span>
            </div>
          );
        })}
      </div>
    </BannerContents>
  );
};

export default MyGroupBanner;

const BannerContents = styled.div`
  ${flexCenter}
  font-family: ${theme.fontTitle};

  img {
    width: 40%;

    @media (max-width: 800px) {
    display: none;
    }
  }

  .contents {
    margin-left: 100px;
    display: flex;
    flex-direction: column;

    .title {
      margin-bottom: 20px;
      font-size: 50px;
      font-weight: 500;
      letter-spacing: 7px;
      color: ${theme.vermilion};
    }

    .rankList {
      margin: 15px 0;
      display: flex;
      align-items: center;
      font-size: 26px;
      font-weight: 600;
      font-family: ${theme.fontContent};
      color: ${theme.vermilion};

      .rank {
        margin-right: 20px;
      }

      .name {
        margin-left: 20px;
        font-size: 20px;
        color: ${theme.fontColor};
      }
    }
  }
`;
