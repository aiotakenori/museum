import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { ArtworkCard } from '../components/ArtworkCard';
import { Timeline } from '../components/Timeline';
import { CreatorProfiles } from '../components/CreatorProfiles';
import { StoryPage } from '../components/StoryPage';
import { MonsterCard } from '../components/MonsterCard';

// -------------------------------------------------------
// 代表作品データ（年代順）
// -------------------------------------------------------
const artworksByEra: { era: string; id: string; items: ArtworkItem[] }[] = [
  {
    era: '平安時代',
    id: 'heian',
    items: [
      {
        name: '源氏物語絵巻',
        nameEn: 'THE TALE OF GENJI SCROLLS',
        medium: '絵巻物',
        period: '12世紀初頭',
        collection: '国宝（徳川美術館・五島美術館蔵）',
        year: 1120,
        artist: '不明（宮廷絵師）',
        highlights: ['「引目鉤鼻」の人物表現', '吹抜屋台の構図', '大和絵の最高峰'],
        relatedWorks: ['紫式部日記絵巻', '信貴山縁起絵巻'],
        description: '紫式部の長編小説を絵画化した国宝絵巻。平安貴族の優雅な世界を繊細な彩色で描く。',
      },
      {
        name: '鳥獣人物戯画',
        nameEn: 'SCROLLS OF FROLICKING ANIMALS',
        medium: '絵巻物',
        period: '12〜13世紀',
        collection: '国宝（高山寺蔵）',
        year: 1150,
        artist: '鳥羽僧正 他（諸説あり）',
        highlights: ['擬人化された動物の描写', '墨線のみの簡潔な表現', '世界最古の漫画とも称される'],
        relatedWorks: ['源氏物語絵巻', '信貴山縁起絵巻'],
        description: 'カエルやウサギが相撲や水泳をする様子をユーモラスに描いた絵巻。日本漫画の原点。',
      },
    ],
  },
  {
    era: '室町時代',
    id: 'muromachi',
    items: [
      {
        name: '秋冬山水図',
        nameEn: 'LANDSCAPES OF AUTUMN AND WINTER',
        medium: '水墨画',
        period: '15世紀後半',
        collection: '国宝（東京国立博物館蔵）',
        year: 1470,
        artist: '雪舟',
        highlights: ['日本独自の水墨画様式', '余白を活かした構図', '中国画法と日本的詩情の融合'],
        relatedWorks: ['天橋立図', '山水長巻'],
        description: '水墨画家・雪舟の代表作。日本独自の水墨画様式を確立した国宝作品。',
      },
    ],
  },
  {
    era: '江戸時代初期',
    id: 'early-edo',
    items: [
      {
        name: '風神雷神図屏風',
        nameEn: 'WIND GOD AND THUNDER GOD',
        medium: '屏風絵（金地着色）',
        period: '寛永年間',
        collection: '国宝（建仁寺蔵）',
        year: 1624,
        artist: '俵屋宗達',
        highlights: ['金箔地の大胆な背景', 'たらし込み技法の駆使', '琳派様式の創始'],
        relatedWorks: ['燕子花図屏風', '紅白梅図屏風'],
        description: '俵屋宗達の最高傑作。風神と雷神を大胆に配置した琳派を代表する屏風絵。',
      },
    ],
  },
  {
    era: '江戸時代中期',
    id: 'mid-edo',
    items: [
      {
        name: '見返り美人図',
        nameEn: 'BEAUTY LOOKING BACK',
        medium: '浮世絵（肉筆）',
        period: '元禄年間',
        collection: '重要文化財（東京国立博物館蔵）',
        year: 1690,
        artist: '菱川師宣',
        highlights: ['優美な振り向きの構図', '着物の繊細な描写', '肉筆浮世絵の傑作'],
        relatedWorks: ['遊女図', '歌舞伎絵'],
        description: '菱川師宣による肉筆浮世絵の最高傑作。振り向く美人の一瞬を捉えた優美な作品。',
      },
      {
        name: '燕子花図屏風',
        nameEn: 'IRISES',
        medium: '屏風絵（金地着色）',
        period: '宝永年間',
        collection: '国宝（根津美術館蔵）',
        year: 1709,
        artist: '尾形光琳',
        highlights: ['群青と緑青の鮮やかな色彩', '装飾的・リズミカルな構図', '琳派様式の完成'],
        relatedWorks: ['紅白梅図屏風', '風神雷神図屏風'],
        description: '尾形光琳の代表作。燕子花を大胆にリズミカルに配置した琳派の最高傑作。',
      },
    ],
  },
  {
    era: '江戸時代後期',
    id: 'late-edo',
    items: [
      {
        name: '神奈川沖浪裏',
        nameEn: 'THE GREAT WAVE OFF KANAGAWA',
        medium: '浮世絵（錦絵）',
        period: '天保2年頃',
        collection: '富嶽三十六景',
        year: 1831,
        artist: '葛飾北斎',
        highlights: ['荒々しい波と小さな富士山の対比', 'プルシアンブルーの使用', '西洋遠近法の導入'],
        relatedWorks: ['凱風快晴', '山下白雨', '富嶽三十六景 全46図'],
        description: '葛飾北斎の代表作。世界で最も有名な日本美術作品のひとつ。印象派にも多大な影響を与えた。',
      },
      {
        name: '東海道五拾三次',
        nameEn: 'FIFTY-THREE STATIONS OF THE TOKAIDO',
        medium: '浮世絵（錦絵）',
        period: '天保4年',
        collection: '東海道五拾三次（保永堂版）',
        year: 1833,
        artist: '歌川広重',
        highlights: ['詩情豊かな風景描写', '雨・雪・霞の巧みな表現', '旅情を誘う構図'],
        relatedWorks: ['名所江戸百景', '六十余州名所図会'],
        description: '歌川広重の代表的風景画シリーズ。東海道の宿場55景を詩情豊かに描いた名作。',
      },
    ],
  },
];

// -------------------------------------------------------
// 人物データ（年代順）
// -------------------------------------------------------
const artistsByEra: { era: string; id: string; items: ArtistItem[] }[] = [
  {
    era: '室町時代',
    id: 'artist-muromachi',
    items: [
      {
        name: '雪舟',
        nameEn: 'SESSHU TOYO',
        height: '水墨画家',
        weight: '国宝6点',
        firstAppearance: '秋冬山水図',
        year: 1420,
        specialAttacks: ['中国で本場の水墨画を修得', '日本独自の水墨様式を確立', '山水・花鳥・人物を網羅'],
        relatedMonsters: ['秋冬山水図', '天橋立図', '山水長巻'],
        type: 'human' as const,
        role: '水墨画家・禅僧',
        description: '室町時代の禅僧・画家。中国に渡り本場の水墨画を学び、帰国後に日本独自の様式を確立した。',
      },
    ],
  },
  {
    era: '江戸時代初期',
    id: 'artist-early-edo',
    items: [
      {
        name: '俵屋宗達',
        nameEn: 'TAWARAYA SOTATSU',
        height: '絵師',
        weight: '約30点',
        firstAppearance: '風神雷神図屏風',
        year: 1570,
        specialAttacks: ['大胆な構図と装飾性', 'たらし込み技法の開発', '琳派の創始'],
        relatedMonsters: ['風神雷神図屏風', '舞楽図', '松島図'],
        type: 'human' as const,
        role: '絵師（琳派の祖）',
        description: '江戸時代初期の絵師。装飾的で大胆な「琳派」の様式を創始し、日本美術史に大きな足跡を残した。',
      },
    ],
  },
  {
    era: '江戸時代中期',
    id: 'artist-mid-edo',
    items: [
      {
        name: '菱川師宣',
        nameEn: 'HISHIKAWA MORONOBU',
        height: '浮世絵師',
        weight: '約200点以上',
        firstAppearance: '見返り美人図',
        year: 1618,
        specialAttacks: ['浮世絵版画の創始', '肉筆浮世絵の名手', '庶民文化の担い手'],
        relatedMonsters: ['見返り美人図', '遊女図'],
        type: 'human' as const,
        role: '浮世絵師（浮世絵の祖）',
        description: '浮世絵版画を確立した草創期の巨匠。庶民向けの大衆芸術として浮世絵を根付かせた。',
      },
      {
        name: '尾形光琳',
        nameEn: 'OGATA KORIN',
        height: '絵師・工芸家',
        weight: '国宝2点',
        firstAppearance: '燕子花図屏風',
        year: 1658,
        specialAttacks: ['琳派様式の完成', '装飾的な美の追求', '工芸にも琳派を展開'],
        relatedMonsters: ['燕子花図屏風', '紅白梅図屏風', '八橋蒔絵硯箱'],
        type: 'human' as const,
        role: '絵師・工芸家（琳派の完成者）',
        description: '宗達が創始した琳派を継承・発展させ、装飾芸術の頂点へと昇華させた江戸中期の巨匠。',
      },
    ],
  },
  {
    era: '江戸時代後期',
    id: 'artist-late-edo',
    items: [
      {
        name: '葛飾北斎',
        nameEn: 'KATSUSHIKA HOKUSAI',
        height: '浮世絵師',
        weight: '約3万点以上',
        firstAppearance: '富嶽三十六景',
        year: 1760,
        specialAttacks: ['90年に及ぶ画業', '西洋遠近法・陰影法の導入', '森羅万象を描く博覧強記'],
        relatedMonsters: ['富嶽三十六景', '北斎漫画', '百物語'],
        type: 'human' as const,
        role: '浮世絵師',
        description: '江戸時代後期の浮世絵師。生涯で3万点以上の作品を残し、ジャポニスムを通じて西洋美術にも革命を与えた。',
      },
      {
        name: '歌川広重',
        nameEn: 'UTAGAWA HIROSHIGE',
        height: '浮世絵師',
        weight: '約5000点',
        firstAppearance: '東海道五拾三次',
        year: 1797,
        specialAttacks: ['叙情的な風景表現', '雨雪・霞の巧みな描写', '詩情豊かな「名所絵」の確立'],
        relatedMonsters: ['東海道五拾三次', '名所江戸百景', '六十余州名所図会'],
        type: 'human' as const,
        role: '浮世絵師',
        description: '風景画の名手として北斎と並び称される浮世絵師。叙情的な表現でゴッホにも影響を与えた。',
      },
    ],
  },
];

// 型定義
interface ArtworkItem {
  name: string; nameEn: string; medium: string; period: string;
  collection: string; year: number; artist: string;
  highlights: string[]; relatedWorks: string[]; description?: string;
}
interface ArtistItem {
  name: string; nameEn: string; height: string; weight: string;
  firstAppearance: string; year: number; specialAttacks: string[];
  relatedMonsters: string[]; type: 'human'; role?: string; description?: string;
}

// -------------------------------------------------------
// 時代インデックスコンポーネント
// -------------------------------------------------------
function EraIndex({ eras, targetPrefix }: { eras: { era: string; id: string }[]; targetPrefix: string }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 border-b-2 border-black pb-4">
      <span className="text-xs font-bold text-gray-500 self-center mr-1">時代：</span>
      {eras.map(({ era, id }) => (
        <a
          key={id}
          href={`#${targetPrefix}-${id}`}
          className="text-xs font-bold border border-black px-2 py-1 hover:bg-black hover:text-white transition-colors"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {era}
        </a>
      ))}
    </div>
  );
}

// -------------------------------------------------------
// ページ本体
// -------------------------------------------------------
const timelineData = [
  {
    year: 794, title: '平安時代の美術', director: '藤原氏を中心とした貴族文化',
    significance: '唐風文化から国風文化へ。大和絵の成立、寝殿造の発展、優美で洗練された貴族文化が開花。',
    era: '古代', cast: ['源氏物語絵巻', '鳥獣人物戯画', '平等院鳳凰堂'],
    boxOffice: '国宝・重要文化財多数', runtime: '約400年',
    trivia: '平安時代の絵巻物は世界最古の漫画とも評される。特に鳥獣人物戯画は擬人化された動物が活躍する。',
  },
  {
    year: 1185, title: '鎌倉・室町時代の美術', director: '武家政権と禅宗文化',
    significance: '武士の台頭により力強い作風が登場。水墨画が中国から伝来し、禅の精神性を反映した美術が発展。',
    era: '中世', cast: ['雪舟（水墨画）', '運慶・快慶（仏像彫刻）', '金閣・銀閣'],
    boxOffice: '国宝指定作品多数', runtime: '約400年',
    trivia: '雪舟は中国に渡り本場の水墨画を学んだ。帰国後、日本独自の水墨画様式を確立した。',
  },
  {
    year: 1603, title: '江戸時代初期 - 桃山文化', director: '狩野派・琳派の隆盛',
    significance: '豪華絢爛な桃山文化。狩野派が幕府の御用絵師として権勢を振るい、琳派が装飾的な美の世界を切り開く。',
    era: '近世', cast: ['俵屋宗達（風神雷神図）', '狩野永徳（唐獅子図）', '長谷川等伯（松林図屏風）'],
    boxOffice: '国宝・重要文化財指定', runtime: '約100年',
    awards: ['風神雷神図屏風 - 国宝指定'],
    trivia: '狩野永徳の唐獅子図は、その迫力から「絵から飛び出しそう」と評された。',
  },
  {
    year: 1680, title: '江戸時代中期 - 浮世絵の誕生', director: '菱川師宣・浮世絵の創始',
    significance: '庶民文化の発展とともに浮世絵が誕生。美人画、役者絵、風景画など多様なジャンルが確立。',
    era: '近世', cast: ['菱川師宣（見返り美人図）', '喜多川歌麿（美人画）', '東洲斎写楽（役者絵）'],
    boxOffice: '大衆文化として爆発的普及', runtime: '約200年',
    trivia: '浮世絵は当時、庶民が気軽に購入できる大衆芸術。現在の価値に換算すると数百円程度だった。',
  },
  {
    year: 1831, title: '江戸時代後期 - 浮世絵の黄金期', director: '葛飾北斎・歌川広重',
    significance: '北斎の富嶽三十六景、広重の東海道五拾三次が登場。風景画が浮世絵の新たな境地を開く。',
    era: '近世', cast: ['葛飾北斎（富嶽三十六景）', '歌川広重（東海道五拾三次）', '歌川国芳（武者絵）'],
    boxOffice: '世界的評価を獲得', runtime: '約40年',
    awards: ['西洋印象派に多大な影響'],
    trivia: '北斎の「神奈川沖浪裏」は、ゴッホやモネなど印象派の画家たちに衝撃を与え、ジャポニスムの契機となった。',
  },
  {
    year: 1868, title: '明治時代 - 近代化と伝統の葛藤', director: '西洋美術の流入',
    significance: '明治維新により西洋美術が流入。日本画と洋画が並立し、伝統と革新の狭間で新たな表現が模索される。',
    era: '近代', cast: ['狩野芳崖', '橋本雅邦', '黒田清輝'],
    boxOffice: '東京美術学校設立', runtime: '約45年',
    trivia: 'フェノロサらが日本美術の再評価を促し、伝統美術の保護運動が展開された。',
  },
];

const creators = [
  { name: '葛飾北斎', role: '浮世絵師', period: '1760-1849年', contributions: ['富嶽三十六景の制作', '北斎漫画で多様な画題を探求', '西洋にジャポニスムを巻き起こす'] },
  { name: '歌川広重', role: '浮世絵師', period: '1797-1858年', contributions: ['東海道五拾三次で風景画の新境地', '名所江戸百景で江戸の風景を記録', '詩情豊かな風景表現を確立'] },
  { name: '俵屋宗達', role: '絵師', period: '1570年頃-1640年頃', contributions: ['風神雷神図屏風の制作', '琳派様式の創始', 'たらし込み技法の開発'] },
  { name: '尾形光琳', role: '絵師・工芸家', period: '1658-1716年', contributions: ['燕子花図屏風で琳派様式を完成', '装飾的な美の追求', '紅白梅図屏風の制作'] },
  { name: '雪舟', role: '水墨画家', period: '1420-1506年', contributions: ['中国で水墨画を学ぶ', '日本独自の水墨画様式を確立', '秋冬山水図など国宝6点を制作'] },
  { name: '菱川師宣', role: '浮世絵師', period: '1618-1694年', contributions: ['浮世絵版画の創始者', '見返り美人図の制作', '肉筆浮世絵の名手'] },
];

export function JapaneseArtPage() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box>
      <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "'Noto Serif JP', serif" }}>
        日本美術史図鑑
      </h2>
      <Box sx={{ mb: 8, borderBottom: '2px solid #000' }}>
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            '& .MuiTab-root': { color: '#666', fontWeight: 'black', fontSize: '1.2rem', px: 4, py: 2 },
            '& .Mui-selected': { color: '#000 !important' },
            '& .MuiTabs-indicator': { backgroundColor: '#000', height: 3 },
          }}
        >
          <Tab label="代表作品" />
          <Tab label="人物" />
          <Tab label="美術史" />
          <Tab label="年表" />
          <Tab label="主要作家" />
        </Tabs>
      </Box>

      <Box>
        {/* 代表作品タブ */}
        {tabValue === 0 && (
          <div>
            <EraIndex eras={artworksByEra.map(e => ({ era: e.era, id: e.id }))} targetPrefix="artwork" />
            {artworksByEra.map(({ era, id, items }) => (
              <section key={id} id={`artwork-${id}`} className="mb-12">
                <div className="flex items-baseline gap-4 mb-4">
                  <h3 className="text-2xl font-black" style={{ fontFamily: "'Noto Serif JP', serif" }}>{era}</h3>
                  <span className="text-xs font-mono text-gray-500 tracking-widest border-l border-gray-400 pl-4">
                    {items[0].year}年代〜
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((artwork, idx) => (
                    <ArtworkCard key={idx} {...artwork} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* 人物タブ */}
        {tabValue === 1 && (
          <div>
            <EraIndex eras={artistsByEra.map(e => ({ era: e.era, id: e.id }))} targetPrefix="artist" />
            {artistsByEra.map(({ era, id, items }) => (
              <section key={id} id={`artist-${id}`} className="mb-12">
                <div className="flex items-baseline gap-4 mb-4">
                  <h3 className="text-2xl font-black" style={{ fontFamily: "'Noto Serif JP', serif" }}>{era}</h3>
                  <span className="text-xs font-mono text-gray-500 tracking-widest border-l border-gray-400 pl-4">
                    {items[0].year}年代〜
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((artist, idx) => (
                    <MonsterCard key={idx} {...artist} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {tabValue === 2 && <StoryPage />}
        {tabValue === 3 && <Timeline items={timelineData} />}
        {tabValue === 4 && <CreatorProfiles creators={creators} />}
      </Box>
    </Box>
  );
}
