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
    ready: Fun([], Null)
    });

    const MessengerApi = API('MessengerApi', {
    sendMessage: Fun([Message], Bool),
    optIn: Fun([Username], Bool)
    })

    const Publisher = Events('Publisher', {
        messageSent: [Message],
        newUser: [Username]
      });

    init();

    Admin.publish();

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
    .api(MessengerApi.optIn, (username, apiReturn) =>{
        UsernameMap[this] = username;
        Publisher.newUser(username);
        apiReturn(true);
        return [true];
    });
    commit();
    exit();
});