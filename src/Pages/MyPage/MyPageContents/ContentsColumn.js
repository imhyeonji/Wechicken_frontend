import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theme, { flexCenter } from "../../../Styles/Theme";
import EditForm from "./Components/EditForm";
import OptInOrOutBtn from "./Components/OptInOrOutBtn";

function ContentsColumn({ item, myProfile }) {
  const [selected, setSelected] = useState({});
  const [isEdit, setisEdit] = useState(false);
  const [contentValue, setContentValue] = useState("");

  useEffect(() => {
    setContentValue(myProfile.blog_address);
  }, [myProfile.blog_address]);

  const activeEditForm = () => {
    setisEdit(!isEdit);
  };

  const handleContentValue = (e) => {
    setContentValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setisEdit(!isEdit);
    e.preventDefault();
  };

  const contentArea = {
    my_blog: (
      <>
        {isEdit ? (
          <EditForm
            contentValue={contentValue}
            handleContentValue={handleContentValue}
            handleSubmit={handleSubmit}
            item={item}
          />
        ) : (
          <>
            <span className="item">{contentValue}</span>
            <button onClick={activeEditForm} className="editBtn">
              수정
            </button>
          </>
        )}
      </>
    ),
    email_address: <span className="item">{myProfile.gmail}</span>,
    opt_in_or_out: (
      <OptInOrOutBtn
        selected={selected}
        toggleSelected={() => {
          setSelected(!selected);
        }}
      />
    ),
    withdrawal: <WithdrawalBtn>회원 탈퇴</WithdrawalBtn>,
  };

  return (
    <>
      <ContentsColumnContainer>
        <div className="wrapper">
          <h3 className="title">{item.title}</h3>
          <div>{contentArea[item.id]}</div>
        </div>
        <span className="description">{item.description}</span>
      </ContentsColumnContainer>
    </>
  );
}

export default ContentsColumn;

const ContentsColumnContainer = styled.div`
  width: 950px;
  height: 107px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .wrapper {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;

    div {
      width: 800px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 18px;
        color: ${theme.deepGrey};
      }

      .editBtn {
        ${flexCenter};
        font-size: 16px;
        font-weight: 400;
        color: ${theme.orange};
        background-color: transparent;
        border: none;
      }
    }
  }

  .title {
    width: 200px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    color: ${theme.orange};
  }

  .description {
    font-size: 13px;
    color: ${theme.deepGrey};
  }
`;

const WithdrawalBtn = styled.button`
  width: 88px;
  height: 33px;
  border: none;
  ${flexCenter};
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  background-color: ${theme.vermilion};
  color: ${theme.white};

  &:hover {
    opacity: 0.8;
  }
`;