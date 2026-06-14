import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Card, CardContent } from '@mui/material';

export function MusabiPage() {
  const [tabValue, setTabValue] = useState(0);

  const departments = [
    {
      name: '油絵学科',
      courses: ['日本画表現コース', '絵画表現コース'],
      description: '伝統的な油彩画や日本画の技法を学び、自己の表現を追求する学科。',
      suitableFor: [
        '絵画制作に情熱を持つ人',
        '伝統技法を学びたい人',
        '自己表現を深めたい人'
      ]
    },
    {
      name: '情報デザイン学科',
      courses: [],
      description: 'デジタルメディアを活用したデザイン表現を学ぶ学科。',
      suitableFor: [
        'デジタルデザインに興味がある人',
        'Webやアプリのデザインを学びたい人',
        '情報技術と芸術を融合したい人'
      ]
    },
    {
      name: '芸術文化学科',
      courses: [],
      description: '美術史、芸術理論、文化研究を通じて芸術の本質を探求する学科。',
      suitableFor: [
        '美術史や芸術理論に興味がある人',
        '学芸員や教育職を目指す人',
        '研究や批評の視点から芸術を学びたい人'
      ]
    }
  ];

  const benefits = [
    '働きながら美術大学の学位が取得できる',
    '自分のペースで学習を進められる',
    '現役のアーティストや研究者から学べる',
    '全国どこからでも受講可能',
    '美術館や博物館での実習機会'
  ];

  const facilities = [
    {
      name: '図書館',
      description: '約30万冊の美術関連書籍を所蔵。通信教育部の学生もオンラインで利用可能。',
      features: ['美術専門書', '展覧会カタログ', 'オンライン検索システム']
    },
    {
      name: '学食',
      description: 'キャンパス内の学生食堂。スクーリング時に利用できます。',
      features: ['リーズナブルな価格', '栄養バランスの良いメニュー', '学生交流の場']
    }
  ];

  return (
    <Box>
      <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "'Noto Serif JP', serif" }}>
        ムサビ通信図鑑
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
          <Tab label="概要" />
          <Tab label="学科紹介" />
          <Tab label="学習について" />
          <Tab label="キャンパス情報" />
        </Tabs>
      </Box>

      <Box>
        {tabValue === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="h-full border border-black">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="border-b-2 border-black pb-4">
                    <div className="text-3xl font-black mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      武蔵野美術大学 通信教育課程
                    </div>
                    <div className="text-sm font-mono tracking-widest text-gray-600">MUSABI CORRESPONDENCE</div>
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    1950年に開設された、日本で最も歴史ある美術大学の通信教育課程。
                    働きながら、または自宅で美術を本格的に学び、学士（造形）の学位を取得できます。
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full border border-black">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="border-b-2 border-black pb-4">
                    <div className="text-3xl font-black mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>入学のメリット</div>
                    <div className="text-sm font-mono tracking-widest text-gray-600">BENEFITS</div>
                  </div>
                  <div className="space-y-0.5">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="text-sm">
                        • {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {tabValue === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <Card key={idx} className="h-full border border-black">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="border-b-2 border-black pb-4">
                      <div className="text-3xl font-black mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                        {dept.name}
                      </div>
                      {dept.courses.length > 0 && (
                        <div className="text-sm font-mono tracking-widest text-gray-600">
                          {dept.courses.map((course, i) => (
                            <span key={i}>
                              {i > 0 && ' / '}
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="text-sm text-gray-700">
                      {dept.description}
                    </div>

                    <div>
                      <div className="text-xs mb-2 font-bold text-gray-600">こんな人に向いている</div>
                      <div className="space-y-0.5">
                        {dept.suitableFor.map((item, i) => (
                          <div key={i} className="text-sm">
                            • {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {tabValue === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="h-full border border-black">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="border-b-2 border-black pb-4">
                    <div className="text-3xl font-black mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      スクーリング
                    </div>
                    <div className="text-sm font-mono tracking-widest text-gray-600">SCHOOLING</div>
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    年に数回、キャンパスで行われる集中授業。教員から直接指導を受けられる貴重な機会です。
                  </div>
                  <div>
                    <div className="text-xs mb-2 font-bold text-gray-600">開催形式</div>
                    <div className="space-y-0.5">
                      <div className="text-sm">• 夏期スクーリング：8月に約2週間開催</div>
                      <div className="text-sm">• 週末スクーリング：土日の2日間で開催</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full border border-black">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="border-b-2 border-black pb-4">
                    <div className="text-3xl font-black mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      費用
                    </div>
                    <div className="text-sm font-mono tracking-widest text-gray-600">TUITION</div>
                  </div>
                  <div>
                    <div className="text-xs mb-2 font-bold text-gray-600">学費一覧</div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-black">入学金</span>
                        <span className="text-sm text-gray-700">30,000円</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-black">年間授業料</span>
                        <span className="text-sm text-gray-700">約200,000円</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-black">スクーリング受講料</span>
                        <span className="text-sm text-gray-700">科目ごとに15,000円〜</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    ※ 費用は変更される場合があります。最新情報は大学公式サイトをご確認ください。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {tabValue === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility, idx) => (
              <Card key={idx} className="h-full border border-black">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="border-b-2 border-black pb-4">
                      <div className="text-3xl font-black mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                        {facility.name}
                      </div>
                      <div className="text-sm font-mono tracking-widest text-gray-600">
                        {facility.name === '図書館' ? 'LIBRARY' : 'CAFETERIA'}
                      </div>
                    </div>
                    <div className="text-sm text-gray-700">
                      {facility.description}
                    </div>
                    <div>
                      <div className="text-xs mb-2 font-bold text-gray-600">特徴</div>
                      <div className="space-y-0.5">
                        {facility.features.map((feature, i) => (
                          <div key={i} className="text-sm">
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Box>
    </Box>
  );
}
