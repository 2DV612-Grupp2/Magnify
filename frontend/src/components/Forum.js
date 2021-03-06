import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import SearchContainer from '../containers/SearchContainer';
import ThreadList from '../components/thread/ThreadList';
import UnseenThreadList from './thread/UnseenThreadList';

const Forum = ({
  threads,
  unseenThreads,
  username,
  isWaiting,
  filterBy,
}) => (
  <div>
    <h1>Forum</h1>
    {
    username === null ? undefined : <Link to="/createThread"><RaisedButton label="Create new thread" primary /></Link>
    }
    <SearchContainer style={{ display: 'inline-block' }} />
    { unseenThreads.length !== 0 && filterBy === '' ?
      <UnseenThreadList
        threads={unseenThreads}
        isWaiting={isWaiting}
      /> : undefined
    }
    <ThreadList
      threads={threads}
      isWaiting={isWaiting}
    />
  </div>
);

Forum.propTypes = ({
  threads: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.any,
    createdAt: PropTypes.string,
  })),
  unseenThreads: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.any,
    createdAt: PropTypes.string,
  })),
  username: PropTypes.string,
  isWaiting: PropTypes.bool.isRequired,
  filterBy: PropTypes.string.isRequired,
});

Forum.defaultProps = ({
  threads: [],
  unseenThreads: [],
  username: null,
});

export default Forum;
