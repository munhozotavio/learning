function sendMail(address:string, message:string = "No subject"):void {
  console.log(`Sending mail to ${address} with message: ${message}`);
}

function sendMailWithSenderInfo(address: string, message: string = "No subject", sender?: string):void {
  console.log(`Sending mail to ${address} with message: ${message}`);
  if(sender) console.log(`Sent by: ${sender}`);
}

sendMail("otavio@mail.com");
sendMail("otavio@mail.com", "This is a test");
sendMailWithSenderInfo("otavio@mail.com", "This is a test");
sendMailWithSenderInfo("otavio@mail.com", "This is a test", "mail@otavio.com");


const sumIncome = (...months: number[]): number => {
  return months.reduce((totalSum, month) => totalSum + month, 0);
}

console.log(sumIncome(100, 200, 300, 500));
