
import { createSelector } from 'reselect';

export const requestTrackingSelector = state => state.app.requestTrackings;

export const requestActiveSelector = type => (
  createSelector(
    requestTrackingSelector,
    trackings => trackings[type],
  )
);

export const refreshRequestActiveSelector = type => (
  createSelector(
    requestActiveSelector(type),
    request => !!(request && request.isRefresh),
  )
);

export const fetchedDataSelector = key => (
  state => state.fetches[key]
);

export const backgroundRequestActiveWithNoFetchDataSelector = (requestType, fetchKey) => (
  createSelector(
    requestActiveSelector(requestType),
    fetchedDataSelector(fetchKey),
    (request, data) => (
      (request && !data) ? !request.isRefresh : false
    ),
  )
);
