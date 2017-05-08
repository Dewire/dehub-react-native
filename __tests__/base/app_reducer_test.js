/* eslint-disable no-undef */
import appReducer from '../../src/base/app_reducer';
import {
  TRACK_REQUEST_ACTIVE,
  TRACK_REQUEST_INACTIVE,
} from '../../src/base/actions';

const trackPayload = {
  actionType: 'TRACK_PAYLOAD',
  metadata: { data: 'test' },
};

const trackActive = {
  type: TRACK_REQUEST_ACTIVE,
  payload: trackPayload,
};

const trackInactive = {
  type: TRACK_REQUEST_INACTIVE,
  payload: trackPayload,
};

describe('app reducer', () => {
  describe('on track request active', () => {
    it('should return a new object with the tracking and metadata', () => {
      const newState = appReducer(undefined, trackActive);
      expect(newState.requestTrackings[trackPayload.actionType]).toBe(trackPayload.metadata);
    });
  });

  describe('on track request inactive', () => {
    it('should return a new object with the tracking and null as a value', () => {
      const stateWithTracking = appReducer(undefined, trackActive);
      const newState = appReducer(stateWithTracking, trackInactive);
      expect(newState.requestTrackings[trackPayload.actionType]).toBe(null);
    });
  });
});
