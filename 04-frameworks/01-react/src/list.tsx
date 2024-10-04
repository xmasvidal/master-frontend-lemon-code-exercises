import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

interface PaginationLink {
  first: string,
  previous: string,
  next: string,
  last: string
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
  const [paginationLink, setPaginationLink] = React.useState<PaginationLink>();

  function parsePaginationLinks(header: string): PaginationLink {
    const links: PaginationLink = {
      first: undefined,
      previous: undefined,
      next: undefined,
      last: undefined
    };

    if (header === null) {
      return links;
    }
  
    const parts = header.split(', ');
  
    parts.forEach(part => {
      const section = part.split(';');
      if (section.length !== 2) {
        return;
      }
  
      const url = section[0].replace(/<(.*)>/, '$1').trim();
      const name = section[1].replace(/rel="(.*)"/, '$1').trim();
  
      if (name === 'first') {
        links.first = url;
      } else if (name === 'prev') {
        links.previous = url;
      } else if (name === 'next') {
        links.next = url;
      } else if (name === 'last') {
        links.last = url;
      }
    });
  
    return links;
  }

  const searchPage = (link :string) => {
    fetch(link)
      .then((response) => {
        let link = response.headers.get('Link');
        setPaginationLink(parsePaginationLinks(link));
        return response.json();
      })
      .then((json) => setMembers(json));
  }

  const searchOrganization = () => {
    searchPage(`https://api.github.com/orgs/${organization}/members?page=1&per_page=5`)
    window.sessionStorage.setItem("storedOrganization", organization);
  }
  

  React.useEffect(() => {
    searchOrganization();
  }, []);

  const searchFirstPage = () => {
    searchPage(paginationLink.first);
  }

  const searchPreviousPage = () => {
    searchPage(paginationLink.previous);
  }

  const searchNextPage = () => {
    searchPage(paginationLink.next);
  }

  const searchLastPage = () => {
    searchPage(paginationLink.last);
  }

  const hasFirstPage = () => {
    return paginationLink && paginationLink.first === undefined;
  }

  const hasPreviousPage = () => {
    return paginationLink && paginationLink.previous === undefined;
  }

  const hasNextPage = () => {
    return paginationLink && paginationLink.next === undefined;
  }

  const hasLastPage = () => {
    return paginationLink && paginationLink.last === undefined;
  }

  return (
    <>
      <h2>Hello from List page</h2>+{" "}
      <div>
        <h3>Organization: {organization}</h3>
        <input
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
        ></input>
        <button onClick={searchOrganization}>Search</button>
      </div>
      <div className="paginator">
        <button onClick={searchFirstPage} disabled={hasFirstPage()}>first</button>
        <button onClick={searchPreviousPage} disabled={hasPreviousPage()}>previous</button>
        <button onClick={searchNextPage} disabled={hasNextPage()}>next</button>
        <button onClick={searchLastPage} disabled={hasLastPage()}>last</button>
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
