import React, { useEffect, useState } from "react";
import Wrapper from "./components/views/Wrapper";
import Main from './components/views/Main';
import {GroupBox, CreateGroup, JoinGroup, ConnectWallet} from './components/views/Groups';
import {MessageInput,ChatWindow,MessageList} from './components/views/Chat';
import { InputGroupID, JoinWindow } from "./components/views/Join";
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { render } from "@testing-library/react";

const reach = loadStdlib({
  REACH_CONNECTOR_MODE: "ALGO",
  REACH_DEBUG: "YES",
});
const {standardUnit} = reach;
// let acc = {};
// //let stdlib = {};
// let addr;
// let bal;
// let balAtomic;
// let ctc = {};
// let groupID;
// let MessengerApi;
// let isOptedIn;

reach.setWalletFallback(reach.walletFallback({
  providerEnv: {
    ALGO_TOKEN: '',
    ALGO_SERVER: "https://testnet-api.algonode.cloud",
    ALGO_PORT: '',
    ALGO_INDEXER_TOKEN: '',
    ALGO_INDEXER_SERVER: "https://testnet-idx.algonode.cloud",
    ALGO_INDEXER_PORT: '',
    REACH_ISOLATED_NETWORK: "no"
  }, MyAlgoConnect}));

const sendToAddr = "0xdc6d5ee0fd3fa0c8a35c620ce07a26d4d03f14d718dab869560fa0d9189d64c3";

function App() {

  // const[acc, setAcc] = useState({});
  // const[addr, setAddr] = useState({});
  // const[bal, setBal] = useState({});
  // const[balAtomic, setBalAtomic] = useState();

  // const [defaults, setInfo] = useState({
  //   acc: {},
  //   ctc: {},
  //   bal: 0,
  //   defaultFundAmt: '10',
  //   standardUnit
  // })

  // const [contractInfo, setContract] = useState({
  //   ctc: {},
  //   groupID: "",
  //   MessengerApi: {},
  //   isOptedIn: false
  // })

  const [showJoinWindow, setJoinWindow] = useState(false);
  const [acc, setAcc] = useState({});
  const [ctc, setCtc] = useState({});
  const [groupID, setGroupID] = useState("");
  const [api, setApi] = useState({}); 
  const [isOptedIn, setOptIn] = useState(false);

  const connectWallet = async () => {
      const acc = await reach.getDefaultAccount();
      const addr = await acc.getAddress();
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      console.log(bal);
      console.log("This users account: ", addr);
      console.log(acc);
      setAcc(acc);
      return("Component unmounted");
  }

  const createGroup=async() => {
    console.log("createGroup function run");
    const interact = {
      ready: () => { throw 'Contract has been deployed'; }
    }
    const ctc = acc.contract(backend); // deploys contract
    ctc.getInfo().then(async (info) => {
      console.log(info);
      console.log(`contract id: ${JSON.stringify(info.toNumber())}`);
      console.log((JSON.stringify(await info.toNumber(), null, 2)));
      const groupID = (JSON.stringify(await info.toNumber(), null, 2));
      setGroupID(groupID);
    });
    try{
        await backend.Admin(ctc, interact);
    }catch(error){
        console.log("THIS IS AN ERROR: ", error);
    }
    console.log("done");
    console.log(ctc);
    
    //this.setState({view: 'WaitingForAttacher'}); //displays contract info and waits
  }

  const attach=async(groupID) => {
    const ctcInfo = JSON.parse(groupID);
    // setGroupID({ctcInfo});
    console.log(ctcInfo);
    console.log(acc);
    const ctc = await acc.contract(backend, ctcInfo);
    const MessengerApi = await ctc.a.MessengerApi;
    setCtc(ctc);
    setApi(MessengerApi);
    console.log(`connecting to application`, groupID);
    //debugger;
    const isOptedIn = await MessengerApi.optIn();
    setOptIn(true);
    console.log("Is opted in: ", isOptedIn)
  }

  return (
    <Wrapper>
    <Main className={"main"}>
      <GroupBox>
        <ConnectWallet onClick={connectWallet}/>
        <CreateGroup onClick={createGroup}/>
        <JoinGroup onClick={() => setJoinWindow(true)}/>
      </GroupBox>

      <ChatWindow>
        <MessageList/>
        <MessageInput/>
      </ChatWindow>
    </Main>
    { showJoinWindow ? 
    <JoinWindow>
      <InputGroupID onClick={e => attach(e.target.value)}/>
    </JoinWindow> : null }
    </Wrapper>
  );
}

export default App;
