# Serverless Skeleton

Serverless skeleton

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

To create a new Serverless project.

``` bash
$ serverless install --url https://github.com/declan4/serverless-skeleton --name my-project
```

Change name in outer package.json to name of your app.

Run test command from inside gen-service

``` bash
$ serverless invoke local --function test-function --path ../mocks/test-function-event.json
```
