#!/bin/bash
# validate.sh — Automated lint for System Guide pages
# Usage: bash validate.sh path/to/page.html

FILE="$1"
if [ -z "$FILE" ] || [ ! -f "$FILE" ]; then
  echo "Usage: bash validate.sh path/to/page.html"
  exit 1
fi

# Helper: count matches (handles Windows line endings)
count() { grep -c "$1" "$FILE" 2>/dev/null | tr -d '\r'; }

echo "=== Validating: $FILE ==="
echo ""
ERRORS=0
WARNINGS=0

# ── WRONG CLASS NAMES ──
for pair in \
  'class="tab-content":tab-panel' \
  'data-target=:data-tab=' \
  'class="tab-nav":tab-header' \
  'collapsible-toggle:collapsible-header' \
  'card-chevron:remove it' \
  'class="card-header":card-title (h3)'; do
  BAD="${pair%%:*}"
  FIX="${pair#*:}"
  C=$(count "$BAD")
  if [ "$C" -gt 0 ]; then
    echo "ERROR: Found '$BAD' ($C) — must be '$FIX'"
    grep -n "$BAD" "$FILE"
    ERRORS=$((ERRORS + C))
  fi
done

# ── SVG CHECKS ──
C=$(count 'rect.*rotate(45)')
if [ "$C" -gt 0 ]; then
  echo "ERROR: Rotated rect ($C) — use <polygon> for diamonds"
  ERRORS=$((ERRORS + C))
fi

SVG_COUNT=$(count '<svg')
echo "INFO: SVGs: $SVG_COUNT (target: 20+)"
if [ "$SVG_COUNT" -lt 15 ]; then
  echo "WARNING: Low SVG count ($SVG_COUNT)"
  WARNINGS=$((WARNINGS + 1))
fi

# ── STRUCTURAL INTEGRITY ──
for check in '<footer:1' 'scripts\.js:1' '</body>:1'; do
  PAT="${check%%:*}"
  EXPECT="${check#*:}"
  C=$(count "$PAT")
  if [ "$C" -ne "$EXPECT" ]; then
    echo "ERROR: Expected $EXPECT '$PAT', found $C"
    ERRORS=$((ERRORS + 1))
  fi
done

# ── MIGRATION INFO ──
RAW_CARDS=$(count '<div class="card')
SG_COUNT=$(grep -coP '<sg-\w+' "$FILE" 2>/dev/null | tr -d '\r')
OLD_CALLOUT=$(count 'class="callout ')
OLD_COLLAPSE=$(count 'class="collapsible"')

echo "INFO: sg-* tags: $SG_COUNT"
if [ "$RAW_CARDS" -gt 0 ]; then echo "INFO: $RAW_CARDS raw cards → <sg-card>"; fi
if [ "$OLD_CALLOUT" -gt 0 ]; then echo "INFO: $OLD_CALLOUT raw callouts → <sg-callout>"; WARNINGS=$((WARNINGS + 1)); fi
if [ "$OLD_COLLAPSE" -gt 0 ]; then echo "INFO: $OLD_COLLAPSE raw collapsibles → <sg-collapse>"; WARNINGS=$((WARNINGS + 1)); fi

# ── SUMMARY ──
echo ""
LINES=$(wc -l < "$FILE" | tr -d '\r ')
echo "=== SUMMARY ==="
echo "Lines: $LINES | SVGs: $SVG_COUNT | sg-*: $SG_COUNT | Errors: $ERRORS | Warnings: $WARNINGS"
if [ "$ERRORS" -eq 0 ]; then
  echo "RESULT: PASS"
else
  echo "RESULT: FAIL ($ERRORS errors)"
fi
