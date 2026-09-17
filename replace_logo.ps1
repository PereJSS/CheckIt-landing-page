$path = "C:\Users\pere_\.gemini\antigravity\scratch\checkit-landing\index.html"
$content = [System.IO.File]::ReadAllText($path)
$svg = '<svg class="w-10 h-10 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>'
$pattern = '(?s)<img\s+alt="CheckIt\s+Logo"[^>]+src="data:image/png;base64,[^"]+"[^>]*>'
$content = $content -replace $pattern, $svg
[System.IO.File]::WriteAllText($path, $content)
Write-Output "Successfully replaced base64 logo with SVG in index.html"
