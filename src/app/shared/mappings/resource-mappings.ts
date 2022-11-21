// import {Admin} from "../../features/admin/models/admin";
// import {Faq} from './../../features/faq/models/faq.model';
// import {HelpMessage} from './../../features/help-message/models/help-message.model';
// import {Notification} from './../../features/notification/models/notification.model';
// import {User} from './../../features/user/models/user.model';
// import {Restaurant} from '../../features/restaurant/models/reasturant.model';
// import {Credit} from "../../features/credit/models/credit.model";
// import {Tutorial} from "../../features/tutorial/models/tutorial.model";

import { Admin } from "src/app/features/admin/models/admin";
import { User } from "src/app/features/user/models/user.model";

export const urlMapping: { [k: string]: MappingConfig } = {
  '/admin': {
    model: Admin,
    api: 'admin',
    mask: ''
  },
  // '/restaurant': {
  //   model: Restaurant,
  //   api: 'restaurant',
  //   mask: ''
  // },
  '/user': {
    model: User,
    api: 'user',
    mask: ''
  },
  '/notification': {
    model: Notification,
    api: 'notification',
    mask: ''
  },
  // '/help': {
  //   model: HelpMessage,
  //   api: 'know-how',
  //   mask: ''
  // },
  // '/faq': {
  //   model: Faq,
  //   api: 'faq',
  //   mask: ''
  // },
  // '/credit': {
  //   model: Credit,
  //   api: 'plan',
  //   mask: ''
  // },
  // '/tutorials': {
  //   model: Tutorial,
  //   api: 'video-tutorial',
  //   mask: ''
  // },
}

interface MappingConfig {
  model: any;
  api: any;
  mask: string;
}
