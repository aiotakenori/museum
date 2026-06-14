import { Card, CardContent } from '@mui/material';

interface ArtworkCardProps {
  name: string;
  nameEn: string;
  medium: string;
  period: string;
  collection: string;
  year: number;
  artist: string;
  highlights: string[];
  relatedWorks: string[];
  description?: string;
}

export function ArtworkCard({
  name,
  nameEn,
  medium,
  period,
  collection,
  year,
  artist,
  highlights,
  relatedWorks,
  description,
}: ArtworkCardProps) {
  return (
    <Card className="h-full border border-black">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="border-b-2 border-black pb-4">
            <div className="text-3xl font-black mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              {name}
            </div>
            <div className="text-sm font-mono tracking-widest text-gray-600">{nameEn}</div>
            <div className="mt-2 text-xs font-bold text-gray-600">{artist}</div>
          </div>

          {description && (
            <div className="text-sm text-gray-700 leading-relaxed">{description}</div>
          )}

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-xs mb-2 text-gray-600 font-bold">形式</div>
              <div className="font-black text-lg leading-tight">{medium}</div>
            </div>
            <div>
              <div className="text-xs mb-2 text-gray-600 font-bold">制作年代</div>
              <div className="font-black text-lg leading-tight">{period}</div>
            </div>
          </div>

          <div>
            <div className="text-xs mb-2 font-bold text-gray-600">収録・シリーズ</div>
            <div className="text-sm">{collection}（{year}年）</div>
          </div>

          <div>
            <div className="text-xs mb-1 font-bold text-gray-600">特徴</div>
            <div className="space-y-0.5">
              {highlights.map((h, idx) => (
                <div key={idx} className="text-sm">• {h}</div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs mb-1 font-bold text-gray-600">関連作品</div>
            <div className="text-sm">{relatedWorks.join('、')}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
