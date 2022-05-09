import mock from '@/@fake-db/mock'

const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
const dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2)

/* eslint-disable global-require */
const data = {
  profileUser: {
    id: 11,
    avatar: require('@/assets/images/avatars/avatar-1.png').default,
    fullName: 'John Doe',
    role: 'admin',
    about:
      'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
    status: 'online',
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: false,
    },
  },
  contacts: [
    {
      id: 1,
      fullName: 'Gavin Griffith',
      role: 'Frontend Developer',
      about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      avatar: require('@/assets/images/avatars/avatar-5.png').default,
      status: 'offline',
    },
    {
      id: 2,
      fullName: 'Harriet McBride',
      role: 'UI/UX Designer',
      about:
        'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
      avatar: require('@/assets/images/avatars/avatar-2.png').default,
      status: 'busy',
    },
    {
      id: 3,
      fullName: 'Danny Conner',
      role: 'Town planner',
      about:
        'Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.',
      avatar: '',
      status: 'busy',
    },
    {
      id: 4,
      fullName: 'Janie West',
      role: 'Data scientist',
      about:
        'Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.',
      avatar: '',
      status: 'online',
    },
    {
      id: 5,
      fullName: 'Bryan Murray',
      role: 'Dietitian',
      about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      avatar: require('@/assets/images/avatars/avatar-5.png').default,
      status: 'busy',
    },
    {
      id: 6,
      fullName: 'Albert Underwood',
      role: 'Marketing executive',
      about:
        'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
      avatar: require('@/assets/images/avatars/avatar-6.png').default,
      status: 'online',
    },
    {
      id: 7,
      fullName: 'Adele Ross',
      role: 'Special educational needs teacher',
      about:
        'Biscuit powder oat cake donut brownie ice cream I love soufflé. I love tootsie roll I love powder tootsie roll.',
      avatar: '',
      status: 'online',
    },
    {
      id: 8,
      fullName: 'Mark Berry',
      role: 'Advertising copywriter',
      about:
        'Bear claw ice cream lollipop gingerbread carrot cake. Brownie gummi bears chocolate muffin croissant jelly I love marzipan wafer.',
      avatar: require('@/assets/images/avatars/avatar-3.png').default,
      status: 'away',
    },
    {
      id: 9,
      fullName: 'Joseph Evans',
      role: 'Designer, television/film set',
      about:
        'Gummies gummi bears I love candy icing apple pie I love marzipan bear claw. I love tart biscuit I love candy canes pudding chupa chups liquorice croissant.',
      avatar: require('@/assets/images/avatars/avatar-8.png').default,
      status: 'offline',
    },
    {
      id: 10,
      fullName: 'Blake Carter',
      role: 'Building surveyor',
      about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      avatar: require('@/assets/images/avatars/avatar-4.png').default,
      status: 'away',
    },
  ],
  chats: [
    {
      id: 1,
      userId: 2,
      unseenMsgs: 0,
      chat: [
        {
          message: 'Hi',
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'Hello. How can I help You?',
          time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
          senderId: 2,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'Can I get details of my last transaction I made last month? 🤔',
          time: 'Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'We need to check if we can provide you such information.',
          time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
          senderId: 2,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'I will inform you as I get update on this.',
          time: 'Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)',
          senderId: 2,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'If it takes long you can mail me at my mail address.',
          time: dayBeforePreviousDay,
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: false,
            isSeen: false,
          },
        },
      ],
    },
    {
      id: 2,
      userId: 1,
      unseenMsgs: 1,
      chat: [
        {
          message: "How can we help? We're here for you!",
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?',
          time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'It should use Vuetify Framework.',
          time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'Absolutely!',
          time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'Materio admin is the responsive Vuetify admin template.!',
          time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'Looks clean and fresh UI. 😍',
          time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: "It's perfect for my next project.",
          time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'How can I purchase it?',
          time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'Thanks, From our official site  😇',
          time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: 'I will purchase it for sure. 👍',
          time: previousDay,
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
      ],
    },
  ],
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return Chats Contacts and Contacts
// ------------------------------------------------
mock.onGet('/apps/chat/chats-and-contacts').reply(() => {
  const chatsContacts = data.chats
    .map(chat => {
      const contact = data.contacts.find(c => c.id === chat.userId)
      contact.chat = { id: chat.id, unseenMsgs: chat.unseenMsgs, lastMessage: chat.chat[chat.chat.length - 1] }

      return contact
    })
    .reverse()

  const profileUserData = {
    id: data.profileUser.id,
    avatar: data.profileUser.avatar,
    fullName: data.profileUser.fullName,
    status: data.profileUser.status,
  }

  return [200, { chatsContacts, contacts: data.contacts, profileUser: profileUserData }]
})

// ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------
mock.onGet('/apps/chat/users/profile-user').reply(() => [200, data.profileUser])

// ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------
mock.onGet(/\/apps\/chat\/chats\/\d+/).reply(config => {
  // Get event id from URL
  let userId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  userId = Number(userId)

  const chat = data.chats.find(c => c.userId === userId)
  if (chat) chat.unseenMsgs = 0

  return [
    200,
    {
      chat,
      contact: data.contacts.find(c => c.id === userId),
    },
  ]
})

// ------------------------------------------------
// POST: Add new chat message
// ------------------------------------------------
mock.onPost(/\/apps\/chat\/chats\/\d+/).reply(config => {
  // Get user id from URL
  const contactId = Number(config.url.substring(config.url.lastIndexOf('/') + 1))

  // Get event from post data
  const { message, senderId } = JSON.parse(config.data)

  let activeChat = data.chats.find(chat => chat.userId === contactId)
  const newMessageData = {
    message,
    time: new Date(),
    senderId,
    feedback: {
      isSent: true,
      isDelivered: false,
      isSeen: false,
    },
  }

  // If there's new chat for user create one
  let isNewChat = false
  if (activeChat === undefined) {
    isNewChat = true

    const { length } = data.chats
    const lastId = data.chats[length - 1].id

    data.chats.push({
      id: lastId + 1,
      userId: contactId,
      unseenMsgs: 0,
      chat: [],
    })
    activeChat = data.chats[data.chats.length - 1]
  }
  activeChat.chat.push(newMessageData)

  const response = { newMessageData }
  if (isNewChat) response.chat = activeChat

  return [201, response]
})
