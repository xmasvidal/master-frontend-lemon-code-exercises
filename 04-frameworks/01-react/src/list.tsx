import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, TextField, TableContainer, Table, TableHead, 
  TableRow, TableCell, TableBody, Paper, Avatar } from '@mui/material';


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
      <h2>Hello from List page</h2>
      <div>
        <h3>Organization: {organization}</h3>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" 
        value={organization} onChange={(e) => setOrganization(e.target.value)}/>
        <Button variant="contained" onClick={searchOrganization}>Search</Button>
      </div>
      <br/>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={searchFirstPage} disabled={hasFirstPage()}>first</Button>
        <Button onClick={searchPreviousPage} disabled={hasPreviousPage()}>previous</Button>
        <Button onClick={searchNextPage} disabled={hasNextPage()}>next</Button>
        <Button onClick={searchLastPage} disabled={hasLastPage()}>last</Button>
      </ButtonGroup>

    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>Avatar</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => (
            <TableRow
              key={member.id}
            >
              <TableCell component="th" scope="row">
                <Avatar alt={member.login} src={member.avatar_url} />
              </TableCell>
              <TableCell align="right">{member.id}</TableCell>
              <TableCell align="right"><Link to={`/detail/${member.login}`}>{member.login}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
