/**
 * limit.js
 * 处理点击限制逻辑
 */

// 配置项
const CONFIG = {
    limitDays: 10, // 限制天数
    storageKey: 'user_last_click_time', // localStorage 的键名
    targetUrl: 'https://www.qq.com' // 跳转目标
};

function k2() {
    const now = new Date().getTime();
    const lastClick = localStorage.getItem(CONFIG.storageKey);
    
    // 获取用于显示提示信息的 DOM 元素（可选，如果页面没有这个元素也不会报错）
    const messageDiv = document.getElementById('message');

    // 1. 检查是否有历史记录
    if (lastClick) {
        const timePassed = now - parseInt(lastClick);
        const limitTimeInMs = CONFIG.limitDays * 24 * 60 * 60 * 1000;

        // 2. 如果时间差小于限制时间（10天）
        if (timePassed < limitTimeInMs) {
            // 计算剩余时间
            const timeLeft = limitTimeInMs - timePassed;
            const daysLeft = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
            const hoursLeft = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            
            const msg = `操作受限：您需要在 ${daysLeft} 天 ${hoursLeft} 小时后才能再次访问。`;
            
            // 如果页面上有提示框，显示提示；否则弹窗提示
            if (messageDiv) {
                messageDiv.textContent = msg;
                messageDiv.style.color = 'red';
            } else {
                alert(msg);
            }
            
            console.log("点击被拦截：还在冷却期内");
            return; // 关键：阻止后续跳转
        }
    }

    // 3. 允许跳转：更新时间并跳转
    localStorage.setItem(CONFIG.storageKey, now);
    
    if (messageDiv) {
        messageDiv.textContent = "正在跳转...";
        messageDiv.style.color = 'green';
    }
    
    console.log("跳转中...");
    window.location.href = CONFIG.targetUrl;
}

// 供测试使用：清除记录的方法
function clearLimitForTest() {
    localStorage.removeItem(CONFIG.storageKey);
    alert("测试模式：记录已清除，您可以再次点击了。");
    const messageDiv = document.getElementById('message');
    if(messageDiv) messageDiv.textContent = "";
}