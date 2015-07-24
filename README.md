2016 總統大選承諾一覽表歷史記錄
====

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="創用 CC 授權條款" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />本著作由<span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">2016 總統大選承諾一覽表</span>製作，以<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">創用CC 姓名標示 4.0 國際 授權條款</a>釋出。

[2016 總統大選承諾一覽表](https://docs.google.com/document/d/1D_TfV5udsWesnD2RFQ5D2VXrbuPG6hOxW1bhqjPKaFg/) 的所有編輯記錄會以 git commit 的形式記錄在這個檔案庫，每 60 分鐘更新一次。

每一個 Google doc 的歷史記錄，都會做成 3 個檔案格式，各有參考價值：`index.html` 是網頁版（可以用瀏覽器[瀏覽最新版本](http://mrorz.github.io/president2016-history/)），`index.txt` 為純文字版，而 `index.yaml` 則是 human readable 的巢壯資料格式。每個 commit 的 email 與名字都有經過匿名化，同一個人做的變更，會用一樣的 email / 名字標注。


比較兩個版本的差異
--------------

Github 提供簡單的 compare view，可以顯示兩個版本之間的差異。以下簡單從[官方文件](https://help.github.com/articles/comparing-commits-across-time/)摘錄。

### 比較兩個 commit 版本之間的差異

基本 Compare view 的 URL 格式為：
`https://github.com/MrOrz/president2016-history/compare/舊版本SHA...新版本SHA`

SHA 可以取前 6、7 碼即可，如 https://github.com/MrOrz/president2016-history/compare/37083dd...ef435a5 。

另外，`版本` 後面可以接 n 個 `^` 字元，代表「該版本往前 n 個版本」。例如說
 https://github.com/MrOrz/president2016-history/compare/HEAD^^^...HEAD^ 可以列出三個版本前～最新版本的前一個版本之間的所有差異。

### 比較兩個時間點的差異

branch 名字（gh-pages）後面可以接 `@{時間區間}`。下面這個 URL 可以列出一周前與現在的所有差異：

`https://github.com/MrOrz/president2016-history/compare/gh-pages@{1week}...gh-pages`

另外，也可以用 `@{YYYY-MM-DD}` 的方式指定特定日期，如 `https://github.com/MrOrz/president2016-history/compare/gh-pages@{2015-07-24}...gh-pages@{2015-07-26}` 就會列出 2015/7/24 到 7/26 之間的差異。
