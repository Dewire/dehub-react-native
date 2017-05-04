/* eslint-disable no-undef */
import appReducer from '../../src/store/app_reducer';
import {
  TRACK_REQUEST_ACTIVE,
  TRACK_REQUEST_INACTIVE,
  setNavigator,
} from '../../src/store/actions';

const TRACK_PAYLOAD = {
  actionType: 'TRACK_PAYLOAD',
  metadata: { data: 'test' },
};

const trackActive = {
  type: TRACK_REQUEST_ACTIVE,
  payload: TRACK_PAYLOAD,
};

const trackInactive = {
  type: TRACK_REQUEST_INACTIVE,
  payload: TRACK_PAYLOAD,
};

describe('app reducer', () => {
  describe('on track request active', () => {
    it('should return a new object with the tracking and metadata', () => {
      const newState = appReducer(undefined, trackActive);
      expect(newState.requestTrackings[TRACK_PAYLOAD.actionType]).toBe(TRACK_PAYLOAD.metadata);
    });
  });

  describe('on track request inactive', () => {
    it('should return a new object with the tracking and null as a value', () => {
      const stateWithTracking = appReducer(undefined, trackActive);
      const newState = appReducer(stateWithTracking, trackInactive);
      expect(newState.requestTrackings[TRACK_PAYLOAD.actionType]).toBe(null);
    });
  });

  describe('on set navigator', () => {
    it('should return a new object with the navigator set', () => {
      const navigator = { };
      const newState = appReducer(undefined, setNavigator(navigator));
      expect(newState.navigator).toBe(navigator);
    });
  });
});
