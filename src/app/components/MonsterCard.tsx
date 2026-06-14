import { Card, CardContent } from '@mui/material';

interface MonsterCardProps {
  name: string;
  nameEn: string;
  height: string;
  weight: string;
  firstAppearance: string;
  year: number;
  specialAttacks: string[];
  relatedMonsters: string[];
  type: 'monster' | 'human' | 'artwork';
  description?: string;
  role?: string;
}

export function MonsterCard({
  name,
  nameEn,
  height,
  weight,
  firstAppearance,
  year,
  specialAttacks,
  relatedMonsters,
  type,
  description,
  role
}: MonsterCardProps) {
  return (
    <Card className="h-full border border-black">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="border-b-2 border-black pb-4">
            <div className="text-3xl font-black mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              {name}
            </div>
            <div className="text-sm font-mono tracking-widest text-gray-600">{nameEn}</div>
            {type === 'human' && role && (
              <div className="mt-2 text-xs font-bold text-gray-600">
                {role}
              </div>
            )}
          </div>

          {description && (
            <div className="text-sm text-gray-700">
              {description}
            </div>
          )}

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-xs mb-2 text-gray-600 font-bold">
                {type === 'monster' ? '身長' : type === 'human' && role ? '所属' : type === 'artwork' ? '形式' : '形式'}
              </div>
              <div className="font-black text-2xl">{height}</div>
            </div>
            <div>
              <div className="text-xs mb-2 text-gray-600 font-bold">
                {type === 'monster' ? '体重' : type === 'human' && role ? '登場作品数' : type === 'artwork' ? '制作年代' : '制作年代'}
              </div>
              <div className="font-black text-2xl">{weight}</div>
            </div>
          </div>

          <div>
            <div className="text-xs mb-2 font-bold text-gray-600">初登場</div>
            <div className="text-sm">
              {firstAppearance} ({year}年)
            </div>
          </div>

          <div>
            <div className="text-xs mb-1 font-bold text-gray-600">
              {type === 'monster' ? '必殺技' : type === 'human' && role ? '特徴・功績' : '特徴'}
            </div>
            <div className="space-y-0.5">
              {specialAttacks.map((attack, idx) => (
                <div key={idx} className="text-sm">
                  • {attack}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs mb-1 font-bold text-gray-600">
              {type === 'human' && role ? '関連キャラクター' : type === 'monster' && height.includes('m') ? '関連怪獣' : '関連作品'}
            </div>
            <div className="text-sm">
              {relatedMonsters.join('、')}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
