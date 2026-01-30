$path = "index_standalone.html"
$content = Get-Content $path -Encoding UTF8
$newLines = @()
foreach ($line in $content) {
    if ($line -match "Photography") {
        $newLines += "                                        {['📷 摄影 Photography', '🎾 网球 Tennis', '🏊‍♂️ 游泳 Swimming', '🧗‍♂️ 爬山 Hiking', '🖨️ 3D打印 3D Printing', '🏺 泥塑 Clay Modeling', '✈️ 旅行 Travel', '🎮 游戏 Gaming', '🎬 电影 Movies', '☕ 咖啡 Coffee Brewing'].map((hobby, i) => ("
    } else {
        $newLines += $line
    }
}
$newLines | Set-Content $path -Encoding UTF8
