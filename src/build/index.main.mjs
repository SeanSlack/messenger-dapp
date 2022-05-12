// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc2 = stdlib.T_Struct([['from', ctc0], ['message', ctc1], ['to', ctc0]]);
  return {
    Publisher: {
      messageSent: [ctc2]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_Struct([['from', ctc1], ['message', ctc2], ['to', ctc1]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const map0_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      3: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_Struct([['from', ctc1], ['message', ctc2], ['to', ctc1]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_Struct([['from', ctc1], ['message', ctc2], ['to', ctc1]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Data({
    MessengerApi_optIn0_35: ctc5,
    MessengerApi_receiveMessage0_35: ctc5,
    MessengerApi_sendMessage0_35: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v221, time: v220, didSend: v22, from: v219 } = txn1;
      
      ;
      
      const v224 = true;
      const v225 = v220;
      
      if (await (async () => {
        
        return v224;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v221, time: v220, didSend: v22, from: v219 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:37:23:application',
    fs: ['at ./index.rsh:36:15:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v224 = true;
  let v225 = v220;
  
  while (await (async () => {
    
    return v224;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v277], secs: v279, time: v278, didSend: v156, from: v276 } = txn2;
    switch (v277[0]) {
      case 'MessengerApi_optIn0_35': {
        const v280 = v277[1];
        undefined /* setApiDetails */;
        ;
        const v295 = '12345678901234567890';
        const v296 = {
          from: v276,
          message: v295,
          to: v276
          };
        await stdlib.mapSet(map0, v276, v296);
        const v297 = true;
        await txn2.getOutput('MessengerApi_optIn', 'v297', ctc8, v297);
        const cv224 = true;
        const cv225 = v278;
        
        v224 = cv224;
        v225 = cv225;
        
        continue;
        break;
        }
      case 'MessengerApi_receiveMessage0_35': {
        const v335 = v277[1];
        undefined /* setApiDetails */;
        ;
        const v360 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v276), null);
        const v361 = '12345678901234567890';
        const v362 = {
          from: v276,
          message: v361,
          to: v276
          };
        const v363 = stdlib.fromSome(v360, v362);
        await txn2.getOutput('MessengerApi_receiveMessage', 'v363', ctc3, v363);
        const cv224 = true;
        const cv225 = v278;
        
        v224 = cv224;
        v225 = cv225;
        
        continue;
        break;
        }
      case 'MessengerApi_sendMessage0_35': {
        const v390 = v277[1];
        undefined /* setApiDetails */;
        ;
        const v429 = v390[stdlib.checkedBigNumberify('./index.rsh:47:9:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, v276, v429);
        const v432 = v429.to;
        null;
        await stdlib.mapSet(map0, v432, v429);
        const v434 = true;
        await txn2.getOutput('MessengerApi_sendMessage', 'v434', ctc8, v434);
        const cv224 = true;
        const cv225 = v278;
        
        v224 = cv224;
        v225 = cv225;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _MessengerApi_optIn3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _MessengerApi_optIn3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _MessengerApi_optIn3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_Struct([['from', ctc1], ['message', ctc2], ['to', ctc1]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Data({
    MessengerApi_optIn0_35: ctc5,
    MessengerApi_receiveMessage0_35: ctc5,
    MessengerApi_sendMessage0_35: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v258 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:9:function exp)', 'at ./index.rsh:44:42:application call to "runMessengerApi_optIn0_35" (defined at: ./index.rsh:60:9:function exp)', 'at ./index.rsh:44:42:application call to [unknown function] (defined at: ./index.rsh:44:42:function exp)'],
    msg: 'in',
    who: 'MessengerApi_optIn'
    });
  const v262 = ['MessengerApi_optIn0_35', v258];
  
  const txn1 = await (ctc.sendrecv({
    args: [v262],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v277], secs: v279, time: v278, didSend: v156, from: v276 } = txn1;
      
      switch (v277[0]) {
        case 'MessengerApi_optIn0_35': {
          const v280 = v277[1];
          sim_r.txns.push({
            kind: 'api',
            who: "MessengerApi_optIn"
            });
          ;
          const v295 = '12345678901234567890';
          const v296 = {
            from: v276,
            message: v295,
            to: v276
            };
          await stdlib.simMapSet(sim_r, 0, v276, v296);
          const v297 = true;
          const v298 = await txn1.getOutput('MessengerApi_optIn', 'v297', ctc8, v297);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'MessengerApi_receiveMessage0_35': {
          const v335 = v277[1];
          
          break;
          }
        case 'MessengerApi_sendMessage0_35': {
          const v390 = v277[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v277], secs: v279, time: v278, didSend: v156, from: v276 } = txn1;
  switch (v277[0]) {
    case 'MessengerApi_optIn0_35': {
      const v280 = v277[1];
      undefined /* setApiDetails */;
      ;
      const v295 = '12345678901234567890';
      const v296 = {
        from: v276,
        message: v295,
        to: v276
        };
      await stdlib.mapSet(map0, v276, v296);
      const v297 = true;
      const v298 = await txn1.getOutput('MessengerApi_optIn', 'v297', ctc8, v297);
      if (v156) {
        stdlib.protect(ctc0, await interact.out(v280, v298), {
          at: './index.rsh:60:10:application',
          fs: ['at ./index.rsh:60:10:application call to [unknown function] (defined at: ./index.rsh:60:10:function exp)', 'at ./index.rsh:64:18:application call to "apiReturn" (defined at: ./index.rsh:60:42:function exp)', 'at ./index.rsh:60:42:application call to [unknown function] (defined at: ./index.rsh:60:42:function exp)'],
          msg: 'out',
          who: 'MessengerApi_optIn'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'MessengerApi_receiveMessage0_35': {
      const v335 = v277[1];
      return;
      break;
      }
    case 'MessengerApi_sendMessage0_35': {
      const v390 = v277[1];
      return;
      break;
      }
    }
  
  
  };
export async function _MessengerApi_receiveMessage3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _MessengerApi_receiveMessage3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _MessengerApi_receiveMessage3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_Struct([['from', ctc1], ['message', ctc2], ['to', ctc1]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Data({
    MessengerApi_optIn0_35: ctc5,
    MessengerApi_receiveMessage0_35: ctc5,
    MessengerApi_sendMessage0_35: ctc6
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v250 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:11:function exp)', 'at ./index.rsh:44:42:application call to "runMessengerApi_receiveMessage0_35" (defined at: ./index.rsh:53:11:function exp)', 'at ./index.rsh:44:42:application call to [unknown function] (defined at: ./index.rsh:44:42:function exp)'],
    msg: 'in',
    who: 'MessengerApi_receiveMessage'
    });
  const v254 = ['MessengerApi_receiveMessage0_35', v250];
  
  const txn1 = await (ctc.sendrecv({
    args: [v254],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v277], secs: v279, time: v278, didSend: v156, from: v276 } = txn1;
      
      switch (v277[0]) {
        case 'MessengerApi_optIn0_35': {
          const v280 = v277[1];
          
          break;
          }
        case 'MessengerApi_receiveMessage0_35': {
          const v335 = v277[1];
          sim_r.txns.push({
            kind: 'api',
            who: "MessengerApi_receiveMessage"
            });
          ;
          const v360 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v276), null);
          const v361 = '12345678901234567890';
          const v362 = {
            from: v276,
            message: v361,
            to: v276
            };
          const v363 = stdlib.fromSome(v360, v362);
          const v364 = await txn1.getOutput('MessengerApi_receiveMessage', 'v363', ctc3, v363);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'MessengerApi_sendMessage0_35': {
          const v390 = v277[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v277], secs: v279, time: v278, didSend: v156, from: v276 } = txn1;
  switch (v277[0]) {
    case 'MessengerApi_optIn0_35': {
      const v280 = v277[1];
      return;
      break;
      }
    case 'MessengerApi_receiveMessage0_35': {
      const v335 = v277[1];
      undefined /* setApiDetails */;
      ;
      const v360 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v276), null);
      const v361 = '12345678901234567890';
      const v362 = {
        from: v276,
        message: v361,
        to: v276
        };
      const v363 = stdlib.fromSome(v360, v362);
      const v364 = await txn1.getOutput('MessengerApi_receiveMessage', 'v363', ctc3, v363);
      if (v156) {
        stdlib.protect(ctc0, await interact.out(v335, v364), {
          at: './index.rsh:53:12:application',
          fs: ['at ./index.rsh:53:12:application call to [unknown function] (defined at: ./index.rsh:53:12:function exp)', 'at ./index.rsh:57:18:application call to "apiReturn" (defined at: ./index.rsh:53:53:function exp)', 'at ./index.rsh:53:53:application call to [unknown function] (defined at: ./index.rsh:53:53:function exp)'],
          msg: 'out',
          who: 'MessengerApi_receiveMessage'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'MessengerApi_sendMessage0_35': {
      const v390 = v277[1];
      return;
      break;
      }
    }
  
  
  };
export async function _MessengerApi_sendMessage3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _MessengerApi_sendMessage3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _MessengerApi_sendMessage3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_Struct([['from', ctc1], ['message', ctc2], ['to', ctc1]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    MessengerApi_optIn0_35: ctc6,
    MessengerApi_receiveMessage0_35: ctc6,
    MessengerApi_sendMessage0_35: ctc5
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v233 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:9:function exp)', 'at ./index.rsh:44:42:application call to "runMessengerApi_sendMessage0_35" (defined at: ./index.rsh:47:9:function exp)', 'at ./index.rsh:44:42:application call to [unknown function] (defined at: ./index.rsh:44:42:function exp)'],
    msg: 'in',
    who: 'MessengerApi_sendMessage'
    });
  const v246 = ['MessengerApi_sendMessage0_35', v233];
  
  const txn1 = await (ctc.sendrecv({
    args: [v246],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v277], secs: v279, time: v278, didSend: v156, from: v276 } = txn1;
      
      switch (v277[0]) {
        case 'MessengerApi_optIn0_35': {
          const v280 = v277[1];
          
          break;
          }
        case 'MessengerApi_receiveMessage0_35': {
          const v335 = v277[1];
          
          break;
          }
        case 'MessengerApi_sendMessage0_35': {
          const v390 = v277[1];
          sim_r.txns.push({
            kind: 'api',
            who: "MessengerApi_sendMessage"
            });
          ;
          const v429 = v390[stdlib.checkedBigNumberify('./index.rsh:47:9:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v276, v429);
          const v432 = v429.to;
          null;
          await stdlib.simMapSet(sim_r, 0, v432, v429);
          const v434 = true;
          const v435 = await txn1.getOutput('MessengerApi_sendMessage', 'v434', ctc8, v434);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v277], secs: v279, time: v278, didSend: v156, from: v276 } = txn1;
  switch (v277[0]) {
    case 'MessengerApi_optIn0_35': {
      const v280 = v277[1];
      return;
      break;
      }
    case 'MessengerApi_receiveMessage0_35': {
      const v335 = v277[1];
      return;
      break;
      }
    case 'MessengerApi_sendMessage0_35': {
      const v390 = v277[1];
      undefined /* setApiDetails */;
      ;
      const v429 = v390[stdlib.checkedBigNumberify('./index.rsh:47:9:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, v276, v429);
      const v432 = v429.to;
      null;
      await stdlib.mapSet(map0, v432, v429);
      const v434 = true;
      const v435 = await txn1.getOutput('MessengerApi_sendMessage', 'v434', ctc8, v434);
      if (v156) {
        stdlib.protect(ctc0, await interact.out(v390, v435), {
          at: './index.rsh:47:10:application',
          fs: ['at ./index.rsh:47:10:application call to [unknown function] (defined at: ./index.rsh:47:10:function exp)', 'at ./index.rsh:51:18:application call to "apiReturn" (defined at: ./index.rsh:47:57:function exp)', 'at ./index.rsh:47:57:application call to [unknown function] (defined at: ./index.rsh:47:57:function exp)'],
          msg: 'out',
          who: 'MessengerApi_sendMessage'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    }
  
  
  };
export async function MessengerApi_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for MessengerApi_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for MessengerApi_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _MessengerApi_optIn3(ctcTop, interact);}
  };
export async function MessengerApi_receiveMessage(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for MessengerApi_receiveMessage expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for MessengerApi_receiveMessage expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _MessengerApi_receiveMessage3(ctcTop, interact);}
  };
export async function MessengerApi_sendMessage(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for MessengerApi_sendMessage expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for MessengerApi_sendMessage expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _MessengerApi_sendMessage3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`MessengerApi_optIn()byte`, `MessengerApi_receiveMessage()(address,byte[20],address)`, `MessengerApi_sendMessage((address,byte[20],address))byte`],
    pure: [],
    sigs: [`MessengerApi_optIn()byte`, `MessengerApi_receiveMessage()(address,byte[20],address)`, `MessengerApi_sendMessage((address,byte[20],address))byte`]
    },
  appApproval: `BiAIAAECVavaic0Ildrz3g9UAyYEAQABAQAUMTIzNDU2Nzg5MDEyMzQ1Njc4OTAiNQAxGEEB6ypkSSJbNQGBCFs1AjEZIxJBAAkxACglr2ZCAbg2GgAXSUEATiI1BCM1BkkhBAxAACtJIQUMQAASIQUSRCo1/yk0/1AhBq9QQgA+IQQSRCo1/yg0/1AhBq9QQgAsgfG3gcEHEkQ2GgE1/4ABAjT/UEIAFjYaAhc1BDYaAzYaARdJJAxAANkkEkQhBzQBEkQ0BEkiEkw0AhIRREk1BTX/gATn/9VYNP9QsDT/IlVJIwxAAIlJJAxAAEAkEkQ0/1cBVDX+NP41/TEAKCk0/VBmgARyaO49NP1QsDT9VzQgKCk0/VBmgAkAAAAAAAABsgGwKTUHIzIGQgCNSIAIAAAAAAAAAWsxACtQMQBQMQCIAOVJNf5XAVQ0/iJVTVCwMQArUDEAUDEAiADMSTX+VwFUNP4iVU01ByMyBkIASkgxACgpMQArUDEAUFBmgAkAAAAAAAABKQGwKTUHIzIGQgAnIhJEIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rCBoI0GiACDIzIGQgAANf9JNf5BAAshBzUBMgY1AkIAH0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABEglr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 85,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:67:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:44:42:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Admin": Admin,
  "MessengerApi_optIn": MessengerApi_optIn,
  "MessengerApi_receiveMessage": MessengerApi_receiveMessage,
  "MessengerApi_sendMessage": MessengerApi_sendMessage
  };
export const _APIs = {
  MessengerApi: {
    optIn: MessengerApi_optIn,
    receiveMessage: MessengerApi_receiveMessage,
    sendMessage: MessengerApi_sendMessage
    }
  };
