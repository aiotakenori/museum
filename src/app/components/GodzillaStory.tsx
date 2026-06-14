import { Card, CardContent } from '@mui/material';

export function GodzillaStory() {
  const stories = [
    {
      era: '誕生と恐怖の象徴',
      period: '1954年',
      description: '水爆実験によって目覚めた古代生物ゴジラ。核の恐怖と戦争の記憶が色濃く残る戦後日本に現れた怪獣は、人類の傲慢さへの警鐘として描かれた。',
      keyPoints: [
        '科学者・芹沢博士の自己犠牲によってゴジラは倒される',
        '核兵器への批判と平和への願いが込められた作品',
        '特撮監督・円谷英二の革新的な技術が世界を驚かせた'
      ]
    },
    {
      era: '怪獣大戦争の時代',
      period: '1960年代',
      description: 'ゴジラは次第に正義の味方へと変化。キングギドラ、モスラ、ラドンなど数多くの怪獣が登場し、地球を守るためにゴジラが戦う娯楽作品へと進化した。',
      keyPoints: [
        '三大怪獣が共闘する「三大怪獣 地球最大の決戦」',
        '子供向けエンターテイメントとしての側面が強まる',
        '東宝特撮映画の黄金期を築く'
      ]
    },
    {
      era: '平成の再起動',
      period: '1984-1995年',
      description: '初代ゴジラの正統続編として再始動。恐怖の対象としてのゴジラが復活し、現代の科学技術や国際政治を織り込んだリアリティのある作品群となった。',
      keyPoints: [
        'G細胞、スーパーXなど新要素の導入',
        'キングギドラ、モスラ、メカゴジラの再登場',
        '環境問題や生命倫理をテーマに取り入れる'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <p className="text-lg leading-relaxed text-gray-700">
          1954年の誕生から70年。ゴジラは核の恐怖、環境破壊、災害、そして人類の傲慢さと向き合い続けてきた。
          時代とともに姿を変えながらも、常に現代社会への警鐘を鳴らす存在として、世界中の人々に愛され続けている。
        </p>
      </div>

      <div className="space-y-6">
        {stories.map((story, idx) => (
          <Card key={idx} className="border border-black bg-white">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-3">
                  <div className="text-2xl font-black mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    {story.era}
                  </div>
                  <div className="text-sm text-gray-600">{story.period}</div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {story.description}
                </p>

                <div>
                  <div className="text-xs font-bold text-gray-600 mb-1">主なポイント</div>
                  <div className="space-y-0.5">
                    {story.keyPoints.map((point, i) => (
                      <div key={i} className="text-sm">• {point}</div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-2 border-black bg-black text-white">
        <CardContent className="p-6">
          <div className="text-center">
            <div className="text-2xl font-black mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              ゴジラの未来
            </div>
            <p className="text-sm leading-relaxed">
              ゴジラは今なお進化を続けている。新たな世代のクリエイターたちによって、
              これからも時代を映す鏡として、人類に問いを投げかけ続けるだろう。
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
