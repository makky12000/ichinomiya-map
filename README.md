# 一宮神社マップ

全国の代表的な一宮神社を地図で巡るための静的Webアプリです。

## 機能

- Leaflet + OpenStreetMap による実地図表示
- markercluster によるピンのクラスタ表示
- 社名、旧国、地域、メモの検索
- 都道府県フィルター
- 未参拝、参拝済みフィルター
- 参拝済みチェックと参拝メモのローカル保存

## ローカル表示

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

ブラウザで `http://127.0.0.1:8765/` を開きます。

## データ

一宮神社データは代表的な一宮を手入力したサンプルデータです。旧国・鎮座地は以下を参考にしています。

- https://origamijapan.net/origami/2018/07/25/ichinomiya/
- https://www.japanesewiki.com/jp/shrines/%E4%B8%80%E5%AE%AE.html
