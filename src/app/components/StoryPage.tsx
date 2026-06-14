import { Card, CardContent } from '@mui/material';

interface StorySection {
  era: string;
  period: string;
  description: string;
  keyPoints: string[];
}

export function StoryPage() {
  const stories: StorySection[] = [
    {
      era: '古代の美術',
      period: '縄文時代〜奈良時代',
      description: '縄文土器の力強い造形美から、仏教伝来による仏教美術の隆盛まで。大陸文化を吸収しながら、日本独自の美意識が芽生え始めた時代。',
      keyPoints: [
        '縄文土器の装飾的な造形美',
        '飛鳥・白鳳文化での仏教美術の導入',
        '正倉院宝物に見る国際色豊かな美術'
      ]
    },
    {
      era: '国風文化の開花',
      period: '平安時代',
      description: '唐風文化から脱却し、日本独自の「国風文化」が開花。大和絵、かな文字、寝殿造など、優美で洗練された貴族文化が華開いた。',
      keyPoints: [
        '源氏物語絵巻など物語絵の発展',
        '鳥獣人物戯画に見るユーモアと擬人化',
        '平等院鳳凰堂に象徴される極楽浄土の美'
      ]
    },
    {
      era: '武家文化と禅の美学',
      period: '鎌倉〜室町時代',
      description: '武家政権の成立により、力強く写実的な美術が登場。禅宗の影響で水墨画が発展し、簡素で精神性の高い美の世界が展開された。',
      keyPoints: [
        '運慶・快慶による写実的な仏像彫刻',
        '雪舟による日本水墨画の確立',
        '金閣・銀閣に見る武家の美意識'
      ]
    },
    {
      era: '豪華絢爛の桃山美術',
      period: '安土桃山時代',
      description: '天下統一の時代、権力者たちは豪華絢爛な美術を求めた。金碧障壁画、茶の湯文化、そして琳派の誕生。日本美術の絢爛たる頂点。',
      keyPoints: [
        '狩野永徳の雄大な金碧障壁画',
        '千利休による侘び茶の完成',
        '俵屋宗達による琳派様式の創始'
      ]
    },
    {
      era: '庶民文化と浮世絵',
      period: '江戸時代',
      description: '都市文化の発展とともに浮世絵が誕生。庶民の生活や風景を描いた版画は、大量生産され広く親しまれた。後に西洋美術に多大な影響を与える。',
      keyPoints: [
        '菱川師宣による浮世絵版画の創始',
        '北斎・広重による風景画の黄金期',
        '西洋印象派へのジャポニスムの影響'
      ]
    },
    {
      era: '近代化と伝統の継承',
      period: '明治時代以降',
      description: '西洋美術の流入により、日本美術は大きな転換期を迎える。伝統的な日本画と新しい洋画が並立し、東西の美意識が融合した新たな表現が生まれた。',
      keyPoints: [
        '岡倉天心による日本美術の再評価',
        '横山大観ら新日本画の創造',
        '黒田清輝による西洋画法の導入'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <p className="text-lg leading-relaxed text-gray-700">
          古代から現代まで、日本美術は自然との調和、精神性の追求、そして繊細な美意識を大切にしてきた。
          時代ごとに異なる表現を生み出しながらも、その根底には一貫した美の哲学が流れ続けている。
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
              日本美術の普遍性
            </div>
            <p className="text-sm leading-relaxed">
              日本美術は今なお世界中の人々を魅了し続けている。
              自然への畏敬、余白の美、そして精神性を重んじる日本の美意識は、
              現代アートにおいても新たな可能性を示し続けている。
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
