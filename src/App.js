import React, { useEffect, useState, useRef, useCallback } from "react";
import Wrapper from "./components/views/Wrapper";
import Main from './components/views/Main';
import {GroupButton, GroupBox, JoinGroup, ConnectWallet, CreateGroup} from './components/views/Groups';
import {MessageWindow, MessageInput,MessageWrapper,ChatWindow,MessageList} from './components/views/Chat';
import { InputGroupID, JoinWindow } from "./components/views/Join";
import { InputGroupName, CreateWindow } from "./components/views/Create";
import { Header } from "./components/views/Header";
import { OuterBox } from "./components/views/OuterBox";
import { UserBox, UserLabel } from "./components/views/Users";
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
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

  let [msgList, setMessages] = useState([]);
  let [usrList, setUserList] = useState([]);
  let [addr, setMyAddr] = useState("");
  let [myUsername, setMyUsername] = useState("");
  let [welcomeMessage, setWelcomeMessage] = useState("");

  const getMyUsername=async() => {
      try {
          const address = await acc.getAddress();
          for (var i=0; i < usrList.length; i++)
          {
            if (usrList[i].addr == address)
            {
              setMyUsername(usrList[i].username);
              setWelcomeMessage("Welcome, ", usrList[i].username);
            }
          }
      } catch (error) {
        console.log("No group selected");
      }
  }

  const getUsernames=async() => {
    let count = 0;
    if (groupID !== "")
    {
      try{
        const Publisher = await ctc.e.Publisher;
        Publisher.newUser.monitor((event) => {
          count = count + 1;
          let user = {};
          user = {username: event.what[0].username, addr: event.what[0].addr};
          setUserList(prev => [...prev, user]);
          console.log(count);
        })
      }catch(error){
        console.log("Publisher undefined");
      }
    }
  }

  const getMessages=async() => {
    let count = 0;
    if (groupID !== "")
    {
      try{
        const Publisher = await ctc.e.Publisher;
        Publisher.messageSent.monitor((event) => {
            count = count + 1;
            let message = {};
            message = {message: event.what[0].message, username: event.what[0].username};
            setMessages(prev => [...prev, message]);
            console.log(count);
          })
      }catch(error){
        console.log("Publisher undefined");
      }
    }
  }

  const [showJoinWindow, setJoinWindow] = useState(false);
  const [showCreateWindow, setCreateWindow] = useState(false);
  const [acc, setAcc] = useState({});
  const [ctc, setCtc] = useState({});
  const [groupID, setGroupID] = useState("");
  const [MessengerApi, setApi] = useState({}); 
  const [isOptedIn, setOptIn] = useState(false);
  const [Publisher, setPublisher] = useState({});
  const [groupInfo, setGroupInfo] = useState({})

  const [groupList, setGroups] = useState([]);

  const connectWallet = async () => {
      const acc = await reach.getDefaultAccount();
      const addr = reach.formatAddress( await acc.getAddress());
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      //console.log("This users account: ", addr);
      getGroups(addr);
      setAcc(acc);
      setMyAddr(addr);
  }

  const createGroup=async(name) => {

    if(name.length < 20){
      name = name.padEnd(20, ' ');
    };
    const interact = {
      groupName: name,
      ready: () => { throw 'Contract has been deployed'; }
    }
    const ctc = acc.contract(backend); // deploys contract
    ctc.getInfo().then(async (info) => {
      const groupID = (JSON.stringify(await info.toNumber(), null, 2));
      setGroupID(groupID);
    });
    try{
        await backend.Admin(ctc, interact);
    }catch(error){
        console.log(error);
    }
    
    //this.setState({view: 'WaitingForAttacher'}); //displays contract info and waits
  }

  const selectGroup=async(groupID) => {
    setMessages([]);
    setUserList([]);
    setPublisher({});
    const ctcInfo = JSON.parse(groupID);
    //console.log(ctcInfo);
    //console.log(acc);
    const ctc = await acc.contract(backend, ctcInfo);
    const MessengerApi = await ctc.a.MessengerApi;
    // find a way to check in opted in already
    //
    const Publisher = await ctc.e.Publisher;
    console.log(`connecting to application`, groupID);

    setCtc(ctc);
    setApi(MessengerApi);
    setGroupID(ctcInfo);
    setJoinWindow(false);
    setPublisher(Publisher);
    await getUsernames();
    await getMyUsername();
    await getMessages();
  };

  const optIn=async(joinInfo) => {
    joinInfo = JSON.parse(joinInfo);
    
    let username = joinInfo.username;
    const groupID = joinInfo.groupID;

    //console.log(joinInfo.groupID);
    //console.log(joinInfo.username);

    const thisAddress = reach.formatAddress(acc.getAddress());
    const ctc = await acc.contract(backend, groupID);
    const MessengerApi = await ctc.a.MessengerApi;

    if(username.length < 20){
      username = username.padEnd(20, ' ');
    };
    const usernameMap = {
      addr: thisAddress,
      username: username
    };
    // find a way to check in opted in already
    //
    //console.log(`connecting to application`, groupID);
    try{
      const isOptIn = await MessengerApi.optIn(usernameMap);
      //console.log('isOptIn:', isOptIn);
      //console.log('Username set:', username);
      setOptIn(isOptIn);
    }catch(error){
      console.log(error);
    }
    setCtc(ctc);
    setApi(MessengerApi);
    setGroupID(groupID);
    setJoinWindow(false);
  }

  const sendMessage=async(message) => {
    const senderAddr = reach.formatAddress(acc.getAddress());
    const sendToAddr = reach.formatAddress(acc.getAddress());

    if(message.length < 20){
        message = message.padEnd(20, ' ');
    };
    const messageMap = {
      from: senderAddr,
      username: myUsername,
      message: message,
      to: sendToAddr
    };
    try{
      const isMessageSent = await MessengerApi.sendMessage(messageMap);
      //console.log(`isMessageSent: ${isMessageSent}`);
      //console.log('Message submitted:', message);
    }catch(error){
      console.log(error);
    }
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
          //console.trace();
      });
  }


  return (
      <Wrapper>
        <OuterBox>
        <Header welcomeMessage={welcomeMessage}/>
        <Main className={"main"}>
          <GroupBox>
            <ConnectWallet onClick={connectWallet}/>
            <CreateGroup onClick={createGroup}/>
            <JoinGroup onClick={() => setJoinWindow(true)}/>
            {groupList.map((id, i) => {
              return (<GroupButton value={i} onClick={ e => {
                //e.preventDefault()
                selectGroup(id)
                }}/>);
            })}
          </GroupBox>

        <ChatWindow>
          <MessageWindow>
            <MessageWrapper>
              <MessageList msgList={msgList}/>
            </MessageWrapper>
          </MessageWindow>
          <MessageInput 
            onClick={ e => {
              e.preventDefault()
              sendMessage(e.target.value)
            }}/>
        </ChatWindow>

        <UserBox>
            <UserLabel usrList={usrList}/>
        </UserBox>

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

        </Main>
        </OuterBox>
      </Wrapper>
  );
}

export default App;
