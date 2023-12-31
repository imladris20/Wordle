function Description() {
  return (
    <div className="mx-auto flex w-[400px] flex-col justify-start px-1 pt-6">
      <h1 className="font-custom text-2xl font-bold text-white ">遊戲說明：</h1>
      <h2 className="font-custom mt-3 text-sm font-bold text-white">
        6次機會測測你的單字力！
      </h2>
      <h3 className="font-custom mt-2 text-xs font-extralight text-white">
        ‧ 每次猜測都使用鍵盤輸入五個英文字母
      </h3>
      <h3 className="font-custom mt-2 text-xs font-extralight text-white">
        ‧ 按下enter後會檢查你的答案是否正確
      </h3>
      <h3 className="font-custom mt-2 text-xs font-extralight text-white">
        ‧ 本遊戲目前僅支援電腦版QQ
      </h3>
      <div className="mt-2 flex flex-row justify-start">
        <div className="mr-2 h-4 w-4 rounded border-none bg-correct"></div>
        <h3 className="font-custom text-xs font-extralight text-white">
          代表該字母為正確答案
        </h3>
      </div>
      <div className="mt-2 flex flex-row justify-start">
        <div className="mr-2 h-4 w-4 rounded border-none bg-present"></div>
        <h3 className="font-custom text-xs font-extralight text-white">
          代表該字母有出現但位置並非正確
        </h3>
      </div>
      <div className="mt-2 flex flex-row justify-start">
        <div className="mr-2 h-4 w-4 rounded border-none bg-absent"></div>
        <h3 className="font-custom text-xs font-extralight text-white">
          代表該字母並沒有出現在答案中
        </h3>
      </div>
    </div>
  );
}

export default Description;
