'use strict';

let ans;
let content;
let band;
const title = document.getElementById('title');
const metalTitle = document.getElementById('metal_title');
const metalContent = document.getElementById('content');
const exampleBand = document.getElementById('exampleBand');
const num = location.search;

switch (num) {
  case '?heavy=':
    ans = 'ヘヴィメタル'
    content = '所謂メタルと言われて、多くの人が連想するイメージ。ロックより少し激しい程度で、ロックが好きな人であれば、比較的すんなり聴けるであろう。メタルのジャンルを総括してものとして、言及されることもある。'
    band = '例) Iron Maiden, Alcatrazz, Ozzy Osbourne, Queensryche...'
    break;
  case '?power=':
    ans = 'パワーメタル'
    content = 'こちらも、典型的なメタルとして言及されることが多く、比較的大御所バンドが多いジャンル。メタルにしては珍しく、活力に溢れ、その名の通り、元気いっぱいである。映画のBGMとしてさり気なく使われていたりする。'
    band = '例) Helloween, Sonata Arctica, Angra, Stratovarius...'
    break;
  case '?core=':
    ans = 'メタルコア'
    content = 'ハードコアとメタルの融合。日本でも比較的馴染みが深く、coldrainやSiMなどの有名バンドもこのジャンルに該当するように思われる。適度に激しく、適度にキャッチー。ノリが良い曲も多い。また、ジャンルの中の幅が広く、メタル度が高いものから、メタルの要素があまりないようなものまで、幅広くこのジャンルに該当しがちである。'
    band = '例) As I Lay Dying, Bullet for My Valentine, All That Remains, Bring Me the Horizon...'
    break;
  case '?gothic=':
    ans = 'ゴシックメタル'
    content = '耽美と悲哀がテーマのメタル。切ないメロディーを美しい女性が歌い上げる、メタルの中では繊細なイメージ。ただゴシックメタル系統のデスドゥームなどは、ゴシックメタルの繊細さとデスメタルの激しさを併せ持った非常に芸術的なものとして昇華されており、メタルの真骨頂とも評価できる。'
    band = '例) Epica, Evanescence, Lacuna Coil, After Forever...'
    break;
  case '?slash=':
    ans = 'スラッシュメタル'
    content = 'メタルの激しさとは？その一つの答えが、圧倒的な速さにある。スラッシュメタルは、そうした速さにこだわった歴史的なジャンルである。'
    band = 'Metallica, Megadeth, Slayer, Anthrax...'
    break;
  case '?doom=':
    ans = 'ドゥームメタル'
    content = 'メタルの激しさとは？その一つの答えが、圧倒的な重さにある。ドゥームメタルは、そうした重さを表現するために、しんどいまでの遅さを表現した非常識で型破りなジャンルである。'
    band = 'CATHEDRAL, SLEEP, SUNN O))), Swallow the Sun...'
    break;
  case '?death=':
    ans = 'デスメタル'
    content = 'メタルとは何か？その答えは激しさに決まっている。デスメタルは、こうしたメタル観を一片の曇りなく貫いた、一つの完成形である。激しさをバカみたいに追求した生き様がここにある。'
    band = 'Cannibal Corpse, Infant Annihilator, Cryptopsy, Obituary...'
    break;
  case '?black=':
    ans = 'ブラックメタル'
    content = '反キリストをテーマにしたメタル。ブラックメタルの中にも様々なサブジャンルが存在し、激しいものから静かなものまで音楽性は非常に多様。演奏の技術力よりも、思想を重視しており、曲調も示唆に富んでいたり、どこか神秘的なものが多い。'
    band = '例) Mayhem, Emperor, Dissection, Deathspell Omega...'
    break;
  case '?grind=':
    ans = 'グラインドコア'
    content = '激しい。うるさい。そして曲が短い。世界で最も短い曲のギネス世界記録もこのジャンル。これまたぶっとんだこまったやつ。'
    band = '例) Napalm Death, Brutal Truth, Disgorge, Kots...'
    break;
  default:
    ans = 'メタル'
}

title.textContent = ans;
metalTitle.textContent = ans;
metalContent.textContent = content;
exampleBand.textContent = band;
