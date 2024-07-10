//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94781226144,94781226144";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVBSZzIybjdOZVZPRU9SWmZkVmtZOExKTWs0QnEzcHJNM0ZUN2haY1JFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzhGN29RQytTR21rcVAvNGdGRGdQSVZ0STRrMUhmNWdMQjcwZlAyT1lTQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTlNmOVoyS3Jkd2Nua29SR08rY3JVWWdKUndZekRsRjBmQmQraGZtNDNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Vzk5MWFMQ3A4WFFaenFsZEpWNU15ZXhVdS91dTRsWk14ZXBEMXFTdDBFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklCeWR1VFRmZHRST2Z6dkJCSHRzeitZdnpCb3d3V2duRHlHZlFRaU9LblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI4WDhtZDVxSG9BY2d4V2pUcGxqZXl0ZlRDdElVQklGRUhPa094Y3JqVkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZRMjQzWjdoc2F5ZXdQMWRGcmVScjhJOElPVkR6ZGtPb0orSWtoZHZIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQW13WGUvZzF4RDFvenpCazd4M0JGMDY3MWFwQ253NXZNTTRCN3RHYTZrYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGZUFSMGVsSlNQenhJOWNxbU5xRnJQdnpQNEtkS01VWUlxQ0FyMit4NUFUTjh4eU5JTHNudUszaVpEWHlmdkpacGlnbnlScTVpSXBMQ1dMVi9adWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJFSjFKWHNFMDFGd0RtN3BhYlFaTkJSN3hXR1NUOWhRSVJ6OTk5UFo1bnZFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgxMjI2MTQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI5NjE3QTQzMTQ4NTFDNDZGMUY5MDk1MTY0RDY3RUFCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA2MDI4MDV9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklYYjRybkNFUWtHbzdSMWFFLV81bUEiLCJwaG9uZUlkIjoiMmNhZDFhOGMtNjk5NS00NWQ3LThmODUtNjViYmQwNjEyYWU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldPaVRCZG5oeC9XMnNHQWx3TUNVRzVFSm1wWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSS9UODhQVytNaTBZU21pcXFzc1lQZWxrWWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDJMMzdYTUQiLCJtZSI6eyJpZCI6Ijk0NzgxMjI2MTQ0OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QkvCdkJPwnZCA8J2Qk/CdkJTwnZCSIPCdkIrwnZCI8J2QjfCdkIYg8J2QlfCdkIjwnZCM8J2QlCAgIPCdkJLwnZCT8J2QgPCdkJHwnZCTIDzwnZCW8J2QgPCdkIjwnZCTPiAgICAgICAgICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAg8J2QkvCdkJPwnZCA8J2Qk/CdkJTwnZCSIPCdkIrwnZCI8J2QjfCdkIYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pucnlmRUdFS1NodWJRR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImUrY3h6RHNJR0IwV0dZU1hGWXBTWjJEbFV4a2grNE5na0Z2U2tOZHUyMUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1nNGtjRmp0am15RmVhOUFSRXFSc09kRmJONFBTYm1SQWt6SGlDZm9TamxnUUJwTGVsekxrejRLV3cxc1IwVUFUUTRlYmRjdmdWSko3RnZNa1NxVEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxM1V3bXo3VUp3YmNGUTYxZXBCZTJ0aDY5SW1QMFVzMjVmR3k5ZnU0andVZmJ5RkovYklZbEkrM1JnSHRZSEdldHdSS1dtc2o3ZWgyVmd4RUhTOHBoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgxMjI2MTQ0OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHZuTWN3N0NCZ2RGaG1FbHhXS1VtZGc1Vk1aSWZ1RFlKQmIwcERYYnR0USJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDYwMjgwMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFILzMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "V ɪ  m u  🐼💗🖇️",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
