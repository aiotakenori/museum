import { Card, CardContent } from '@mui/material';

interface TimelineItem {
  year: number;
  title: string;
  director: string;
  significance: string;
  era: string;
  cast?: string[];
  boxOffice?: string;
  awards?: string[];
  runtime?: string;
  trivia?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const eras = Array.from(new Set(items.map(item => item.era)));

  return (
    <div className="space-y-8">
      <div className="flex gap-4 flex-wrap">
        {eras.map(era => (
          <div
            key={era}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white border-2 border-black font-black"
          >
            <div className="w-3 h-3 bg-white"></div>
            <span className="text-sm">{era}シリーズ</span>
          </div>
        ))}
      </div>

      <div className="relative">
        <div className="absolute left-12 top-0 bottom-0 w-px bg-gray-300"></div>

        <div className="space-y-12">
          {items.map((item, idx) => (
            <div key={idx} className="relative pl-28">
              <div className="absolute left-0 top-0 w-24 bg-black text-white px-3 py-2">
                <div className="text-xs">西暦</div>
                <div className="text-xl font-black">{item.year}</div>
              </div>

              <Card className="border border-black">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-black mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        監督: {item.director}
                        {item.runtime && <span className="ml-4">／ {item.runtime}</span>}
                      </div>
                    </div>

                    <div className="text-sm text-gray-700">
                      {item.significance}
                    </div>

                    {item.cast && item.cast.length > 0 && (
                      <div>
                        <div className="text-xs font-bold text-gray-600 mb-1">主要キャスト</div>
                        <div className="text-sm text-gray-700">
                          {item.cast.join('、')}
                        </div>
                      </div>
                    )}

                    {item.boxOffice && (
                      <div>
                        <div className="text-xs font-bold text-gray-600 mb-1">興行収入</div>
                        <div className="text-sm font-black">
                          {item.boxOffice}
                        </div>
                      </div>
                    )}

                    {item.awards && item.awards.length > 0 && (
                      <div>
                        <div className="text-xs font-bold text-gray-600 mb-1">受賞歴</div>
                        <div className="space-y-1">
                          {item.awards.map((award, i) => (
                            <div key={i} className="text-sm">• {award}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.trivia && (
                      <div className="border-t border-gray-200 pt-3">
                        <div className="text-xs font-bold text-gray-600 mb-1">トリビア</div>
                        <div className="text-sm text-gray-700">{item.trivia}</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
