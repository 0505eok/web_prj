import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Imember {
  id: number;
  name: string;
}

const Members = () => {
  const [name, setName] = useState("");
  const [memberList, setMemberList] = useState<Imember[]>([]);

  const addName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const click = () => {
    // 멤버 등록해서 백엔드로 보내야함
    setMemberList([...memberList, { id: memberList.length, name: name }]);
    setName("");
  };

  return (
    <>
      <AddMember>
        <input type="text" onChange={addName} value={name} />
        <button onClick={click}>등록</button>
      </AddMember>
      <MemberList>
        <ul>
          {memberList.map((member: Imember) => {
            return <li key={member.id}>{member.name}</li>;
          })}
        </ul>
      </MemberList>
    </>
  );
};

export default Members;

const AddMember = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: col;
  background-color: #d1daa5;
  height: 50px;
`;

const MemberList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #d1dddd;
`;
