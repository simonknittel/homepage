# form-submit

```sh
gcloud config set project simonknittelde
gcloud auth application-default login

gcloud compute network-endpoint-groups create form-submit-serverless-network-endpoint-group \
  --network-endpoint-type=serverless \
  --cloud-function-name=form-submit \
  --region=europe-west3
```
