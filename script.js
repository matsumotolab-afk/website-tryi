async function loadNews() {
    try {
        const response = await fetch('news.json'); 
        const newsData = await response.json();
        const newsList = document.getElementById('news-list');

        // 既存の内容をクリア
        newsList.innerHTML = ""; 

        newsData.forEach(news => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");
            newsItem.innerHTML = `
                <h3>${news.title}</h3>
                <p><strong>${news.date}</strong></p>
                <p>${news.description}</p>
            `;
            newsList.appendChild(newsItem);
        });
    } catch (error) {
        console.error("ニュースの読み込みに失敗しました:", error);
        document.getElementById('news-list').innerHTML = "<p>ニュースの読み込みに失敗しました。</p>";
    }
}