import { Card, CardContent, Avatar } from '@mui/material';
import { User } from 'lucide-react';

interface Creator {
  name: string;
  role: string;
  period: string;
  contributions: string[];
}

interface CreatorProfilesProps {
  creators: Creator[];
}

export function CreatorProfiles({ creators }: CreatorProfilesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {creators.map((creator, idx) => (
        <Card key={idx} className="border border-black">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#000'
                  }}
                >
                  <User className="w-8 h-8" />
                </Avatar>
                <div className="flex-1">
                  <div className="font-black text-xl mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    {creator.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {creator.role}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {creator.period}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-gray-600 mb-2">主な功績</div>
                <div className="space-y-1">
                  {creator.contributions.map((contribution, cIdx) => (
                    <div key={cIdx} className="text-sm">
                      • {contribution}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
