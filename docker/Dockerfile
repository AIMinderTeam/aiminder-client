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

# 빌드된 파일들을 nginx 서빙 디렉토리로 복사
COPY --from=build /app/dist /usr/share/nginx/html

# nginx 설정 파일 복사
COPY docker/nginx.conf /etc/nginx/nginx.conf

# 80포트 오픈
EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]