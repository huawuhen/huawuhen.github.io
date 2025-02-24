// coze-web-sdk.js
import { WebChatClient } from 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.3/libs/cn/index.js';

const client = new WebChatClient({
  config: {
    bot_id: '7474503006889803816',
  },
  componentProps: {
    title: 'Coze',
  },
  auth: {
    type: 'token',
    token: 'pat_********',
    onRefreshToken: function () {
      return 'pat_********';
    },
  },
});
