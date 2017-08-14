
export default {

  namespace: 'remoteCoop_workOverview',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen((location) => {
        /*debugger
        if (location.pathname === '/user') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }*/
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
