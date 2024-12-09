//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "PUT YOUR OWNER NUMBER";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/";
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05MWGN6eEppWnd1UU4wMTR6VkpHOVZ5QlNUQXUwY3RFKzhMMkFHREtFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0pXVWlUUHR6OTgvWkZpQnVhWk0raVkrRjJyNEFZc2xyR3FDcTh2NVlTOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQU9wYko5clh2ZTRiNmZxSGdkd2RrcGtCbGFmUkFxS09BdjNUZHRTSDB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnb04rcmRscWNCa3FUSW84b1ZmQ0FVaCtZZy9QaXBLamx6SGhjY3ZDU0ZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCb0w0bTFaRkpSbUZkRUVVWjcvM0lnVTEzYWlFS2pwcWhkTTVoSWh2bGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNsOXczdjdHUDMvMkZTcWIvaXRlNGFxbVRTMXpXMjRzQ1VBTEk1dFM0bjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RQVzlUa0M4ZFlHZWJiZmV3YlhpeDJ4S2lGOWs5MTBzRXNDWE9rQS9sND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWRIWHBlU0dHTk5NaTh6RUxqa0tydlMxMmJqTnhudGQ3ZnMzTXdRelh4MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inlub25KZXpWN0E5UmdrUDR0WVFlY0pkY2ZIWHlrS2V5YzhYa0xpWmo4dW1BajF2WmllZnMzYmhCWG10bHBTU3Z1OEQzRk9xSWhpbEF4aXVqUVFIcWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiJ4RXdpYWx5ellreVN3d0N3aDFDSTFsSVJlRkdWZTIwWUoyZzgzSlNSc3EwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIxMjYwMTA3OTU4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0FDMDk4MTFFNDI5NUUyQzkwODc0MDBCM0YzQTBFNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzNzc2NDI2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMTI2MDEwNzk1ODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkI1MUIxRTFBNEQ3RkI2OTgwQTI5Q0IzNjhENTFGNTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzc3NjQyN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNUNOc3YwR2RTUHkxUHRIRXNuZ3EtdyIsInBob25lSWQiOiI5MjdlNThjNS0xNmIyLTQ1YzMtYjc0Mi0xOTVkYTY4NzNhNWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjgvS2dJbmxRajFRVW85aDVWMHpGSVdQSlJNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc3VVFzQUtqUGVKdXpzMzI0cXdyMS93aVpQND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFQlRMV1ExNCIsIm1lIjp7ImlkIjoiMjEyNjAxMDc5NTg5OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJvdDIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t1UXViZ0dFSnVvM2JvR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRha0MyamEwYjFsRlZIRnhmMUwyVTdoTDBkVXUzR1N6WDlCSDdXbERQaTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJLa3QzM0ZKR2EzQThCYUE5YUZ1UW9zUVIzQWJYZ3IzUjdWTnY2cmUrVUZaWklwRGZSZ01vbm1PRGl3bWFpVUdqWEV4YVlrOGtNTjhyMjNtQjZpYkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuVUxaTDFpd1VINk9LUTY2Titnck0vUGI5MUFHdGNIQS9rMFF0T29Uc3IvMHAvang2aXp5YWE3U09Zc2ZvaW41YVRHdE0vV0lzMWFDVFA1eXd0a2lnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjYwMTA3OTU4OToxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiV3BBdG8ydEc5WlJWUnhjWDlTOWxPNFM5SFZMdHhrczEvUVIrMXBRejR1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzNzc2NDIzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVPbiJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
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
