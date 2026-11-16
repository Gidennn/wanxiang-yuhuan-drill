const facePack = {"1051.webp":0,"1053.webp":0,"1061.webp":0,"1063.webp":0,"1071.webp":0,"1073.webp":0,"1081.webp":0,"1083.webp":0,"1101.webp":0,"1103.webp":0,"1111.webp":0,"1113.webp":0,"1121.webp":0,"1123.webp":0,"1131.webp":1,"1133.webp":1,"1141.webp":1,"1143.webp":1,"1161.webp":1,"1163.webp":1,"1181.webp":1,"1183.webp":1,"1191.webp":1,"1193.webp":1,"1201.webp":1,"1203.webp":1,"1211.webp":1,"1213.webp":1,"1231.webp":1,"1233.webp":2,"1241.webp":2,"1243.webp":2,"1271.webp":2,"1273.webp":2,"1281.webp":2,"1283.webp":2,"1311.webp":2,"1313.webp":2,"1321.webp":2,"1323.webp":2,"1331.webp":2,"1333.webp":2,"1351.webp":2,"1353.webp":3,"1361.webp":3,"1363.webp":3,"1391.webp":3,"1393.webp":3,"1411.webp":3,"1413.webp":3,"1421.webp":3,"1423.webp":3,"1441.webp":3,"1443.webp":3,"1461.webp":3,"1463.webp":3,"1481.webp":3,"1483.webp":4,"1491.webp":4,"1493.webp":4,"1501.webp":4,"1503.webp":4,"1541.webp":4,"1543.webp":4,"1561.webp":4,"1563.webp":4,"1591.webp":4,"1593.webp":4,"1661.webp":4,"1663.webp":4,"1671.webp":5,"1673.webp":5,"1681.webp":5,"1683.webp":5,"1731.webp":5,"1733.webp":5,"1741.webp":5,"1743.webp":5,"1751.webp":5,"1753.webp":5,"1761.webp":5,"1763.webp":5,"1771.webp":5,"1773.webp":6,"1821.webp":6,"1823.webp":6,"1831.webp":6,"1833.webp":6,"1841.webp":6,"1843.webp":6,"1861.webp":6,"1863.webp":6,"1871.webp":6,"1873.webp":6,"1891.webp":6,"1893.webp":6,"1901.webp":7,"1903.webp":7,"1911.webp":7,"1913.webp":7,"1931.webp":7,"1933.webp":7,"1941.webp":7,"1943.webp":7,"1951.webp":7,"1953.webp":7,"1961.webp":7,"1963.webp":7,"1971.webp":7,"1973.webp":8,"1981.webp":8,"1983.webp":8,"1991.webp":8,"1993.webp":8,"307001.webp":8,"307002.webp":8,"311002.webp":8,"311003.webp":8,"3121.webp":8,"3123.webp":8,"313001.webp":8,"313003.webp":8,"313007.webp":8,"313008.webp":8,"313009.webp":8,"313010.webp":9,"313011.webp":9,"313012.webp":9,"313013.webp":9,"313014.webp":9,"3551.webp":9,"3553.webp":9,"5011.webp":9,"5013.webp":9,"5021.webp":9,"5023.webp":9,"5031.webp":9,"5033.webp":9,"5041.webp":9,"5043.webp":9,"5051.webp":10,"5053.webp":10,"5061.webp":10,"5063.webp":10,"5071.webp":10,"5073.webp":10,"5091.webp":10,"5093.webp":10,"5111.webp":10,"5113.webp":10,"5131.webp":10,"5133.webp":10,"5141.webp":10,"5143.webp":10,"5171.webp":11,"5173.webp":11,"5181.webp":11,"5183.webp":11,"5191.webp":11,"5193.webp":11,"5211.webp":11,"5213.webp":11,"5221.webp":11,"5223.webp":11,"5231.webp":11,"5233.webp":11,"5241.webp":11,"5243.webp":11,"5251.webp":12,"5253.webp":12,"5271.webp":12,"5273.webp":12,"5311.webp":12,"5313.webp":12,"5371.webp":12,"5373.webp":12,"5451.webp":12,"5453.webp":12,"5631.webp":12,"5633.webp":12,"5641.webp":12,"5643.webp":12,"5771.webp":13,"5773.webp":13,"643207.webp":13,"7002.webp":13,"7032.webp":13,"7037.webp":13,"7038.webp":13,"7040.webp":13,"7051.webp":13,"7052.webp":13,"7053.webp":13,"7055.webp":13,"7062.webp":13,"7063.webp":13,"7064.webp":13,"7066.webp":13,"7073.webp":13,"7074.webp":13,"7075.webp":14,"7076.webp":14,"7079.webp":14,"7080.webp":14,"7087.webp":14,"7088.webp":14,"7501.webp":14,"7502.webp":14,"7503.webp":14,"7504.webp":14,"7506.webp":14,"7507.webp":14,"7508.webp":14,"7509.webp":14,"7510.webp":14,"7511.webp":14,"7512.webp":14,"7513.webp":14,"7519.webp":14,"7521.webp":14,"7522.webp":14,"7530.webp":14,"7537.webp":15,"7538.webp":15,"7540.webp":15,"7541.webp":15,"92501.webp":15,"92502.webp":15,"92503.webp":15,"92504.webp":15,"92510.webp":15,"capture-effect-pouch.webp":15};
const factions = {
  sea: "日落海", wei: "三分之地", deer: "逐鹿",
  river: "大河流域", capital: "河洛", neutral: "无阵营",
};

// Rows follow the formal-server card catalogue, in ascending tier order.
const roster = {
  sea: [
    "狂铁", "马可波罗 亚连 米莱狄", "姬小满 亚瑟 安琪拉 朵莉亚",
    "莱西奥 艾琳 雅典娜", "海诺 露娜",
  ],
  wei: [
    "孙尚香", "曹操 蔡文姬 大乔 赵云", "貂蝉 刘禅 马超",
    "甄姬 小乔 诸葛亮", "周瑜 吕布",
  ],
  deer: [
    "孙膑 曜", "廉颇 蒙恬 芈月 墨子", "老夫子 白起 西施 镜",
    "庄周 蒙犽 扁鹊 嬴政", "鲁班大师 鲁班七号",
  ],
  river: [
    "干将莫邪", "鬼谷子 项羽 虞姬", "少司缘 瑶 云中君 张良",
    "大司命 韩信 刘邦", "敖隐 东皇太一",
  ],
  capital: [
    "苏烈 李元芳", "百里守约 百里玄策 盾山 沈梦溪",
    "程咬金 狄仁杰 铠 钟馗", "李白 李信 上官婉儿", "花木兰 司空震 武则天",
  ],
  neutral: [
    "牛魔 弈星", "公孙离 梦奇", "阿轲 苍 明世隐 裴擒虎 猪八戒",
    "孙悟空 太乙真人", "姜子牙 海月 杨玉环",
  ],
};

// An effect key means the hero has an actionable preparation or opening effect.
const heroRules = {
  "亚瑟": ["arthur", "每使用一张日落海英雄牌，核心等级 +3。", "每张 +6。"],
  "姬小满": ["ji", "每出售 4 名场上英雄，获得 1 次临时刷新。", "每出售 2 名场上英雄触发。"],
  "莱西奥": ["la", "每出售 2 名场上英雄，核心等级 +1。", "每出售 1 名场上英雄触发。"],
  "海诺": ["heino", "每次核心升级时，核心额外 +1 级。", "每次额外 +2 级。"],
  "姜子牙": ["jiang", "使用无阵营或场上缺席阵营的英雄牌时，自身和随机 3 名其他不同阵营的英雄 +1 级。", "每名 +2 级。"],
  "司空震": ["sikong", "其他英雄获得临时等级时，获得一半效果，累计上限为自身永久等级。", "获得全部效果，上限为自身永久等级的 2 倍。"],
  "甄姬": ["zhen", "登场：获得 1 张其他的登场英雄牌。", "从 3 张其他登场英雄牌中选 1 张。", "entry"],
  "庄周": ["zhou", "登场：自身 +2 级，获得 1 张招募战术。", "自身 +4 级，改为获得高阶招募战术。", "entry"],
  "老夫子": ["fuzi", "每回合首次合成时，获得 1 张招募战术。", "改为获得高阶招募战术。"],
  "蒙犽": ["meng", "登场：获得 1 张特训战术。", "改为获得高阶特训战术。", "entry"],
  "狂铁": ["kuang", "整备：核心等级 +2。", "核心等级 +4。", "ready"],
  "牛魔": ["niu", "凯旋：获得 1 能量。", "获得 2 能量。"],
  "弈星": ["yi", "棋手升级时，额外获得 2 经验。", "额外获得 4 经验。"],
  "马可波罗": ["marco", "登场：自身与核心各 +3 级。", "自身与核心各 +4 级。", "entry"],
  "亚连": ["allain", "整备：装备最多的英雄 +2 级，核心 +1 级。", "成长收益翻倍。", "ready"],
  "米莱狄": ["milady", "整备：召唤单位的临时等级和核心各 +3。", "整备收益翻倍。", "ready"],
  "安琪拉": ["angela", "整备：自身和核心各 +2 级。", "成长收益翻倍。", "ready"],
  "朵莉亚": ["dolia", "每次友方触发整备，随机 3 名英雄和核心各 +1 级。", "每次各 +2 级。"],
  "雅典娜": ["athena", "开团：随机触发两名日落海英雄的整备。", "每名整备额外触发一次。"],
  "露娜": ["luna", "登场：核心 +2 级，随机触发 2 名英雄的整备。", "核心 +4 级，随机触发 4 名英雄的整备。", "entry"],
  "孙尚香": ["xiang", "登场：获得 1 次免费刷新。", "获得 2 次免费刷新。", "entry"],
  "曹操": ["cao", "整备：随机触发 1 名三分英雄的登场。", "随机触发 2 名。", "ready"],
  "赵云": ["zhao", "登场：自身及随机 2 名其他英雄 +1 级。", "每名 +2 级。", "entry"],
  "貂蝉": ["diao", "登场：三分英雄 +1 级。", "每名 +2 级。", "entry"],
  "周瑜": ["yu", "登场：全体英雄 +1 级。", "全体英雄 +2 级。", "entry"],
  "蔡文姬": ["cai", "用三分英雄牌时，等级最低的其他 3 名三分英雄 +1 级。", "每名 +2 级。"],
  "小乔": ["qiao", "触发登场时，随机 3 名英雄 +1 级。", "改为全体英雄 +1 级。"],
  "白起": ["bai", "每回合首次使用效果牌时，获得 1 张援护战术。", "改为获得高阶援护战术。"],
  "鲁班七号": ["luban", "每合成 3 次，随机获得 1 张战术牌。", "改为获得高阶战术。"],
  "西施": ["xishi", "整备：获得 1 张推演战术。", "改为获得高阶推演战术。", "ready"],
  "李元芳": ["yf", "整备：为最近的河洛英雄使用古币。", "增加古币次数。", "ready"],
  "程咬金": ["cheng", "整备：获得 1 张古币，并对自己使用 1 张古币。", "增加古币收益。", "ready"],
  "上官婉儿": ["wan", "整备：为随机 3 名不同的河洛英雄使用古币。", "增加古币收益。", "ready"],
  "武则天": ["wu", "古币提升的等级 +1。登场：获得 1 张精致古币。", "增加古币收益。", "entry"],
  "杨玉环": ["yang", "每在场 3 个回合或退场时，获得 1 张弦音。", "改为获得妙音。"],
  "梦奇": ["mengqi", "退场：获得 1 张 1 阶英雄兑换券。败阵时可提升兑换券品阶。", "兑换券起始提高一阶。"],
  "阿轲": ["ake", "登场：自身及随机 1 名英雄 +1 级，棋手每少 10 生命重复一次。", "登场提升的等级增加。", "entry"],
  "明世隐": ["ming", "最近英雄可将 2 级临时等级转为永久等级。登场：可转化等级 +2。", "可转化等级提高。", "entry"],
  "裴擒虎": ["pei", "整备：随机获得 1 名其他英雄一半等级的临时等级，重复触发时重新计算。", "获得更多临时等级。", "ready"],
};

const heroes = Object.entries(roster).flatMap(([faction, tiers]) =>
  tiers.flatMap((names, tier) => names.split(" ").map(name => {
    const [rule, info, awakened, trigger] = heroRules[name] ?? [];
    return { name, tier: tier + 1, faction, type: "hero", cost: 3, rule, info, awakened, trigger };
  })));

const heroByName = Object.fromEntries(heroes.map(hero => [hero.name, hero]));

const effects = [
  ["song", "惊鸿调", "按顺序重演记录的前 6 次指法。", 0, false],
  ["recruit", "招募战术", "随机获得 1 张逐鹿英雄牌。", 0, true],
  ["recruitPlus", "高阶招募战术", "从 3 张逐鹿英雄牌中选 1 张。", 0, true],
  ["drill", "特训战术", "指定 1 名英雄，永久等级 +4。", 0, true, "hero"],
  ["drillPlus", "高阶特训战术", "指定 1 名英雄，永久等级 +8。", 0, true, "hero"],
  ["guard", "援护战术", "本轮为逐鹿英雄提供护盾。", 0, true],
  ["guardPlus", "高阶援护战术", "本轮为逐鹿英雄提供更高护盾。", 0, true],
  ["mana", "推演战术", "指定 1 名逐鹿英雄，本轮降低其法力上限。", 0, true, "deer"],
  ["manaPlus", "高阶推演战术", "指定 1 名逐鹿英雄，本轮降低其法力上限。", 0, true, "deer"],
  ["drillAll", "演练战术", "己方英雄永久等级 +1。", 0, true],
  ["drillAllPlus", "高阶演练战术", "己方英雄永久等级 +2。", 0, true],
  ["copy", "照影", "随机获得 1 张场上英雄牌。", 4, false, null, 3, "both"],
  ["core", "助力核心", "核心 +2 级，场上每有 1 名日落海英雄再触发一次。", 2, false, null, 3, "shop", "sea"],
  ["wake", "唤醒", "指定 1 名己方英雄，触发其登场。", 2, false, "entry", 2, "both"],
  ["ready", "临阵磨枪", "指定 1 名己方英雄，触发其整备。", 2, false, "ready", 2, "both"],
  ["echo", "妙音", "指定 1 名英雄，觉醒进度 +1。", 0, false, "unawakened", 4],
  ["chord", "弦音", "指定 1 名 1–3 阶英雄，觉醒进度 +1。", 0, false, "low", 2],
  ["coin", "古币", "指定 1 名河洛英雄，永久等级 +2。", 0, true, "capital"],
  ["fancyCoin", "精致古币", "指定 1 名河洛英雄，提升永久等级。", 0, true, "capital"],
  ["ticket1", "1阶英雄兑换券", "从 3 张 1 阶英雄牌中选 1 张。", 0, false],
  ["ticket2", "2阶英雄兑换券", "从 3 张 2 阶英雄牌中选 1 张。", 0, false, null, 2],
  ["ticket3", "3阶英雄兑换券", "从 3 张 3 阶英雄牌中选 1 张。", 0, false, null, 3, "pouch"],
  ["ticket5", "5阶英雄兑换券", "从 3 张 5 阶英雄牌中选 1 张。", 0, false, null, 5, "pouch"],
  ["draw", "广纳良才", "从 5 张英雄牌中选 2 张。", 4, false, null, 3, "both"],
  ["chaos", "乱世", "从 3 张登场英雄牌中选 1 张。", 3, false, null, 4, "shop", "wei"],
  ["bag", "效果锦囊", "从 3 张效果牌中选 1 张，候选品阶取决于锦囊本身。", 0, false],
  ["temp", "战前宣誓", "指定 1 名英雄，获得自身品阶 ×3 的临时等级。", 2, false, "hero", 4, "shop", "capital"],
  ["intake", "吸纳人才", "从 4 张英雄牌中选 1 张。", 3, false, null, 1, "pouch"],
  ["advanced", "高级人才", "随机获得 1 张比棋手等级高 1 阶的英雄牌，最高 5 阶。", 4, false, null, 1, "pouch"],
  ["subsidy", "惊喜补贴", "获得 3 次免费刷新。", 1, false, null, 1, "pouch"],
  ["subsidyPlus", "超级补贴", "获得 4 次免费刷新。", 2, false, null, 3, "pouch"],
  ["teamwork", "简易协作", "指定 1 名英雄等级 +3，随机 1 名英雄等级 +2。", 1, false, "hero", 2, "both"],
  ["teamworkPlus", "精密协作", "指定 1 名英雄等级 +4，随机 1 名英雄等级 +3。", 2, false, "hero", 3, "both"],
  ["friends", "呼朋唤友", "指定 1 名英雄，随机获得 1 张同阵营英雄牌。", 3, false, "hero", 3, "both"],
  ["seek", "求贤", "指定 1 名英雄，从 3 张与其同阵营的英雄牌中选 1 张。", 4, false, "hero", 5, "both"],
  ["twoTier2", "2阶英雄", "获得 2 张 2 阶英雄牌。", 0, false, null, 2, "pouch"],
  ["twoTier4", "4阶英雄", "获得 2 张 4 阶英雄牌。", 0, false, null, 4, "pouch"],
  ["twoTier5", "5阶英雄", "获得 2 张 5 阶英雄牌。", 0, false, null, 5, "pouch"],
  ["twoReady", "整备高手", "获得 2 张具有整备效果的英雄牌。", 0, false, null, 3, "pouch"],
  ["twoEntry", "登场人物", "获得 2 张具有登场效果的英雄牌。", 0, false, null, 3, "pouch"],
  ["draftSea", "日落海征召令", "获得 2 张日落海英雄牌。", 0, false, null, 3, "pouch", "sea"],
  ["draftDeer", "逐鹿征召令", "获得 2 张逐鹿英雄牌。", 0, false, null, 3, "pouch", "deer"],
  ["draftWei", "三分征召令", "获得 2 张三分英雄牌。", 0, false, null, 3, "pouch", "wei"],
  ["draftRiver", "大河流域征召令", "获得 2 张大河流域英雄牌。", 0, false, null, 3, "pouch", "river"],
  ["draftCapital", "河洛征召令", "获得 2 张河洛英雄牌。", 0, false, null, 3, "pouch", "capital"],
  ["draftNeutral", "无阵营征召令", "获得 2 张无阵营英雄牌。", 0, false, null, 3, "pouch"],
  ["help", "扶倾济弱", "场上等级最低的英雄提升 9 级。", 2, false, null, 4, "both"],
  ["blessing", "阵营祝福", "各阵营中随机 1 名英雄等级 +4。", 2, false, null, 4, "both"],
  ["support", "八方来援", "指定 1 名英雄等级 +2。场上每有一种阵营，再触发 1 次。", 2, false, "hero", 3, "shop"],
  ["jump", "跳级", "指定 1 名英雄，夺取阿科米亚核心至多 5 级。", 1, false, "hero", 2, "shop", "sea"],
  ["coins", "古币多多", "获得 2 张古币。", 2, false, null, 2, "shop", "capital"],
  ["orders", "发号施令", "随机获得 2 张战术牌。", 2, false, null, 4, "shop", "deer"],
  ["veteran", "久经沙场", "指定 1 名已觉醒的逐鹿英雄，获得 1 张该英雄牌。", 2, false, "awake-deer", 5, "shop", "deer"],
  ["energy", "能量大爆炸", "获得 5 能量。", 0, false, null, 5, "pouch"],
  ["massEntry", "集体唤醒", "触发所有英雄的登场效果。", 3, false, null, 5, "both"],
  ["massReady", "全军动员", "触发所有英雄的整备效果。", 3, false, null, 5, "both"],
  ["sameTier", "有福同享", "指定 1 名英雄，场上所有同阶英雄等级 +4。", 3, false, "hero", 5, "both"],
  ["sword", "金色圣剑", "拖到己方英雄身上穿戴。", 0, false, "hero"],
];

const effectByKey = Object.fromEntries(effects.map(([key, name, info, cost, transient, target, tier, source, faction]) =>
  [key, { key, name, type: key === "song" ? "secret" : key === "sword" ? "equipment" : "effect",
    faction: faction ?? "neutral", info, cost, transient, target, tier: tier ?? 1, source }]));

const shopEffects = Object.values(effectByKey).filter(card => ["shop", "both"].includes(card.source));
const pouchEffects = Object.values(effectByKey).filter(card => ["pouch", "both"].includes(card.source));
const pouchOdds = [
  [75, 25, 0, 0, 0], [40, 40, 20, 0, 0], [27, 27, 36, 10, 0],
  [10, 20, 25, 35, 10], [5, 10, 15, 30, 40],
];

const modes = {
  standard: { name: "全阵营", note: "三分、逐鹿、大河均开放。" },
  wei: { name: "禁用三分", note: "甄姬与孙尚香退出牌池，练逐鹿和日落海接牌。" },
  deer: { name: "禁用逐鹿", note: "庄周、老夫子和蒙犽退出牌池，练用三分登场接牌。" },
  river: { name: "禁用大河", note: "保留三分与逐鹿，刷牌时跳过大河流域。" },
};

const scenarios = {
  loop: { name: "成型倒转", description: "六张体系牌在场，留一个打出位。" },
  start: { name: "五本启动", description: "从过渡盘找姜子牙、司空震和海诺。" },
  recovery: { name: "断牌续转", description: "能量和手牌吃紧，接回下一轮指法。" },
};

const techniques = { repeat: "轮指", sweep: "扫拂", pluck: "吟揉", fallback: "绞弦" };
const shopOdds = [
  [100, 0, 0, 0, 0], [50, 50, 0, 0, 0], [20, 50, 30, 0, 0],
  [15, 30, 35, 20, 0], [1, 20, 40, 30, 9], [1, 9, 40, 35, 15],
];


const BOARD_COLUMNS = 7;
const BOARD_SIZE = 28;
const BATTLE_HAND_LIMIT = 10;
const BATTLE_SHOP_SECONDS = 25;
const MAX_LEVEL = 999;
const rankedPrepSeconds = [30, 35, 40, 50, 55, 60, 65, 70, 75, 75, 80, 80, 85, 85, 85, 85, 85];
const prepSecondsForRound = round => rankedPrepSeconds[round - 1] ?? 80;
const upgradeCosts = [0, 7, 14, 17, 23, 27];
const energyFor = round => round <= 4 ? 6 : round <= 8 ? 8 : round <= 12 ? 12 : 15;
const unitCopies = [0, 18, 18, 16, 14, 10];
const SONG_NOTES = 6;
const cardDefinitions = new Set([...heroes, ...Object.values(effectByKey)]);

function copyRoundValue(value) {
  // Merges and shop stock use the original card definitions by identity.
  if (!value || typeof value !== "object" || cardDefinitions.has(value)) return value;
  if (Array.isArray(value)) return value.map(copyRoundValue);
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, copyRoundValue(item)]));
}
// This is the trainer's rate when the rolled tier has eligible effects.
const TRAINING_EFFECT_CHANCE = .10;
const active = (board, rule) => board.find(unit => unit?.def.rule === rule);

const startingPositions = {
  loop: {
    round: 10, energy: 25, core: 96, hp: 31, refresh: 1,
    board: [
      [8, "亚瑟", 32, true], [11, "姬小满", 27, true], [15, "海诺", 26],
      [17, "莱西奥", 40, true], [22, "姜子牙", 29], [25, "司空震", 49, true],
    ],
    hand: ["马可波罗", "亚瑟", "莱西奥", "孙尚香|庄周", "狂铁", "#song"],
    shop: ["甄姬|庄周", "马可波罗", "蒙犽|亚连", "狂铁"],
    record: ["pluck", "pluck", "repeat", "pluck", "pluck", "sweep"],
  },
  start: {
    round: 8, energy: 34, core: 35, hp: 42, refresh: 0,
    board: [
      [9, "狂铁", 18], [11, "姬小满", 13], [15, "牛魔", 15],
      [23, "弈星", 25, true], [26, "亚瑟", 16],
    ],
    hand: ["莱西奥", "马可波罗", "孙尚香|庄周", "#draw"],
    shop: ["庄周|甄姬", "姬小满", "米莱狄", "赵云|廉颇"],
    record: ["sweep", "pluck", "pluck"],
  },
  recovery: {
    round: 11, energy: 8, core: 117, hp: 12, refresh: 1,
    board: [
      [8, "亚瑟", 23, true], [11, "姬小满", 22, true], [15, "海诺", 27],
      [17, "莱西奥", 45, true], [22, "姜子牙", 24], [25, "司空震", 43],
    ],
    hand: ["亚连", "庄周|甄姬", "#wake"],
    shop: ["甄姬|蒙犽", "老夫子|蔡文姬", "马可波罗", "虞姬|米莱狄"],
    record: ["pluck", "sweep", "pluck"],
    notes: ["狂铁", "姬小满"],
  },
};

function classify(notes) {
  const [first] = notes;
  if (notes.every(card => card.name === first.name)) return "repeat";
  if (notes.every(card => card.tier === first.tier)) return "sweep";
  if (first.faction !== "neutral" && notes.every(card => card.faction === first.faction)) return "pluck";
  return "fallback";
}

function battleLevels(units, core, convertPosition) {
  const sailors = units.filter(unit => unit.def.faction === "sea");
  const share = sailors.length ? Math.min(Math.floor(core / sailors.length), Math.floor(core / 2)) : 0;
  const temp = units.map(unit =>
    Math.min(MAX_LEVEL - unit.level, unit.temp + (unit.def.faction === "sea" ? share : 0)));
  const permanent = units.map((unit, index) => {
    const converted = Math.min(temp[index], convertPosition?.unit === unit ? convertPosition.amount : 0);
    temp[index] -= converted;
    return unit.level + converted;
  });
  return units.map((unit, index) => {
    const received = unit.def.rule === "sikong"
      ? temp.reduce((total, bonus, other) => total + (other === index ? 0 : bonus), 0) : 0;
    const copied = unit.awake ? Math.min(received, permanent[index] * 2) : Math.min(Math.floor(received / 2), permanent[index]);
    const temporary = Math.min(MAX_LEVEL - permanent[index], temp[index] + copied);
    return { name: unit.def.name, permanent: permanent[index], temporary, total: permanent[index] + temporary };
  });
}

class TrainingGame {
  constructor(settings) {
    const start = startingPositions[settings.scenario];
    this.settings = { ...settings };
    this.randomState = settings.seed >>> 0;
    this.id = 0;
    this.round = start.round;
    this.hp = start.hp;
    this.energy = start.energy;
    this.core = start.core;
    this.level = 5;
    this.xp = 0;
    this.refresh = start.refresh;
    this.shopLocked = false;
    this.board = Array(BOARD_SIZE).fill(null);
    this.hand = [];
    this.notes = (start.notes ?? []).map(name => heroByName[name]);
    this.record = [...start.record];
    this.songEarned = start.hand.includes("#song") ? 1 : 0;
    this.songLimit = 2;
    this.multiplier = 1;
    this.mergeProgress = 0;
    this.choice = null;
    this.phase = "prep";
    this.result = null;
    this.pool = heroes.filter(hero => this.allowed(hero));
    this.stocks = Object.fromEntries(this.pool.map(hero => [hero.name, unitCopies[hero.tier]]));
    for (const [pos, name, level, awake] of start.board) {
      const card = this.card(heroByName[name], { awake: !!awake, level, copies: awake ? 4 : 1, stock: awake ? 4 : 1 });
      this.takeStock(card.def, card.stock);
      this.board[pos] = this.unit(card);
    }
    for (const name of start.hand) {
      const def = this.resolvePreset(name);
      const stock = def?.type === "hero" ? 1 : 0;
      if (def) {
        this.takeStock(def, stock);
        this.hand.push(this.card(def, { stock }));
      }
    }
    this.shop = start.shop.map(name => {
      const def = this.resolvePreset(name);
      if (!def) return this.shopRoll();
      this.takeStock(def, 1);
      return this.card(def, { stock: 1 });
    });
    this.resetMetrics();
  }

  get units() { return this.board.filter(Boolean); }
  get capacity() { return this.level >= 5 ? 7 : this.level >= 3 ? 6 : 5; }
  get upgradeCost() { return this.level === 6 ? 0 : Math.max(0, upgradeCosts[this.level] - this.xp); }
  get nextEnergy() { return energyFor(this.round + 1); }
  get finished() { return this.phase === "result"; }
  get battleShopping() { return this.phase === "battle-shop"; }
  get songProgress() { return this.record.length; }
  get songInHand() { return this.hand.some(card => card.def.key === "song"); }
  get songsRemaining() { return this.songLimit - this.songEarned; }

  copyRound() {
    return Object.assign(Object.create(TrainingGame.prototype), copyRoundValue(this));
  }

  resolvePreset(value) {
    if (value.startsWith("#")) return effectByKey[value.slice(1)];
    return value.split("|").map(name => heroByName[name]).find(def => this.allowed(def));
  }

  allowed(def) {
    return !!def && (def.faction === "neutral" || def.faction !== this.settings.ban);
  }

  random() {
    this.randomState = (Math.imul(this.randomState, 1664525) + 1013904223) >>> 0;
    return this.randomState / 4294967296;
  }

  sample(items, count) {
    const available = [...items];
    return Array.from({ length: Math.min(count, available.length) }, () => {
      const index = Math.floor(this.random() * available.length);
      return available.splice(index, 1)[0];
    });
  }

  card(def, overrides = {}) {
    const rank = def.key === "bag" ? Math.min(this.level, 5) : def.tier;
    return { id: ++this.id, def, rank, awake: false, transient: !!def.transient, stock: 0, ...overrides };
  }

  unit(card) {
    return {
      id: card.id, def: card.def, awake: card.awake, count: card.copies ?? 1,
      level: card.level ?? 1, stock: card.stock, temp: 0, sold: 0,
      equipment: card.equipment ?? [], once: false, extra: 0,
    };
  }

  takeStock(def, amount) {
    if (def.type === "hero" && amount) this.stocks[def.name] -= amount;
  }

  returnStock(def, amount) {
    if (def.type === "hero" && amount) this.stocks[def.name] += amount;
  }

  drawTier(weights) {
    let ticket = this.random() * weights.reduce((sum, weight) => sum + weight, 0);
    return weights.findIndex(weight => (ticket -= weight) < 0) + 1;
  }

  pouchOffers(rank) {
    const pools = pouchOdds[rank - 1].map((_, index) =>
      pouchEffects.filter(def => def.tier === index + 1 && this.allowed(def)));
    const offers = [];
    for (let index = 0; index < 3; index++) {
      const tier = this.drawTier(pouchOdds[rank - 1].map((odds, slot) => pools[slot].length ? odds : 0));
      if (!tier) break;
      const candidates = pools[tier - 1];
      const at = Math.floor(this.random() * candidates.length);
      offers.push(...candidates.splice(at, 1));
    }
    return offers;
  }

  shopRoll() {
    const tier = this.drawTier(shopOdds[this.level - 1]);
    const effects = shopEffects.filter(def => def.tier === tier && this.allowed(def));
    if (effects.length && this.random() < TRAINING_EFFECT_CHANCE) return this.card(this.sample(effects, 1)[0]);
    let available = this.pool.filter(hero => hero.tier === tier && this.stocks[hero.name] > 0);
    if (!available.length) available = this.pool.filter(hero => hero.tier <= this.level && this.stocks[hero.name] > 0);
    const total = available.reduce((sum, hero) => sum + this.stocks[hero.name], 0);
    let ticket = this.random() * total;
    const selected = available.find(hero => (ticket -= this.stocks[hero.name]) < 0);
    if (!selected) return null;
    this.takeStock(selected, 1);
    return this.card(selected, { stock: 1 });
  }

  resetMetrics() {
    this.metrics = {
      heroUses: 0, effects: 0, buys: 0, sales: 0, rolls: 0, freeRolls: 0,
      rejects: 0, discarded: 0, notes: { repeat: 0, sweep: 0, pluck: 0, fallback: 0 }, log: [],
    };
    this.coreAtStart = this.core;
    this.sikongAtStart = active(this.board, "sikong")?.level ?? 0;
  }

  log(message, kind = "normal", technique = null, details = {}) {
    this.metrics.log.push({ message, kind, technique, ...details });
  }

  fail(message) {
    this.metrics.rejects++;
    return { ok: false, message };
  }

  add(card) {
    this.hand.push(card);
  }

  reward(key) {
    const def = effectByKey[key];
    this.add(this.card(def));
    this.log(`获得「${def.name}」`, key === "bag" ? "pouch-reward" : "reward");
  }

  grantHero(def, transient = false) {
    if (!def) return;
    this.add(this.card(def, { transient }));
    this.log(`获得${transient ? "转瞬" : ""}「${def.name}」`, "reward");
  }

  choose(defs, title, count = 1) {
    if (!defs.length) return;
    const option = { title, defs, count: Math.min(count, defs.length), picked: [] };
    if (this.choice) {
      (this.choice.next ??= []).push(option);
    } else {
      this.choice = option;
    }
  }

  pick(index, position = null) {
    const choice = this.choice;
    const def = choice?.defs[index];
    if (!def) return this.fail("请选择一张牌");
    if (choice.picked.includes(index)) return this.fail("这张牌已经选过");
    if (position !== null) {
      if (def.type !== "effect") return this.fail("请选择英雄牌收入手牌");
      const issue = this.checkPlay({ def }, position);
      if (issue) return this.fail(issue);
    }
    choice.picked.push(index);
    if (position !== null) this.resolvePlay(this.card(def), position);
    else if (def.type === "hero") this.grantHero(def);
    else this.reward(def.key);
    if (choice.picked.length === choice.count) {
      const pending = choice.next ?? [];
      this.choice = pending.shift() ?? null;
      if (this.choice && pending.length) this.choice.next = pending;
    }
    return { ok: true };
  }

  changeCore(amount) {
    const heino = active(this.board, "heino");
    this.core += amount + (heino ? (heino.awake ? 2 : 1) : 0);
  }

  addLevel(unit, amount) {
    unit.level = Math.min(MAX_LEVEL, unit.level + amount);
  }

  buy(index, position = null) {
    if (this.finished) return this.fail("本回合已经结算");
    const card = this.shop[index];
    if (!card) return this.fail("这个商店格已经空了");
    if (this.energy < card.def.cost) return this.fail("能量不足");
    if (position != null) {
      const issue = this.checkPlay(card, position);
      if (issue) return this.fail(issue);
    }
    this.energy -= card.def.cost;
    this.metrics.buys++;
    this.log(`购买「${card.def.name}」 · -${card.def.cost} 能量`);
    if (position == null) this.add(card);
    else this.resolvePlay(card, position);
    this.shop[index] = this.shopRoll();
    return { ok: true };
  }

  roll() {
    if (this.finished) return this.fail("本回合已经结算");
    if (!this.refresh && !this.energy) return this.fail("能量不足，当前没有临时刷新");
    if (this.refresh) {
      this.refresh--;
      this.metrics.freeRolls++;
      this.log("消耗 1 次临时刷新");
    } else {
      this.energy--;
      this.log("刷新商店 · -1 能量");
    }
    this.metrics.rolls++;
    this.shop.forEach(card => { if (card) this.returnStock(card.def, card.stock); });
    this.shop = Array.from({ length: 4 }, () => this.shopRoll());
    this.shopLocked = false;
    return { ok: true };
  }

  checkPlay(card, position) {
    if (this.phase !== "prep") return "开战后买入的牌留到下回合使用";
    const target = this.board[position];
    if (card.def.type === "hero") {
      const same = this.units.find(unit => unit.def === card.def);
      if (same?.awake && card.awake) return "这个英雄已觉醒";
      if (same) return null;
      if (this.units.length >= this.capacity) return "上阵位已满，先出售一名场上英雄";
      if (!Number.isInteger(position) || position < 0 || position >= BOARD_SIZE || target) return "拖到一个空棋格上阵";
      return null;
    }
    if (!card.def.target) return null;
    if (!target) return "拖到目标英雄身上使用";
    const valid = {
      hero: true, deer: target.def.faction === "deer", capital: target.def.faction === "capital",
      "awake-deer": target.awake && target.def.faction === "deer",
      entry: target.def.trigger === "entry",
      ready: target.def.trigger === "ready", unawakened: !target.awake,
      low: !target.awake && target.def.tier <= 3,
    };
    if (!valid[card.def.target]) return "这个英雄不符合卡牌的目标条件";
    if (card.def.type === "equipment" && target.equipment.length >= 3) return "这个英雄的装备栏已满";
    return null;
  }

  play(id, position) {
    const index = this.hand.findIndex(card => card.id === id);
    if (index === -1) return this.fail("找不到这张手牌");
    const card = this.hand[index];
    const issue = this.checkPlay(card, position);
    if (issue) return this.fail(issue);
    this.hand.splice(index, 1);
    this.resolvePlay(card, position);
    return { ok: true };
  }

  resolvePlay(card, position) {
    if (card.def.type !== "hero") {
      this.useEffect(card, this.board[position]);
      return;
    }
    const def = card.def;
    const before = this.units;
    const existing = before.find(unit => unit.def === def);
    const campWasPresent = before.some(unit => unit.def.faction === def.faction);
    const arthur = active(before, "arthur");
    const jiang = active(before, "jiang");
    const cai = active(before, "cai");
    this.metrics.heroUses++;
    this.log(`打出「${card.awake ? "觉醒 · " : ""}${def.name}」`, "play", null, { awake: card.awake });

    const unit = existing ?? this.unit(card);
    if (!existing) this.board[position] = unit;
    else {
      this.addLevel(existing, card.awake ? Math.max(0, card.level - 1) : 3);
      existing.stock += card.stock;
      existing.count++;
      if (card.awake) existing.awake = true;
    }
    if (arthur && def.faction === "sea") this.changeCore(arthur.awake ? 6 : 3);
    if (jiang && (def.faction === "neutral" || !campWasPresent)) this.jiangGrowth(jiang);
    if (cai && def.faction === "wei") {
      this.units.filter(other => other !== cai && other.def.faction === "wei")
        .sort((a, b) => a.level - b.level).slice(0, 3)
        .forEach(other => this.addLevel(other, cai.awake ? 2 : 1));
    }
    if (def.trigger === "entry") this.enter(unit);
    if (existing && !card.awake) {
      this.onMerge();
      if (existing.count >= 4 && !existing.awake) this.awaken(existing);
    }
    if (!card.awake) this.note(def);
  }

  jiangGrowth(jiang) {
    const bonus = jiang.awake ? 2 : 1;
    this.addLevel(jiang, bonus);
    const candidates = this.units.filter(unit => unit !== jiang && unit.def.faction !== "neutral");
    const targets = this.sample(candidates, candidates.length);
    const picked = new Set();
    for (const unit of targets) {
      if (picked.has(unit.def.faction)) continue;
      picked.add(unit.def.faction);
      this.addLevel(unit, bonus);
      if (picked.size === 3) break;
    }
    this.log(`姜子牙 · 永久等级 +${bonus}${picked.has("capital") && active(this.board, "sikong") ? "（河洛参与）" : ""}`, "growth");
  }

  onMerge() {
    this.mergeProgress++;
    if (this.mergeProgress === 3) {
      this.mergeProgress = 0;
      this.reward("bag");
    }
    const fuzi = active(this.board, "fuzi");
    if (fuzi && !fuzi.once) {
      fuzi.once = true;
      this.reward(fuzi.awake ? "recruitPlus" : "recruit");
    }
    const luban = active(this.board, "luban");
    if (luban && ++luban.extra === 3) {
      luban.extra = 0;
      const keys = luban.awake ? ["recruitPlus", "drillPlus", "drillAllPlus"] : ["recruit", "drill", "drillAll"];
      this.reward(this.sample(keys, 1)[0]);
    }
  }

  awaken(unit) {
    this.board[this.board.indexOf(unit)] = null;
    this.add(this.card(unit.def, {
      awake: true, copies: unit.count, level: unit.level, stock: unit.stock, equipment: unit.equipment,
    }));
    this.log(`「${unit.def.name}」觉醒，返回手牌`, "growth");
  }

  gainAwakening(unit) {
    if (++unit.count >= 4) this.awaken(unit);
  }

  enter(unit) {
    const bonus = unit.awake ? 2 : 1;
    const others = this.units.filter(other => other !== unit);
    const available = this.pool.filter(def => def !== unit.def && def.trigger === "entry");
    switch (unit.def.rule) {
      case "zhen":
        if (unit.awake) this.choose(this.sample(available, 3), "甄姬 · 选择登场英雄");
        else this.grantHero(this.sample(available, 1)[0]);
        break;
      case "zhou":
        this.addLevel(unit, 2 * bonus);
        this.reward(unit.awake ? "recruitPlus" : "recruit");
        break;
      case "meng": this.reward(unit.awake ? "drillPlus" : "drill"); break;
      case "marco":
        this.changeCore(unit.awake ? 4 : 3);
        this.addLevel(unit, unit.awake ? 4 : 3);
        break;
      case "luna":
        this.changeCore(2 * bonus);
        this.sample(others.filter(other => other.def.trigger === "ready"), 2 * bonus)
          .forEach(other => this.ready(other));
        break;
      case "xiang": this.refresh += bonus; this.log(`孙尚香 · 刷新 +${bonus}`, "reward"); break;
      case "zhao":
        [unit, ...this.sample(others, 2)].forEach(other => this.addLevel(other, bonus));
        break;
      case "diao": this.units.filter(other => other.def.faction === "wei").forEach(other => this.addLevel(other, bonus)); break;
      case "yu": this.units.forEach(other => this.addLevel(other, bonus)); break;
      case "wu": for (let i = 0; i < bonus; i++) this.reward("fancyCoin"); break;
      case "ake":
        for (let i = 0; i <= Math.floor((60 - this.hp) / 10); i++) {
          [unit, ...this.sample(others, 1)].forEach(other => this.addLevel(other, bonus));
        }
        break;
      case "ming": unit.extra += 2 * bonus; break;
    }
    const qiao = active(this.board, "qiao");
    if (qiao) (qiao.awake ? this.units : this.sample(this.units, 3)).forEach(other => this.addLevel(other, 1));
  }

  closest(unit, candidates) {
    const source = this.board.indexOf(unit);
    const distance = other => {
      const index = this.board.indexOf(other);
      return Math.abs(source % BOARD_COLUMNS - index % BOARD_COLUMNS) +
        Math.abs(Math.floor(source / BOARD_COLUMNS) - Math.floor(index / BOARD_COLUMNS));
    };
    return [...candidates].sort((a, b) => distance(a) - distance(b))[0];
  }

  coin(unit, amount = 2) {
    if (!unit) return;
    const wu = active(this.board, "wu");
    this.addLevel(unit, amount + (wu ? (wu.awake ? 2 : 1) : 0));
  }

  ready(unit) {
    const bonus = unit.awake ? 2 : 1;
    switch (unit.def.rule) {
      case "kuang": this.changeCore(2 * bonus); break;
      case "angela": this.changeCore(2 * bonus); this.addLevel(unit, 2 * bonus); break;
      case "allain": {
        const leader = [...this.units].sort((a, b) => b.equipment.length - a.equipment.length)[0];
        if (leader) this.addLevel(leader, 2 * bonus);
        this.changeCore(bonus);
        break;
      }
      case "milady": unit.extra += 3 * bonus; this.changeCore(3 * bonus); break;
      case "pei": {
        const [other] = this.sample(this.units.filter(other => other !== unit), 1);
        unit.temp = Math.floor((other?.level ?? 0) * (unit.awake ? 1 : .5));
        break;
      }
      case "yf": this.coin(this.closest(unit, this.units.filter(other => other !== unit && other.def.faction === "capital")) ?? unit, 2 * bonus); break;
      case "cheng":
        for (let i = 0; i < bonus; i++) { this.reward("coin"); this.coin(unit); }
        break;
      case "wan":
        this.sample(this.units.filter(other => other.def.faction === "capital"), 3)
          .forEach(other => this.coin(other, 2 * bonus));
        break;
      case "xishi": this.reward(unit.awake ? "manaPlus" : "mana"); break;
      case "cao":
        this.sample(this.units.filter(other => other.def.faction === "wei" && other.def.trigger === "entry"), bonus)
          .forEach(other => this.enter(other));
        break;
    }
    const dolia = active(this.board, "dolia");
    if (dolia) {
      const amount = dolia.awake ? 2 : 1;
      this.sample(this.units, 3).forEach(other => this.addLevel(other, amount));
      this.changeCore(amount);
    }
  }

  note(def) {
    this.notes.push(def);
    if (this.notes.length < 3) return;
    const technique = classify(this.notes);
    const labels = this.notes.map(item => item.name).join(" / ");
    this.notes = [];
    this.perform(technique, labels);
    if (technique === "fallback" || this.songInHand) return;
    if (this.record.length === SONG_NOTES) this.record.shift();
    this.record.push(technique);
    this.awardSong();
  }

  awardSong() {
    if (this.record.length < SONG_NOTES || this.songsRemaining === 0 || this.songInHand) return;
    this.songEarned++;
    this.add(this.card(effectByKey.song));
    this.log("获得「惊鸿调」", "song-reward");
  }

  perform(technique, labels) {
    const multiplier = this.multiplier;
    this.multiplier = technique === "repeat" ? 2 : 1;
    this.metrics.notes[technique] += multiplier;
    this.log(`${techniques[technique]}${multiplier > 1 ? " ×2" : ""} · ${labels}`, "music", technique);
    if (technique === "repeat") return;
    for (let count = 0; count < multiplier; count++) {
      if (technique === "pluck") this.grantHero(this.sample(this.pool, 1)[0], true);
      if (technique === "fallback") this.sample(this.units, 1).forEach(unit => this.addLevel(unit, 1));
      if (technique === "sweep") {
        const order = this.sample(this.units, this.units.length).sort((a, b) => a.level - b.level);
        order.slice(0, 2).forEach(unit => this.addLevel(unit, this.level));
      }
    }
  }

  useEffect(card, target) {
    const def = card.def;
    this.metrics.effects++;
    const kind = def.key === "song" ? "secret" : def.key === "bag" ? "pouch" : "play";
    this.log(`使用「${def.name}」${target ? " → " + target.def.name : ""}`, kind);
    switch (def.key) {
      case "song":
        for (const item of this.record) this.perform(item, "惊鸿调");
        this.record = [];
        break;
      case "recruit": this.grantHero(this.sample(this.pool.filter(hero => hero.faction === "deer"), 1)[0]); break;
      case "recruitPlus": this.choose(this.sample(this.pool.filter(hero => hero.faction === "deer"), 3), def.name); break;
      case "drill": this.addLevel(target, 4); break;
      case "drillPlus": this.addLevel(target, 8); break;
      case "drillAll": this.units.forEach(unit => this.addLevel(unit, 1)); break;
      case "drillAllPlus": this.units.forEach(unit => this.addLevel(unit, 2)); break;
      case "guard":
      case "guardPlus": this.units.filter(unit => unit.def.faction === "deer").forEach(unit => { unit.shield = def.key === "guardPlus" ? 150 : 100; }); break;
      case "mana":
      case "manaPlus": target.manaCut = Math.min(20, (target.manaCut ?? 0) + (def.key === "manaPlus" ? 10 : 5)); break;
      case "copy": this.grantHero(this.sample(this.units, 1)[0]?.def); break;
      case "wake": this.enter(target); break;
      case "ready": this.ready(target); break;
      case "echo":
      case "chord": this.gainAwakening(target); break;
      case "coin": this.coin(target); break;
      case "fancyCoin": this.coin(target, 4); break;
      case "ticket1":
      case "ticket2":
      case "ticket3":
      case "ticket5": this.choose(this.sample(this.pool.filter(hero => hero.tier === def.tier), 3), def.name); break;
      case "core": {
        const count = 1 + this.units.filter(unit => unit.def.faction === "sea").length;
        for (let i = 0; i < count; i++) this.changeCore(2);
        break;
      }
      case "draw": this.choose(this.sample(this.pool, 5), def.name, 2); break;
      case "intake": this.choose(this.sample(this.pool, 4), def.name); break;
      case "chaos": this.choose(this.sample(this.pool.filter(hero => hero.trigger === "entry"), 3), def.name); break;
      case "bag": this.choose(this.pouchOffers(card.rank), `${card.rank}阶${def.name}`); break;
      case "temp": target.temp += target.def.tier * 3; break;
      case "advanced": this.grantHero(this.sample(this.pool.filter(hero => hero.tier === Math.min(5, this.level + 1)), 1)[0]); break;
      case "subsidy": this.refresh += 3; break;
      case "subsidyPlus": this.refresh += 4; break;
      case "teamwork":
      case "teamworkPlus": {
        const extra = def.key === "teamworkPlus" ? 1 : 0;
        this.addLevel(target, 3 + extra);
        this.sample(this.units, 1).forEach(unit => this.addLevel(unit, 2 + extra));
        break;
      }
      case "friends":
      case "seek": {
        const matches = this.pool.filter(hero => hero.faction === target.def.faction);
        if (def.key === "seek") this.choose(this.sample(matches, 3), def.name);
        else this.grantHero(this.sample(matches, 1)[0]);
        break;
      }
      case "twoTier2":
      case "twoTier4":
      case "twoTier5":
        this.sample(this.pool.filter(hero => hero.tier === def.tier), 2).forEach(hero => this.grantHero(hero));
        break;
      case "twoReady":
      case "twoEntry": {
        const trigger = def.key === "twoReady" ? "ready" : "entry";
        this.sample(this.pool.filter(hero => hero.trigger === trigger), 2).forEach(hero => this.grantHero(hero));
        break;
      }
      case "draftSea":
      case "draftDeer":
      case "draftWei":
      case "draftRiver":
      case "draftCapital":
      case "draftNeutral":
        this.sample(this.pool.filter(hero => hero.faction === def.faction), 2).forEach(hero => this.grantHero(hero));
        break;
      case "help": {
        const lowest = Math.min(...this.units.map(unit => unit.level));
        this.sample(this.units.filter(unit => unit.level === lowest), 1).forEach(unit => this.addLevel(unit, 9));
        break;
      }
      case "blessing":
        for (const faction of new Set(this.units.map(unit => unit.def.faction))) {
          this.sample(this.units.filter(unit => unit.def.faction === faction), 1).forEach(unit => this.addLevel(unit, 4));
        }
        break;
      case "support": this.addLevel(target, 2 * (1 + new Set(this.units.map(unit => unit.def.faction)).size)); break;
      case "jump": {
        const amount = Math.min(this.core, 5);
        this.core -= amount;
        this.addLevel(target, amount);
        break;
      }
      case "coins": this.reward("coin"); this.reward("coin"); break;
      case "orders":
        this.sample(["recruit", "drill", "drillAll", "guard", "mana"], 2).forEach(key => this.reward(key));
        break;
      case "veteran": this.grantHero(target.def); break;
      case "energy": this.energy += 5; break;
      case "massEntry": this.units.filter(unit => unit.def.trigger === "entry").forEach(unit => this.enter(unit)); break;
      case "massReady": this.units.filter(unit => unit.def.trigger === "ready").forEach(unit => this.ready(unit)); break;
      case "sameTier": this.units.filter(unit => unit.def.tier === target.def.tier).forEach(unit => this.addLevel(unit, 4)); break;
      case "sword": target.equipment.push(def.name); break;
    }
    const bai = active(this.board, "bai");
    if (def.type === "effect" && bai && !bai.once) {
      bai.once = true;
      this.reward(bai.awake ? "guardPlus" : "guard");
    }
  }

  sellCard(id) {
    if (this.phase !== "prep") return this.fail("开战后只能补牌");
    const index = this.hand.findIndex(card => card.id === id);
    if (index === -1) return this.fail("找不到这张手牌");
    const [card] = this.hand.splice(index, 1);
    const energy = card.def.type === "hero" && !card.transient ? 1 : 0;
    this.energy += energy;
    this.returnStock(card.def, card.stock);
    this.log(`出售手牌「${card.def.name}」${energy ? " · +1 能量" : ""}`);
    return { ok: true };
  }

  sellUnit(position) {
    if (this.phase !== "prep") return this.fail("开战后只能补牌");
    const unit = this.board[position];
    if (!unit) return this.fail("这个棋格是空的");
    this.board[position] = null;
    this.energy++;
    this.metrics.sales++;
    this.returnStock(unit.def, unit.stock);
    this.log(`出售场上「${unit.def.name}」 · +1 能量`);
    const ji = active(this.board, "ji");
    const la = active(this.board, "la");
    if (ji && ++ji.sold >= (ji.awake ? 2 : 4)) {
      ji.sold = 0;
      this.refresh++;
      this.log("姬小满 · 临时刷新 +1", "reward");
    }
    if (la && ++la.sold >= (la.awake ? 1 : 2)) {
      la.sold = 0;
      this.changeCore(1);
    }
    if (unit.def.rule === "yang") this.reward(unit.awake ? "echo" : "chord");
    if (unit.def.rule === "mengqi") this.reward(unit.awake ? "ticket2" : "ticket1");
    return { ok: true };
  }

  move(from, to) {
    if (this.phase !== "prep") return this.fail("场上阵容已锁定");
    if (!Number.isInteger(to) || to < 0 || to >= BOARD_SIZE) return this.fail("拖到自己的棋盘上");
    [this.board[to], this.board[from]] = [this.board[from], this.board[to]];
    return { ok: true };
  }

  upgrade() {
    if (this.phase !== "prep") return this.fail("开战后只能补牌");
    if (this.level === 6) return this.fail("棋手已达到 6 级");
    if (this.energy < this.upgradeCost) return this.fail(`还需要 ${this.upgradeCost - this.energy} 能量升本`);
    this.energy -= this.upgradeCost;
    this.level++;
    const yi = active(this.board, "yi");
    this.xp = yi ? (yi.awake ? 4 : 2) : 0;
    this.log("棋手升至 6 级", "growth");
    this.songLimit += 3;
    this.log("余音绕梁 · 惊鸿调可获取次数 +3", "growth");
    this.awardSong();
    return { ok: true };
  }

  end(elapsed, { allowShopping = false } = {}) {
    if (this.phase !== "prep") return this.result;
    this.phase = allowShopping ? "battle-shop" : "result";
    this.choice = null;
    const athena = active(this.board, "athena");
    if (athena) {
      const ready = this.units.filter(unit => unit !== athena && unit.def.faction === "sea" && unit.def.trigger === "ready");
      this.sample(ready, 2).forEach(unit => {
        this.ready(unit);
        if (athena.awake) this.ready(unit);
      });
    }
    const ming = active(this.board, "ming");
    const conversion = ming ? {
      unit: this.closest(ming, this.units.filter(unit => unit !== ming)),
      amount: (ming.awake ? 4 : 2) + ming.extra,
    } : null;
    const levels = battleLevels(this.units, this.core, conversion);
    levels.forEach((level, index) => { this.units[index].level = level.permanent; });
    const cards = this.hand.filter(card => card.transient);
    for (const card of cards) this.returnStock(card.def, card.stock);
    this.hand = this.hand.filter(card => !card.transient);
    if (cards.length) this.log(`回合结束 · 清除 ${cards.length} 张转瞬牌`, "warning");
    const overflow = this.hand.splice(BATTLE_HAND_LIMIT);
    // Granted songs already consume a limited charge. Keep the card until it can be played.
    const overflowSong = overflow.findIndex(card => card.def.key === "song");
    if (overflowSong >= 0) {
      const [song] = overflow.splice(overflowSong, 1);
      overflow.unshift(this.hand.pop());
      this.hand.push(song);
    }
    for (const card of overflow) this.returnStock(card.def, card.stock);
    this.metrics.discarded = overflow.length;
    if (overflow.length) this.log(`开战 · 手牌超出 ${BATTLE_HAND_LIMIT} 张，弃置 ${overflow.map(card => card.def.name).join("、")}`, "warning");
    this.result = {
      elapsed, levels, expired: cards.length, core: this.core, coreDelta: this.core - this.coreAtStart,
      sikong: levels.find(unit => unit.name === "司空震"),
      sikongDelta: (active(this.board, "sikong")?.level ?? 0) - this.sikongAtStart,
      energy: this.energy, refresh: this.refresh, metrics: structuredClone(this.metrics),
    };
    return this.result;
  }

  finishBattleShopping() {
    if (!this.battleShopping) return;
    this.phase = "result";
    const { metrics: prep } = this.result;
    this.result.energy = this.energy;
    this.result.refresh = this.refresh;
    this.result.shopping = {
      buys: this.metrics.buys - prep.buys,
      rolls: this.metrics.rolls - prep.rolls,
      freeRolls: this.metrics.freeRolls - prep.freeRolls,
      log: this.metrics.log.slice(prep.log.length),
    };
  }

  next() {
    if (!this.finished) return;
    this.phase = "prep";
    this.result = null;
    this.round++;
    this.energy += energyFor(this.round);
    this.refresh = 0;
    this.resetMetrics();
    for (const unit of this.units) {
      unit.temp = 0;
      unit.once = false;
      unit.manaCut = 0;
      unit.shield = 0;
    }
    if (!this.shopLocked) {
      this.shop.forEach(card => { if (card) this.returnStock(card.def, card.stock); });
      this.shop = Array.from({ length: 4 }, () => this.shopRoll());
    }
    this.shopLocked = false;
    for (const unit of this.units.filter(unit => unit.def.trigger === "ready")) this.ready(unit);
    const yang = active(this.board, "yang");
    if (yang && ++yang.extra % 3 === 0) this.reward(yang.awake ? "echo" : "chord");
    if ([4, 8, 12, 16].includes(this.round)) this.reward("sword");
  }

  cardTag(card) {
    return card.def.type === "hero" ? factions[card.def.faction] : card.def.type === "secret" ? "棋手秘技" :
      card.def.type === "equipment" ? "装备牌" : "效果牌";
  }
}

const portraits = {
  "上官婉儿": 513,
  "东皇太一": 187,
  "云中君": 506,
  "亚瑟": 166,
  "亚连": 514,
  "公孙离": 199,
  "刘禅": 114,
  "刘邦": 149,
  "司空震": 537,
  "吕布": 123,
  "周瑜": 124,
  "墨子": 108,
  "大乔": 191,
  "大司命": 517,
  "太乙真人": 186,
  "姜子牙": 148,
  "姬小满": 564,
  "嬴政": 110,
  "孙尚香": 111,
  "孙悟空": 167,
  "孙膑": 118,
  "安琪拉": 142,
  "小乔": 106,
  "少司缘": 577,
  "干将莫邪": 182,
  "庄周": 113,
  "廉颇": 105,
  "弈星": 197,
  "张良": 156,
  "扁鹊": 119,
  "敖隐": 519,
  "明世隐": 501,
  "曜": 522,
  "曹操": 128,
  "朵莉亚": 159,
  "李信": 507,
  "李元芳": 173,
  "李白": 131,
  "杨玉环": 176,
  "梦奇": 198,
  "武则天": 136,
  "沈梦溪": 312,
  "海月": 521,
  "海诺": 563,
  "牛魔": 168,
  "狂铁": 503,
  "狄仁杰": 133,
  "猪八戒": 511,
  "瑶": 505,
  "甄姬": 127,
  "白起": 120,
  "百里守约": 196,
  "百里玄策": 195,
  "盾山": 509,
  "程咬金": 144,
  "米莱狄": 504,
  "老夫子": 139,
  "艾琳": 155,
  "芈月": 121,
  "花木兰": 154,
  "苍": 177,
  "苏烈": 194,
  "莱西奥": 545,
  "蒙恬": 527,
  "蒙犽": 524,
  "蔡文姬": 184,
  "虞姬": 174,
  "裴擒虎": 502,
  "西施": 523,
  "诸葛亮": 190,
  "貂蝉": 141,
  "赵云": 107,
  "钟馗": 175,
  "铠": 193,
  "镜": 531,
  "阿轲": 116,
  "雅典娜": 183,
  "露娜": 146,
  "韩信": 150,
  "项羽": 135,
  "马可波罗": 132,
  "马超": 518,
  "鬼谷子": 189,
  "鲁班七号": 112,
  "鲁班大师": 525
};

const officialCardArt = {
  "1阶英雄兑换券": {
    "normal": "7051.webp"
  },
  "2阶英雄": {
    "normal": "7519.webp"
  },
  "2阶英雄兑换券": {
    "normal": "7052.webp"
  },
  "3阶英雄兑换券": {
    "normal": "7053.webp"
  },
  "4阶英雄": {
    "normal": "7521.webp"
  },
  "5阶英雄": {
    "normal": "7522.webp"
  },
  "5阶英雄兑换券": {
    "normal": "7055.webp"
  },
  "阿轲": {
    "normal": "1161.webp",
    "awakened": "1163.webp"
  },
  "艾琳": {
    "normal": "3551.webp",
    "awakened": "3553.webp"
  },
  "安琪拉": {
    "normal": "1421.webp",
    "awakened": "1423.webp"
  },
  "敖隐": {
    "normal": "5191.webp",
    "awakened": "5193.webp"
  },
  "八方来援": {
    "normal": "7537.webp"
  },
  "白起": {
    "normal": "1201.webp",
    "awakened": "1203.webp"
  },
  "百里守约": {
    "normal": "1961.webp",
    "awakened": "1963.webp"
  },
  "百里玄策": {
    "normal": "1951.webp",
    "awakened": "1953.webp"
  },
  "扁鹊": {
    "normal": "1191.webp",
    "awakened": "1193.webp"
  },
  "蔡文姬": {
    "normal": "1841.webp",
    "awakened": "1843.webp"
  },
  "苍": {
    "normal": "1771.webp",
    "awakened": "1773.webp"
  },
  "曹操": {
    "normal": "1281.webp",
    "awakened": "1283.webp"
  },
  "超级补贴": {
    "normal": "7088.webp"
  },
  "程咬金": {
    "normal": "1441.webp",
    "awakened": "1443.webp"
  },
  "大河流域征召令": {
    "normal": "7510.webp"
  },
  "大乔": {
    "normal": "1911.webp",
    "awakened": "1913.webp"
  },
  "大司命": {
    "normal": "5171.webp",
    "awakened": "5173.webp"
  },
  "登场人物": {
    "normal": "7512.webp"
  },
  "狄仁杰": {
    "normal": "1331.webp",
    "awakened": "1333.webp"
  },
  "貂蝉": {
    "normal": "1411.webp",
    "awakened": "1413.webp"
  },
  "东皇太一": {
    "normal": "1871.webp",
    "awakened": "1873.webp"
  },
  "盾山": {
    "normal": "5091.webp",
    "awakened": "5093.webp"
  },
  "朵莉亚": {
    "normal": "1591.webp",
    "awakened": "1593.webp"
  },
  "发号施令": {
    "normal": "7504.webp"
  },
  "扶倾济弱": {
    "normal": "7066.webp"
  },
  "干将莫邪": {
    "normal": "1821.webp",
    "awakened": "1823.webp"
  },
  "高级人才": {
    "normal": "7002.webp"
  },
  "高阶特训战术": {
    "normal": "313009.webp"
  },
  "高阶推演战术": {
    "normal": "313012.webp"
  },
  "高阶演练战术": {
    "normal": "313014.webp"
  },
  "高阶援护战术": {
    "normal": "313008.webp"
  },
  "高阶招募战术": {
    "normal": "313010.webp"
  },
  "公孙离": {
    "normal": "1991.webp",
    "awakened": "1993.webp"
  },
  "古币": {
    "normal": "311002.webp"
  },
  "古币多多": {
    "normal": "7502.webp"
  },
  "广纳良才": {
    "normal": "7063.webp"
  },
  "鬼谷子": {
    "normal": "1891.webp",
    "awakened": "1893.webp"
  },
  "海诺": {
    "normal": "5631.webp",
    "awakened": "5633.webp"
  },
  "海月": {
    "normal": "5211.webp",
    "awakened": "5213.webp"
  },
  "韩信": {
    "normal": "1501.webp",
    "awakened": "1503.webp"
  },
  "河洛征召令": {
    "normal": "7506.webp"
  },
  "呼朋唤友": {
    "normal": "7037.webp"
  },
  "花木兰": {
    "normal": "1541.webp",
    "awakened": "1543.webp"
  },
  "唤醒": {
    "normal": "7074.webp"
  },
  "姬小满": {
    "normal": "5641.webp",
    "awakened": "5643.webp"
  },
  "集体唤醒": {
    "normal": "7079.webp"
  },
  "简易协作": {
    "normal": "7040.webp"
  },
  "姜子牙": {
    "normal": "1481.webp",
    "awakened": "1483.webp"
  },
  "绞弦": {
    "normal": "92504.webp"
  },
  "金色圣剑": {
    "normal": "643207.webp"
  },
  "惊鸿调": {
    "normal": "92510.webp"
  },
  "惊喜补贴": {
    "normal": "7087.webp"
  },
  "精密协作": {
    "normal": "7062.webp"
  },
  "精致古币": {
    "normal": "311003.webp"
  },
  "镜": {
    "normal": "5311.webp",
    "awakened": "5313.webp"
  },
  "久经沙场": {
    "normal": "7530.webp"
  },
  "铠": {
    "normal": "1931.webp",
    "awakened": "1933.webp"
  },
  "狂铁": {
    "normal": "5031.webp",
    "awakened": "5033.webp"
  },
  "莱西奥": {
    "normal": "5451.webp",
    "awakened": "5453.webp"
  },
  "老夫子": {
    "normal": "1391.webp",
    "awakened": "1393.webp"
  },
  "李白": {
    "normal": "1311.webp",
    "awakened": "1313.webp"
  },
  "李信": {
    "normal": "5071.webp",
    "awakened": "5073.webp"
  },
  "李元芳": {
    "normal": "1731.webp",
    "awakened": "1733.webp"
  },
  "廉颇": {
    "normal": "1051.webp",
    "awakened": "1053.webp"
  },
  "临阵磨枪": {
    "normal": "7073.webp"
  },
  "刘邦": {
    "normal": "1491.webp",
    "awakened": "1493.webp"
  },
  "刘禅": {
    "normal": "1141.webp",
    "awakened": "1143.webp"
  },
  "鲁班大师": {
    "normal": "5251.webp",
    "awakened": "5253.webp"
  },
  "鲁班七号": {
    "normal": "1121.webp",
    "awakened": "1123.webp"
  },
  "露娜": {
    "normal": "1461.webp",
    "awakened": "1463.webp"
  },
  "吕布": {
    "normal": "1231.webp",
    "awakened": "1233.webp"
  },
  "乱世": {
    "normal": "7540.webp"
  },
  "轮指": {
    "normal": "92501.webp"
  },
  "马超": {
    "normal": "5181.webp",
    "awakened": "5183.webp"
  },
  "马可波罗": {
    "normal": "1321.webp",
    "awakened": "1323.webp"
  },
  "蒙恬": {
    "normal": "5271.webp",
    "awakened": "5273.webp"
  },
  "蒙犽": {
    "normal": "5241.webp",
    "awakened": "5243.webp"
  },
  "梦奇": {
    "normal": "1981.webp",
    "awakened": "1983.webp"
  },
  "米莱狄": {
    "normal": "5041.webp",
    "awakened": "5043.webp"
  },
  "芈月": {
    "normal": "1211.webp",
    "awakened": "1213.webp"
  },
  "妙音": {
    "normal": "307002.webp"
  },
  "明世隐": {
    "normal": "5011.webp",
    "awakened": "5013.webp"
  },
  "墨子": {
    "normal": "1081.webp",
    "awakened": "1083.webp"
  },
  "能量大爆炸": {
    "normal": "7075.webp"
  },
  "霓裳曲": {
    "normal": "92599.webp"
  },
  "牛魔": {
    "normal": "1681.webp",
    "awakened": "1683.webp"
  },
  "裴擒虎": {
    "normal": "5021.webp",
    "awakened": "5023.webp"
  },
  "求贤": {
    "normal": "7064.webp"
  },
  "全军动员": {
    "normal": "7080.webp"
  },
  "日落海征召令": {
    "normal": "7509.webp"
  },
  "三分征召令": {
    "normal": "7507.webp"
  },
  "扫拂": {
    "normal": "92502.webp"
  },
  "上官婉儿": {
    "normal": "5131.webp",
    "awakened": "5133.webp"
  },
  "少司缘": {
    "normal": "5771.webp",
    "awakened": "5773.webp"
  },
  "沈梦溪": {
    "normal": "3121.webp",
    "awakened": "3123.webp"
  },
  "司空震": {
    "normal": "5371.webp",
    "awakened": "5373.webp"
  },
  "苏烈": {
    "normal": "1941.webp",
    "awakened": "1943.webp"
  },
  "孙膑": {
    "normal": "1181.webp",
    "awakened": "1183.webp"
  },
  "孙尚香": {
    "normal": "1111.webp",
    "awakened": "1113.webp"
  },
  "孙悟空": {
    "normal": "1671.webp",
    "awakened": "1673.webp"
  },
  "太乙真人": {
    "normal": "1861.webp",
    "awakened": "1863.webp"
  },
  "特训战术": {
    "normal": "313007.webp"
  },
  "跳级": {
    "normal": "7541.webp"
  },
  "推演战术": {
    "normal": "313011.webp"
  },
  "无阵营征召令": {
    "normal": "7511.webp"
  },
  "武则天": {
    "normal": "1361.webp",
    "awakened": "1363.webp"
  },
  "吸纳人才": {
    "normal": "7038.webp"
  },
  "西施": {
    "normal": "5231.webp",
    "awakened": "5233.webp"
  },
  "弦音": {
    "normal": "307001.webp"
  },
  "项羽": {
    "normal": "1351.webp",
    "awakened": "1353.webp"
  },
  "小乔": {
    "normal": "1061.webp",
    "awakened": "1063.webp"
  },
  "效果锦囊": {
    "normal": "capture-effect-pouch.webp",
    "capture": true
  },
  "雅典娜": {
    "normal": "1831.webp",
    "awakened": "1833.webp"
  },
  "亚连": {
    "normal": "5141.webp",
    "awakened": "5143.webp"
  },
  "亚瑟": {
    "normal": "1661.webp",
    "awakened": "1663.webp"
  },
  "演练战术": {
    "normal": "313013.webp"
  },
  "杨玉环": {
    "normal": "1761.webp",
    "awakened": "1763.webp"
  },
  "瑶": {
    "normal": "5051.webp",
    "awakened": "5053.webp"
  },
  "曜": {
    "normal": "5221.webp",
    "awakened": "5223.webp"
  },
  "弈星": {
    "normal": "1971.webp",
    "awakened": "1973.webp"
  },
  "吟揉": {
    "normal": "92503.webp"
  },
  "嬴政": {
    "normal": "1101.webp",
    "awakened": "1103.webp"
  },
  "有福同享": {
    "normal": "7076.webp"
  },
  "虞姬": {
    "normal": "1741.webp",
    "awakened": "1743.webp"
  },
  "援护战术": {
    "normal": "313001.webp"
  },
  "云中君": {
    "normal": "5061.webp",
    "awakened": "5063.webp"
  },
  "战前宣誓": {
    "normal": "7538.webp"
  },
  "张良": {
    "normal": "1561.webp",
    "awakened": "1563.webp"
  },
  "招募战术": {
    "normal": "313003.webp"
  },
  "赵云": {
    "normal": "1071.webp",
    "awakened": "1073.webp"
  },
  "照影": {
    "normal": "7032.webp"
  },
  "甄姬": {
    "normal": "1271.webp",
    "awakened": "1273.webp"
  },
  "阵营祝福": {
    "normal": "7503.webp"
  },
  "整备高手": {
    "normal": "7513.webp"
  },
  "钟馗": {
    "normal": "1751.webp",
    "awakened": "1753.webp"
  },
  "周瑜": {
    "normal": "1241.webp",
    "awakened": "1243.webp"
  },
  "诸葛亮": {
    "normal": "1901.webp",
    "awakened": "1903.webp"
  },
  "猪八戒": {
    "normal": "5111.webp",
    "awakened": "5113.webp"
  },
  "逐鹿征召令": {
    "normal": "7508.webp"
  },
  "助力核心": {
    "normal": "7501.webp"
  },
  "庄周": {
    "normal": "1131.webp",
    "awakened": "1133.webp"
  }
};

const playingCardAtlas = {"columns":12,"rows":20,"cells":{"1051.webp":0,"1053.webp":1,"1061.webp":2,"1063.webp":3,"1071.webp":4,"1073.webp":5,"1081.webp":6,"1083.webp":7,"1101.webp":8,"1103.webp":9,"1111.webp":10,"1113.webp":11,"1121.webp":12,"1123.webp":13,"1131.webp":14,"1133.webp":15,"1141.webp":16,"1143.webp":17,"1161.webp":18,"1163.webp":19,"1181.webp":20,"1183.webp":21,"1191.webp":22,"1193.webp":23,"1201.webp":24,"1203.webp":25,"1211.webp":26,"1213.webp":27,"1231.webp":28,"1233.webp":29,"1241.webp":30,"1243.webp":31,"1271.webp":32,"1273.webp":33,"1281.webp":34,"1283.webp":35,"1311.webp":36,"1313.webp":37,"1321.webp":38,"1323.webp":39,"1331.webp":40,"1333.webp":41,"1351.webp":42,"1353.webp":43,"1361.webp":44,"1363.webp":45,"1391.webp":46,"1393.webp":47,"1411.webp":48,"1413.webp":49,"1421.webp":50,"1423.webp":51,"1441.webp":52,"1443.webp":53,"1461.webp":54,"1463.webp":55,"1481.webp":56,"1483.webp":57,"1491.webp":58,"1493.webp":59,"1501.webp":60,"1503.webp":61,"1541.webp":62,"1543.webp":63,"1561.webp":64,"1563.webp":65,"1591.webp":66,"1593.webp":67,"1661.webp":68,"1663.webp":69,"1671.webp":70,"1673.webp":71,"1681.webp":72,"1683.webp":73,"1731.webp":74,"1733.webp":75,"1741.webp":76,"1743.webp":77,"1751.webp":78,"1753.webp":79,"1761.webp":80,"1763.webp":81,"1771.webp":82,"1773.webp":83,"1821.webp":84,"1823.webp":85,"1831.webp":86,"1833.webp":87,"1841.webp":88,"1843.webp":89,"1861.webp":90,"1863.webp":91,"1871.webp":92,"1873.webp":93,"1891.webp":94,"1893.webp":95,"1901.webp":96,"1903.webp":97,"1911.webp":98,"1913.webp":99,"1931.webp":100,"1933.webp":101,"1941.webp":102,"1943.webp":103,"1951.webp":104,"1953.webp":105,"1961.webp":106,"1963.webp":107,"1971.webp":108,"1973.webp":109,"1981.webp":110,"1983.webp":111,"1991.webp":112,"1993.webp":113,"307001.webp":114,"307002.webp":115,"311002.webp":116,"311003.webp":117,"3121.webp":118,"3123.webp":119,"313001.webp":120,"313003.webp":121,"313007.webp":122,"313008.webp":123,"313009.webp":124,"313010.webp":125,"313011.webp":126,"313012.webp":127,"313013.webp":128,"313014.webp":129,"3551.webp":130,"3553.webp":131,"5011.webp":132,"5013.webp":133,"5021.webp":134,"5023.webp":135,"5031.webp":136,"5033.webp":137,"5041.webp":138,"5043.webp":139,"5051.webp":140,"5053.webp":141,"5061.webp":142,"5063.webp":143,"5071.webp":144,"5073.webp":145,"5091.webp":146,"5093.webp":147,"5111.webp":148,"5113.webp":149,"5131.webp":150,"5133.webp":151,"5141.webp":152,"5143.webp":153,"5171.webp":154,"5173.webp":155,"5181.webp":156,"5183.webp":157,"5191.webp":158,"5193.webp":159,"5211.webp":160,"5213.webp":161,"5221.webp":162,"5223.webp":163,"5231.webp":164,"5233.webp":165,"5241.webp":166,"5243.webp":167,"5251.webp":168,"5253.webp":169,"5271.webp":170,"5273.webp":171,"5311.webp":172,"5313.webp":173,"5371.webp":174,"5373.webp":175,"5451.webp":176,"5453.webp":177,"5631.webp":178,"5633.webp":179,"5641.webp":180,"5643.webp":181,"5771.webp":182,"5773.webp":183,"643207.webp":184,"7002.webp":185,"7032.webp":186,"7037.webp":187,"7038.webp":188,"7040.webp":189,"7051.webp":190,"7052.webp":191,"7053.webp":192,"7055.webp":193,"7062.webp":194,"7063.webp":195,"7064.webp":196,"7066.webp":197,"7073.webp":198,"7074.webp":199,"7075.webp":200,"7076.webp":201,"7079.webp":202,"7080.webp":203,"7087.webp":204,"7088.webp":205,"7501.webp":206,"7502.webp":207,"7503.webp":208,"7504.webp":209,"7506.webp":210,"7507.webp":211,"7508.webp":212,"7509.webp":213,"7510.webp":214,"7511.webp":215,"7512.webp":216,"7513.webp":217,"7519.webp":218,"7521.webp":219,"7522.webp":220,"7530.webp":221,"7537.webp":222,"7538.webp":223,"7540.webp":224,"7541.webp":225,"92501.webp":226,"92502.webp":227,"92503.webp":228,"92504.webp":229,"92510.webp":230,"92599.webp":231,"capture-effect-pouch.webp":232},"sharpRows":5,"sharpPages":4};


const $ = id => document.getElementById(id);
const arena = $("arena");
arena.style.setProperty("--atlas-columns", playingCardAtlas.columns);
arena.style.setProperty("--atlas-rows", playingCardAtlas.rows);
arena.style.setProperty("--atlas-hd-rows", playingCardAtlas.sharpRows);
const overlay = $("overlay");
const inspector = $("card-inspector");
const ghost = $("drag-ghost");
const effectsLayer = $("effects-layer");
const handViewport = $("hand-viewport");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const portraitViewport = matchMedia("(orientation: portrait) and (max-width: 850px)");
const statusField = $("round-status");
const button = (action, label, classes = "dialog-action") =>
  `<button class="${classes}" data-action="${action}">${label}</button>`;
const DEFAULTS = {
  scenario: "loop", ban: "standard", timing: "ranked", fixed: true, openShop: true, swipeSell: true,
  effectAudio: true, musicAudio: true,
};

function readStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function saveStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* play remains available */ }
}

const saved = readStorage("wanxiang-training-settings", DEFAULTS);
let settings = {
  ...DEFAULTS, ...saved,
  scenario: Object.hasOwn(scenarios, saved.scenario) ? saved.scenario : "loop",
  ban: Object.hasOwn(modes, saved.ban) ? saved.ban : "standard",
  timing: saved.timing === "untimed" ? "untimed" : "ranked",
};
let best = readStorage("wanxiang-training-best", {});
let game;
let roundStart;
let seed;
let running = false;
let startTime = 0;
let frame = 0;
let lastClockSecond = null;
let shopOpen = true;
let selected = null;
let details = null;
let drag = null;
let handledPointer = false;
let activeModal = null;
let displayedChoice = null;
let boardMarkup = "";
let draft;
let toastTimer;

const fixedSeeds = { loop: 174285577, start: 2837515, recovery: 48907231 };
const glyphs = { song: "♫", sword: "†", recruit: "旗", recruitPlus: "旗", drill: "✦", drillPlus: "✦", core: "◇", coin: "◉", copy: "◈", wake: "✧", ready: "⟳", bag: "囊", echo: "♪", chord: "♪", chaos: "✷" };
const tierNames = ["一", "二", "三", "四", "五"];
const tips = {
  loop: "留一个空位，拖牌上场后把过渡棋子卖掉。",
  start: "刷新找姜子牙、司空震和海诺，观察能量与空位。",
  recovery: "先补齐下一组吟揉，再把转瞬牌打出去。",
};

const roundTime = () => settings.timing === "ranked" ? prepSecondsForRound(game.round) : 0;
const phaseTime = () => game.battleShopping ? BATTLE_SHOP_SECONDS : roundTime();
const COUNTDOWN_ALERT_SECONDS = 5;
const assetUrl = src => `./assets/${src}`;
const imageTag = (src, className = "") =>
  `<img class="${className}" draggable="false" src="${assetUrl(src)}" alt="">`;
const techniqueSounds = {
  repeat: "technique-repeat",
  sweep: "technique-sweep",
  pluck: "technique-pluck",
  fallback: "technique-fallback",
};
const variants = { buy: 8, play: 3, "play-golden": 3 };
const skillSounds = [...Object.values(techniqueSounds), "song-reward", "song"];
const clips = [
  "click", "refresh", "sell", "lock", "unlock", "shop-open", "shop-close",
  "card-choice", "pouch", "pouch-reward", "countdown", ...skillSounds,
  ...Object.entries(variants).flatMap(([action, count]) =>
    Array.from({ length: count }, (_, index) => `${action}-${index + 1}`)),
];
const clipUrl = clip => assetUrl(`audio/client-${clip}.mp3`);
const audioFiles = new Map();
const buffers = new Map();
let effectsContext;
let effectsResume;
const backgroundMusic = $("game-music");
backgroundMusic.src = clipUrl("board");
backgroundMusic.volume = .46;
function makeEffectPlayer(action) {
  const player = document.createElement("audio");
  player.hidden = true;
  player.preload = "auto";
  player.src = clipUrl(action);
  document.body.append(player);
  return player;
}

const skillPlayers = new Map(skillSounds.map(action => {
  const player = makeEffectPlayer(action);
  player.dataset.skillSound = action;
  return [action, player];
}));
const countdownPlayer = makeEffectPlayer("countdown");
countdownPlayer.id = "countdown-sound";
let countdownPrimed = false;
let primingCountdown = false;
let audioStarted = false;

function updateMusicMix() {
  const skillPlaying = Array.from(skillPlayers.values()).some(player => !player.paused && !player.ended);
  backgroundMusic.volume = skillPlaying ? .23 : .46;
}

for (const player of skillPlayers.values()) {
  for (const event of ["playing", "pause", "ended", "error"]) player.addEventListener(event, updateMusicMix);
}

function startSkillSound(action) {
  const player = skillPlayers.get(action);
  if (player.currentTime > 0) player.currentTime = 0;
  return player.play();
}

function primeCountdown() {
  if (countdownPrimed || primingCountdown) return;
  primingCountdown = true;
  // Unlock this player during a gesture so the later timer can play it.
  countdownPlayer.muted = true;
  countdownPlayer.play().then(() => {
    countdownPlayer.pause();
    countdownPlayer.currentTime = 0;
    countdownPrimed = true;
  }).catch(() => {}).finally(() => {
    countdownPlayer.muted = false;
    primingCountdown = false;
  });
}

function playCountdown() {
  if (!settings.effectAudio || document.hidden) return;
  if (primingCountdown) {
    playBufferedSound("countdown", 0);
    return;
  }
  const phaseStart = startTime;
  if (countdownPlayer.currentTime > 0) countdownPlayer.currentTime = 0;
  countdownPlayer.play().catch(error => {
    if (error.name !== "AbortError" && running && startTime === phaseStart) playBufferedSound("countdown", 0);
  });
}

function resetCountdown() {
  lastClockSecond = null;
  if (!primingCountdown) countdownPlayer.pause();
}

function syncMusic() {
  if (!settings.musicAudio || document.hidden) backgroundMusic.pause();
  else if (audioStarted && backgroundMusic.paused) backgroundMusic.play().catch(() => {});
}

function audioBytes(action) {
  if (!audioFiles.has(action)) {
    const request = fetch(clipUrl(action)).then(response => {
      if (!response.ok) throw new Error(`Audio ${response.status}`);
      return response.arrayBuffer();
    }).catch(() => {
      audioFiles.delete(action);
      return null;
    });
    audioFiles.set(action, request);
  }
  return audioFiles.get(action);
}

function unlockEffects() {
  audioStarted = true;
  syncMusic();
  if (!settings.effectAudio) return;
  primeCountdown();
  const AudioContext = window.AudioContext ?? window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    effectsContext ??= new AudioContext();
  } catch {
    return;
  }
  if (effectsContext.state !== "running" && !effectsResume) {
    effectsResume = effectsContext.resume().catch(() => {}).finally(() => { effectsResume = null; });
  }
  for (const action of clips) {
    if (buffers.has(action)) continue;
    const ready = audioBytes(action)
      .then(data => {
        if (!data) throw new Error("Audio unavailable");
        return effectsContext.decodeAudioData(data.slice(0));
      })
      .catch(() => { buffers.delete(action); return null; });
    buffers.set(action, ready);
  }
}

function playSound(action, delay = 0) {
  if (!settings.effectAudio || document.hidden) return;
  if (skillPlayers.has(action)) {
    // Request playback during the action itself so mobile browsers can use its gesture.
    startSkillSound(action).catch(() => playBufferedSound(action, 0));
    return;
  }
  const count = variants[action];
  const clip = count ? `${action}-${1 + Math.floor(Math.random() * count)}` : action;
  playBufferedSound(clip, delay);
}

function playBufferedSound(action, delay) {
  const ready = buffers.get(action);
  if (!settings.effectAudio || !ready) return;
  const requested = performance.now();
  const phaseStart = startTime;
  Promise.all([ready, effectsResume]).then(([buffer]) => {
    const elapsed = (performance.now() - requested) / 1000;
    if (!buffer || !settings.effectAudio || document.hidden || effectsContext.state !== "running" || elapsed > delay + .45) return;
    if (action === "countdown" && (!running || startTime !== phaseStart)) return;
    const voice = effectsContext.createBufferSource();
    voice.buffer = buffer;
    voice.connect(effectsContext.destination);
    voice.start(effectsContext.currentTime + Math.max(0, delay - elapsed));
  });
}
const art = (def, className) => {
  const id = portraits[def.name];
  return `<span class="${className}">${id
    ? imageTag(`heroes/${id}.jpg`)
    : glyphs[def.key] ?? def.name[0]}</span>`;
};

function cardImageName(card) {
  const images = officialCardArt[card.def.name];
  return card.awake ? images?.awakened ?? images?.normal : images?.normal;
}

function originalFace(card) {
  const filename = cardImageName(card);
  if (!filename) return "";
  const pack = facePack[filename];
  if (pack === undefined) return imageTag(`official/${filename}`, "original-face");
  import(`./faces/${pack}.js`).then(({ default: faces }) => {
    const placeholder = inspector.querySelector("[data-full-face]");
    if (placeholder?.dataset.fullFace !== filename) return;
    const image = document.createElement("img");
    image.className = "original-face";
    image.alt = "";
    image.draggable = false;
    image.src = faces[filename];
    placeholder.replaceWith(image);
  }).catch(() => {});
  return `<span data-full-face="${filename}">${gameFace(card)}</span>`;
}

function gameFace(card) {
  const { columns, rows, cells, sharpRows } = playingCardAtlas;
  const index = cells[cardImageName(card)];
  if (index === undefined) return "";
  const row = Math.floor(index / columns);
  const page = Math.floor(row / sharpRows);
  const x = (index % columns) / (columns - 1) * 100;
  const y = row / (rows - 1) * 100;
  const sharpY = (row % sharpRows) / (sharpRows - 1) * 100;
  return `<span class="original-face atlas-face" data-atlas-page="${page}" aria-hidden="true"
    style="--atlas-x:${x}%;--atlas-y:${y}%;--atlas-hd-y:${sharpY}%;--atlas-hd-face:var(--atlas-hd-${page}, none)"></span>`;
}

async function loadSharpCardArt() {
  const visible = arena.querySelectorAll("#hand .atlas-face,#shop:not([hidden]) .atlas-face");
  const pages = new Set(Array.from(visible, face => Number(face.dataset.atlasPage)));
  for (let page = 0; page < playingCardAtlas.sharpPages; page++) pages.add(page);
  for (const page of pages) {
    const url = assetUrl(`playing-card-hd-${page + 1}.webp`);
    const image = new Image();
    image.fetchPriority = "low";
    image.src = url;
    try {
      await image.decode();
      arena.style.setProperty(`--atlas-hd-${page}`, `url("${url}")`);
    } catch {
      // The preloaded card art stays visible if the sharper image is unavailable.
    }
  }
}

function face(card, source, index) {
  const { def, awake, transient } = card;
  const tag = game.cardTag(card);
  const label = `${def.name}，${tag}${source === "shop" ? `，购买消耗 ${def.cost} 能量` : ""}${awake ? "，觉醒" : ""}${transient ? "，转瞬" : ""}`;
  const sourceData = source ? `data-source="${source}" data-index="${index}" data-card-id="${card.id}"` : "";
  const dim = source === "shop" && game.energy < def.cost;
  const original = gameFace(card);
  const cost = source === "shop" ? `<span class="card-cost">${def.cost}</span>` : "";
  const capture = officialCardArt[def.name]?.capture ? " card-capture" : "";
  const opening = `<button type="button" class="card card-${def.type} camp-${def.faction} tier-${def.tier}${original ? " card-original" : ""}${capture}${awake ? " card-awake" : ""}${transient ? " card-transient" : ""}${dim ? " dim" : ""}" ${sourceData} aria-label="${label}">`;
  if (original) return `${opening}${original}${cost}</button>`;
  const dots = Array.from({ length: def.tier }, () => "<i></i>").join("");
  return `${opening}
    <span class="card-illustration">
      ${art(def, "card-art")}
      <span class="card-flag" aria-hidden="true">${def.type === "hero" ? dots : def.type === "secret" ? "♫" : "◇"}</span>
      ${cost}
      ${awake ? '<span class="card-state">觉醒</span>' : ""}
      <span class="card-name">${def.name}</span>
    </span>
    ${source === "shop" ? `<span class="card-rules">${def.info ?? ""}</span><span class="card-meta">${tag}</span>` : ""}
  </button>`;
}

function elementFromMarkup(markup) {
  const template = document.createElement("template");
  template.innerHTML = markup;
  return template.content.firstElementChild;
}

function renderBoard() {
  const nextMarkup = game.board.map((unit, index) => {
    const row = Math.floor(index / BOARD_COLUMNS) + 1;
    const col = index % BOARD_COLUMNS + 1;
    const label = unit ? `${unit.def.name} ${unit.level}级${unit.awake ? " 已觉醒" : ""}` : `空棋格 ${row}排${col}列`;
    const result = game.result?.levels.find(level => level.name === unit?.def.name);
    return `<button class="tile${unit ? " occupied" : ""}" data-tile="${index}"
      ${unit ? `data-source="unit" data-index="${index}"` : ""} aria-label="${label}">
      ${unit ? `<span class="unit${unit.awake ? " unit-awake" : ""}">
        ${art(unit.def, "unit-art")}
        <span class="unit-level">${result?.total ?? unit.level}</span><span class="unit-health"></span>
        ${unit.equipment.length ? `<span class="unit-items">${"✦".repeat(unit.equipment.length)}</span>` : ""}
        <span class="unit-name">${unit.def.name}</span></span>` : ""}
    </button>`;
  }).join("");
  if (boardMarkup !== nextMarkup) {
    $("board").innerHTML = nextMarkup;
    boardMarkup = nextMarkup;
  }
  $("capacity").innerHTML = `${game.units.length}<small> / </small>${game.capacity} <small>♟</small>`;
  $("capacity").classList.toggle("full", game.units.length === game.capacity);
}

function renderShop() {
  $("shop").hidden = !shopOpen;
  $("shop-toggle").setAttribute("aria-expanded", shopOpen);
  $("lock").classList.toggle("locked", game.shopLocked);
  $("lock").setAttribute("aria-pressed", game.shopLocked);
  $("lock-label").textContent = game.shopLocked ? "已锁定" : "锁定";
  const row = $("shop-cards");
  game.shop.forEach((card, index) => {
    const existing = row.children[index];
    if (existing && existing.dataset.cardId === (card ? String(card.id) : undefined)) {
      existing.classList.toggle("dim", !!card && game.energy < card.def.cost);
      return;
    }
    const next = elementFromMarkup(card ? face(card, "shop", index) :
      '<span class="card-empty" aria-label="空商店格">·</span>');
    if (existing) existing.replaceWith(next);
    else row.append(next);
  });
  $("shop-odds").innerHTML = shopOdds[game.level - 1].map((chance, tier) =>
    `<span class="tier-${tier + 1}" title="${tier + 1}阶">${chance}%</span>`).join("");
  $("free-count").textContent = game.refresh ? `免费 ×${game.refresh}` : "";
  $("refresh-cost").textContent = game.refresh ? "" : "ϟ1";
}

function renderHand() {
  const hand = $("hand");
  const ids = new Set(game.hand.map(card => String(card.id)));
  const existing = new Map();
  for (const node of [...hand.children]) {
    if (ids.has(node.dataset.cardId)) existing.set(node.dataset.cardId, node);
    else node.remove();
  }
  game.hand.forEach((card, index) => {
    const node = existing.get(String(card.id)) ?? elementFromMarkup(face(card, "hand", card.id));
    const at = hand.children[index];
    if (at !== node) hand.insertBefore(node, at ?? null);
    node.classList.toggle("selected", selected === card.id);
  });
  if (!game.hand.length) hand.innerHTML = '<span class="hand-empty">手牌用完了</span>';
  layoutHand();
  $("hand-count").textContent = `手牌 ${game.hand.length}`;
}

function layoutHand() {
  const row = $("hand");
  const first = row.querySelector(".card");
  if (!first) return;
  const axes = arenaAxes();
  const width = arenaBox(first, axes).width;
  const available = arenaBox(row, axes).width;
  const spaces = game.hand.length - 1;
  const ideal = Math.max(0, available - width) / Math.max(1, spaces);
  // Round down to the browser's layout unit so the last card fits too.
  const gap = spaces > 0 ? Math.floor((Math.min(width + 1, ideal) - width) * 64) / 64 : 0;
  row.style.setProperty("--hand-gap", `${gap}px`);
  row.classList.toggle("overlapping", gap < 0);
}

new ResizeObserver(layoutHand).observe(handViewport);
function renderHud() {
  arena.classList.toggle("swipe-sell", settings.swipeSell);
  $("round-number").textContent = `回合 ${game.round}`;
  $("phase-label").textContent = game.finished ? "结算" : game.battleShopping ? "战斗补牌" : "备战";
  $("mode-label").textContent = modes[settings.ban].name;
  $("scenario-label").textContent = scenarios[settings.scenario].name;
  $("player-hp").textContent = game.hp;
  $("core-value").textContent = `Lv. ${game.core}`;
  $("energy").textContent = game.energy;
  $("next-energy").textContent = `+${game.nextEnergy}`;
  $("lord-level").textContent = `Lv.${game.level}`;
  $("upgrade").innerHTML = game.level === 6 ? "已满级" :
    `升级 <b>ϟ${game.upgradeCost}</b>`;
  $("upgrade").disabled = game.level === 6 || game.phase !== "prep";
  $("end-round").dataset.live = running;
  $("end-label").textContent = game.finished ? "查看结算" : game.battleShopping ? "直接结算" : running ? "开战" : "开始训练";
  $("hint").textContent = game.battleShopping ? "点击买牌，下回合可用" : selected ? "选择棋格或目标英雄" :
    running ? "拖牌上阵 · 拖到两侧出售" : tips[settings.scenario];
  $("song-progress").textContent = game.songInHand ? "惊鸿调可用" : `秘技 ${game.songProgress}/6`;
  $("song-remaining").textContent = `待获 ${game.songsRemaining} 张`;
  $("music-multiplier").hidden = game.multiplier !== 2;
  $("music-pips").innerHTML = Array.from({ length: 3 }, (_, index) => {
    const note = game.notes[index];
    return `<span class="music-note${note ? " filled" : ""}" title="${note?.name ?? ""}">${note
      ? gameFace({ def: note }) || art(note, "note-art") : ""}</span>`;
  }).join("");
  $("music-card").setAttribute("aria-label", `霓裳曲，已记录 ${game.notes.map(note => note.name).join("、") || "零张牌"}${game.multiplier === 2 ? "，轮指 ×2" : ""}`);
  const tracks = [["ji", "姬小满", 4, 2], ["la", "莱西奥", 2, 1]];
  $("trigger-count").innerHTML = tracks.flatMap(([rule, name, normal, awakened]) => {
    const unit = game.units.find(unit => unit.def.rule === rule);
    return unit ? [`<div>${name}出售 <b>${unit.sold}/${unit.awake ? awakened : normal}</b></div>`] : [];
  }).join("");
}

function render() {
  renderBoard();
  renderHand();
  renderShop();
  renderHud();
  syncChoice();
}

function updateClock() {
  const duration = phaseTime();
  if (!running) {
    $("clock").textContent = game.finished ? "结束" : duration ? `${duration}s` : "不限时";
    $("clock-progress").style.width = game.finished ? "0%" : "100%";
    statusField.classList.remove("urgent");
    return;
  }
  if (!duration) return;
  const deadline = startTime + duration * 1000;
  const remaining = deadline - performance.now();
  if (remaining <= 0) {
    if (game.battleShopping) finishBattleShopping();
    else startBattleShopping(deadline);
    return;
  }
  const seconds = Math.ceil(remaining / 1000);
  if (seconds !== lastClockSecond) {
    lastClockSecond = seconds;
    $("clock").textContent = `${seconds}s`;
    if (seconds <= COUNTDOWN_ALERT_SECONDS) playCountdown();
  }
  $("clock-progress").style.width = `${remaining / (duration * 10)}%`;
  statusField.classList.toggle("urgent", remaining <= 10000);
  frame = requestAnimationFrame(updateClock);
}

function newGame(same = false) {
  if (!same || seed == null) {
    seed = settings.fixed ? fixedSeeds[settings.scenario] : crypto.getRandomValues(new Uint32Array(1))[0];
  }
  game = new TrainingGame({ ...settings, seed });
  roundStart = game.copyRound();
  resetRoundView();
}

function resetRoundView() {
  running = false;
  cancelAnimationFrame(frame);
  resetCountdown();
  clearDrag();
  closeDetails();
  hideModal();
  clearTimeout(toastTimer);
  $("toast").hidden = true;
  shopOpen = settings.openShop;
  $("hand").replaceChildren();
  $("shop-cards").replaceChildren();
  effectsLayer.replaceChildren();
  $("pulse").textContent = "";
  render();
  if (shopOpen) animateShopCards($("shop-cards").children, true);
  updateClock();
}

function begin() {
  unlockEffects();
  if (running || game.finished) return;
  running = true;
  startTime = performance.now();
  resetCountdown();
  renderHud();
  updateClock();
}

function announce(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 1000);
}

function arenaAxes() {
  const { left, top, right } = arena.getBoundingClientRect();
  return { left, top, right, sideways: portraitViewport.matches && arena.classList.contains("sideways") };
}

// The sideways view turns the board clockwise, so undo that turn for inputs and effects.
function arenaPoint(x, y, axes) {
  return axes.sideways ? { x: y - axes.top, y: axes.right - x } : { x: x - axes.left, y: y - axes.top };
}

function arenaBox(node, axes = arenaAxes()) {
  const rect = node.getBoundingClientRect();
  const { x: left, y: top } = arenaPoint(axes.sideways ? rect.right : rect.left, rect.top, axes);
  const width = axes.sideways ? rect.height : rect.width;
  const height = axes.sideways ? rect.width : rect.height;
  return { left, top, width, height, right: left + width, bottom: top + height };
}

function center(node) {
  if (!node?.getClientRects().length) return null;
  const rect = arenaBox(node);
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

function playVisual(node, frames, duration, remove = false, delay = 0) {
  if (reducedMotion.matches || !node?.animate) {
    if (remove) node?.remove();
    return;
  }
  const animation = node.animate(frames, { duration, delay, easing: "cubic-bezier(.18,.7,.31,1)", fill: remove ? "both" : "none" });
  if (remove) animation.finished.then(() => node.remove(), () => node.remove());
}

function cardFlight(card, from, to, kind, duration) {
  if (!from || !to || reducedMotion.matches) return;
  const node = elementFromMarkup(`<div class="card-flight ${kind}" aria-hidden="true" inert>${face(card, null, null)}</div>`);
  node.style.left = `${from.x}px`;
  node.style.top = `${from.y}px`;
  effectsLayer.append(node);
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  playVisual(node, [
    { transform: "translate(-50%, -50%) scale(.81)", opacity: .9 },
    { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(.34)`, opacity: 0 },
  ], duration, true);
}

function revealArrival(card, from, to, index) {
  if (!from || !to || reducedMotion.matches) return;
  const secret = card.def.type === "secret";
  const reveal = secret ? center(arena) : {
    x: from.x + (to.x - from.x) * .33,
    y: from.y + (to.y - from.y) * .20,
  };
  const node = elementFromMarkup(`<div class="card-flight drawn-flight${secret ? " secret-flight" : ""}" aria-hidden="true" inert>
    ${face(card, null, null)}</div>`);
  node.style.left = `${from.x}px`;
  node.style.top = `${from.y}px`;
  effectsLayer.append(node);
  const pose = (point, scale, tilt, yaw) =>
    `translate(calc(-50% + ${point.x - from.x}px),calc(-50% + ${point.y - from.y}px))
      perspective(380px) rotateY(${yaw}deg) rotate(${tilt}deg) scale(${scale})`;
  playVisual(node, [
    { opacity: 0, transform: pose(from, .65, -6, -76) },
    { opacity: 1, transform: pose(reveal, secret ? 1.5 : .96, 0, 0), offset: .45 },
    { opacity: .95, transform: pose(reveal, secret ? 1.5 : .96, 0, 0), offset: .58 },
    { opacity: 0, transform: pose(to, .77, 0, 0) },
  ], secret ? 365 : 230, true, index * 16);
}

function saleFlash(point, energy) {
  if (reducedMotion.matches) return;
  const node = elementFromMarkup(`<span class="sale-flash">${energy > 0 ? "+1" : "✦"}</span>`);
  node.style.left = `${Math.max(22, Math.min(arena.clientWidth - 22, point.x))}px`;
  node.style.top = `${point.y}px`;
  effectsLayer.append(node);
  playVisual(node, [
    { opacity: 0, transform: "translate(-50%, -50%) scale(.65)" },
    { opacity: 1, transform: "translate(-50%, -70%) scale(1.2)", offset: .27 },
    { opacity: 0, transform: "translate(-50%, -150%) scale(.95)" },
  ], 390, true);
}

function animateArrivals(priorHand, options, events) {
  if (reducedMotion.matches) return;
  const purchase = options.purchase;
  const rewardOrigin = events.some(event => event.kind === "music")
    ? center($("music-card"))
    : options.origin ?? center($("board"));
  const added = game.hand.filter(card => !priorHand.has(card.id));
  const arrivals = added.slice(0, 5).map(card => ({
    card,
    slot: $("hand").querySelector(`[data-card-id="${card.id}"]`),
  }));
  let rewardIndex = 0;
  for (const { card, slot } of arrivals) {
    const bought = purchase?.card.id === card.id;
    const to = center(slot);
    if (bought) cardFlight(card, options.origin, to, "purchase-flight", 155);
    else revealArrival(card, rewardOrigin, to, rewardIndex++);
    animateCardReveal(slot, bought ? 0 : rewardIndex * 12);
  }
  if (purchase?.position != null && !options.dragged) {
    const actual = game.board.findIndex(unit => unit?.def === purchase.card.def);
    const tile = $("board").querySelector(`[data-tile="${actual < 0 ? purchase.position : actual}"]`);
    cardFlight(purchase.card, options.origin, center(tile) ?? center($("board")), "purchase-flight", 145);
  }
  if (purchase) animateShopCards([$("shop-cards").children[purchase.index]]);
}

function animateCardReveal(slot, delay = 0) {
  if (reducedMotion.matches || !slot?.matches(".card")) return;
  const image = slot.querySelector(".original-face,.card-illustration");
  if (!image) return;
  const back = document.createElement("span");
  back.className = "card-reveal-back";
  back.setAttribute("aria-hidden", "true");
  slot.append(back);
  playVisual(back, [
    { opacity: .95, transform: "perspective(300px) rotateY(22deg)" },
    { opacity: 1, transform: "perspective(300px) rotateY(60deg)", offset: .28 },
    { opacity: 0, transform: "perspective(300px) rotateY(89deg)" },
  ], 88, true, delay);
  playVisual(image, [
    { opacity: .4, transform: "perspective(300px) rotateY(-74deg)" },
    { opacity: 1, transform: "perspective(300px) rotateY(3deg)", offset: .76 },
    { opacity: 1, transform: "perspective(300px) rotateY(0deg)" },
  ], 138, false, 45 + delay);
}

function animateShopCards(slots, stagger = false) {
  for (const [index, slot] of Array.from(slots).entries()) animateCardReveal(slot, stagger ? index * 12 : 0);
}

function captureVisibleHand() {
  if (reducedMotion.matches) return [];
  const axes = arenaAxes();
  const viewport = arenaBox(handViewport, axes);
  const cards = Array.from($("hand").querySelectorAll("[data-card-id]"), node => ({
    node, rect: arenaBox(node, axes), id: Number(node.dataset.cardId),
  }));
  return cards.flatMap(({ node, rect, id }, index) => {
    const left = Math.max(rect.left, viewport.left);
    const right = Math.min(rect.right, viewport.right, cards[index + 1]?.rect.left ?? Infinity);
    if (right <= left || !rect.height) return [];
    return [{ node, rect, id, clip: `inset(0 ${rect.right - right}px 0 ${left - rect.left}px)` }];
  });
}

function animateDiscardedHand(captured) {
  const remaining = new Set(game.hand.map(card => card.id));
  for (const { node, rect, id, clip } of captured) {
    if (remaining.has(id)) continue;
    const expired = node.classList.contains("card-transient");
    const ghost = document.createElement("div");
    ghost.className = `card-flight hand-departure${expired ? " transient-departure" : ""}`;
    ghost.inert = true;
    ghost.setAttribute("aria-hidden", "true");
    Object.assign(ghost.style, {
      left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`, clipPath: clip,
    });
    const face = node.cloneNode(true);
    face.querySelector(".card-reveal-back")?.remove();
    ghost.append(face);
    effectsLayer.append(ghost);
    playVisual(ghost, [
      { opacity: 1, transform: "none" },
      { opacity: .83, transform: "translateY(2px)", offset: .22 },
      { opacity: 0, transform: `translateY(12px) scaleX(${expired ? .22 : .84}) scaleY(.9)` },
    ], expired ? 200 : 150, true);
  }
}

function animateTechnique(event) {
  if (reducedMotion.matches) return;
  const origin = center($("music-card"));
  if (!origin) return;
  const card = gameFace({ def: { name: techniques[event.technique] } });
  const node = elementFromMarkup(`<div class="technique-flight" aria-hidden="true">${card}</div>`);
  node.style.left = `${origin.x}px`;
  node.style.top = `${origin.y}px`;
  effectsLayer.append(node);
  playVisual(node, [
    { opacity: 0, transform: "translate(-50%, -45%) rotate(-12deg) scale(.56)" },
    { opacity: .97, transform: "translate(-43%, -130%) rotate(-8deg) scale(1)", offset: .31 },
    { opacity: 0, transform: "translate(-32%, -172%) rotate(0deg) scale(.88)" },
  ], 620, true);
}

function act(doAction, options = {}) {
  if (game.finished) return;
  const duration = phaseTime();
  if (running && duration && performance.now() - startTime >= duration * 1000) {
    cancelAnimationFrame(frame);
    updateClock();
    return;
  }
  if (game.battleShopping && !options.shuffle && !options.shopLock && options.purchase?.position !== null) return;
  if (game.choice && !options.choice) return;
  begin();
  const oldLog = game.metrics.log.length;
  const wasCore = game.core;
  const wasEnergy = game.energy;
  const wasHand = options.shuffle ? null : new Set(game.hand.map(card => card.id));
  const result = doAction();
  if (!result.ok) {
    announce(result.message);
    return;
  }
  if (!options.keepDetails) closeDetails();
  if (options.shuffle) {
    renderShop();
    renderHud();
    animateShopCards($("shop-cards").children, true);
    playSound("refresh");
    return true;
  }
  const events = game.metrics.log.slice(oldLog);
  const songAwarded = events.findLast(event => event.kind === "song-reward");
  const technique = events.findLast(event => event.kind === "music");
  const usedSecret = events.some(event => event.kind === "secret");
  const openedPouch = events.some(event => event.kind === "pouch");
  const earnedPouch = events.some(event => event.kind === "pouch-reward");
  const playedCard = events.find(event => event.kind === "play");
  if (options.purchase) playSound("buy");
  if (options.sale) playSound("sell");
  if (options.choice) playSound("card-choice");
  if (options.shopLock) playSound(game.shopLocked ? "lock" : "unlock");
  if (usedSecret) playSound("song");
  else if (openedPouch) playSound("pouch", options.purchase ? .04 : 0);
  else if (playedCard) playSound(playedCard.awake ? "play-golden" : "play", options.purchase ? .04 : 0);
  if (earnedPouch) playSound("pouch-reward", .14);
  if (technique && !usedSecret) playSound(techniqueSounds[technique.technique]);
  if (songAwarded) playSound("song-reward");
  const relevant = songAwarded ?? technique ??
    events.findLast(event => ["reward", "pouch-reward", "warning", "growth"].includes(event.kind));
  if (relevant || game.core !== wasCore) {
    $("pulse").replaceChildren();
    if (relevant) $("pulse").append(document.createTextNode(relevant.message));
    if (game.core !== wasCore) {
      const small = document.createElement("small");
      small.textContent = `阿科米亚核心 +${game.core - wasCore}`;
      $("pulse").append(small);
    }
  }
  render();
  animateArrivals(wasHand, options, events);
  if (options.playedCard && !options.dragged) {
    const { origin, playedCard } = options;
    cardFlight(playedCard, origin, origin && { x: origin.x, y: origin.y - 9 }, "played-flight", 135);
  }
  if (technique) {
    playVisual($("music-card"), [{ filter: "brightness(1.9)" }, { filter: "none" }], 390);
    animateTechnique(technique);
  }
  if (options.sale) {
    const { card, point } = options.sale;
    if (!options.dragged) cardFlight(card, point, { x: point.x, y: point.y - 18 }, "sale-flight", 180);
    saleFlash(point, game.energy - wasEnergy);
  }
  return true;
}

function startBattleShopping(battleStart = performance.now()) {
  if (game.phase !== "prep") return;
  clearDrag();
  closeDetails();
  cancelAnimationFrame(frame);
  resetCountdown();
  const duration = roundTime();
  const max = duration * 1000 || Infinity;
  const elapsed = Math.max(0, Math.min(max, battleStart - startTime));
  const departingHand = captureVisibleHand();
  game.end(elapsed, { allowShopping: true });
  const key = `${settings.scenario}:${settings.ban}:${game.round}:${settings.timing}`;
  if (duration && game.result.metrics.heroUses > (best[key] ?? 0)) {
    best[key] = game.result.metrics.heroUses;
    game.result.record = true;
    saveStorage("wanxiang-training-best", best);
  }
  game.result.best = best[key] ?? 0;
  startTime = battleStart;
  shopOpen = true;
  render();
  animateDiscardedHand(departingHand);
  updateClock();
}

function finishBattleShopping() {
  if (!game.battleShopping) return;
  cancelAnimationFrame(frame);
  resetCountdown();
  clearDrag();
  closeDetails();
  running = false;
  game.finishBattleShopping();
  render();
  updateClock();
  showResults();
}

function closeDetails() {
  inspector.hidden = true;
  details = null;
  selected = null;
  $("hand").querySelector(".selected")?.classList.remove("selected");
}

function inspect(def, title, stat, content, extra, image = "") {
  inspector.hidden = false;
  inspector.innerHTML = `<div class="inspector-body">${image ? `<span class="inspector-face">${image}</span>` : ""}
    <div><strong>${title ?? def.name}</strong>${stat ? `<small>${stat}</small>` : ""}
    <p>${content ?? def.info ?? "可用于阵营与品阶配牌。"}</p>${extra ?? ""}</div></div>`;
}

function showCard(source) {
  const card = source.card;
  const { def } = card;
  if (source.kind === "hand" && game.phase === "prep") {
    if (selected === card.id) {
      closeDetails();
      renderHud();
      return;
    }
    selected = card.id;
    $("hand").querySelector(".selected")?.classList.remove("selected");
    $("hand").querySelector(`[data-index="${card.id}"]`)?.classList.add("selected");
  }
  details = source.kind;
  const stat = [
    game.cardTag(card),
    def.type === "hero" ? `${tierNames[def.tier - 1]}阶` : "",
    card.awake ? "已觉醒" : "",
    card.transient ? "转瞬（备战结束时消失，出售返还 0 能量）" : "",
    source.kind === "unit" ? `${card.unit.level}级 · 合成 ${Math.min(3, card.unit.count - 1)}/3` : "",
  ].filter(Boolean).join(" · ");
  let extra = def.awakened && !card.awake ? `<p><small>觉醒 ${def.awakened}</small></p>` : "";
  if (source.kind === "unit") {
    const { equipment, manaCut, shield } = card.unit;
    const effects = [equipment.join("、"), manaCut && `法力上限 −${manaCut}`, shield && `护盾 +${shield}`].filter(Boolean);
    if (effects.length) extra += `<p><small>${effects.join(" · ")}</small></p>`;
  }
  if (selected === card.id && source.kind === "hand" && def.type !== "hero" && !def.target) {
    extra += button("use-selected", "使用", "dialog-action primary");
  }
  inspect(def, null, stat, card.awake && def.awakened ? def.awakened : undefined, extra, originalFace(card));
  renderHud();
}

function modal(name, html, classes = "") {
  activeModal = name;
  overlay.hidden = false;
  overlay.innerHTML = `<section class="dialog ${classes}" role="dialog" aria-modal="true" aria-labelledby="modal-title">${html}</section>`;
  overlay.scrollTop = 0;
}

function modalHead(title, close = true) {
  return `<header class="dialog-head"><h2 id="modal-title">${title}</h2>${close ? '<button class="icon-button" data-action="dismiss" aria-label="关闭">×</button>' : ""}</header>`;
}

function hideModal() {
  activeModal = null;
  displayedChoice = null;
  overlay.hidden = true;
  overlay.replaceChildren();
}

function options(key, entries) {
  return entries.map(([value, label]) =>
    `<button class="option" data-setting="${key}" data-value="${value}" aria-pressed="${String(draft[key]) === String(value)}">${label}</button>`).join("");
}

function showSettings() {
  const checkbox = (key, title) => `<button class="switch" data-switch="${key}" aria-pressed="${draft[key]}">${draft[key] ? "✓ " : ""}${title}</button>`;
  modal("settings", `${modalHead("训练设置")}
    <h3>起始局面</h3><div class="option-grid scenarios">${options("scenario", Object.entries(scenarios).map(([key, item]) => [key, item.name]))}</div>
    <p class="desc">${scenarios[draft.scenario].description}</p>
    <h3>禁用阵营</h3><div class="option-grid">${options("ban", Object.entries(modes).map(([key, item]) => [key, item.name]))}</div>
    <p class="desc">${modes[draft.ban].note}</p>
    <h3>备战时长</h3><div class="option-grid">${options("timing", [["ranked", "正式服回合计时"], ["untimed", "不限时"]])}</div>
    <h3>出牌习惯</h3><div class="setting-row">
      ${checkbox("fixed", "固定来牌")}${checkbox("openShop", "自动开商店")}${checkbox("swipeSell", "下滑出售")}
      ${checkbox("effectAudio", "操作音效")}${checkbox("musicAudio", "棋盘音乐")}
    </div>
    <div class="setting-row">
      <button class="switch" data-sound-preview="technique-pluck">试听指法</button>
      <button class="switch" data-sound-preview="song">试听惊鸿调</button>
      <span id="sound-preview-status" class="desc" role="status"></span>
    </div>
    <footer class="dialog-footer">${button("same", "重练当前局面")}${button("apply-settings", "应用并重开", "dialog-action primary")}</footer>`);
}

function showGuide() {
  const names = ["亚瑟", "姬小满", "莱西奥", "海诺", "姜子牙", "司空震", "甄姬", "庄周", "老夫子", "蒙犽"];
  const rows = names.map(name => {
    const hero = heroes.find(hero => hero.name === name);
    return `<li><strong>${hero.name}</strong> · ${hero.info} <span>觉醒 ${hero.awakened}</span></li>`;
  }).join("");
  modal("guide", `${modalHead("操作与卡牌")}
    <ul class="rules-list"><li>轻触商店牌购买，或者直接拖到棋盘买下并打出。买下后原位补一张牌。</li>
    <li>英雄牌丢到棋盘附近会落入最近的可用格。指定效果牌会吸附到符合条件的英雄。拖到屏幕两侧出售区附近即可出售。</li>
    <li>备战期间手牌可继续叠放。开战时清掉转瞬牌，最多保留 ${BATTLE_HAND_LIMIT} 张牌，惊鸿调优先保留。</li>
    <li>开战后有 ${BATTLE_SHOP_SECONDS} 秒可刷新和买牌，新牌留到下一回合使用。点「直接结算」可提前结束补牌。</li>
    <li>玉环每打出三张普通英雄牌演奏一次。同名触发轮指，其次同阶扫拂，再其次同阵营吟揉，最后是绞弦。无阵营牌可凑轮指或扫拂。</li>
    <li>五级的惊鸿调次数用尽后，仍会记录最近六次指法。升到六级时解锁余音绕梁，增加三次演奏机会。记录已满就立刻发第一张，保留当前六次指法。打出后每凑满六次新指法，再发下一张。</li>
    <li>锦囊里的效果牌可以直接拖上场使用，轻触则收入手牌。</li>
    <li>商店效果牌的精确出现率暂无可核实的官方数据。训练时，抽中的品阶有可用效果牌就按 10% 模拟。</li>
    <li>电脑按 R 刷新、空格开关商店、Esc 关闭界面。点击手牌再点棋格也可完成出牌。</li></ul>
    <h3>关键英雄</h3><ul class="rules-list">${rows}</ul>
    <p class="desc">操作音效和棋盘音乐取自实战录屏。普通指法使用一段琵琶原声，获得和使用惊鸿调各有独立音效。</p>
    <p class="source-links"><a target="_blank" rel="noreferrer" href="https://wxq.qq.com/cp/a202609xszy/">官方规则</a><a target="_blank" rel="noreferrer" href="https://wxq.qq.com/cp/a20260707sfgw/roledetail.html?roleId=25">官方玉环图鉴</a><a target="_blank" rel="noreferrer" href="https://www.bilibili.com/video/BV1aweu6aEcF/">对局原声</a><a target="_blank" rel="noreferrer" href="https://www.bilibili.com/video/BV1JMeY61Err/">玉环实战</a></p>`);
}

function stat(label, value) {
  return `<div class="stat"><small>${label}</small><b>${value}</b></div>`;
}

function showResults() {
  const result = game.result;
  const { core, elapsed, expired, refresh, energy, sikong, metrics, shopping } = result;
  const pace = elapsed ? Math.round(metrics.heroUses / (elapsed / 60000)) : 0;
  const music = Object.entries(techniques).map(([key, label]) => `${label} ${metrics.notes[key]}`).join(" · ");
  const entries = [...metrics.log, ...(shopping?.log ?? [])];
  const log = entries.map(event => `<li class="${event.kind}">${event.message}</li>`).join("") || "<li>本轮没有记录到操作</li>";
  const levelRows = result.levels.map(unit =>
    `<li>${unit.name}　${unit.permanent} 永久 + ${unit.temporary} 临时 = ${unit.total} 级</li>`).join("");
  modal("result", `${modalHead("回合结算")}
    <p class="desc">${modes[settings.ban].name} · ${scenarios[settings.scenario].name} · ${(elapsed / 1000).toFixed(1)} 秒
    ${result.best ? ` · ${result.record ? "新纪录" : "同模式纪录"} ${result.best} 张` : ""}</p>
    <div class="stats">${stat("打出英雄牌", metrics.heroUses)}${stat("出牌 / 分钟", pace)}
      ${stat("刷新 · 免费", `${metrics.rolls} · ${metrics.freeRolls}`)}${stat("出售场上英雄", metrics.sales)}
      ${stat("核心等级", `${core} <small>+${result.coreDelta}</small>`)}
      ${stat("司空震永久等级", sikong ? `${sikong.permanent} <small>+${result.sikongDelta}</small>` : "—")}
      ${stat("司空震开战等级", sikong ? sikong.total : "—")}${stat("能量 · 临时刷新", `${energy} · ${refresh}`)}
    </div>
    <div class="results-music">${music}</div>
    <p class="desc">购买 ${metrics.buys} · 使用效果 ${metrics.effects} · 操作未生效 ${metrics.rejects} · 转瞬过期 ${expired} · 开战弃牌 ${metrics.discarded}</p>
    ${shopping ? `<p class="desc">战斗补牌 · 购买 ${shopping.buys} · 刷新 ${shopping.rolls}（免费 ${shopping.freeRolls}）</p>` : ""}
    <details class="results-detail"><summary>英雄等级明细</summary><ul class="log">${levelRows || "<li>结束时场上为空</li>"}</ul></details>
    <details class="results-detail"><summary>操作记录（${entries.length}）</summary><ol class="log">${log}</ol></details>
    <footer class="dialog-footer">${button("settings", "回到训练设置")}${button("replay-round", "重练本回合")}${button("next", "继续下回合", "dialog-action primary")}</footer>`);
}

function syncChoice() {
  if (game.choice) {
    const { defs, title, count, picked } = game.choice;
    if (activeModal !== "choice" || displayedChoice !== game.choice) {
      const cards = defs.map((def, index) => {
        const cast = def.type === "effect" ? " data-cast" : "";
        return face({ def, awake: false, transient: !!def.transient }, null, null)
          .replace('type="button"', `type="button" data-pick="${index}"${cast}`);
      }).join("");
      modal("choice", `${modalHead(title, false)}
        <p class="choice-progress" role="status"></p>
        <div class="choice-options">${cards}</div>`, "choice-window");
      displayedChoice = game.choice;
      animateShopCards(overlay.querySelector(".choice-options").children, true);
    }
    overlay.querySelector(".choice-progress").textContent = `${defs.length} 选 ${count} · 已选 ${picked.length}/${count}`;
    for (const index of picked) overlay.querySelector(`[data-pick="${index}"]`).disabled = true;
  } else if (activeModal === "choice") {
    hideModal();
  }
}

function sourceOf(element) {
  const option = element.closest("[data-cast]:not(:disabled)");
  if (activeModal === "choice" && option) {
    const index = Number(option.dataset.pick);
    const def = game.choice?.defs[index];
    return def ? { element: option, kind: "choice", index, card: { def, transient: !!def.transient } } : null;
  }
  const source = element.closest("[data-source]");
  if (!source) return null;
  const kind = source.dataset.source;
  const index = Number(source.dataset.index);
  let card;
  if (kind === "shop") card = game.shop[index];
  if (kind === "hand") card = game.hand.find(item => item.id === index);
  if (kind === "unit") {
    const unit = game.board[index];
    if (unit) card = { def: unit.def, awake: unit.awake, unit };
  }
  return card ? { element: source, kind, index, card } : null;
}

function tap(source) {
  if (source.kind === "shop") return buyFrom(source);
  if (source.kind === "choice") return pickFrom(source.index, null, center(source.element));
  if (source.kind === "unit" && selected) {
    return playFromHand(selected, source.index, center(source.element));
  }
  playSound("click");
  if (source.kind === "unit") closeDetails();
  showCard(source);
}

function playFromHand(id, position, origin, dragged = false) {
  const playedCard = game.hand.find(card => card.id === id);
  return act(() => game.play(id, position), { origin, playedCard, dragged });
}

function pickFrom(index, position, origin, dragged = false) {
  const def = game.choice?.defs[index];
  const playedCard = position != null && def?.type === "effect" ? { def, transient: !!def.transient } : null;
  return act(() => game.pick(index, position), { choice: true, origin, playedCard, dragged });
}

function buyFrom(source, position = null, origin = center(source.element), dragged = false) {
  if (game.shop[source.index]?.id !== source.card.id) return;
  return act(() => game.buy(source.index, position), {
    origin, dragged, purchase: { index: source.index, position, card: source.card },
  });
}

function dropGeometry(source, axes) {
  const field = arena.querySelector(".field");
  const tiles = Array.from($("board").children, (tile, position) => {
    const rect = arenaBox(tile, axes);
    return { tile, position, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, rect };
  });
  const freeEffect = source.kind !== "unit" && source.card.def.type !== "hero" && !source.card.def.target;
  const matchingHero = source.kind !== "unit" && source.card.def.type === "hero"
    ? game.board.findIndex(unit => unit?.def === source.card.def) : -1;
  const eligible = matchingHero >= 0 ? [tiles[matchingHero]] : tiles.filter(({ position }) =>
    source.kind === "unit" || !game.checkPlay(source.card, position));
  const sales = ["left", "right", "bottom"].flatMap(direction => {
    const sell = $(`sell-${direction}`);
    const rect = arenaBox(sell, axes);
    return rect.width ? [{ sell, rect, direction }] : [];
  });
  const first = tiles[0].rect;
  return { field, rect: arenaBox(field, axes), tiles, eligible, freeEffect, sales,
    fieldPadX: Math.max(25, first.width * .75), fieldPadY: Math.max(12, first.height * .55),
    sellPad: Math.max(16, first.width * .45) };
}

function insideDropZone(rect, x, y, padX, padY) {
  return x >= rect.left - padX && x <= rect.right + padX &&
    y >= rect.top - padY && y <= rect.bottom + padY;
}

function closestDropTile(tiles, x, y) {
  let closest;
  let distance = Infinity;
  for (const tile of tiles) {
    const nextDistance = (tile.x - x) ** 2 + (tile.y - y) ** 2;
    if (nextDistance >= distance) continue;
    closest = tile;
    distance = nextDistance;
  }
  return closest;
}

function landing(x, y, state) {
  const { field, rect, tiles, eligible, freeEffect, sales, fieldPadX, fieldPadY, sellPad } = state.drop;
  const travel = { left: state.x - x, right: x - state.x, bottom: y - state.y };
  for (const { sell, rect: saleRect, direction } of sales) {
    if (travel[direction] >= 16 && insideDropZone(saleRect, x, y, direction === "bottom" ? 6 : sellPad, 12)) {
      return { sell };
    }
  }
  if (!insideDropZone(rect, x, y, fieldPadX, fieldPadY)) return {};
  if (freeEffect) return { field, position: -1 };
  const { tile, position } = closestDropTile(eligible.length ? eligible : tiles, x, y);
  const invalid = !eligible.length;
  return { field, tile, position, invalid };
}

function paintDrop(x, y, state) {
  const { sell, tile, field, invalid } = landing(x, y, state);
  const target = sell ?? tile ?? field;
  const className = sell ? "hot" : tile ? (invalid ? "drop-bad" : "drop-hot") : "drop-active";
  if (state.highlight === target && state.highlightClass === className) return;
  state.highlight?.classList.remove(state.highlightClass);
  target?.classList.add(className);
  state.highlight = target;
  state.highlightClass = className;
}

function startDragging(state, x, y) {
  state.moved = true;
  const rect = arenaBox(state.source.element, state.axes);
  const fingerX = (state.x - rect.left) / Math.max(rect.width, 1);
  state.gripX = Math.min(.78, Math.max(.22, fingerX));
  state.gripY = state.touch ? .88 : .52;
  closeDetails();
  const { kind, card, element } = state.source;
  ghost.innerHTML = face(card, null, null);
  placeDragCard(state, x, y);
  ghost.hidden = false;
  state.width = ghost.offsetWidth;
  state.height = ghost.offsetHeight;
  arena.classList.add("is-dragging");
  element.classList.add("drag-source");
  if (kind === "choice") arena.classList.add("is-choice-dragging");
  if (kind === "hand" || kind === "unit") {
    const gain = kind === "unit" || (card.def.type === "hero" && !card.transient);
    $("sell-left").firstElementChild.textContent = gain ? "＋1" : "0";
    $("sell-right").firstElementChild.textContent = gain ? "＋1" : "0";
    arena.classList.add("is-selling");
  }
  state.drop = dropGeometry(state.source, state.axes);
  playVisual(ghost.firstElementChild, [
    { transform: "scale(.94)", opacity: .84 },
    { transform: "scale(1)", opacity: 1 },
  ], 85);
}

function placeDragCard(state, x, y) {
  ghost.style.transform = `translate3d(${x}px,${y}px,0) translate(${-100 * state.gripX}%,${-100 * state.gripY}%)`;
}

function crossedDragThreshold(state, x, y) {
  return Math.hypot(x - state.x, y - state.y) >= (state.touch ? 5 : 4);
}

function drawDragFrame(state, x, y) {
  state.latest = { x, y };
  if (state.dragFrame) return;
  state.dragFrame = requestAnimationFrame(() => {
    state.dragFrame = 0;
    if (drag !== state) return;
    const point = state.latest;
    placeDragCard(state, point.x, point.y);
    paintDrop(point.x, point.y, state);
  });
}

function settleDragCard(state, from, to, accepted) {
  if (!to || reducedMotion.matches) return;
  const node = elementFromMarkup(`<div class="card-flight drag-settle" aria-hidden="true" inert>${face(state.source.card, null, null)}</div>`);
  Object.assign(node.style, {
    left: `${from.x}px`, top: `${from.y}px`, width: `${state.width}px`, height: `${state.height}px`,
  });
  effectsLayer.append(node);
  const restingPose = `translate(calc(-50% + ${to.x - from.x}px), calc(-50% + ${to.y - from.y}px))`;
  playVisual(node, [
    { transform: "translate(-50%, -50%)", opacity: .98 },
    { transform: `${restingPose} scale(${accepted ? .4 : .9})`, opacity: 0 },
  ], accepted ? 115 : 155, true);
}

function clearDrag() {
  if (!drag) return;
  const prior = drag;
  drag = null;
  if (prior.dragFrame) cancelAnimationFrame(prior.dragFrame);
  if (arena.hasPointerCapture(prior.pointer)) arena.releasePointerCapture(prior.pointer);
  prior.source.element.classList.remove("drag-source");
  arena.classList.remove("is-selling", "is-dragging", "is-choice-dragging");
  prior.highlight?.classList.remove(prior.highlightClass);
  ghost.hidden = true;
  ghost.replaceChildren();
}

arena.addEventListener("pointerdown", event => {
  if (drag) return;
  handledPointer = false;
  if (game.finished || event.button !== 0 || !event.isPrimary) return;
  const source = sourceOf(event.target);
  if (!source || (activeModal && source.kind !== "choice")) return;
  event.preventDefault();
  arena.setPointerCapture(event.pointerId);
  const axes = arenaAxes();
  drag = {
    source, pointer: event.pointerId, axes, ...arenaPoint(event.clientX, event.clientY, axes),
    time: performance.now(), moved: false, touch: event.pointerType === "touch",
  };
});

arena.addEventListener("pointermove", event => {
  if (!drag || drag.pointer !== event.pointerId) return;
  const { x, y } = arenaPoint(event.clientX, event.clientY, drag.axes);
  if (!drag.moved) {
    if (!crossedDragThreshold(drag, x, y) || game.battleShopping) return;
    startDragging(drag, x, y);
  }
  drawDragFrame(drag, x, y);
});

arena.addEventListener("pointerup", event => {
  if (!drag || drag.pointer !== event.pointerId) return;
  handledPointer = true;
  const prior = drag;
  const { x, y } = arenaPoint(event.clientX, event.clientY, prior.axes);
  const movedFar = crossedDragThreshold(prior, x, y);
  if (game.battleShopping && (prior.moved || movedFar)) {
    clearDrag();
    return;
  }
  if (!prior.moved && movedFar) startDragging(prior, x, y);
  const { source, moved } = prior;
  const target = moved ? landing(x, y, prior) : null;
  const point = { x, y };
  const destination = target?.tile ? center(target.tile) ?? point : point;
  clearDrag();
  if (game.finished || (activeModal && source.kind !== "choice")) return;
  if (!moved) {
    if (source.kind === "shop" && performance.now() - prior.time > 450) showCard(source);
    else tap(source);
    return;
  }
  const origin = { x: x + prior.width * (.5 - prior.gripX), y: y + prior.height * (.5 - prior.gripY) };
  let accepted;
  if (target.sell) {
    const sale = { point, card: source.card };
    if (source.kind === "unit") accepted = act(() => game.sellUnit(source.index), { origin, sale, dragged: true });
    if (source.kind === "hand") accepted = act(() => game.sellCard(source.index), { origin, sale, dragged: true });
  } else if (target.field) {
    if (source.kind === "unit") accepted = act(() => game.move(source.index, target.position));
    if (source.kind === "hand") accepted = playFromHand(source.index, target.position, origin, true);
    if (source.kind === "choice") accepted = pickFrom(source.index, target.position, origin, true);
    if (source.kind === "shop") accepted = buyFrom(source, target.position ?? -1, point, true);
  }
  settleDragCard(prior, origin, accepted ? destination : center(source.element), accepted);
});
arena.addEventListener("pointercancel", event => { if (drag?.pointer === event.pointerId) clearDrag(); });
arena.addEventListener("lostpointercapture", event => { if (drag?.pointer === event.pointerId) clearDrag(); });
window.addEventListener("resize", clearDrag);
arena.addEventListener("contextmenu", event => {
  event.preventDefault();
  const source = sourceOf(event.target);
  if (source && !activeModal && !game.finished) showCard(source);
});

const actions = {
  settings() { draft = { ...settings }; closeDetails(); showSettings(); },
  guide() { closeDetails(); showGuide(); },
  dismiss() { if (activeModal !== "choice") hideModal(); },
  "apply-settings"() {
    settings = draft;
    saveStorage("wanxiang-training-settings", settings);
    syncMusic();
    newGame();
  },
  same() { newGame(true); },
  "replay-round"() {
    if (!game.finished) return;
    game = roundStart.copyRound();
    resetRoundView();
  },
  next() {
    if (!game.finished) return;
    const priorHand = new Set(game.hand.map(card => card.id));
    game.next();
    roundStart = game.copyRound();
    shopOpen = settings.openShop;
    hideModal();
    $("pulse").textContent = "";
    render();
    animateArrivals(priorHand, {}, game.metrics.log);
    if (shopOpen) animateShopCards($("shop-cards").children, true);
    begin();
  },
  refresh() { act(() => game.roll(), { shuffle: true }); },
  lock() { act(() => { game.shopLocked = !game.shopLocked; return { ok: true }; }, { shopLock: true }); },
  shop() {
    shopOpen = !shopOpen;
    playSound(shopOpen ? "shop-open" : "shop-close");
    renderShop();
    if (shopOpen) animateShopCards($("shop-cards").children, true);
  },
  upgrade() { act(() => game.upgrade(), { origin: center($("upgrade")) }); },
  end() {
    if (game.finished) showResults();
    else if (game.battleShopping) finishBattleShopping();
    else if (running) startBattleShopping();
    else begin();
  },
  "core-info"() {
    closeDetails();
    details = "core";
    inspect(null, "阿科米亚核心", `Lv. ${game.core}`,
      "开战时，核心等级以临时等级平均分给己方日落海英雄。每名英雄最多分到核心等级的 50%。");
  },
  "music-info"() {
    closeDetails();
    details = "music";
    const recorded = game.record.map(item => {
      const name = techniques[item];
      return `<span class="recorded-technique" title="${name}">${gameFace({ def: { name } })}</span>`;
    }).join("");
    inspect(null, "霓裳曲", `出牌 ${game.notes.length}/3 · 秘技 ${game.songProgress}/6 · 可再获得 ${game.songsRemaining} 张`,
      game.notes.length ? `当前牌序 · ${game.notes.map(note => note.name).join("、")}` : "打出三张非觉醒英雄牌触发一次指法。",
      `<p><small>惊鸿调记录 · ${game.record.map(item => techniques[item]).join(" → ") || "待记录"}</small></p>
        <div class="technique-record">${recorded}</div>`);
  },
  "use-selected"() {
    if (selected) {
      playFromHand(selected, -1, center($("hand").querySelector(".selected")));
    }
  },
};

arena.addEventListener("click", event => {
  if (handledPointer && event.detail > 0) {
    handledPointer = false;
    return;
  }
  const target = event.target.closest("button");
  if (!target) {
    if (!activeModal && details) { closeDetails(); renderHud(); }
    return;
  }
  if (target.dataset.soundPreview) {
    const status = $("sound-preview-status");
    startSkillSound(target.dataset.soundPreview).then(() => {
      status.textContent = "已开始播放";
    }, () => {
      status.textContent = "浏览器未能播放此音效";
    });
    return;
  }
  const action = target.dataset.action;
  if (target.dataset.setting || target.dataset.switch || (action && !["refresh", "lock", "shop"].includes(action))) {
    playSound("click");
  }
  if (target.dataset.setting) {
    const { setting, value } = target.dataset;
    draft[setting] = value;
    showSettings();
    return;
  }
  if (target.dataset.switch) {
    const key = target.dataset.switch;
    draft[key] = !draft[key];
    showSettings();
    return;
  }
  if (target.dataset.pick != null) {
    return pickFrom(Number(target.dataset.pick), null, center(target));
  }
  if (target.dataset.action) return actions[target.dataset.action]?.();
  if (activeModal || game.finished) return;
  const source = sourceOf(target);
  if (source && event.detail === 0) return tap(source);
  if (!source && target.dataset.tile != null && selected) {
    playFromHand(selected, Number(target.dataset.tile), center(target));
  }
});

document.addEventListener("keydown", event => {
  unlockEffects();
  if (event.key === "Escape") {
    if (activeModal && activeModal !== "choice") hideModal();
    else { closeDetails(); renderHud(); }
  } else if (!activeModal && !game.finished && !event.repeat) {
    if (event.key.toLowerCase() === "r") {
      event.preventDefault();
      if (!shopOpen) actions.shop();
      actions.refresh();
    }
    if (event.code === "Space" && document.activeElement?.tagName !== "BUTTON") {
      event.preventDefault();
      actions.shop();
    }
  }
});

newGame();
$("rotate-play").addEventListener("click", () => {
  if (!portraitViewport.matches) return;
  arena.classList.add("sideways");
  layoutHand();
  $("end-round").focus({ preventScroll: true });
});
if (settings.effectAudio) clips.forEach(audioBytes);
arena.addEventListener("pointerdown", event => {
  if (event.pointerType === "mouse") unlockEffects();
}, { capture: true });
arena.addEventListener("pointerup", event => {
  if (event.pointerType !== "mouse") unlockEffects();
}, { capture: true });
arena.addEventListener("click", unlockEffects, { capture: true });
document.addEventListener("visibilitychange", () => {
  syncMusic();
  if (document.hidden && !primingCountdown) countdownPlayer.pause();
});
if (document.readyState === "complete") loadSharpCardArt();
else window.addEventListener("load", loadSharpCardArt, { once: true });
