#!/usr/bin/env bash
OUT=/tmp/claude-1000/-home-vmorton/49765bed-c386-4fc0-b175-a6707b0760fb/scratchpad/shots
mkdir -p $OUT; rm -f $OUT/*.png
F="file:///home/vmorton/Documents/Anatomy-of-a-Machine.html"
for t in "$@"; do
  n=$(echo $t | tr -d '.')
  google-chrome --headless=new --use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader \
    --disable-dev-shm-usage --no-sandbox --hide-scrollbars \
    --window-size=1600,900 --force-device-scale-factor=1 \
    --virtual-time-budget=9000 --screenshot=$OUT/t$n.png "$F?t=$t&lock=1" >/dev/null 2>$OUT/log_$n.txt
done
ls -la $OUT/*.png 2>/dev/null | awk '{print $5, $9}'
grep -ihE "uncaught|error:|exception" $OUT/log_*.txt | grep -viE "GPU|gles|vulkan|swiftshader|dbus|bluetooth|Fontconfig|policy|registration" | sort -u | head -20
