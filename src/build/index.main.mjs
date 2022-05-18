// Automatically generated with Reach 0.1.10 (c0bba7d2)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c0bba7d2)';
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
  const ctc2 = stdlib.T_Struct([['from', ctc0], ['username', ctc1], ['message', ctc1], ['to', ctc0]]);
  const ctc3 = stdlib.T_Struct([['addr', ctc0], ['username', ctc1]]);
  return {
    Publisher: {
      messageSent: [ctc2],
      newUser: [ctc3]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_Struct([['from', ctc1], ['username', ctc2], ['message', ctc2], ['to', ctc1]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Struct([['addr', ctc1], ['username', ctc2]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc6;
  
  
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
  const ctc3 = stdlib.T_Struct([['from', ctc1], ['username', ctc2], ['message', ctc2], ['to', ctc1]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Struct([['addr', ctc1], ['username', ctc2]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc4, ctc6]);
  return {
    mapDataTy: ctc7
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
  const ctc3 = stdlib.T_Struct([['from', ctc1], ['username', ctc2], ['message', ctc2], ['to', ctc1]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Struct([['addr', ctc1], ['username', ctc2]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc5]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    MessengerApi_optIn0_34: ctc7,
    MessengerApi_sendMessage0_34: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v192, time: v191, didSend: v22, from: v190 } = txn1;
      
      ;
      
      const v195 = true;
      const v196 = v191;
      
      if (await (async () => {
        
        return v195;})()) {
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
  const {data: [], secs: v192, time: v191, didSend: v22, from: v190 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:43:23:application',
    fs: ['at ./index.rsh:42:15:application call to [unknown function] (defined at: ./index.rsh:42:19:function exp)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v195 = true;
  let v196 = v191;
  
  while (await (async () => {
    
    return v195;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v245], secs: v247, time: v246, didSend: v137, from: v244 } = txn2;
    switch (v245[0]) {
      case 'MessengerApi_optIn0_34': {
        const v248 = v245[1];
        undefined /* setApiDetails */;
        ;
        const v260 = v248[stdlib.checkedBigNumberify('./index.rsh:60:9:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map1, v244, v260);
        null;
        const v263 = true;
        await txn2.getOutput('MessengerApi_optIn', 'v263', ctc10, v263);
        const cv195 = true;
        const cv196 = v246;
        
        v195 = cv195;
        v196 = cv196;
        
        continue;
        break;
        }
      case 'MessengerApi_sendMessage0_34': {
        const v292 = v245[1];
        undefined /* setApiDetails */;
        ;
        const v318 = v292[stdlib.checkedBigNumberify('./index.rsh:54:9:spread', stdlib.UInt_max, '0')];
        const v322 = v318.to;
        null;
        await stdlib.mapSet(map0, v322, v318);
        const v324 = true;
        await txn2.getOutput('MessengerApi_sendMessage', 'v324', ctc10, v324);
        const cv195 = true;
        const cv196 = v246;
        
        v195 = cv195;
        v196 = cv196;
        
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
  const ctc3 = stdlib.T_Struct([['from', ctc1], ['username', ctc2], ['message', ctc2], ['to', ctc1]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Struct([['addr', ctc1], ['username', ctc2]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc5]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    MessengerApi_optIn0_34: ctc7,
    MessengerApi_sendMessage0_34: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v223 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:9:function exp)', 'at ./index.rsh:51:42:application call to "runMessengerApi_optIn0_34" (defined at: ./index.rsh:60:9:function exp)', 'at ./index.rsh:51:42:application call to [unknown function] (defined at: ./index.rsh:51:42:function exp)'],
    msg: 'in',
    who: 'MessengerApi_optIn'
    });
  const v234 = ['MessengerApi_optIn0_34', v223];
  
  const txn1 = await (ctc.sendrecv({
    args: [v234],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v245], secs: v247, time: v246, didSend: v137, from: v244 } = txn1;
      
      switch (v245[0]) {
        case 'MessengerApi_optIn0_34': {
          const v248 = v245[1];
          sim_r.txns.push({
            kind: 'api',
            who: "MessengerApi_optIn"
            });
          ;
          const v260 = v248[stdlib.checkedBigNumberify('./index.rsh:60:9:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, v244, v260);
          null;
          const v263 = true;
          const v264 = await txn1.getOutput('MessengerApi_optIn', 'v263', ctc10, v263);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'MessengerApi_sendMessage0_34': {
          const v292 = v245[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v245], secs: v247, time: v246, didSend: v137, from: v244 } = txn1;
  switch (v245[0]) {
    case 'MessengerApi_optIn0_34': {
      const v248 = v245[1];
      undefined /* setApiDetails */;
      ;
      const v260 = v248[stdlib.checkedBigNumberify('./index.rsh:60:9:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, v244, v260);
      null;
      const v263 = true;
      const v264 = await txn1.getOutput('MessengerApi_optIn', 'v263', ctc10, v263);
      if (v137) {
        stdlib.protect(ctc0, await interact.out(v248, v264), {
          at: './index.rsh:60:10:application',
          fs: ['at ./index.rsh:60:10:application call to [unknown function] (defined at: ./index.rsh:60:10:function exp)', 'at ./index.rsh:63:18:application call to "apiReturn" (defined at: ./index.rsh:60:52:function exp)', 'at ./index.rsh:60:52:application call to [unknown function] (defined at: ./index.rsh:60:52:function exp)'],
          msg: 'out',
          who: 'MessengerApi_optIn'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'MessengerApi_sendMessage0_34': {
      const v292 = v245[1];
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
  const ctc3 = stdlib.T_Struct([['from', ctc1], ['username', ctc2], ['message', ctc2], ['to', ctc1]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Struct([['addr', ctc1], ['username', ctc2]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Data({
    MessengerApi_optIn0_34: ctc8,
    MessengerApi_sendMessage0_34: ctc7
    });
  const ctc10 = stdlib.T_Bool;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v204 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:9:function exp)', 'at ./index.rsh:51:42:application call to "runMessengerApi_sendMessage0_34" (defined at: ./index.rsh:54:9:function exp)', 'at ./index.rsh:51:42:application call to [unknown function] (defined at: ./index.rsh:51:42:function exp)'],
    msg: 'in',
    who: 'MessengerApi_sendMessage'
    });
  const v219 = ['MessengerApi_sendMessage0_34', v204];
  
  const txn1 = await (ctc.sendrecv({
    args: [v219],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v245], secs: v247, time: v246, didSend: v137, from: v244 } = txn1;
      
      switch (v245[0]) {
        case 'MessengerApi_optIn0_34': {
          const v248 = v245[1];
          
          break;
          }
        case 'MessengerApi_sendMessage0_34': {
          const v292 = v245[1];
          sim_r.txns.push({
            kind: 'api',
            who: "MessengerApi_sendMessage"
            });
          ;
          const v318 = v292[stdlib.checkedBigNumberify('./index.rsh:54:9:spread', stdlib.UInt_max, '0')];
          const v322 = v318.to;
          null;
          await stdlib.simMapSet(sim_r, 0, v322, v318);
          const v324 = true;
          const v325 = await txn1.getOutput('MessengerApi_sendMessage', 'v324', ctc10, v324);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v245], secs: v247, time: v246, didSend: v137, from: v244 } = txn1;
  switch (v245[0]) {
    case 'MessengerApi_optIn0_34': {
      const v248 = v245[1];
      return;
      break;
      }
    case 'MessengerApi_sendMessage0_34': {
      const v292 = v245[1];
      undefined /* setApiDetails */;
      ;
      const v318 = v292[stdlib.checkedBigNumberify('./index.rsh:54:9:spread', stdlib.UInt_max, '0')];
      const v322 = v318.to;
      null;
      await stdlib.mapSet(map0, v322, v318);
      const v324 = true;
      const v325 = await txn1.getOutput('MessengerApi_sendMessage', 'v324', ctc10, v324);
      if (v137) {
        stdlib.protect(ctc0, await interact.out(v292, v325), {
          at: './index.rsh:54:10:application',
          fs: ['at ./index.rsh:54:10:application call to [unknown function] (defined at: ./index.rsh:54:10:function exp)', 'at ./index.rsh:57:18:application call to "apiReturn" (defined at: ./index.rsh:54:57:function exp)', 'at ./index.rsh:54:57:application call to [unknown function] (defined at: ./index.rsh:54:57:function exp)'],
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
    impure: [`MessengerApi_optIn((address,byte[20]))byte`, `MessengerApi_sendMessage((address,byte[20],byte[20],address))byte`],
    pure: [],
    sigs: [`MessengerApi_optIn((address,byte[20]))byte`, `MessengerApi_sendMessage((address,byte[20],byte[20],address))byte`]
    },
  appApproval: `BiAGAAGeAbWr5scNAgMmAwEBAQAAIjUAMRhBAd4qZEkiWzUBgQhbNQIxGSMSQQAbMQAkr0sBKUsCVwB/ZksBKEsCV38fZkhIQgGZNhoAF0lBADMiNQQjNQZJJQxAAA8lEkQ2GgE1/yg0/1BCADCB8Zqt3QwSRDYaATX/KTT/UIE0r1BCABg2GgIXNQQ2GgM2GgEXSSEEDEAA1CEEEkQhBTQBEkQ0BEkiEkw0AhIRREk1BTX/gAQSgbN9NP9QsDT/IlVAAFE0/1cBNDX+NP41/TEAMQCIAS0oNP1QNfxXAGk0/FBLASlLAlcAf2ZLAShLAld/H2ZISIAE5h135jT9ULCACQAAAAAAAAEHAbAoNQcjMgZCAH80/1cBaDX+NP41/YAEEigK9jT9ULA0/VdIIDT9V0ggiADMKDT9UDX8V2k1NPxMUEsBKUsCVwB/ZksBKEsCV38fZkhIgAkAAAAAAAABRAGwKDUHIzIGQgAnIhJEgaCNBogAoiI0ARJENARJIhJMNAISEUSABF8Nq/qwIzIGQgAANf9JNf5BAAshBTUBMgY1AkIAH0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABEgkr4lJKWJLAShiUExIiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 2,
  mapDataSize: 158,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:66:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:51:42:after expr stmt semicolon',
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
  "MessengerApi_sendMessage": MessengerApi_sendMessage
  };
export const _APIs = {
  MessengerApi: {
    optIn: MessengerApi_optIn,
    sendMessage: MessengerApi_sendMessage
    }
  };
