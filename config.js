//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "BHACKER.COM";
global.location = "INDIA,ASSAM";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia,Kolkata";
global.github = process.env.GITHUB || "PLEASE DM MY BOSS BHACKER";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/HAGxgim2IfIALNxYhSiKa1";
global.website = process.env.GURL || "https://chat.whatsapp.com/HAGxgim2IfIALNxYhSiKa1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "919401105736";
global.owner = process.env.OWNER_NUMBER || "919401105736";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVBUTEpNbXpXQUdCdEZYYUo1SWRic3VmUWdqZmxrNGo2Zm1hSkNNYTFsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXJCZlpDcTZjWVhWc1lJeXhsY05Pc0JmcmZ2UlhCVjJnb1h3QXk3ZUJRRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2R1NybFhJZXVuQTR6OFQvblJVS3BjWnFzdEREc21PQlB4VkJGTi82YVVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuM3pjT2JaM3hteTU1MzBicFRNbTF5N2NuSXE2RndycGNsVERyL1hKWGo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBYTk1SFFjZzc0YXhsUHNyVUNCS0NPelpaZENoSnk1OFZlS1NNRDUrR3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhOcmE5aCt5NS80WU9RclFTVkZPQkRkQTV2UDcvME40QmdHNGJHcjIxRzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09KWHY2SzRITTRMTUVOMTd1RFI4MzI1emNBakk4cWJORHlGRkdFQ04yUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFhzNU5DWTRZMmlTSEFwTitxM3FReWVFQ25ZMDRlbW41SGg3SlFicmtXMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh3RENvVWNxaDVPQjVPdHNqcU1LOUg3MThGK21ZblRJbUtrSFZzcGlDS1RXZytreDZRWjlETjl5MU9nVm91VldkdThtT2pPN3RVU3lhaVRQSmdlTUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6IjcwTW04VHBBV3ZnWVlFdHpCaGxWT29LU0V5Rm9iT2pGRzVKTWRvYXZlbk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNnbkQ3LXBEVG1pelpmSkZyQ24wOHciLCJwaG9uZUlkIjoiY2U2M2UyMGEtMDEyYS00ZWZhLTg5MjItNTZiZDQ0MjBkMTZiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM3SXFDUm5VOVprMUpkVWI3a1BBMTdqQkttQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5VldLaGQ4UDl5U1ZERnkxOVFxVm9lOTVNS0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUzdMMTlORk0iLCJtZSI6eyJpZCI6IjkxOTQwMTEwNTczNjo2M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDJPek1BQ0VLaW41YmNHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicXhWVzc3UEN2Wjc1dU9NSFZRaG5vYjVyaW1mbktwZ2hRYXREQXVGOExpYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRmFYK04rRzVLclBJdDhyenhSQ2c2ekIrMG0veE03YXRSWkxoTUU3OGkvcTBZQXBCK1ZLM1VGYTNWMVNSVXpzNXBWSGlOZnZ5UVpONUhLODRCNEM3RGc9PSIsImRldmljZVNpZ25hdHVyZSI6InZSNDc2ajIva0tjOVBaVzNLcUR5NG9lVUgraEkybi9xY01WbEFUbDVkNVZSQW4wSFU4dWVyNzE5K0d0Yjkzd1VmbC9xcnlHMm05OE9RaU9oNHNBYkRnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5NDAxMTA1NzM2OjYzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFzVlZ1K3p3cjJlK2JqakIxVUlaNkcrYTRwbjV5cVlJVUdyUXdMaGZDNG4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc2MTU5MjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQzcxIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "BHACKER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
