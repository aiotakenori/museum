export function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-black mb-6 pb-3 border-b-2 border-black">
          このサイトについて
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ムサビ通信に入ったはいいものの、もともと美術に興味があったわけではなく、まったく課題が進みませんでした。仕事をしながら学び続けるのは難しい。自分が興味を持ち続けられるよう、このサイトを作りました。
        </p>
        <p className="text-gray-700 leading-relaxed">
          文化大図鑑（仮）は、ゴジラ、日本美術史、ムサビ通信など、さまざまな文化的テーマを図鑑形式で紹介するウェブサイトです。
        </p>
      </div>

      <div>
        <h3 className="text-xl font-black mb-4">コンテンツ</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="text-black font-black">■</span>
            <span className="text-gray-700">
              <strong>ゴジラ</strong> - キャラクター、映画史、クリエイター情報
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-black font-black">■</span>
            <span className="text-gray-700">
              <strong>日本美術史</strong> - 代表作品、美術史年表、作者プロフィール
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-black font-black">■</span>
            <span className="text-gray-700">
              <strong>ムサビ通信</strong> - 武蔵野美術大学通信教育課程の情報
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-black font-black">■</span>
            <span className="text-gray-700">
              その他、東洋美術史、文学史、建築史、神話、音楽史、鉱物・宝石図鑑、城&王室図鑑、サブカル史（準備中）
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-black mb-4">デザインコンセプト</h3>
        <p className="text-gray-700 leading-relaxed">
          モノクロを基調としたシンプルなデザインで、情報を見やすく整理しています。
          古典的なゴジラ映画の雰囲気を意識した、クリーンで落ち着いた見た目を目指しています。
        </p>
      </div>

      <div className="pt-8 border-t-2 border-gray-300 space-y-2">
        <p className="text-sm text-gray-700">
          <strong>サイト制作：</strong>Takenori
        </p>
        <p className="text-sm text-gray-700">
          <strong>職業：</strong>UI・UXデザイナー
        </p>
        <p className="text-sm text-gray-700">
          <strong>在籍：</strong>武蔵野美術大学通信教育課程 油絵学科 日本画表現コース
        </p>
      </div>
    </div>
  );
}
