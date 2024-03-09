// 取得 addButtom 讓它 click 時 addItem

// 使用 prevenDefault() 防止刷新

// 加入 newItem ，如果沒輸入東西 alert 警示窗， 輸入東西後加入li

// checkItem，點擊item後打勾，用toggle(開關)

// deleteButtom，點擊時刪除 newItem

// 在每次add、check、delete儲存在LocalStorage，創建 listState 空 Array

// const STATE_KEY 存儲或檢索瀏覽器本地存儲中的數據

//讀取功能: localStage() 從 STATE_KEY getItem，如果不是null，return Json.parse(listState)，用Json.parse將字串轉為物件 else return []//

// 存儲功能 saveState ，使用JSON.stringfy方法

// initList() 讀取 LoadState() 後用 for of 顯示，創建文字、方框、刪除鍵，檢查方框是否打勾並顯示

// 在 function addItem() 中 push listState，再將 listState 存入 localStorage

// 確認是否打勾

//點擊刪除時，用 filter 方法更新 listState 陣列並移除 DOM 元素