import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repositories,
  CalendarHeading,
  Tab,
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepositoryCard from '../../components/RepositoryCard';
import RandomCalendar from '../../components/RandomCalendar';
import TabContent from '../../components/TabContent';

export default function Profile() {
  const { username = 'oraphadev' } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return false;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();
      const shuffledRepos = repos.sort(() => 0.5 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 6);

      setData({
        user,
        repos: slicedRepos,
      });

      return true;
    });
  }, []);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />

          <TabContent number={data.user?.public_repos} />
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            avatarUrl={data.user.avatar_url}
            blog={data.user.blog}
            company={data.user.company}
            email={data.user.email}
            followers={data.user.followers}
            following={data.user.following}
            location={data.user.location}
            name={data.user.name}
            username={data.user.login}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent number={data.user?.public_repos} />

            <span className="line" />
          </Tab>

          <Repositories>
            <h2>
              Popular repositories
            </h2>

            <div>
              {data.repos.map((repo) => (
                <RepositoryCard
                  key={repo.name}
                  description={repo.description}
                  forks={repo.forks}
                  language={repo.language}
                  repositoryName={repo.name}
                  stars={repo.stars}
                  username={repo.owner.login}
                />
              ))}
            </div>
          </Repositories>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}
