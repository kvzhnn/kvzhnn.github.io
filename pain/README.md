# 慢性下背痛專題 - 組員使用指南

## 📁 專案結構

```
your-section/
├── index.html              # 你的頁面 HTML
├── css/
│   ├── style.css          # 全域樣式（請勿修改！）
│   └── your-section.css   # 你的專屬樣式（自己創建）
├── js/
│   └── main.js            # 全域腳本（漢堡選單等）
├── images/
│   └── [你的圖片]
└── video/
    └── [你的音訊檔案，如果需要]
```

## 🎨 色彩系統 (CSS Variables)

我們使用 CSS Variables 統一管理顏色，請**一律使用變數**而非硬編碼色碼。

### 主要顏色
- **背景色**: `var(--bg-color)` = `#DDDCDD` - 溫暖灰
- **主要強調色**: `var(--accent-color)` = `#544733` - 優雅棕色
- **主要文字**: `var(--text-primary)` = `#2a2a2a` - 炭黑色
- **粗體文字**: `var(--text-strong)` = `#1a1a1a` - 接近黑色
- **次要文字**: `var(--text-tertiary)` = `#999` - 淺灰色（用於 footer 和圖片來源）

### 特殊功能色
- **下拉註釋背景**: `var(--bg-note)` = `#f9f7f4`
- **白色**: `var(--color-white)` = `#ffffff`

### Hover 狀態
- **按鈕 Hover**: `var(--accent-hover)` = `#6b5940`
- **連結 Hover**: `var(--accent-light)` = `#6b5a42`

### 間距變數
- **區塊間距**: `var(--section-padding)` = `60px` (桌面)
- **區塊間距**: `var(--section-padding-mobile)` = `40px` (手機)

### 字型變數
- **無襯線字型**: `var(--font-sans)` = `"Noto Sans TC", "Microsoft JhengHei", sans-serif`
- **襯線字型**: `var(--font-serif)` = `"Noto Serif TC", Georgia, serif`

## 📝 重要規則

### 1. **請勿修改** `style.css` 或 `main.js`
這些檔案包含：
- 導航列樣式和行為
- 全域排版設定
- CSS Variables 定義
- 可重複使用的元件（全域音訊按鈕、下拉式註釋等）

### 2. **創建你自己的 CSS 檔案**
針對你的頁面特定樣式，創建新檔案：
```html
<!-- 在你的 HTML <head> 中，加在 style.css「之後」 -->
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/your-section.css">
```

在 `your-section.css` 中的範例：
```css
/* 你的頁面專屬樣式 */
.my-custom-section {
    background: var(--bg-color);
    color: var(--text-primary);
    padding: var(--section-padding) 0;
}

.my-special-heading {
    color: var(--accent-color);
    font-family: var(--font-serif);
}
```

### 3. **使用 CSS Variables**
永遠使用預定義的變數，而非硬編碼色碼：
```css
/* ✅ 正確 */
background: var(--accent-color);
color: var(--text-primary);
font-family: var(--font-serif);

/* ❌ 錯誤 */
background: #544733;
color: #2a2a2a;
font-family: "Noto Serif TC", Georgia, serif;
```

### 4. **字型使用指南**
- **內文**: `var(--font-sans)` (已在 body 全域設定)
- **標題 & 引言**: `var(--font-serif)`
- 字級單位: 使用 `rem` 以確保可縮放

### 5. **導航列**
導航列已在 `style.css` 和 `main.js` 中配置好：
- 滾動超過 header 後自動顯現
- 漢堡選單自動運作
- 若要修改導航連結，請編輯你的 HTML：
```html
<div class="nav-menu" id="navMenu">
    <a href="#thought-experiment" class="nav-link">思想實驗</a>
    <a href="#pumpkin-story" class="nav-link">南瓜的故事</a>
    <a href="#prevalence" class="nav-link">下背痛比你想得更普遍</a>
    <a href="#medical-gap" class="nav-link">被醫療體制遺漏的「人」</a>
    <a href="#ending" class="nav-link">結語</a>
</div>
```

## 🚀 開始使用

### 步驟 1: 複製模板檔案
使用提供的 `index.html` 作為起點來填入你的章節內容

### 步驟 2: 創建你的 CSS 檔案
```bash
touch css/your-section.css
```

### 步驟 3: 連結你的 CSS
在 HTML `<head>` 中加入：
```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/your-section.css">
```

### 步驟 4: 填充你的內容
在 `<section id="thought-experiment">` 區塊內寫你的內容：
```html
<section id="thought-experiment" class="content-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 content-text">
                <h2>你的章節標題</h2>
                <p>你的內容...</p>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</section>
```

## 🎯 可用元件參考

### 標準內容區塊
```html
<section class="content-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 content-text">
                <!-- 你的內容 -->
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</section>
```

### 專案標籤（左上角小標題）
已自動顯示，無需額外設定：
```html
<div class="project-tag">當疼痛成為日常</div>
```

### 下拉式註釋（可選用）
```html
<p>
    這是一段文字，其中包含
    <button class="expandable-note-trigger" aria-expanded="false" aria-controls="note-1">
        可點擊的註釋<span class="note-arrow">▼</span>
    </button>
    。
</p>
<div id="note-1" class="expandable-note-content" aria-hidden="true">
    <p>這裡是註釋的詳細說明內容。</p>
</div>
```

### 頁腳
已全域設定，無需修改：
```html
<footer>
    <p>&copy; 此為草稿，請勿外流</p>
</footer>
```

## 🔧 排版規模

- `h1`: 3.5rem (桌面) / 2.5rem (手機)
- `h2`: 2rem
- `p`: 1.1rem (桌面) / 1rem (手機)
- 行高: 1.8 (內文)
- 字距: 0.05em (標準)

## 📱 響應式斷點

- 桌面: 預設
- 平板: `max-width: 768px`
- 手機: `max-width: 480px`

## ⚠️ 常見錯誤

1. ❌ 修改 `style.css` 來加入頁面特定樣式
2. ❌ 使用內聯樣式 (inline styles) 而非外部 CSS
3. ❌ 硬編碼顏色而非使用 CSS Variables
4. ❌ 忘記在導航列加入你的章節連結
5. ❌ 沒有在手機上測試，一定要記得做響應式設計哦！！！

## 💡 小提示

- 保持 `min-height: 100vh` 以達到全螢幕區塊效果
- 使用 `.content-text` class 以獲得正確的文字間距
- 測試時記得檢查導航列是否正常運作
- 保持一致的間距: 60px (桌面) / 40px (手機)
- 所有 section 都應該有 `id` 屬性，方便導航連結 （這個已經有設計好）

## 🆘 需要協助？

遇到問題時：
1. 檢查是否正確使用 CSS Variables
2. 確認 HTML 結構符合模板
3. 確保你的 CSS 檔案在 `style.css` **之後**載入
4. 在不同瀏覽器和螢幕尺寸測試

## 📦 你會拿到的檔案

```
STARTER_KIT/
├── index.html          # HTML 模板（含完整結構）
├── css/
│   └── style.css         # 全域樣式（含 CSS Variables）
└── js/
    └── main.js           # 導航列互動腳本
```

**你需要做的：**
1. 複製這些檔案到你的工作資料夾
2. 創建 `css/your-section.css` 寫你的專屬樣式
3. 填充你的 section（如`#thought-experiment`）內容
