import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { MonsterCard } from '../components/MonsterCard';
import { Timeline } from '../components/Timeline';
import { CreatorProfiles } from '../components/CreatorProfiles';
import { GodzillaStory } from '../components/GodzillaStory';

interface MonsterCardProps {
  name: string;
  nameEn: string;
  height: string;
  weight: string;
  firstAppearance: string;
  year: number;
  specialAttacks: string[];
  relatedMonsters: string[];
  type: 'monster' | 'human';
  description?: string;
  role?: string;
}

export function GodzillaPage() {
  const [tabValue, setTabValue] = useState(0);

  const characters: MonsterCardProps[] = [
    {
      name: 'ゴジラ',
      nameEn: 'GODZILLA',
      height: '50〜108.2m',
      weight: '2万〜9万t',
      firstAppearance: 'ゴジラ',
      year: 1954,
      specialAttacks: ['放射熱線', '熱線', '再生能力', '核パルス'],
      relatedMonsters: ['モスラ', 'ラドン', 'キングギドラ'],
      type: 'monster' as const,
      description: '核実験によって誕生した怪獣の王。破壊の象徴であり、時に人類の守護者となる。'
    },
    {
      name: 'モスラ',
      nameEn: 'MOTHRA',
      height: '翼長250m',
      weight: '1万5千t',
      firstAppearance: 'モスラ',
      year: 1961,
      specialAttacks: ['鱗粉攻撃', '触覚光線', '繭糸', '神聖な光'],
      relatedMonsters: ['ゴジラ', 'バトラ', '小美人'],
      type: 'monster' as const,
      description: '古代から崇められてきた神聖な存在。地球の守護神として人類を守る。'
    },
    {
      name: 'キングギドラ',
      nameEn: 'KING GHIDORAH',
      height: '50〜150m',
      weight: '3万〜7万t',
      firstAppearance: '三大怪獣 地球最大の決戦',
      year: 1964,
      specialAttacks: ['引力光線', '破壊光線', '飛行能力', '全方位攻撃'],
      relatedMonsters: ['ゴジラ', 'ラドン', 'モスラ'],
      type: 'monster' as const,
      description: '宇宙から飛来した三つ首の黄金龍。ゴジラ最大の宿敵。'
    },
    {
      name: 'ラドン',
      nameEn: 'RODAN',
      height: '50〜100m',
      weight: '1万6千t〜2万t',
      firstAppearance: '空の大怪獣ラドン',
      year: 1956,
      specialAttacks: ['衝撃波', '熱線', '突風攻撃', '超音速飛行'],
      relatedMonsters: ['ゴジラ', 'モスラ', 'キングギドラ'],
      type: 'monster' as const,
      description: '超音速で飛行する翼竜型怪獣。火山の守護者。'
    },
    {
      name: 'メカゴジラ',
      nameEn: 'MECHAGODZILLA',
      height: '50〜120m',
      weight: '4万〜7万5千t',
      firstAppearance: 'ゴジラ対メカゴジラ',
      year: 1974,
      specialAttacks: ['スペースビーム', 'プラズマグレネード', 'ミサイル', 'フィンガーミサイル'],
      relatedMonsters: ['ゴジラ', 'キングシーサー'],
      type: 'monster' as const,
      description: '対ゴジラ用に開発された機械怪獣。圧倒的な火力を誇る。'
    },
    {
      name: '芹沢大助博士',
      nameEn: 'DR. DAISUKE SERIZAWA',
      height: '防衛隊・科学者',
      weight: '1作品',
      firstAppearance: 'ゴジラ（1954）',
      year: 1954,
      specialAttacks: ['オキシジェン・デストロイヤー開発', '自己犠牲の精神', '科学者としての葛藤'],
      relatedMonsters: ['ゴジラ', '尾形秀人', '山根恵美子'],
      type: 'human' as const,
      role: '科学者',
      description: '初代ゴジラを葬った科学者。オキシジェン・デストロイヤーの発明者として、自らの命と引き換えに怪獣を倒した。'
    },
    {
      name: '矢口蘭堂',
      nameEn: 'RANDO YAGUCHI',
      height: '内閣官房副長官',
      weight: '1作品',
      firstAppearance: 'シン・ゴジラ',
      year: 2016,
      specialAttacks: ['優れた分析力', 'リーダーシップ', '型破りな発想'],
      relatedMonsters: ['ゴジラ', '赤坂秀樹', 'カヨコ・アン・パタースン'],
      type: 'human' as const,
      role: '政府高官',
      description: 'シン・ゴジラ対策の中心人物。日本政府のゴジラ対策チームを率いた。'
    },
    {
      name: '敷島浩一',
      nameEn: 'KOICHI SHIKISHIMA',
      height: 'パイロット',
      weight: '1作品',
      firstAppearance: 'ゴジラ-1.0',
      year: 2023,
      specialAttacks: ['戦闘機操縦技術', '戦略立案', '不屈の精神'],
      relatedMonsters: ['ゴジラ', '大石典子', '秋津清治'],
      type: 'human' as const,
      role: '元特攻隊員',
      description: 'ゴジラ-1.0の主人公。戦後の混乱期にゴジラと対峙した元特攻隊員。'
    },
    {
      name: '小美人',
      nameEn: 'SHOBIJIN',
      height: 'インファント島',
      weight: '多数作品',
      firstAppearance: 'モスラ',
      year: 1961,
      specialAttacks: ['テレパシー能力', 'モスラとの交信', '予言能力'],
      relatedMonsters: ['モスラ', 'ゴジラ', 'バトラ'],
      type: 'human' as const,
      role: 'モスラの巫女',
      description: 'モスラに仕える双子の妖精。美しい歌声でモスラを呼び寄せる。'
    }
  ];

  const timelineData = [
    {
      year: 1954,
      title: 'ゴジラ',
      director: '本多猪四郎',
      significance: '記念すべきシリーズ第1作。水爆実験によって誕生した怪獣ゴジラが東京を襲う。',
      era: '昭和',
      cast: ['宝田明', '河内桃子', '平田昭彦（芹沢大助博士）'],
      boxOffice: '約9億6000万円',
      runtime: '96分',
      awards: ['第5回ブルーリボン賞 特別賞'],
      trivia: 'ゴジラという名前は「ゴリラ」と「クジラ」を合わせた造語。'
    },
    {
      year: 1964,
      title: '三大怪獣 地球最大の決戦',
      director: '本多猪四郎',
      significance: '最強の敵キングギドラが登場。ゴジラ、モスラ、ラドンが共闘する。',
      era: '昭和',
      cast: ['夏木陽介', '星由里子', '若林映子'],
      boxOffice: '約3億5200万円',
      runtime: '93分',
      trivia: 'キングギドラのデザインは日本の伝説上の生物「八岐大蛇」にインスパイアされている。'
    },
    {
      year: 2016,
      title: 'シン・ゴジラ',
      director: '庵野秀明',
      significance: '日本政府の対応を描いた社会派作品。大ヒットを記録。',
      era: '令和',
      cast: ['長谷川博己（矢口蘭堂）', '竹野内豊（赤坂秀樹）', '石原さとみ（カヨコ）'],
      boxOffice: '約82.5億円',
      runtime: '120分',
      awards: ['第40回日本アカデミー賞 最優秀作品賞 他7部門'],
      trivia: '政府の会議シーンが大半を占める異色の構成。ゴジラの進化過程を段階的に描いた演出が革新的だった。'
    }
  ];

  const creators = [
    {
      name: '本多猪四郎',
      role: '映画監督',
      period: '1954-1975',
      contributions: ['ゴジラ(1954)監督', '三大怪獣 地球最大の決戦 監督', 'モスラ対ゴジラ 監督']
    },
    {
      name: '円谷英二',
      role: '特撮監督',
      period: '1954-1970',
      contributions: ['ゴジラの特撮を担当', 'ミニチュアワーク技術の確立', '日本特撮の基礎を築く']
    },
    {
      name: '庵野秀明',
      role: '映画監督',
      period: '2016',
      contributions: ['シン・ゴジラ監督', '新しいゴジラ像の提示', '社会派怪獣映画の創造']
    }
  ];

  return (
    <Box>
      <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "'Noto Serif JP', serif" }}>
        ゴジラ図鑑
      </h2>
      <Box sx={{ mb: 8, borderBottom: '2px solid #000' }}>
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            '& .MuiTab-root': {
              color: '#666',
              fontWeight: 'black',
              fontSize: '1.2rem',
              px: 4,
              py: 2
            },
            '& .Mui-selected': { color: '#000 !important' },
            '& .MuiTabs-indicator': { backgroundColor: '#000', height: 3 }
          }}
        >
          <Tab label="キャラクター図鑑" />
          <Tab label="ストーリー" />
          <Tab label="制作年表" />
          <Tab label="主要スタッフ" />
        </Tabs>
      </Box>

      <Box>
        {tabValue === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((character, idx) => (
              <MonsterCard key={idx} {...character} />
            ))}
          </div>
        )}
        {tabValue === 1 && <GodzillaStory />}
        {tabValue === 2 && <Timeline items={timelineData} />}
        {tabValue === 3 && <CreatorProfiles creators={creators} />}
      </Box>
    </Box>
  );
}
