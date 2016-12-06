// ./client/src/components/loading-indicator.jsx
import React from 'react';

export default class LoadingIndicator extends React.Component {
  render() {
    return (
      <div>
        <img src="/assets/loading.gif" alt="loading-indicator" />
      </div>
    );
  }
}
