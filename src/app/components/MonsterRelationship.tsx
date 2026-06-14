import { useEffect, useRef } from 'react';

interface Monster {
  id: string;
  name: string;
  x: number;
  y: number;
  color: string;
}

interface Relationship {
  from: string;
  to: string;
  type: 'ally' | 'enemy' | 'neutral';
}

interface MonsterRelationshipProps {
  monsters: Monster[];
  relationships: Relationship[];
}

export function MonsterRelationship({ monsters, relationships }: MonsterRelationshipProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    ctx.clearRect(0, 0, rect.width, rect.height);

    relationships.forEach(rel => {
      const from = monsters.find(m => m.id === rel.from);
      const to = monsters.find(m => m.id === rel.to);

      if (from && to) {
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);

        if (rel.type === 'enemy') {
          ctx.strokeStyle = '#000';
          ctx.lineWidth = 3;
          ctx.setLineDash([8, 8]);
        } else if (rel.type === 'ally') {
          ctx.strokeStyle = '#000';
          ctx.lineWidth = 3;
          ctx.setLineDash([]);
        } else {
          ctx.strokeStyle = '#666';
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 4]);
        }

        ctx.stroke();
        ctx.setLineDash([]);
      }
    });

    monsters.forEach(monster => {
      ctx.beginPath();
      ctx.arc(monster.x, monster.y, 40, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.fillStyle = '#000';
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const lines = monster.name.split('\n');
      lines.forEach((line, idx) => {
        ctx.fillText(line, monster.x, monster.y + (idx - lines.length / 2 + 0.5) * 15);
      });
    });
  }, [monsters, relationships]);

  return (
    <div className="w-full">
      <div className="mb-4 flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-black"></div>
          <span>味方関係</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-black" style={{ borderTop: '2px dashed black' }}></div>
          <span>敵対関係</span>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className="w-full border border-black bg-white"
        style={{ height: '500px' }}
      />
    </div>
  );
}
