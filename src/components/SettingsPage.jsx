import React, { Fragment } from 'react';

import { useRest } from '../hooks/useRest';
import DatasetSettings from './DatasetSettings';
import Error from './Error';

const SettingsPage = () => {
  const { data: datasets, hasError, isLoading } = useRest(
    'http://localhost:4010/datasets',
    [],
  );

  return (
    <Fragment>
      <h1>Settings</h1>
      <div className="clearfix gutter-condensed">
        <div className="col-12 float-left">
          {hasError && <Error />}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <DatasetSettings datasets={datasets} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default SettingsPage;
