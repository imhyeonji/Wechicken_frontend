import React from "react";
import styled from "styled-components";

import theme, { flexCenter } from "../../../Styles/Theme";
import useUpload from "../../../Components/hooks/useUpload";

function ProfileColumn({ myProfile }) {
  const [handleEditProfileImg, editedProfileImg, ProfileIcon] = useUpload();

  const handleRemoveProfileImg = () => {
    if (window.confirm("프로필 이미지를 삭제하시겠습니까?")) {
    }
  };

  return (
    <ProfileContainer>
      <ProfilePhoto>
        <ProfileIcon
          size={131}
          img={editedProfileImg ? editedProfileImg : myProfile.user_thumbnail}
        />
        <label>
          <input type="file" onChange={handleEditProfileImg} />
          <UploadPhotoBtn>이미지 업로드</UploadPhotoBtn>
        </label>
        <DeletePhotoBtn onClick={handleRemoveProfileImg}>
          이미지 제거
        </DeletePhotoBtn>
      </ProfilePhoto>
      <ProfileContent>
        <span className="userNth">{myProfile.wecode_nth}기</span>
        <h1 className="userName">{myProfile.user_name}</h1>
      </ProfileContent>
    </ProfileContainer>
  );
}

export default ProfileColumn;

const ProfileContainer = styled.section`
  width: 1020px;
  height: 356px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 47px;
  background: #ffffff;
`;

const ProfilePhoto = styled.div`
  width: 320px;
  ${flexCenter};
  flex-direction: column;
  font-family: ${theme.fontContent};
  font-weight: 500;
  border-right: 3px solid rgba(255, 214, 108, 0.8);

  img {
    margin: 10px 0;
    border-radius: 100%;
  }

  input {
    display: none;
  }
`;

const UploadPhotoBtn = styled.div`
  width: 164px;
  height: 36px;
  margin: 10px 0;
  ${flexCenter};
  border-radius: 4px;
  color: ${theme.white};
  background: ${theme.opacityOrange};
  cursor: pointer;

  &:hover {
    transition: 0.3s ease-in-out;
    background: rgb(255, 153, 0);
  }
`;

const DeletePhotoBtn = styled(UploadPhotoBtn)`
  background-color: transparent;
  color: ${theme.orange};
  &:hover {
    transition: 0.3s ease-in-out;
    background: rgba(255, 153, 0, 0.2);
  }
`;

const ProfileContent = styled.div`
  width: 60%;
  height: 200px;
  margin-left: 40px;
  font-weight: 600;
  font-size: 28px;
  color: ${theme.fontColor};
  position: relative;

  h1 {
    margin: 10px 0;
  }

  span {
    width: 300px;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.deepGrey};
  }

  .editBtn {
    top: 1%;
    right: 0;
    position: absolute;
    border: none;
    outline: none;
    font-size: 18px;
    color: ${theme.orange};
    background-color: transparent;
  }

  .saveBtn {
    width: 80px;
    height: 10px;
    font-size: 15px;
    font-weight: 600;
    background-color: ${theme.orange};
    color: ${theme.white};
  }
`;
