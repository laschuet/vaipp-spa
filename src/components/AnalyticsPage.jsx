import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import {
  SETTINGS_DATASET_NAME_KEY,
  SETTINGS_DATASET_NAME_VALUE_DEFAULT,
} from '../constants/settings';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useRest } from '../hooks/useRest';
import ContributionList from './ContributionList';
import Error from './Error';

const AnalyticsPage = () => {
  const [datasetName] = useLocalStorage(
    SETTINGS_DATASET_NAME_KEY,
    SETTINGS_DATASET_NAME_VALUE_DEFAULT,
  );
  const { data: contributions, hasError, isLoading } = useRest(
    `http://localhost:4010/datasets/${datasetName}/contributions`,
    [],
  );

  return (
    <Fragment>
      <h1>Analytics</h1>
      {hasError && <Error />}
      {datasetName === '' && (
        <div>
          No dataset set. Go to <NavLink to="/settings">settings</NavLink>.
        </div>
      )}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="clearfix gutter-condensed">
          <div className="col-6 float-left">
            <ContributionList contributions={contributions} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AnalyticsPage;
