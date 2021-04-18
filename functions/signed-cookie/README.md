# signed-cookie via Google Cloud Function

⚠ Doesn't work in combination: IAP + HTTPS Load Balancing + Cloud Function. We are using a simple App Engine Service instead.

```sh
gcloud config set project simonknittelde
gcloud auth application-default login

gcloud compute network-endpoint-groups create signed-cookie-cloud-function-serverless-network-endpoint-group \
  --network-endpoint-type=serverless \
  --cloud-function-name=signed-cookie-cloud-function \
  --region=europe-west3
```
