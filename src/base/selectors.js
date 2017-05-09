
import { createSelector } from 'reselect';

export const requestTrackingsSelector = state => state.app.requestTrackings;

export const requestTrackingSelector = type => (
  createSelector(
    requestTrackingsSelector,
    trackings => trackings[type],
  )
);

export const isActiveRequestSelector = type => (
  createSelector(
    requestTrackingSelector(type),
    tracking => !!tracking,
  )
);

export const isActiveRefreshRequestSelector = type => (
  createSelector(
    requestTrackingSelector(type),
    tracking => !!(tracking && tracking.isRefresh),
  )
);

export const fetchedDataSelector = key => (
  state => state.fetches[key]
);

export const isActiveBackgroundRequestWithNoFetchedDataSelector = (requestType, fetchKey) => (
  createSelector(
    requestTrackingSelector(requestType),
    fetchedDataSelector(fetchKey),
    (tracking, data) => (
      (tracking && !data) ? !tracking.isRefresh : false
    ),
  )
);
