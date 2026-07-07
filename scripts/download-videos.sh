#!/bin/bash
# Download 5 videos from Google Drive using the direct curl method.
# The file IDs are extracted from the share links.

set -e

VIDEOS_DIR="/home/z/my-project/public/videos"
mkdir -p "$VIDEOS_DIR"

declare -A VIDEOS=(
  ["chadda.mp4"]="1oz-00xNP-nOm99iZHId8TvMXmpyPONWj"
  ["gun_vid.mp4"]="1byazPvXKldNKZscm9vbjGDuOipqbOI01"
  ["date_pe_date.mp4"]="1ug1t6rDnYEHYVuYZH1m63KAZMnK61ar-"
  ["llb2.mp4"]="1skuIpDISs6esNGH3pgmCURG7EyBQ9Rhd"
  ["kaun_hai.mp4"]="1dum3EFLJ3p9hiYHxHu2oW4iVL6Secubb"
)

for name in chadda.mp4 gun_vid.mp4 date_pe_date.mp4 llb2.mp4 kaun_hai.mp4; do
  id="${VIDEOS[$name]}"
  out="$VIDEOS_DIR/$name"
  echo "→ Downloading $name (id: $id)..."
  
  # Try direct download. For large files Google may show a confirmation page,
  # so we handle the confirm token if present.
  curl -sL -c /tmp/gdrive_cookie -o /tmp/gdrive_temp "https://drive.google.com/uc?export=download&id=$id"
  
  # Check if it's an HTML confirmation page (large file warning)
  if file /tmp/gdrive_temp | grep -q "HTML"; then
    # Extract confirm token and download with it
    confirm=$(grep -oP 'confirm=\K[^"&]+' /tmp/gdrive_temp | head -1)
    uuid=$(grep -oP 'uuid=\K[^"&]+' /tmp/gdrive_temp | head -1)
    if [ -n "$confirm" ]; then
      echo "  Confirmation required, retrying with token..."
      curl -sL -b /tmp/gdrive_cookie -o "$out" "https://drive.google.com/uc?export=download&id=$id&confirm=$confirm&uuid=$uuid"
    else
      echo "  ✗ Could not extract confirm token"
      mv /tmp/gdrive_temp "$out"
    fi
  else
    mv /tmp/gdrive_temp "$out"
  fi
  
  # Verify
  if file "$out" | grep -q "MP4\|ISO Media"; then
    size=$(du -h "$out" | cut -f1)
    echo "  ✓ Saved: $out ($size)"
  else
    echo "  ✗ Downloaded file is not a valid MP4"
    file "$out"
  fi
  echo ""
done

echo "=== All downloads complete ==="
echo ""
echo "Video metadata:"
for f in "$VIDEOS_DIR"/*.mp4; do
  echo ""
  echo "$(basename $f):"
  ffprobe -v error -show_entries stream=width,height,duration,codec_name -of default=noprint_wrappers=1 "$f" 2>&1 | sed 's/^/  /'
done
