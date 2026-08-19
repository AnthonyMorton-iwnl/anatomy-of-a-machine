#!/usr/bin/env bash
# Serve the built doc on :6969 from a directory containing only that one file.
D=/home/vmorton/Documents/anatomy-of-a-machine
case "$1" in
  stop)   fuser -k 6969/tcp 2>/dev/null && echo "stopped" || echo "nothing on 6969" ;;
  status) ss -ltnp 2>/dev/null | grep -w 6969 || echo "not running" ;;
  *)      mkdir -p "$D/serve"
          ln -sfn "$HOME/Documents/Anatomy-of-a-Machine.html" "$D/serve/index.html"
          nohup setsid python3 -m http.server 6969 --bind 0.0.0.0 --directory "$D/serve" \
            > "$D/serve.log" 2>&1 < /dev/null &
          sleep 1; ss -ltnp 2>/dev/null | grep -w 6969 ;;
esac
