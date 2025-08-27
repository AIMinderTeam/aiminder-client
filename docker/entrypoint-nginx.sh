#!/bin/sh
set -eu

# 최초 기동 시 인증서 존재 여부를 출력(없으면 compose에서 certbot-init이 먼저 처리)
DOMAIN="dev.aiminder.click"
CERT_DIR="/etc/letsencrypt/live/${DOMAIN}"

if [ -f "${CERT_DIR}/fullchain.pem" ] && [ -f "${CERT_DIR}/privkey.pem" ]; then
  echo "[entrypoint] Found certificate for ${DOMAIN}."
else
  echo "[entrypoint] Certificate not found yet for ${DOMAIN}. Waiting is expected if certbot-init is running first."
fi

# 인증서/키 변경을 감지하여 nginx reload 수행하는 백그라운드 워처
(
  # 변경 감시 대상 디렉터리(존재하지 않아도 inotifywait가 대기하며, 생성되면 감지)
  WATCH_PATH="${CERT_DIR}"
  mkdir -p /var/www/certbot || true
  echo "[entrypoint] Starting cert watcher on ${WATCH_PATH}"
  while true; do
    # 변경 이벤트(생성/수정/이동/삭제) 감지
    inotifywait -e create -e modify -e move -e delete -r "${WATCH_PATH}" 2>/dev/null || true
    echo "[entrypoint] Certificate files changed. Reloading nginx..."
    nginx -s reload || true
  done
) &

# nginx 포그라운드 실행
exec nginx -g 'daemon off;'

