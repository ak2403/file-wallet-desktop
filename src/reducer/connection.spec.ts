import { ConnectionState, ConnectionTypes } from '../types/reducer';
import { ConnectionReducer } from './connection';

const initialState: ConnectionState = {
  pendingConnections: [],
  activeConnections: [],
  existingConnections: [],
};

describe('ConnectionReducer()', () => {
  it('returns the default value when no condition satisifed', () => {
    const state = ConnectionReducer(initialState, {
      type: '',
    });

    expect(state).toStrictEqual({
      pendingConnections: [],
      activeConnections: [],
      existingConnections: [],
    });
  });

  describe('pendingConnections', () => {
    it('returns new array value passed', () => {
      const state = ConnectionReducer(initialState, {
        type: ConnectionTypes.PendingConnections,
        payload: [
          {
            id: 123,
          },
        ],
      });

      expect(state.pendingConnections).toStrictEqual([
        {
          id: 123,
        },
      ]);
    });

    it('returns new array value by replacing the old value', () => {
      const newState = {
        ...initialState,
        pendingConnections: [
          {
            id: 'mock id',
            fromDevice: 'mock device',
            requestedBy: 'mock request',
            on: 'mock on',
          },
        ],
      };
      const state = ConnectionReducer(newState, {
        type: ConnectionTypes.PendingConnections,
        payload: [
          {
            id: 456,
          },
        ],
      });

      expect(state.pendingConnections).toStrictEqual([
        {
          id: 456,
        },
      ]);
    });

    it('returns empty array value when passed empty array', () => {
      const state = ConnectionReducer(initialState, {
        type: ConnectionTypes.PendingConnections,
        payload: [],
      });

      expect(state.pendingConnections).toStrictEqual([]);
    });
  });

  describe('activeConnections', () => {
    it('returns new array value passed', () => {
      const state = ConnectionReducer(initialState, {
        type: ConnectionTypes.FetchConnections,
        payload: [
          {
            id: 123,
          },
        ],
      });

      expect(state.activeConnections).toStrictEqual([
        {
          id: 123,
        },
      ]);
    });

    it('returns new array value by replacing the old value', () => {
      const newState = {
        ...initialState,
        activeConnections: [
          {
            id: 123,
          },
        ],
      };
      const state = ConnectionReducer(newState, {
        type: ConnectionTypes.FetchConnections,
        payload: [
          {
            id: 456,
          },
        ],
      });

      expect(state.activeConnections).toStrictEqual([
        {
          id: 456,
        },
      ]);
    });

    it('returns empty array value when passed empty array', () => {
      const state = ConnectionReducer(initialState, {
        type: ConnectionTypes.FetchConnections,
        payload: [],
      });

      expect(state.activeConnections).toStrictEqual([]);
    });
  });

  describe('existingConnections', () => {
    it('returns new array value passed', () => {
      const state = ConnectionReducer(initialState, {
        type: ConnectionTypes.ExistingConnections,
        payload: [
          {
            id: 123,
          },
        ],
      });

      expect(state.existingConnections).toStrictEqual([
        {
          id: 123,
        },
      ]);
    });

    it('returns new array value by replacing the old value', () => {
      const newState = {
        ...initialState,
        existingConnections: [
          {
            id: 123,
          },
        ],
      };
      const state = ConnectionReducer(newState, {
        type: ConnectionTypes.ExistingConnections,
        payload: [
          {
            id: 456,
          },
        ],
      });

      expect(state.existingConnections).toStrictEqual([
        {
          id: 456,
        },
      ]);
    });

    it('returns empty array value when passed empty array', () => {
      const state = ConnectionReducer(initialState, {
        type: ConnectionTypes.ExistingConnections,
        payload: [],
      });

      expect(state.existingConnections).toStrictEqual([]);
    });
  });
});
