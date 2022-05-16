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
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Data({
    MessengerApi_getUsername0_41: ctc7,
    MessengerApi_optIn0_41: ctc8,
    MessengerApi_receiveMessage0_41: ctc7,
    MessengerApi_sendMessage0_41: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  
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
  
  
  const v294 = stdlib.protect(ctc2, interact.groupName, 'for Admin\'s interact field groupName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v294],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v298], secs: v300, time: v299, didSend: v27, from: v297 } = txn1;
      
      ;
      
      const v303 = true;
      const v304 = v299;
      
      if (await (async () => {
        
        return v303;})()) {
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
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v298], secs: v300, time: v299, didSend: v27, from: v297 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:50:23:application',
    fs: ['at ./index.rsh:49:15:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v303 = true;
  let v304 = v299;
  
  while (await (async () => {
    
    return v303;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v377], secs: v379, time: v378, didSend: v208, from: v376 } = txn2;
    switch (v377[0]) {
      case 'MessengerApi_getUsername0_41': {
        const v380 = v377[1];
        undefined /* setApiDetails */;
        ;
        const v398 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v376), null);
        const v399 = '12345678901234567890';
        const v400 = {
          addr: v376,
          username: v399
          };
        const v401 = stdlib.fromSome(v398, v400);
        await txn2.getOutput('MessengerApi_getUsername', 'v401', ctc5, v401);
        const cv303 = true;
        const cv304 = v378;
        
        v303 = cv303;
        v304 = cv304;
        
        continue;
        break;
        }
      case 'MessengerApi_optIn0_41': {
        const v459 = v377[1];
        undefined /* setApiDetails */;
        ;
        const v490 = v459[stdlib.checkedBigNumberify('./index.rsh:83:9:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map1, v376, v490);
        null;
        const v493 = true;
        await txn2.getOutput('MessengerApi_optIn', 'v493', ctc11, v493);
        const cv303 = true;
        const cv304 = v378;
        
        v303 = cv303;
        v304 = cv304;
        
        continue;
        break;
        }
      case 'MessengerApi_receiveMessage0_41': {
        const v538 = v377[1];
        undefined /* setApiDetails */;
        ;
        const v583 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v376), null);
        const v584 = '12345678901234567890';
        const v586 = {
          from: v376,
          message: v584,
          to: v376,
          username: v584
          };
        const v587 = stdlib.fromSome(v583, v586);
        await txn2.getOutput('MessengerApi_receiveMessage', 'v587', ctc3, v587);
        const cv303 = true;
        const cv304 = v378;
        
        v303 = cv303;
        v304 = cv304;
        
        continue;
        break;
        }
      case 'MessengerApi_sendMessage0_41': {
        const v617 = v377[1];
        undefined /* setApiDetails */;
        ;
        const v678 = v617[stdlib.checkedBigNumberify('./index.rsh:61:9:spread', stdlib.UInt_max, '0')];
        const v682 = v678.to;
        null;
        await stdlib.mapSet(map0, v682, v678);
        const v684 = true;
        await txn2.getOutput('MessengerApi_sendMessage', 'v684', ctc11, v684);
        const cv303 = true;
        const cv304 = v378;
        
        v303 = cv303;
        v304 = cv304;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _MessengerApi_getUsername3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _MessengerApi_getUsername3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _MessengerApi_getUsername3 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Data({
    MessengerApi_getUsername0_41: ctc7,
    MessengerApi_optIn0_41: ctc8,
    MessengerApi_receiveMessage0_41: ctc7,
    MessengerApi_sendMessage0_41: ctc9
    });
  
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
  const v339 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:9:function exp)', 'at ./index.rsh:58:42:application call to "runMessengerApi_getUsername0_41" (defined at: ./index.rsh:76:9:function exp)', 'at ./index.rsh:58:42:application call to [unknown function] (defined at: ./index.rsh:58:42:function exp)'],
    msg: 'in',
    who: 'MessengerApi_getUsername'
    });
  const v343 = ['MessengerApi_getUsername0_41', v339];
  
  const txn1 = await (ctc.sendrecv({
    args: [v343],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v377], secs: v379, time: v378, didSend: v208, from: v376 } = txn1;
      
      switch (v377[0]) {
        case 'MessengerApi_getUsername0_41': {
          const v380 = v377[1];
          sim_r.txns.push({
            kind: 'api',
            who: "MessengerApi_getUsername"
            });
          ;
          const v398 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v376), null);
          const v399 = '12345678901234567890';
          const v400 = {
            addr: v376,
            username: v399
            };
          const v401 = stdlib.fromSome(v398, v400);
          const v402 = await txn1.getOutput('MessengerApi_getUsername', 'v401', ctc5, v401);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'MessengerApi_optIn0_41': {
          const v459 = v377[1];
          
          break;
          }
        case 'MessengerApi_receiveMessage0_41': {
          const v538 = v377[1];
          
          break;
          }
        case 'MessengerApi_sendMessage0_41': {
          const v617 = v377[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v377], secs: v379, time: v378, didSend: v208, from: v376 } = txn1;
  switch (v377[0]) {
    case 'MessengerApi_getUsername0_41': {
      const v380 = v377[1];
      undefined /* setApiDetails */;
      ;
      const v398 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v376), null);
      const v399 = '12345678901234567890';
      const v400 = {
        addr: v376,
        username: v399
        };
      const v401 = stdlib.fromSome(v398, v400);
      const v402 = await txn1.getOutput('MessengerApi_getUsername', 'v401', ctc5, v401);
      if (v208) {
        stdlib.protect(ctc0, await interact.out(v380, v402), {
          at: './index.rsh:76:10:application',
          fs: ['at ./index.rsh:76:10:application call to [unknown function] (defined at: ./index.rsh:76:10:function exp)', 'at ./index.rsh:80:18:application call to "apiReturn" (defined at: ./index.rsh:76:48:function exp)', 'at ./index.rsh:76:48:application call to [unknown function] (defined at: ./index.rsh:76:48:function exp)'],
          msg: 'out',
          who: 'MessengerApi_getUsername'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'MessengerApi_optIn0_41': {
      const v459 = v377[1];
      return;
      break;
      }
    case 'MessengerApi_receiveMessage0_41': {
      const v538 = v377[1];
      return;
      break;
      }
    case 'MessengerApi_sendMessage0_41': {
      const v617 = v377[1];
      return;
      break;
      }
    }
  
  
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
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Data({
    MessengerApi_getUsername0_41: ctc8,
    MessengerApi_optIn0_41: ctc7,
    MessengerApi_receiveMessage0_41: ctc8,
    MessengerApi_sendMessage0_41: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  
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
  const v347 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:83:9:function exp)', 'at ./index.rsh:58:42:application call to "runMessengerApi_optIn0_41" (defined at: ./index.rsh:83:9:function exp)', 'at ./index.rsh:58:42:application call to [unknown function] (defined at: ./index.rsh:58:42:function exp)'],
    msg: 'in',
    who: 'MessengerApi_optIn'
    });
  const v358 = ['MessengerApi_optIn0_41', v347];
  
  const txn1 = await (ctc.sendrecv({
    args: [v358],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:83:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v377], secs: v379, time: v378, didSend: v208, from: v376 } = txn1;
      
      switch (v377[0]) {
        case 'MessengerApi_getUsername0_41': {
          const v380 = v377[1];
          
          break;
          }
        case 'MessengerApi_optIn0_41': {
          const v459 = v377[1];
          sim_r.txns.push({
            kind: 'api',
            who: "MessengerApi_optIn"
            });
          ;
          const v490 = v459[stdlib.checkedBigNumberify('./index.rsh:83:9:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, v376, v490);
          null;
          const v493 = true;
          const v494 = await txn1.getOutput('MessengerApi_optIn', 'v493', ctc11, v493);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'MessengerApi_receiveMessage0_41': {
          const v538 = v377[1];
          
          break;
          }
        case 'MessengerApi_sendMessage0_41': {
          const v617 = v377[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v377], secs: v379, time: v378, didSend: v208, from: v376 } = txn1;
  switch (v377[0]) {
    case 'MessengerApi_getUsername0_41': {
      const v380 = v377[1];
      return;
      break;
      }
    case 'MessengerApi_optIn0_41': {
      const v459 = v377[1];
      undefined /* setApiDetails */;
      ;
      const v490 = v459[stdlib.checkedBigNumberify('./index.rsh:83:9:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, v376, v490);
      null;
      const v493 = true;
      const v494 = await txn1.getOutput('MessengerApi_optIn', 'v493', ctc11, v493);
      if (v208) {
        stdlib.protect(ctc0, await interact.out(v459, v494), {
          at: './index.rsh:83:10:application',
          fs: ['at ./index.rsh:83:10:application call to [unknown function] (defined at: ./index.rsh:83:10:function exp)', 'at ./index.rsh:86:18:application call to "apiReturn" (defined at: ./index.rsh:83:52:function exp)', 'at ./index.rsh:83:52:application call to [unknown function] (defined at: ./index.rsh:83:52:function exp)'],
          msg: 'out',
          who: 'MessengerApi_optIn'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'MessengerApi_receiveMessage0_41': {
      const v538 = v377[1];
      return;
      break;
      }
    case 'MessengerApi_sendMessage0_41': {
      const v617 = v377[1];
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
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Data({
    MessengerApi_getUsername0_41: ctc7,
    MessengerApi_optIn0_41: ctc8,
    MessengerApi_receiveMessage0_41: ctc7,
    MessengerApi_sendMessage0_41: ctc9
    });
  
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
  const v331 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:9:function exp)', 'at ./index.rsh:58:42:application call to "runMessengerApi_receiveMessage0_41" (defined at: ./index.rsh:67:9:function exp)', 'at ./index.rsh:58:42:application call to [unknown function] (defined at: ./index.rsh:58:42:function exp)'],
    msg: 'in',
    who: 'MessengerApi_receiveMessage'
    });
  const v335 = ['MessengerApi_receiveMessage0_41', v331];
  
  const txn1 = await (ctc.sendrecv({
    args: [v335],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v377], secs: v379, time: v378, didSend: v208, from: v376 } = txn1;
      
      switch (v377[0]) {
        case 'MessengerApi_getUsername0_41': {
          const v380 = v377[1];
          
          break;
          }
        case 'MessengerApi_optIn0_41': {
          const v459 = v377[1];
          
          break;
          }
        case 'MessengerApi_receiveMessage0_41': {
          const v538 = v377[1];
          sim_r.txns.push({
            kind: 'api',
            who: "MessengerApi_receiveMessage"
            });
          ;
          const v583 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v376), null);
          const v584 = '12345678901234567890';
          const v586 = {
            from: v376,
            message: v584,
            to: v376,
            username: v584
            };
          const v587 = stdlib.fromSome(v583, v586);
          const v588 = await txn1.getOutput('MessengerApi_receiveMessage', 'v587', ctc3, v587);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'MessengerApi_sendMessage0_41': {
          const v617 = v377[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v377], secs: v379, time: v378, didSend: v208, from: v376 } = txn1;
  switch (v377[0]) {
    case 'MessengerApi_getUsername0_41': {
      const v380 = v377[1];
      return;
      break;
      }
    case 'MessengerApi_optIn0_41': {
      const v459 = v377[1];
      return;
      break;
      }
    case 'MessengerApi_receiveMessage0_41': {
      const v538 = v377[1];
      undefined /* setApiDetails */;
      ;
      const v583 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v376), null);
      const v584 = '12345678901234567890';
      const v586 = {
        from: v376,
        message: v584,
        to: v376,
        username: v584
        };
      const v587 = stdlib.fromSome(v583, v586);
      const v588 = await txn1.getOutput('MessengerApi_receiveMessage', 'v587', ctc3, v587);
      if (v208) {
        stdlib.protect(ctc0, await interact.out(v538, v588), {
          at: './index.rsh:67:10:application',
          fs: ['at ./index.rsh:67:10:application call to [unknown function] (defined at: ./index.rsh:67:10:function exp)', 'at ./index.rsh:73:18:application call to "apiReturn" (defined at: ./index.rsh:67:51:function exp)', 'at ./index.rsh:67:51:application call to [unknown function] (defined at: ./index.rsh:67:51:function exp)'],
          msg: 'out',
          who: 'MessengerApi_receiveMessage'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'MessengerApi_sendMessage0_41': {
      const v617 = v377[1];
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
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc5]);
  const ctc10 = stdlib.T_Data({
    MessengerApi_getUsername0_41: ctc8,
    MessengerApi_optIn0_41: ctc9,
    MessengerApi_receiveMessage0_41: ctc8,
    MessengerApi_sendMessage0_41: ctc7
    });
  const ctc11 = stdlib.T_Bool;
  
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
  const v312 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:61:9:application call to [unknown function] (defined at: ./index.rsh:61:9:function exp)', 'at ./index.rsh:58:42:application call to "runMessengerApi_sendMessage0_41" (defined at: ./index.rsh:61:9:function exp)', 'at ./index.rsh:58:42:application call to [unknown function] (defined at: ./index.rsh:58:42:function exp)'],
    msg: 'in',
    who: 'MessengerApi_sendMessage'
    });
  const v327 = ['MessengerApi_sendMessage0_41', v312];
  
  const txn1 = await (ctc.sendrecv({
    args: [v327],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v377], secs: v379, time: v378, didSend: v208, from: v376 } = txn1;
      
      switch (v377[0]) {
        case 'MessengerApi_getUsername0_41': {
          const v380 = v377[1];
          
          break;
          }
        case 'MessengerApi_optIn0_41': {
          const v459 = v377[1];
          
          break;
          }
        case 'MessengerApi_receiveMessage0_41': {
          const v538 = v377[1];
          
          break;
          }
        case 'MessengerApi_sendMessage0_41': {
          const v617 = v377[1];
          sim_r.txns.push({
            kind: 'api',
            who: "MessengerApi_sendMessage"
            });
          ;
          const v678 = v617[stdlib.checkedBigNumberify('./index.rsh:61:9:spread', stdlib.UInt_max, '0')];
          const v682 = v678.to;
          null;
          await stdlib.simMapSet(sim_r, 0, v682, v678);
          const v684 = true;
          const v685 = await txn1.getOutput('MessengerApi_sendMessage', 'v684', ctc11, v684);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v377], secs: v379, time: v378, didSend: v208, from: v376 } = txn1;
  switch (v377[0]) {
    case 'MessengerApi_getUsername0_41': {
      const v380 = v377[1];
      return;
      break;
      }
    case 'MessengerApi_optIn0_41': {
      const v459 = v377[1];
      return;
      break;
      }
    case 'MessengerApi_receiveMessage0_41': {
      const v538 = v377[1];
      return;
      break;
      }
    case 'MessengerApi_sendMessage0_41': {
      const v617 = v377[1];
      undefined /* setApiDetails */;
      ;
      const v678 = v617[stdlib.checkedBigNumberify('./index.rsh:61:9:spread', stdlib.UInt_max, '0')];
      const v682 = v678.to;
      null;
      await stdlib.mapSet(map0, v682, v678);
      const v684 = true;
      const v685 = await txn1.getOutput('MessengerApi_sendMessage', 'v684', ctc11, v684);
      if (v208) {
        stdlib.protect(ctc0, await interact.out(v617, v685), {
          at: './index.rsh:61:10:application',
          fs: ['at ./index.rsh:61:10:application call to [unknown function] (defined at: ./index.rsh:61:10:function exp)', 'at ./index.rsh:64:18:application call to "apiReturn" (defined at: ./index.rsh:61:57:function exp)', 'at ./index.rsh:61:57:application call to [unknown function] (defined at: ./index.rsh:61:57:function exp)'],
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
export async function MessengerApi_getUsername(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for MessengerApi_getUsername expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for MessengerApi_getUsername expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _MessengerApi_getUsername3(ctcTop, interact);}
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
    impure: [`MessengerApi_getUsername()(address,byte[20])`, `MessengerApi_optIn((address,byte[20]))byte`, `MessengerApi_receiveMessage()(address,byte[20],byte[20],address)`, `MessengerApi_sendMessage((address,byte[20],byte[20],address))byte`],
    pure: [],
    sigs: [`MessengerApi_getUsername()(address,byte[20])`, `MessengerApi_optIn((address,byte[20]))byte`, `MessengerApi_receiveMessage()(address,byte[20],byte[20],address)`, `MessengerApi_sendMessage((address,byte[20],byte[20],address))byte`]
    },
  appApproval: `BiAJAAEDAp4Bq9qCgg21q+bHDWjxmq3dDCYEAQEBAAAUMTIzNDU2Nzg5MDEyMzQ1Njc4OTAiNQAxGEECxSpkSSJbNQGBCFs1AjEZIxJBABwxACEEr0sBKUsCVwB/ZksBKEsCV38fZkhIQgJ/NhoAF0lBAGsiNQQjNQZJIQUMQAArSSEGDEAAEiEGEkQ2GgE1/4ABAzT/UEIAWyEFEkQqNf8pNP9QIQevUEIASUkhCAxAABQhCBJENhoBNf8oNP9QgTSvUEIALoGYjN2ZBhJEKjX/gAECNP9QIQevUEIAFjYaAhc1BDYaAzYaARdJJQxAAXwlEkQkNAESRDQESSISTDQCEhFESTUFNf+ABBKBs300/1CwNP8iVUklDEAAtUkkDEAAWyQSRDT/VwFoNf40/jX9gAQSKAr2NP1QsDT9V0ggNP1XSCCIAcIoNP1QNfxXaTU0/ExQSwEpSwJXAH9mSwEoSwJXfx9mSEiACQAAAAAAAAKsAbAoNQcjMgZCAR5IKzX+gAgAAAAAAAACSzEANP5QNP5QMQBQMQCIAW5XAGlJNf1XAWg0/SJVTVCwMQA0/lA0/lAxAFAxAIgBTlcAaUk1/VcBaDT9IlVNNQcjMgZCAMpJIwxAAFJINP9XATQ1/jT+Nf0xADEAiAEfKDT9UDX8VwBpNPxQSwEpSwJXAH9mSwEoSwJXfx9mSEiABOYdd+Y0/VCwgAkAAAAAAAAB7QGwKDUHIzIGQgBySIAIAAAAAAAAAZExACtQMQCIAMxXaTVJNf5XATQ0/iJVTVCwMQArUDEAiACzV2k1STX+VwE0NP4iVU01ByMyBkIALyISRIGgjQaIAKoiNAESRDQESSISTDQCEhFESTUFNf+ABEc8ozE0/1CwIzIGQgAANf9JNf5BAAokNQEyBjUCQgAfQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAAFSCEEr4lJKWJLAShiUExIiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
    at: './index.rsh:89:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:58:42:after expr stmt semicolon',
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
  "MessengerApi_getUsername": MessengerApi_getUsername,
  "MessengerApi_optIn": MessengerApi_optIn,
  "MessengerApi_receiveMessage": MessengerApi_receiveMessage,
  "MessengerApi_sendMessage": MessengerApi_sendMessage
  };
export const _APIs = {
  MessengerApi: {
    getUsername: MessengerApi_getUsername,
    optIn: MessengerApi_optIn,
    receiveMessage: MessengerApi_receiveMessage,
    sendMessage: MessengerApi_sendMessage
    }
  };
