FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

# 의존성 설치
RUN npm i

# 소스 코드 복사
COPY . .

# 빌드
RUN npm run build

# nginx 스테이지
FROM nginx:alpine

# nginx 컨테이너에서 인증서 변경 감지를 위해 inotify-tools 설치
RUN apk add --no-cache inotify-tools

# 빌드된 파일들을 nginx 서빙 디렉토리로 복사
COPY --from=build /app/dist /usr/share/nginx/html

# nginx 설정 파일 복사
COPY docker/nginx.conf /etc/nginx/nginx.conf

# 엔트리포인트 스크립트 복사 및 실행 권한 부여
COPY docker/entrypoint-nginx.sh /entrypoint-nginx.sh
RUN chmod +x /entrypoint-nginx.sh

# 80, 443 포트 오픈
EXPOSE 80 443

# nginx 실행 (인증서 변경 시 자동 reload)
CMD ["/entrypoint-nginx.sh"]
