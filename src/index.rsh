'reach 0.1'

const Message = Struct([
    ['from', Address],
    ['username', Bytes(20)],
    ['message', Bytes(20)],
    ['to', Address]
])

const Username = Struct([
    ['addr', Address],
    ['username', Bytes(20)]
])

export const main  = Reach.App(() => {

    setOptions({
        // TODO: before go live, verify this
        // verifyArithmetic: true,
        untrustworthyMaps: true,
        connectors: [ALGO]
      });

    const Admin = Participant('Admin', {
    ready: Fun([], Null),
    groupName: Bytes(20)
    });

    const MessengerApi = API('MessengerApi', {
    sendMessage: Fun([Message], Bool),
    receiveMessage: Fun([], Message),
    getUsername: Fun([], Username),
    optIn: Fun([Username], Bool)
    })

    const Publisher = Events('Publisher', {
        messageSent: [Message],
        newUser: [Username]
      });

    init();

    Admin.only(() => {
        const groupName = declassify(interact.groupName);
    });

    Admin.publish(groupName);

    Admin.only(() => {
        interact.ready();
    });

    // map of key address and message type

  const MessageMap = new Map(Message)
  const UsernameMap = new Map(Username)

  const [shouldContinue] = parallelReduce([true]).define(() => {
    }).paySpec([]).invariant(balance() == 0)
    .while(shouldContinue)
    .api(MessengerApi.sendMessage, (message, apiReturn) =>{
        Publisher.messageSent(message);
        MessageMap[message.to] = message;
        apiReturn(true);
        return [true];
    })
    .api(MessengerApi.receiveMessage, (apiReturn) => {
        const message = fromSome(MessageMap[this], Message.fromObject({ 
                            from: this,
                            username: '12345678901234567890',
                            message:'12345678901234567890',
                            to: this,}));
        apiReturn(message);
        return [true];
    })
    .api(MessengerApi.getUsername, (apiReturn) => {
        const username = fromSome(UsernameMap[this], Username.fromObject({ 
                            addr: this,
                            username: '12345678901234567890',}));
        apiReturn(username);
        return[true];
    })
    .api(MessengerApi.optIn, (username, apiReturn) =>{
        UsernameMap[this] = username;
        Publisher.newUser(username);
        apiReturn(true);
        return [true];
    });
    commit();
    exit();
});