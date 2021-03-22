# reservations

```sh
gcloud config set project simonknittelde
gcloud auth application-default login

gcloud compute network-endpoint-groups create reservations-serverless-network-endpoint-group \
  --network-endpoint-type=serverless \
  --cloud-function-name=reservations \
  --region=europe-west3
```
