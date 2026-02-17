# strands-agent-practice

Strands Agents SDK と Amazon Bedrock AgentCore Runtime を使った AI エージェントの練習リポジトリです。

## 参考

- [Getting started with the AgentCore Runtime toolkit for TypeScript - AWS Bedrock AgentCore Developer Guide](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-get-started-toolkit-typescript.html)

## 起動方法

```bash
# 開発環境（ウォッチモード）
npm run dev

# 本番環境
npm run build
npm start
```

## リクエスト例

```bash
# ヘルスチェック
curl http://localhost:8080/ping

# エージェント呼び出し
curl -X POST http://localhost:8080/invocations \
  -H "Content-Type: application/json" \
  -H "x-amzn-bedrock-agentcore-runtime-session-id: session-001" \
  -d "{\"prompt\": \"Hello\"}"
```