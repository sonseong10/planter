import Redis from "ioredis";

const redis = new Redis({
  host: "127.0.0.1",
  port: 6379,
});

redis.on("connect", () => {
  console.log("Redis 연결됨");
});

redis.on("error", (err) => {
  console.error("Redis 연결 오류", err);
});

export default redis;
