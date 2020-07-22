# serverless-ts-sample

参考記事: [Serverless Framework\+TypeScriptのプロジェクトでnode\_modulesをAWS Lambda Layers化しよう \| Developers\.IO](https://dev.classmethod.jp/articles/serverless-framework-typescript-node-modules-to-lambda-layers/) 

## インストール

```bash
# インストール
$ yarn install
```

## ローカルで確認する

```bash
$ yarn run sls invoke local -f hello
```

## デプロイする

layer化するためS3にまずバケットを作る
バケット名は `serverless-ts-sample-lambda-layers` として先に作成する

```bash
# S3作成後に
$ yarn run deploy
# => yarn run sls deploy -v 
```
