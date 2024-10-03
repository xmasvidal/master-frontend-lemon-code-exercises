import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {

  const getStoredOrganization = () => {

    let storedOrganization = window.sessionStorage.getItem("storedOrganization");

    if (storedOrganization == undefined) {
      return "lemoncode";
    }

    return storedOrganization;
  }

  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState<string>(getStoredOrganization());

  const searchOrg = () => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));

    window.sessionStorage.setItem("storedOrganization", organization);
  }

  React.useEffect(() => {
    searchOrg();
  }, []);

  return (
    <>
      <h2>Hello from List page</h2>+{" "}
      <div>
        <h3>Organization: {organization}</h3>
        <input
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
        ></input>
        <button onClick={searchOrg}>Search</button>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.length > 0 && members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
