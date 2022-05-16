import React, { useEffect, useState } from "react";
import Wrapper from "./components/views/Wrapper";
import Main from './components/views/Main';
import {GroupButton, GroupBox, CreateGroup, JoinGroup, ConnectWallet, ReloadMessages} from './components/views/Groups';
import {MessageInput,MessageWrapper,ChatWindow,MessageList} from './components/views/Chat';
import { InputGroupID, JoinWindow } from "./components/views/Join";
import { InputGroupName, CreateWindow } from "./components/views/Create";
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { render } from "@testing-library/react";
import algosdk from "algosdk";

const reach = loadStdlib({
  REACH_CONNECTOR_MODE: "ALGO"
  //,REACH_DEBUG: "YES"
});
const {standardUnit} = reach;
//const sendToAddr = "2D7BDCN4XHIHDIT5WSMSVBRDKC7BX6TOOU2DHGVZFYU4USLQ4HYG2DMR2A";

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

const indexer_token = "";
const indexer_server = "https://testnet-idx.algonode.cloud"; 
const indexer_port = '';

const indexerClient = new algosdk.Indexer(indexer_token, indexer_server, indexer_port);

function App() {

  const [showJoinWindow, setJoinWindow] = useState(false);
  const [showCreateWindow, setCreateWindow] = useState(false);
  const [acc, setAcc] = useState({});
  const [ctc, setCtc] = useState({});
  const [groupID, setGroupID] = useState("");
  const [MessengerApi, setApi] = useState({}); 
  const [isOptedIn, setOptIn] = useState(false);
  const [Publisher, setPublisher] = useState({});
  const [groupInfo, setGroupInfo] = useState({})

  const [msgList, setMsgList] = useState([{}]);
  const [usrList, setUserList] = useState([{}])
  const [groupList, setGroups] = useState([]);

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
      const addr = reach.formatAddress( await acc.getAddress());
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      console.log("This users account: ", addr);
      getGroups(addr);
      setAcc(acc);
  }

  const createGroup=async(name) => {

    if(name.length < 20){
      name = name.padEnd(20, ' ');
    };
    const interact = {
      groupName: name,
      ready: () => { throw 'Contract has been deployed'; }
    }
    debugger;
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
        console.log(error);
    }
    console.log("done");
    console.log(ctc);
    
    //this.setState({view: 'WaitingForAttacher'}); //displays contract info and waits
  }

  const selectGroup=async(groupID) => {
    const ctcInfo = JSON.parse(groupID);
    //console.log(ctcInfo);
    //console.log(acc);
    const ctc = await acc.contract(backend, ctcInfo);
    const MessengerApi = await ctc.a.MessengerApi;
    const Publisher = await ctc.e.Publisher;

    // find a way to check in opted in already
    //
    console.log(`connecting to application`, groupID);

    setCtc(ctc);
    setApi(MessengerApi);
    setGroupID(ctcInfo);
    setJoinWindow(false);
    setPublisher(Publisher);
  };

  const optIn=async(joinInfo) => {
    joinInfo = JSON.parse(joinInfo);
    
    let username = joinInfo.username;
    const groupID = joinInfo.groupID;

    console.log(joinInfo.groupID);
    console.log(joinInfo.username);

    const thisAddress = reach.formatAddress(acc.getAddress());
    const ctc = await acc.contract(backend, groupID);
    const MessengerApi = await ctc.a.MessengerApi;
    debugger;

    if(username.length < 20){
      username = username.padEnd(20, ' ');
    };
    const usernameMap = {
      addr: thisAddress,
      username: username
    };
    // find a way to check in opted in already
    //
    console.log(`connecting to application`, groupID);
    try{
      const isOptIn = await MessengerApi.optIn(usernameMap);
      console.log('isOptIn:', isOptIn);
      console.log('Username set:', username);
      setOptIn(isOptIn);
    }catch(error){
      console.log(error);
    }
    setCtc(ctc);
    setApi(MessengerApi);
    setGroupID(groupID);
    setJoinWindow(false);
  }

  const loadMessages=async() => {
    let messageList = [];
    Publisher.messageSent.monitor((event) => {
      messageList.push({
        from: event.what[0].username,
        message: event.what[0].message
      })
      setMsgList(messageList);
    })
  }

  const loadUsernames=async() => {
    let userList = [];
    const Publisher = await ctc.e.Publisher;
    setPublisher(Publisher);
    Publisher.newUser.monitor((event) => {
      userList.push({
        addr: event.what[0].addr,
        username: event.what[0].username
      })
      setUserList(userList);
      console.log(userList);
    })
  }

  const reload = () => {
    loadMessages();
    loadUsernames();
  }

  const sendMessage=async(message) => {
    //debugger;
    const senderAddr = reach.formatAddress(acc.getAddress());
    const sendToAddr = reach.formatAddress(acc.getAddress());
    const username = await getUsername();

    if(message.length < 20){
        message = message.padEnd(20, ' ');
    };
    const messageMap = {
      from: senderAddr,
      username: username,
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

  const getUsername=async() => {
    const username = await MessengerApi.getUsername();
    console.log(username.username);
    return username.username
  }

  const getGroups=(addr) => {
    (async () => {
      let response = await indexerClient.lookupAccountAppLocalStates(addr).do();
      const groups = [];

      for (var i = 0; i < response["apps-local-states"].length; i++)
      {
        groups.push(response["apps-local-states"][""+i+""]["id"])
      }

      setGroups(groups);
      // console.log(JSON.stringify(response, undefined, 2));
      })().catch(e => {
          console.error(e);
          console.trace();
      });
  }


  return (
    <Wrapper>
    <Main className={"main"}>
      <GroupBox>
        <ConnectWallet onClick={connectWallet}/>
        <CreateGroup onClick={() => setCreateWindow(true)}/>
        <JoinGroup onClick={() => setJoinWindow(true)}/>
        <ReloadMessages onClick={reload}/>
        {groupList.map((id, i) => {
          return (<GroupButton value={i} onClick={ e => {
            //e.preventDefault()
            selectGroup(id)
            }}/>);
        })}
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
          optIn(e.target.value)
          }}
        />
    </JoinWindow> : null }
    { showCreateWindow ? 
    <CreateWindow>
      <InputGroupName
        onClick={ e => {
        e.preventDefault()
        createGroup(e.target.value)
        }}/>
    </CreateWindow> : null }
    </Wrapper>
  );
}

export default App;
