# LINE Bot - 天氣小幫手 TaiWan Weather Tool

## 介紹 Introduction
這是一個使用 Node.js 搭建的 LINE Bot，可以用來查詢台灣各城市的天氣資訊。使用了 Express 框架和 @line/bot-sdk 套件來處理 LINE Bot 的訊息處理和回覆，並使用 taiwan-weather-tool-kh 套件來獲取天氣資料。  
This is a LINE Bot built using Node.js, designed to provide weather information for various cities in Taiwan. The bot utilizes the Express framework and the @line/bot-sdk package to handle message processing and replies for the LINE Bot. Additionally, it employs the taiwan-weather-tool-kh package to retrieve weather data.

## 功能說明 Functionality
此 LINE Bot 具備以下功能：  
This LINE Bot offers the following features:
- 當用戶傳送文字訊息給 LINE Bot 時，會觸發 Webhook 處理。
- 使用者可以傳送台灣城市名稱，Bot 會回傳該城市的天氣資料，包括天氣狀況、感覺溫度、最高溫度、最低溫度和降雨機率。
- 如果使用者輸入的城市名稱不在預設的城市清單內，Bot 會回傳錯誤訊息。  

- When a user sends a text message to the LINE Bot, it triggers the Webhook for processing.
- Users can send the name of a city in Taiwan, and the Bot will respond with the weather information for that city, including weather conditions, perceived temperature, maximum temperature, minimum temperature, and precipitation chance.
- If the city name provided by the user is not in the predefined city list, the Bot will respond with an error message.

## 城市清單 City List
預設的城市清單包含以下城市：  
The predefined city list includes the following cities:  
- 宜蘭縣 Yilan County
- 花蓮縣 Hualien County
- 臺東縣 Taitung County
- 澎湖縣 Penghu County
- 金門縣 Kinmen County
- 連江縣 Lienchiang County
- 臺北市 Taipei City
- 新北市 New Taipei City
- 桃園市 Taoyuan City
- 臺中市 Taichung City
- 臺南市 Tainan City
- 高雄市 Kaohsiung City
- 基隆市 Keelung City
- 新竹縣 Hsinchu County
- 新竹市 Hsinchu City
- 苗栗縣 Miaoli County
- 彰化縣 Changhua County
- 南投縣 Nantou County
- 雲林縣 Yunlin County
- 嘉義縣 Chiayi County
- 嘉義市 Chiayi City
- 屏東縣 Pingtung County
