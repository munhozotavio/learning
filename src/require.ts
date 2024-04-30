// const Database = require('./classes/class_more'); node
import { Database } from './classes/class_more';

import sendMail from './functions/functions';

const db = Database.factory({
    ip: Database.LOCAL,
    user: "root",
    password: "12345",
    type: Database.TYPE_POSTGRES
});

console.log(db);

sendMail("mail@mail.com", `connected to db ${Database.LOCAL}}`);


