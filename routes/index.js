var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 画面表示するコンテンツの定義
  const menuItems = [
    {
        mainCategory: "あ行",
        subCategory: "あ",
        menuId: "aranetu",
        imgUrl: "main.jpg",
        wordTitle: "粗熱をとる（あらねつをとる）",
        description: "加熱したものを室温で冷ますこと。目安はだいたい60℃くらい。手で触れる温度でもよい。"
    },
    {
      mainCategory: "あ行",
      subCategory: "あ",
      menuId: "araregiri",
      imgUrl: "main.jpg",
      wordTitle: "あられ切り（あられぎり）",
      description: "材料を5㎜角に切ること。"
    },
    {
      mainCategory: "あ行",
      subCategory: "い",
      menuId: "ishiduki",
      imgUrl: "main.jpg",
      wordTitle: "石づき（いしづき）",
      description: "きのこの軸の先端の、かたい部分。かたいので、切り落として調理するのが一般的"
  }
]
  console.log("menuItems: " + JSON.stringify(menuItems))
  res.render('index', { menuItems: menuItems });
});

module.exports = router;
