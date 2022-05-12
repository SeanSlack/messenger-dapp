import React, { useEffect, useState } from "react";
import Wrapper from "./components/views/Wrapper";
import Main from './components/views/Main';
import {GroupBox, CreateGroup, JoinGroup, ConnectWallet, ReloadMessages} from './components/views/Groups';
import {MessageInput,MessageWrapper,ChatWindow,MessageList} from './components/views/Chat';
import { InputGroupID, JoinWindow } from "./components/views/Join";
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { render } from "@testing-library/react";

const reach = loadStdlib({
  REACH_CONNECTOR_MODE: "ALGO"
  //,REACH_DEBUG: "YES"
});
const {standardUnit} = reach;
let messageList = [];

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

  const [showJoinWindow, setJoinWindow] = useState(false);
  const [acc, setAcc] = useState({});
  const [ctc, setCtc] = useState({});
  const [groupID, setGroupID] = useState("");
  const [MessengerApi, setApi] = useState({}); 
  const [isOptedIn, setOptIn] = useState(false);
  const [Publisher, setPublisher] = useState({});

  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    console.log("acc info: ", acc);
		console.log("Messages: ", msgList);
    console.log("ctc info: ", ctc);
    console.log("groupID: ", groupID);
    console.log("MessengengerApi: ", MessengerApi);
    console.log("Publisher: ", Publisher);
	});

  const connectWallet = async () => {
      const acc = await reach.getDefaultAccount();
      const addr = await acc.getAddress();
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      console.log("This users account: ", addr);
      setAcc(acc);
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
    //console.log(ctcInfo);
    //console.log(acc);
    const ctc = await acc.contract(backend, ctcInfo);
    
    const MessengerApi = await ctc.a.MessengerApi;
    // Add this and find a way to check in opted in already
    //
    // console.log(`connecting to application`, groupID);
    // const isOptedIn = await MessengerApi.optIn();
    // setOptIn(isOptedIn);
    // console.log("Is opted in: ", isOptedIn)

    setCtc(ctc);
    setApi(MessengerApi);
    setGroupID(ctcInfo);
    setJoinWindow(false);
  };

  const loadMessages=async() => {
    const Publisher = await ctc.e.Publisher;
    setPublisher(Publisher);
    Publisher.messageSent.monitor((event) => {
      messageList.push({
        from: event.what[0].from,
        message: event.what[0].message
      })
      setMsgList(messageList);
    })
  }

  const sendMessage=async(message) => {
    //debugger;
    const senderAddr = acc.getAddress();

    if(message.length < 20){
        message = message.padEnd(20, ' ');
    };
    const messageMap = {
      from: senderAddr,
      message: message,
      to: sendToAddr
    };
    try{
      const isMessageSent = await MessengerApi.sendMessage(messageMap);
      console.log(`isMessageSent: ${isMessageSent}`);
      console.log('Message submitted:', message);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <Wrapper>
    <Main className={"main"}>
      <GroupBox>
        <ConnectWallet onClick={connectWallet}/>
        <CreateGroup onClick={createGroup}/>
        <JoinGroup onClick={() => setJoinWindow(true)}/>
        <ReloadMessages onClick={loadMessages}/>
      </GroupBox>

      <ChatWindow>
        <MessageWrapper>
          <MessageList msgList={msgList}/>
        </MessageWrapper>
        <MessageInput 
          onClick={ e => {
            e.preventDefault()
            sendMessage(e.target.value)
          }}/>
      </ChatWindow>
    </Main>
    { showJoinWindow ? 
    <JoinWindow>
      <InputGroupID 
        onClick={ e => {
        e.preventDefault()
        attach(e.target.value)
        }}/>
    </JoinWindow> : null }
    </Wrapper>
  );
}

export default App;
