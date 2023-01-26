// 安裝 express 套件
const express = require("express");
const line = require("@line/bot-sdk");
const app = express();
const TaiwanWeather = require("taiwan-weather-tool-kh");

const config = {
  channelAccessToken: process.env.token,
  channelSecret: process.env.secret,
};
const client = new line.Client(config);

// 城市清單
let citys = [
  `宜蘭縣`,
  `花蓮縣`,
  `臺東縣`,
  `澎湖縣`,
  `金門縣`,
  `連江縣`,
  `臺北市`,
  `新北市`,
  `桃園市`,
  `臺中市`,
  `臺南市`,
  `高雄市`,
  `基隆市`,
  `新竹縣`,
  `新竹市`,
  `苗栗縣`,
  `彰化縣`,
  `南投縣`,
  `雲林縣`,
  `嘉義縣`,
  `嘉義市`,
  `屏東縣`,
];

app.get("/", (req, res) => {
  res.end("hello");
});

// 當有訊息發送到 LINE Bot 時觸發 Webhook 處理
app.post("/webhook", line.middleware(config), async (req, res) => {
  // 從使用者傳來的訊息中取得文字
  let { text } = req.body.events[0].message;

  // 將 "台" 轉換成 "臺" 來進行比對
  text = text.replace("台", "臺");

  // 檢查城市是否存在於清單中
  if (!citys.includes(text)) {
    // 若城市不存在於清單中，回傳錯誤訊息
    let d = await client.replyMessage(req.body.events[0].replyToken, {
      type: "text",
      text: `沒有 「${text}」 這個地方的天氣資料呦`,
    });
    res.json(d);
    return;
  }

  // 取得該城市的天氣資料
  let data = await TaiwanWeather(process.env.key, text);
  let { city, degree, weather, feeling, chance } = data;

  // 建立要回傳給使用者的訊息物件
  let msg = {
    type: "text",
    text: `「${city}」\n今日天氣：${weather}\n感覺：${feeling}\n最高溫：${degree.max} 度，最低溫：${degree.min} 度\n降雨機率： ${chance} %`,
  };

  // 回傳天氣資訊給使用者
  let d = await client.replyMessage(req.body.events[0].replyToken, msg);
  res.json(d);
});

app.listen(8080);
