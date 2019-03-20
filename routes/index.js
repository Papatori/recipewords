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
        wordTitle: "粗熱をとる（あらねつをとる）",
        description: "加熱したものを室温で冷ますこと。目安はだいたい60℃くらい。手で触れる温度でもよい。"
    },
    {
      mainCategory: "あ行",
      subCategory: "あ",
      menuId: "araregiri",
      wordTitle: "あられ切り（あられぎり）",
      description: "角切りの一種。材料を5㎜角に切ること。"
    },
    {
      mainCategory: "あ行",
      subCategory: "い",
      menuId: "ishiduki",
      wordTitle: "石づき（いしづき）",
      description: "きのこの軸の先端の、かたい部分。かたいので、切り落として調理するのが一般的。"
    },
    {
      mainCategory: "あ行",
      subCategory: "い",
      menuId: "ityougiri",
      wordTitle: "いちょう切り（いちょうぎり）",
      description: "材料をいちょうの葉の形に切ること。厚さは5mm以下の薄さにするのが一般的。"
    },
    {
      mainCategory: "あ行",
      subCategory: "お",
      menuId: "otoshibuta",
      wordTitle: "落としぶた（おとしぶた）",
      description: "煮物を煮るとき、材料に直接乗せるふたの事。煮汁を鍋表面の具材に染み渡らせるために行う。キッチンペーパーやアルミホイルで代用できる。"
    },
    {
      mainCategory: "か行",
      subCategory: "か",
      menuId: "kakugiri",
      wordTitle: "角切り（かくぎり）",
      description: "材料を立方体の形に切ること。大きさの指定はない。"
    },
    {
      mainCategory: "か行",
      subCategory: "か",
      menuId: "kakushiboutyou",
      wordTitle: "かくし包丁（かくしぼうちょう）",
      description: "大根やシイタケなどの加熱前に、火の通りを良くするために材料の厚さ半分ほどまで切れ目を入れること。"
    },
    {
      mainCategory: "か行",
      subCategory: "か",
      menuId: "kanokogiri",
      wordTitle: "鹿の子切り（かのこぎり）",
      description: "こんにゃくやイカ、貝などの具材に対し、格子状に切れ目を入れること。切れ目の間隔は3～5mm程度。"
    },
    {
      mainCategory: "か行",
      subCategory: "か",
      menuId: "karairi",
      wordTitle: "乾煎り（からいり）",
      description: "鍋やフライパンに油をしかずに具材を炒めること。"
    },
    {
      mainCategory: "か行",
      subCategory: "か",
      menuId: "karayaki",
      wordTitle: "空焼き（からやき）",
      description: "鍋やフライパンに何も入れずに焼くこと。"
    },
    {
      mainCategory: "か行",
      subCategory: "く",
      menuId: "kushigiri",
      wordTitle: "くし切り（くしぎり）",
      description: "ジャガイモや玉ねぎ、トマトなどの丸みを持つ食材を髪留めの櫛（くし）のような形に切ること。"
    },
    {
      mainCategory: "か行",
      subCategory: "こ",
      menuId: "kokakugiri",
      wordTitle: "小角切り（こかくぎり）",
      description: "角切りの一種。材料を6～8mm角に切ること。"
    },
    {
      mainCategory: "か行",
      subCategory: "こ",
      menuId: "kogutigiri",
      wordTitle: "小口切り（こぐちぎり）",
      description: "ネギやキュウリなどの細長い食材を、円形に薄く切ること。"
    },
    {
      mainCategory: "か行",
      subCategory: "こ",
      menuId: "kobusaniwakeru",
      wordTitle: "小房に分ける（こぶさにわける）",
      description: "ブロッコリーやシメジなど、塊になっている食材を食べやすい大きさに分けること。"
    },
    {
      mainCategory: "さ行",
      subCategory: "さ",
      menuId: "sainomegiri",
      wordTitle: "賽の目切り（さいのめぎり）",
      description: "角切りの一種。材料を1cm角に切ること。"
    },
    {
      mainCategory: "さ行",
      subCategory: "さ",
      menuId: "saku",
      wordTitle: "さく（さく）",
      description: "刺身にするための魚の身を切り分けること。切り身自体のことも指す。"
    },
    {
      mainCategory: "さ行",
      subCategory: "さ",
      menuId: "sasagaki",
      wordTitle: "ささがき（ささがき）",
      description: "ゴボウを笹の葉のような形にそぎ切ること。"
    },
    {
      mainCategory: "さ行",
      subCategory: "さ",
      menuId: "sashimizu",
      wordTitle: "差し水（さしみず）",
      description: "材料を煮たりゆでたりする際、沸騰して吹きこぼれないように少量の水を入れること。"
    },
    {
      mainCategory: "さ行",
      subCategory: "さ",
      menuId: "zakugiri",
      wordTitle: "ざく切り（ざくぎり）",
      description: "キャベツや白菜、ジャガイモなどを形や大きさにとらわれずにある程度の適当な大きさで切ること。"
    },
    {
      mainCategory: "さ行",
      subCategory: "し",
      menuId: "shionuki",
      wordTitle: "塩抜き（しおぬき）",
      description: "あさりやワカメなど、塩分を多く含む食材を水や薄い塩水に浸して塩気を抜くこと。"
    },
    {
      mainCategory: "さ行",
      subCategory: "し",
      menuId: "shitaaji",
      wordTitle: "下味を付ける（したあじをつける）",
      description: "加熱や調理を行う前の材料に、あらかじめ調味料などで味を付けること。"
    },
    {
      mainCategory: "さ行",
      subCategory: "し",
      menuId: "shitayude",
      wordTitle: "下ゆで（したゆで）",
      description: "調理する前の材料を、あらかじめ軽くゆでておくこと。"
    },
    {
      mainCategory: "さ行",
      subCategory: "す",
      menuId: "sujikiri",
      wordTitle: "筋切り（すじきり）",
      description: "肉を焼く前に、あらかじめ硬い筋や繊維を切ること。食感を柔らかくし、煮崩れを防ぐために行う。"
    },
    {
      mainCategory: "さ行",
      subCategory: "す",
      menuId: "sunanuki",
      wordTitle: "砂抜き（すなぬき）",
      description: "貝類を調理する前に、水や薄い塩水に付けて砂を吐き出させること。"
    },
    {
      mainCategory: "た行",
      subCategory: "た",
      menuId: "tanzakugiri",
      wordTitle: "短冊切り（たんざくぎり）",
      description: "材料を長方形に薄く切ること。"
    },
    {
      mainCategory: "た行",
      subCategory: "つ",
      menuId: "tunogatatu",
      wordTitle: "角が立つ（つのがたつ）",
      description: "メレンゲや生クリームをよく泡立てた際、泡立て器を持ち上げるとピンと立ち上がる状態のこと。"
    },
    {
      mainCategory: "は行",
      subCategory: "は",
      menuId: "hangetugiri",
      wordTitle: "半月切り（はんげつぎり）",
      description: "大根やニンジンなどの材料を半月形に切ること。"
    },
    {
      mainCategory: "は行",
      subCategory: "ひ",
      menuId: "hitonitati",
      wordTitle: "ひと煮立ち（ひとにたち）",
      description: "煮物や汁物で、材料を加えた後、再度沸騰させること。再沸騰後、長時間煮ない。"
    },
    {
      mainCategory: "は行",
      subCategory: "ふ",
      menuId: "butugiri",
      wordTitle: "ぶつ切り（ぶつぎり）",
      description: "肉類やタコなどを形や大きさにとらわれずにある程度の適当な大きさで切ること。"
    },
    {
      mainCategory: "は行",
      subCategory: "ほ",
      menuId: "hosogiri",
      wordTitle: "細切り（ほそぎり）",
      description: "材料を細長く切ること。"
    },
    {
      mainCategory: "ま行",
      subCategory: "め",
      menuId: "mentori",
      wordTitle: "面取り（めんとり）",
      description: "大根やニンジンなどの直角の角を切り落とし、丸みを持たせること。煮崩れを防ぎ、味の染みを良くするために行う。"
    },
    {
      mainCategory: "ら行",
      subCategory: "ら",
      menuId: "rangiri",
      wordTitle: "乱切り（らんぎり）",
      description: "細長い棒状の食材を、90度ずつ回しながら斜めに切ること。"
    },
    {
      mainCategory: "わ行",
      subCategory: "wa",
      menuId: "wagiri",
      wordTitle: "輪切り（わぎり）",
      description: "材料を円形に切ること。"
    },
    // {
    //   mainCategory: "",
    //   subCategory: "",
    //   menuId: "",
    //   wordTitle: "",
    //   description: ""
    // },
]
  console.log("menuItems: " + JSON.stringify(menuItems))
  res.render('index', { menuItems: menuItems });
});

module.exports = router;
